import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" />
      <div className="footer-inner">
        {/* Brand column */}
        <div className="footer-brand">
          <Link to="/">
            <img src="/Extra  Logo With Tagline and AMFI-1.png" alt="Lineal Edge" className="footer-logo" />
          </Link>
          <p className="footer-tagline">
            Structure. Strategy. Success.
          </p>
          <p className="footer-compliance">
            AMFI-Registered Mutual Fund Distributor | ARN-342205
          </p>
          <p className="footer-confidence">
            Your privacy and data are protected with secure handling and transparent practices.
          </p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/lineal-edge/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/people/Lineal-Edge/61573251729745/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/linealedge/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a href="https://x.com/LinealEdge" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Company links */}
        <div className="footer-column">
          <h4 className="footer-heading">Company</h4>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/careers" className="footer-link">Careers</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>

        {/* Resources links */}
        <div className="footer-column">
          <h4 className="footer-heading">Resources</h4>
          <Link to="/faq" className="footer-link">FAQs</Link>
          <Link to="/disclosure" className="footer-link">Disclosure</Link>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
        </div>

        {/* Contact info */}
        <div className="footer-column">
          <h4 className="footer-heading">Get in Touch</h4>
          <a href="mailto:info@linealedge.com" className="footer-link">info@linealedge.com</a>
          <a href="tel:+1234567890" className="footer-link">+1 (234) 567-890</a>
          <span className="footer-link footer-address">
            Lineal Edge Financial Services Pvt. Ltd.<br />
            123 Financial District, New York, NY 10005
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© {new Date().getFullYear()} Lineal Edge. All rights reserved.</span>
        <div className="footer-bottom-links">
          <Link to="/disclosure" className="footer-bottom-link">Disclosure</Link>
          <Link to="/faq" className="footer-bottom-link">FAQs</Link>
        </div>
      </div>
    </footer>
  );
}
