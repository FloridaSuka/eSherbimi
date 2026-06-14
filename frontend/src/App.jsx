import { Activity, Building2, FileCheck2, LayoutDashboard, LogOut, ShieldCheck } from 'lucide-react';
import { AuthPanel } from './components/AuthPanel';
import { ServiceWorkbench } from './components/ServiceWorkbench';
import { AiPanel } from './components/AiPanel';
import { useAuth } from './context/AuthContext';
import './styles.css';

export default function App() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <main className="login-layout">
        <section className="login-copy">
          <div className="brand-mark"><Building2 size={24} /></div>
          <p className="eyebrow">SSH Gr32 distributed systems</p>
          <h1>Electronic Services Operations Platform</h1>
          <p className="lead">
            Multi-tenant public service management with secure REST APIs, role-based access,
            searchable service records, background jobs and AI-assisted text analysis.
          </p>
          <div className="feature-strip">
            <span><ShieldCheck size={16} /> JWT roles</span>
            <span><FileCheck2 size={16} /> 20+ models</span>
            <span><Activity size={16} /> Live API</span>
          </div>
        </section>
        <AuthPanel />
      </main>
    );
  }

  return (
    <main className="app-shell">
      <header className="topbar app-band">
        <div className="topbar-title">
          <div className="brand-mark small"><LayoutDashboard size={20} /></div>
          <div>
            <p className="eyebrow">Tenant workspace</p>
            <h1>Electronic Services Dashboard</h1>
            <p className="muted">Signed in as {user.name} · {user.role}</p>
          </div>
        </div>
        <button className="ghost" type="button" onClick={logout}><LogOut size={16} /> Logout</button>
      </header>
      <div className="content-grid">
        <ServiceWorkbench />
        <AiPanel />
      </div>
    </main>
  );
}
