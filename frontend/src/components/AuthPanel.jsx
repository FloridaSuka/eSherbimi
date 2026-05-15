import { useState } from 'react';
import { ArrowRight, KeyRound, Loader2, LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function AuthPanel() {
  const { login, register } = useAuth();
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({
    tenantName: 'Komuna Digjitale',
    tenantSlug: 'komuna-digjitale',
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'Password123!',
    role: 'admin'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (mode === 'login') {
        await login(form.email, form.password);
      } else {
        await register(form);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-panel">
      <div className="panel-heading">
        <span className="icon-chip"><KeyRound size={18} /></span>
        <div>
          <p className="eyebrow">Secure access</p>
          <h2>{mode === 'login' ? 'Welcome back' : 'Create tenant account'}</h2>
        </div>
      </div>
      <div className="auth-tabs">
        <button className={mode === 'login' ? 'active' : ''} onClick={() => setMode('login')} type="button">
          <LogIn size={16} /> Login
        </button>
        <button className={mode === 'register' ? 'active' : ''} onClick={() => setMode('register')} type="button">
          <UserPlus size={16} /> Register
        </button>
      </div>
      <form onSubmit={submit} className="form-grid">
        {mode === 'register' && (
          <>
            <input name="tenantName" value={form.tenantName} onChange={update} placeholder="Tenant name" />
            <input name="tenantSlug" value={form.tenantSlug} onChange={update} placeholder="Tenant slug" />
            <input name="name" value={form.name} onChange={update} placeholder="Full name" />
            <select name="role" value={form.role} onChange={update}>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="citizen">Citizen</option>
            </select>
          </>
        )}
        <input name="email" value={form.email} onChange={update} placeholder="Email" type="email" />
        <input name="password" value={form.password} onChange={update} placeholder="Password" type="password" />
        {error && <p className="error">{error}</p>}
        <button className="primary submit-button" type="submit" disabled={loading}>
          {loading ? <Loader2 className="spin" size={16} /> : <ArrowRight size={16} />}
          {mode === 'login' ? 'Login' : 'Create account'}
        </button>
      </form>
    </section>
  );
}
