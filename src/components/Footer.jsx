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
            <img src="/logo.svg" alt="Lineal Edge" className="footer-logo" />
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
            <a href="#" aria-label="LinkedIn" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="social-link">
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

      {/* Bottom bar */}
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
