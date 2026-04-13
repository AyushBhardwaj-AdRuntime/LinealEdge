import React, { useEffect, useState } from 'react';
import SubscribeBand from '../components/SubscribeBand';

function CardIcon({ type }) {
  if (type === 'location') {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 22C15.5 17.8 19 14.3 19 10A7 7 0 1 0 5 10C5 14.3 8.5 17.8 12 22Z" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="10" r="2.8" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === 'phone') {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 4H10L11.5 7.5L9.5 9.2C10.6 11.5 12.5 13.4 14.8 14.5L16.5 12.5L20 14V18C20 19.1 19.1 20 18 20C10.8 20 4 13.2 4 6C4 4.9 4.9 4 6 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 11.5L20.6 3.7C21.3 3.4 22 4.1 21.7 4.8L13.9 22.4C13.5 23.2 12.3 23.1 12 22.3L9.6 15.6L2.9 13.2C2.1 12.9 2.1 11.8 3 11.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M21.5 4L9.6 15.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <main className="contactv2-page">
      <section className="contactv2-hero">
        <div className="contactv2-container">
          <div className="contactv2-brand-lockup" aria-label="Lineal Edge brand">
            <img src="/logo.svg" alt="Lineal Edge" className="contactv2-brand-logo" />
            <div className="contactv2-brand-copy">
              <p className="contactv2-brand-tagline">Legacy Personal Finance Solutions</p>
              <p className="contactv2-brand-reg">AMFI-Registered Mutual Fund Distributor | ARN-342205</p>
            </div>
          </div>
          <p className="contactv2-breadcrumb">Home &gt; Contact us</p>
          <h1 className="contactv2-title">Get In Touch</h1>
          <p className="contactv2-subtitle">We Look Forward to Connecting With You</p>
        </div>
      </section>

      <section className="contactv2-info-wrap">
        <div className="contactv2-container">
          <div className="contactv2-info-grid">
            <article className="contactv2-info-card">
              <div className="contactv2-card-header">
                <div className="contactv2-icon-box"><CardIcon type="location" /></div>
                <span className="contactv2-arrow"><ArrowIcon /></span>
              </div>
              <h3>Visit us at:</h3>
              <p>Seventh Ave, 20th Floor,<br />New York, NY 10018</p>
            </article>

            <article className="contactv2-info-card">
              <div className="contactv2-card-header">
                <div className="contactv2-icon-box"><CardIcon type="phone" /></div>
                <span className="contactv2-arrow"><ArrowIcon /></span>
              </div>
              <h3>Call us at:</h3>
              <p><a href="tel:+18003568933">1-800-356-8933</a></p>
            </article>

            <article className="contactv2-info-card">
              <div className="contactv2-card-header">
                <div className="contactv2-icon-box"><CardIcon type="email" /></div>
                <span className="contactv2-arrow"><ArrowIcon /></span>
              </div>
              <h3>Email us at:</h3>
              <p><a href="mailto:office@execor.com">office@execor.com</a></p>
            </article>
          </div>
        </div>
      </section>

      <section className="contactv2-split-wrap">
        <div className="contactv2-container contactv2-split">
          <div className="contactv2-text-col">
            <span className="contactv2-label">Contact Us Form</span>
            <h2>Our Experts Always Ready to Work With You</h2>
            <p className="contactv2-text">Ask about general information. Please send us a message.</p>

            <div className="contactv2-inquiry-item">
              <span className="contactv2-inquiry-icon"><PlaneIcon /></span>
              <div>
                <h4>For career inquiries, please email</h4>
                <p><a href="mailto:careers@execor.com">careers@execor.com</a></p>
              </div>
            </div>
          </div>

          <div className="contactv2-form-shell">
            <div className="contactv2-form-header">
              <h3>Contact Form</h3>
              <span className="contactv2-plane-icon"><PlaneIcon /></span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="contactv2-form-row">
                <div className="contactv2-input-group">
                  <label htmlFor="firstName">First name *</label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  />
                </div>
                <div className="contactv2-input-group">
                  <label htmlFor="lastName">Last name *</label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="contactv2-form-row">
                <div className="contactv2-input-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="contactv2-input-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="contactv2-input-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  placeholder="To better assist you, please describe how we can help..."
                  rows="4"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button type="submit" className="contactv2-submit-btn">
                <span>{sent ? 'Submitted Successfully' : 'Submit'}</span>
                <span className="contactv2-submit-arrow"><ArrowIcon /></span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <SubscribeBand />
    </main>
  );
}
