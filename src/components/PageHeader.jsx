import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PATH_LABELS = {
  about: 'About',
  services: 'Services',
  team: 'Team',
  careers: 'Careers',
  contact: 'Contact',
  faq: 'FAQs',
  disclosure: 'Disclosure',
  login: 'Login',
};

function derivePageName(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return 'Home';

  const key = segments[0].toLowerCase();
  if (PATH_LABELS[key]) return PATH_LABELS[key];

  return key.charAt(0).toUpperCase() + key.slice(1);
}

export default function PageHeader({ title, description }) {
  const location = useLocation();
  const pageName = derivePageName(location.pathname);

  return (
    <section className="inner-page-hero" aria-label={`${pageName} page header`}>
      <div className="inner-page-hero-container">
        <p className="inner-page-breadcrumb-row">
          <Link to="/" className="inner-page-breadcrumb-link">Home</Link>
          <span className="inner-page-breadcrumb-sep">&gt;</span>
          <span className="inner-page-breadcrumb-current">{pageName}</span>
        </p>
        <div className="inner-page-divider" aria-hidden="true" />
        <h1 className="inner-page-title">{title}</h1>
        <p className="inner-page-subtitle">{description}</p>
      </div>
    </section>
  );
}