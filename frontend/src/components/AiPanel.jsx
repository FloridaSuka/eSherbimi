import { useState } from 'react';
import { Bot, Loader2, Send, Sparkles } from 'lucide-react';
import { apiRequest } from '../api/client';
import { useAuth } from '../context/AuthContext';

export function AiPanel() {
  const { token } = useAuth();
  const [message, setMessage] = useState('Summarize the passport application process.');
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await apiRequest('/ai/chat', { method: 'POST', token, body: { message } });
      setJob(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="ai-panel">
      <div className="section-heading compact">
        <div>
          <p className="eyebrow">OpenAI module</p>
          <h2><Bot size={18} /> AI Assistant</h2>
        </div>
      </div>
      <div className="ai-suggestion">
        <Sparkles size={16} />
        <span>Queue text analysis or service guidance as a background job.</span>
      </div>
      <form onSubmit={submit}>
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
        <button className="primary" type="submit" disabled={loading || !message}>
          {loading ? <Loader2 className="spin" size={16} /> : <Send size={16} />}
          Send
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {job && (
        <div className="job-card">
          <span className="status-dot" />
          <div>
            <strong>{job.name}</strong>
            <p>Job {job.id} is {job.status}</p>
          </div>
        </div>
      )}
    </section>
  );
}
