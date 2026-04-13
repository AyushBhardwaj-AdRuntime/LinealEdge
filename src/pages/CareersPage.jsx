import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SubscribeBand from '../components/SubscribeBand';

const positions = [
  { title: 'Associate Consultant', city: 'New York', locationType: 'Hybrid' },
  { title: 'Consultant - Remuneration & Total Rewards', city: 'New York', locationType: 'Onsite' },
  { title: 'Senior Tax Associate', city: 'New York', locationType: 'Hybrid' },
];

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="careers-premium-page">
      {/* HERO SECTION - 2 Column Layout with Stats Ribbon */}
      <section className="careers-hero">
        <div className="careers-container">
          <div className="careers-hero-grid">
            <div className="careers-hero-content">
              <h1 className="careers-hero-title">We Cultivate an Atmosphere</h1>
              <p className="careers-hero-desc">
                We provide customized, highly analytical solutions, bringing a fresh perspective and a creative, resourceful approach to our clients&apos; most challenging diligence.
              </p>
              
              <div className="careers-stats-ribbon">
                <div className="careers-stat-item">
                  <h4 className="careers-stat-number">10+</h4>
                  <span className="careers-stat-label">Years of Diligence</span>
                </div>
                <div className="careers-stat-item">
                  <h4 className="careers-stat-number">500+</h4>
                  <span className="careers-stat-label">Clients Advised</span>
                </div>
                <div className="careers-stat-item">
                  <h4 className="careers-stat-number">Top 50</h4>
                  <span className="careers-stat-label">Advisory Firms</span>
                </div>
              </div>
            </div>
            
            <div className="careers-hero-image-wrapper">
              <img 
                src="/meeting-placeholder.svg"
                alt="Professionals collaborating in a modern office"
                className="careers-hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CULTURE SECTION - Transform Your Career */}
      <section className="careers-culture">
        <div className="careers-container">
          <div className="careers-culture-grid">
            <div className="careers-culture-image-wrapper">
              <img 
                src="/meeting-placeholder.svg"
                alt="Corporate architectural details"
                className="careers-culture-image"
              />
            </div>
            <div className="careers-culture-text">
              <h2 className="careers-culture-title">Transform Your Career</h2>
              <blockquote className="careers-trust-quote">
                "They embrace our <strong>Radically Human</strong> approach by putting people first in everything they do."
              </blockquote>
              <p className="careers-culture-body">
                The people who thrive here are those driven to build a meaningful career, not just earn a paycheck. Your journey here is not just about what you can do today, it is about who you can become in the right environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOBS SECTION - Card Grid Layout */}
      <section className="careers-jobs">
        <div className="careers-container">
          <div className="careers-section-header">
            <h2 className="careers-jobs-title">Experienced Opportunities</h2>
          </div>
          
          <div className="careers-job-grid">
            {positions.map((position) => (
              <div key={position.title} className="careers-job-card">
                <h3 className="careers-job-card-title">{position.title}</h3>
                <div className="careers-job-meta">
                  <span className="careers-job-location">📍 {position.city}</span>
                  <span className="careers-job-type">💼 {position.locationType}</span>
                </div>
                <Link to="/contact" className="careers-btn-apply arrow-hover-cta">
                  <span className="arrow-hover-label">Apply Now</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubscribeBand />
    </main>
  );
}
