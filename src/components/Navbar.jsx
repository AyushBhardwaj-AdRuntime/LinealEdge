import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const [loginOpen, setLoginOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const dropdownRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setLoginOpen(false);
    setContactOpen(false);
    setNavHidden(false);
    lastScrollYRef.current = window.scrollY;
  }, [location]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const previousY = lastScrollYRef.current;
        const delta = currentY - previousY;
        const nearTop = currentY < 96;

        if (navRef.current) {
          navRef.current.classList.toggle('scrolled', currentY > 50);
        }

        if (mobileOpen) {
          setNavHidden(false);
        } else if (nearTop || delta < -6) {
          setNavHidden(false);
        } else if (delta > 6) {
          setNavHidden(true);
        }

        lastScrollYRef.current = currentY;
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLoginOpen(false);
      }
      if (contactRef.current && !contactRef.current.contains(e.target)) {
        setContactOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/team', label: 'Team' },
    { to: '/careers', label: 'Careers' },
  ];

  return (
    <nav 
      className={`navbar ${location.pathname === '/' ? 'opacity-0 -translate-y-5 pointer-events-none' : ''} ${navHidden ? 'nav-hidden' : ''}`}
      ref={navRef}
    >
      <Link to="/" className="nav-logo">
        <img src="/logo.svg" alt="Lineal Edge" className="nav-logo-img" />
      </Link>

      {/* Desktop Nav */}
      <div className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}

        {/* Contact Dropdown */}
        <div
          className="login-dropdown relative flex items-center"
          ref={contactRef}
          onMouseEnter={() => setContactOpen(true)}
          onMouseLeave={() => setContactOpen(false)}
        >
          <Link
            to="/contact"
            className={`nav-link flex items-center ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={(e) => {
              if (window.innerWidth < 1024) { e.preventDefault(); setContactOpen(!contactOpen); }
            }}
          >
            Contact
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: 6 }}>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          {contactOpen && (
            <div className="login-menu">
               <div className="login-menu-inner">
                 <Link to="/faq" className="login-menu-item">
                    <div className="login-icon">
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>
                       </svg>
                    </div>
                    <div>
                      <span className="login-menu-title">FAQs</span>
                      <span className="login-menu-desc">Find answers quickly</span>
                    </div>
                 </Link>
                 <Link to="/disclosure" className="login-menu-item">
                    <div className="login-icon">
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                       </svg>
                    </div>
                    <div>
                      <span className="login-menu-title">Disclosure</span>
                      <span className="login-menu-desc">Read our policies</span>
                    </div>
                 </Link>
               </div>
            </div>
          )}
        </div>

        {/* Login dropdown */}
        <div
          className="login-dropdown"
          ref={dropdownRef}
          onMouseEnter={() => setLoginOpen(true)}
          onMouseLeave={() => setLoginOpen(false)}
        >
          <button
            className="nav-cta"
            onClick={() => setLoginOpen(!loginOpen)}
          >
            Login
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: 6 }}>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {loginOpen && (
            <div className="login-menu">
              <div className="login-menu-inner">
                <Link to="/login/client" className="login-menu-item">
                  <div className="login-icon client-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <span className="login-menu-title">Client Portal</span>
                    <span className="login-menu-desc">Access your portfolio</span>
                  </div>
                </Link>
                <Link to="/login/advisor" className="login-menu-item">
                  <div className="login-icon advisor-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                  </div>
                  <div>
                    <span className="login-menu-title">Advisor Portal</span>
                    <span className="login-menu-desc">Manage your clients</span>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile hamburger */}
      <button
        className={`hamburger ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
