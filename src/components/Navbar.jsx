import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [isHeroTransparent, setIsHeroTransparent] = useState(true);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    setMobileOpen(false);
    setLoginOpen(false);
    setNavHidden(false);
    lastScrollYRef.current = window.scrollY;
    setIsHeroTransparent(location.pathname === '/');

    if (location.pathname !== '/' && navRef.current) {
      navRef.current.style.transform = 'translate3d(0px, 0px, 0px)';
      navRef.current.style.opacity = '1';
      navRef.current.style.pointerEvents = 'auto';
    }
  }, [location.pathname]);

  useEffect(() => {
    let ticking = false;
    const isHome = location.pathname === '/';

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const previousY = lastScrollYRef.current;
        const delta = currentY - previousY;
        const nearTop = currentY < 96;

        if (isHome) {
          const heroSection = document.querySelector('.hero.hero-premium');
          const heroBottom = heroSection
            ? heroSection.offsetTop + heroSection.offsetHeight - 80
            : 120;
          const nextTransparent = currentY < heroBottom;
          setIsHeroTransparent((prev) => (prev === nextTransparent ? prev : nextTransparent));
        } else {
          setIsHeroTransparent((prev) => (prev ? false : prev));
        }

        if (!isHome) {
          setNavHidden(false);
        } else if (mobileOpen) {
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

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLoginOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/careers', label: 'Careers' },
  ];

  return (
    <nav 
      className={`navbar ${isHomePage ? 'opacity-0 -translate-y-5 pointer-events-none' : ''} ${isHeroTransparent && isHomePage ? 'home-glass' : 'scrolled'} ${navHidden && isHomePage ? 'nav-hidden' : ''}`}
      ref={navRef}
    >
      <Link to="/" className="nav-logo">
        <img src="/Extra  Logo With Tagline and AMFI-1.svg" alt="Lineal Edge" className="nav-logo-img" />
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

        <div className="relative flex items-center"
          onClick={() => {
            if (mobileOpen) {
              setMobileOpen(false);
            }
          }}
        >
          <Link
            to="/contact"
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
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
