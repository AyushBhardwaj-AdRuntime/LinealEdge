import React, { useEffect, useState } from 'react';

export default function AdvisorLoginPage() {
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
    alert('Advisor login submitted. Integration pending.');
  };

  return (
    <main className="page-content">
      <section className="login-page login-page-advisor">
        <div className="login-bg" />
        <div className="login-container">
          <div className="login-card login-card-advisor">
            <div className="login-header">
              <div className="login-header-top">
                <span className="login-badge">Advisor Access</span>
                <img src="/logo-original.svg" alt="Lineal Edge" className="login-logo" />
              </div>
              <h1 className="login-title">Advisor Portal</h1>
              <p className="login-subtitle">Manage your clients and Lineal Edge planning roadmaps</p>
            </div>
            {error && <div className="login-error">{error}</div>}
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email" className="form-input" placeholder="advisor@firm.com" required
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
              <span>Need advisor access? </span>
              <a href="#" className="login-link">Apply here</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
