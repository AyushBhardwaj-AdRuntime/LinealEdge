import React, { useEffect, useState } from 'react';

export default function ClientLoginPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    // Placeholder — integrate real auth here
    alert('Client login submitted. Integration pending.');
  };

  return (
    <main className="page-content">
      <section className="login-page login-page-client">
        <div className="login-bg" />
        <div className="login-container">
          <div className="login-card login-card-client">
            <div className="login-header">
              <div className="login-header-top">
                <span className="login-badge">Client Access</span>
                <img src="/logo-original.svg" alt="Lineal Edge" className="login-logo" />
              </div>
              <h1 className="login-title">Client Portal</h1>
              <p className="login-subtitle">Access your Lineal Edge roadmap and life-goal progress</p>
            </div>
            {error && <div className="login-error">{error}</div>}
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email" className="form-input" placeholder="you@company.com" required
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password" className="form-input" placeholder="••••••••" required
                  value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              </div>
              <div className="login-options">
                <label className="login-remember">
                  <input type="checkbox" /> <span>Remember me</span>
                </label>
                <a href="#" className="login-forgot">Forgot password?</a>
              </div>
              <button type="submit" className="cta-primary login-btn arrow-hover-cta">
                <span className="arrow-hover-label">Secure Sign In</span>
              </button>
            </form>
            <div className="login-footer-text">
              <span>Don't have an account? </span>
              <a href="#" className="login-link">Contact us</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
