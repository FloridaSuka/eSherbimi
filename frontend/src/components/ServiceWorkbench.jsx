import { useEffect, useState } from 'react';
import { CheckCircle2, Clock3, CreditCard, FileText, Filter, Loader2, Plus, RefreshCw, Search, SlidersHorizontal } from 'lucide-react';
import { apiRequest, serviceCatalog, serviceOptions } from '../api/client';
import { useAuth } from '../context/AuthContext';

const statusOptions = ['', 'submitted', 'processing', 'approved', 'paid'];

export function ServiceWorkbench() {
  const { token } = useAuth();
  const [resource, setResource] = useState('electronicPassports');
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('');
  const [records, setRecords] = useState({ count: 0, rows: [] });
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const selectedService = serviceCatalog[resource];
  const selectedLabel = selectedService?.title || serviceOptions.find(([value]) => value === resource)?.[1] || resource;
  const requiredComplete = selectedService?.fields?.every(([name]) => String(form[name] || '').trim()) ?? false;

  function resetForm(nextResource = resource) {
    const service = serviceCatalog[nextResource];
    const nextForm = {};
    service?.fields?.forEach(([name]) => {
      nextForm[name] = '';
    });
    setForm(nextForm);
  }

  function selectResource(nextResource) {
    setResource(nextResource);
    setStatus('');
    setQuery('');
    resetForm(nextResource);
  }

  function updateField(name, value) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function buildPayload() {
    const referenceNo = `${selectedService.referencePrefix}-${Date.now().toString().slice(-6)}`;
    const primaryName = form.fullName || form.customerName || form.applicantName || form.patientName || form.citizenName || form.taxpayerName || form.ownerName || form.studentName || form.reporterName || form.donorName || 'Applicant';
    return {
      referenceNo,
      title: `${selectedService.title} - ${primaryName}`,
      amount: Number(selectedService.fee || 0),
      metadata: {
        serviceType: resource,
        serviceTitle: selectedService.title,
        submittedAt: new Date().toISOString(),
        channel: 'frontend',
        applicant: primaryName,
        form
      }
    };
  }

  async function load() {
    setLoading(true);
    setError('');
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (status) params.set('status', status);
    try {
      const data = await apiRequest(`/services/${resource}?${params.toString()}`, { token });
      setRecords(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function createRecord(event) {
    event.preventDefault();
    if (!requiredComplete) {
      setError('Please complete all service fields before submitting.');
      return;
    }
    setCreating(true);
    setError('');
    setSuccess('');
    try {
      const payload = buildPayload();
      await apiRequest(`/services/${resource}`, {
        method: 'POST',
        token,
        body: payload
      });
      setSuccess(`Service submitted successfully. Reference: ${payload.referenceNo}`);
      resetForm();
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setCreating(false);
    }
  }

  async function updateRecordStatus(record, nextStatus) {
    setError('');
    setSuccess('');
    try {
      await apiRequest(`/services/${resource}/${record.id}`, {
        method: 'PUT',
        token,
        body: {
          status: nextStatus,
          metadata: {
            ...(record.metadata || {}),
            lastAction: nextStatus,
            lastActionAt: new Date().toISOString()
          }
        }
      });
      setSuccess(`${record.referenceNo} updated to ${nextStatus}.`);
      await load();
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    resetForm(resource);
    load().catch(console.error);
  }, [resource]);

  return (
    <section className="workbench">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Concrete digital services</p>
          <h2>{selectedLabel}</h2>
          <p className="muted">{selectedService?.description}</p>
        </div>
        <button className="ghost" type="button" onClick={load} disabled={loading}>
          {loading ? <Loader2 className="spin" size={16} /> : <RefreshCw size={16} />}
          Refresh
        </button>
      </div>

      <div className="service-catalog-grid">
        {serviceOptions.slice(0, 10).map(([value, label]) => (
          <button className={resource === value ? 'service-card active' : 'service-card'} key={value} type="button" onClick={() => selectResource(value)}>
            <FileText size={18} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      <div className="metric-grid">
        <article className="metric-card">
          <span className="icon-chip"><CheckCircle2 size={18} /></span>
          <div>
            <p>Total records</p>
            <strong>{records.count}</strong>
          </div>
        </article>
        <article className="metric-card">
          <span className="icon-chip amber"><Clock3 size={18} /></span>
          <div>
            <p>Visible rows</p>
            <strong>{records.rows.length}</strong>
          </div>
        </article>
        <article className="metric-card">
          <span className="icon-chip green"><SlidersHorizontal size={18} /></span>
          <div>
            <p>Active filter</p>
            <strong>{status || 'All'}</strong>
          </div>
        </article>
      </div>

      <div className="toolbar">
        <select value={resource} onChange={(event) => selectResource(event.target.value)}>
          {serviceOptions.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
        </select>
        <label>
          <Search size={16} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search title or reference" />
        </label>
        <label>
          <Filter size={16} />
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            {statusOptions.map((option) => (
              <option value={option} key={option || 'all'}>{option || 'All statuses'}</option>
            ))}
          </select>
        </label>
        <button type="button" onClick={load}>Apply</button>
      </div>

      <form className="real-service-form" onSubmit={createRecord}>
        <div className="form-header">
          <div>
            <p className="eyebrow">Submit service</p>
            <h3>{selectedService?.title}</h3>
          </div>
          <span className="fee-chip"><CreditCard size={15} /> Fee: €{selectedService?.fee || 0}</span>
        </div>
        <div className="dynamic-fields">
          {selectedService?.fields?.map(([name, label, type = 'text']) => (
            <label key={name}>
              <span>{label}</span>
              {name === 'description' || name === 'reason' || name === 'message' ? (
                <textarea value={form[name] || ''} onChange={(event) => updateField(name, event.target.value)} placeholder={label} />
              ) : (
                <input value={form[name] || ''} onChange={(event) => updateField(name, event.target.value)} placeholder={label} type={type} />
              )}
            </label>
          ))}
        </div>
        <div className="preview-box">
          <strong>Submission preview</strong>
          <span>{selectedService?.title} will be submitted with status <b>submitted</b> and stored in the tenant database.</span>
        </div>
        <button className="primary" type="submit" disabled={creating || !requiredComplete}>
          {creating ? <Loader2 className="spin" size={16} /> : <Plus size={16} />}
          Submit service
        </button>
      </form>

      <div className="status-pills">
        {statusOptions.map((option) => (
          <button className={status === option ? 'pill active' : 'pill'} key={option || 'all'} type="button" onClick={() => setStatus(option)}>
            {option || 'All'}
          </button>
        ))}
      </div>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <div className="table">
        <div className="table-head">
          <span>Reference</span>
          <span>Title</span>
          <span>Status</span>
          <span>Actions</span>
        </div>
        {!loading && records.rows.length === 0 && (
          <div className="empty-state">
            <Search size={28} />
            <strong>No records found</strong>
            <span>Create a new request or change the filters.</span>
          </div>
        )}
        {records.rows.map((record) => (
          <div className="table-row" key={record.id}>
            <span>{record.referenceNo}</span>
            <span>
              <strong>{record.title}</strong>
              <small>{record.metadata?.applicant || record.metadata?.serviceTitle || 'Service request'}</small>
            </span>
            <span><em className={`status-badge ${record.status}`}>{record.status}</em></span>
            <span className="row-actions">
              <button type="button" onClick={() => updateRecordStatus(record, 'processing')}>Process</button>
              <button type="button" onClick={() => updateRecordStatus(record, 'approved')}>Approve</button>
              <button type="button" onClick={() => updateRecordStatus(record, 'paid')}>Paid</button>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
