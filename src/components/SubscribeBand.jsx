import React from 'react';

export default function SubscribeBand() {
  return (
    <section className="services-newsletter-band">
      <div className="services-container">
        <h3 className="services-newsletter-title">Stay Ahead. Subscribe for Expert Insights.</h3>
        <form className="services-newsletter-form" onSubmit={(event) => event.preventDefault()}>
          <input
            type="email"
            className="services-newsletter-input"
            placeholder="Email"
            aria-label="Email"
          />
          <button type="submit" className="services-newsletter-button">
            Subscribe <span className="services-arrow">&rarr;</span>
          </button>
          <p className="services-newsletter-copy">
            You can unsubscribe at any time using the link in the footer of our emails. View our Privacy Policy.
          </p>
        </form>
      </div>
    </section>
  );
}
