import { createContext, useContext, useMemo, useState } from 'react';
import { apiRequest } from '../api/client';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => {
    const stored = localStorage.getItem('ssh-gr32-session');
    if (!stored) {
      return null;
    }

    try {
      return JSON.parse(stored);
    } catch (_) {
      localStorage.removeItem('ssh-gr32-session');
      return null;
    }
  });

  const saveSession = (value) => {
    setSession(value);
    localStorage.setItem('ssh-gr32-session', JSON.stringify(value));
  };

  const login = async (email, password) => {
    const next = await apiRequest('/auth/login', { method: 'POST', body: { email, password } });
    saveSession(next);
  };

  const register = async (payload) => {
    const next = await apiRequest('/auth/register', { method: 'POST', body: payload });
    saveSession(next);
  };

  const logout = () => {
    setSession(null);
    localStorage.removeItem('ssh-gr32-session');
  };

  const value = useMemo(() => ({
    session,
    token: session?.token,
    user: session?.user,
    login,
    register,
    logout
  }), [session]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}
