import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState('consulting');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'consulting',
      navLabel: 'Business Consulting',
      eyebrow: 'Business Consulting',
      title: 'Transforming Insight into Impact',
      description:
        'We help organizations navigate complexity, identify growth opportunities, and build resilient strategies built for measurable outcomes.',
      bullets: ['Strategy development & growth', 'Market research & competitors', 'Risk management'],
      image: '/meeting-placeholder.svg',
      snapshot: 'Strategy and advisory sprint',
    },
    {
      id: 'marketing',
      navLabel: 'Marketing & Sales',
      eyebrow: 'Marketing & Sales',
      title: 'Building Demand That Converts',
      description:
        'From positioning to pipeline, we align your brand and revenue teams so every campaign contributes to stronger conversion and retention.',
      bullets: ['Go-to-market planning', 'Sales funnel optimization', 'Retention and loyalty playbooks'],
      image: '/blog_property.png',
      snapshot: 'Revenue growth campaign planning',
    },
    {
      id: 'ops',
      navLabel: 'Operations Management',
      eyebrow: 'Operations Management',
      title: 'Operational Excellence at Scale',
      description:
        'We redesign operating models, workflows, and decision systems to reduce friction and improve execution speed across your organization.',
      bullets: ['Process mapping and redesign', 'Cost and performance improvement', 'Governance and KPI systems'],
      image: '/growth-graph.svg',
      snapshot: 'Performance systems and optimization',
    },
    {
      id: 'talent',
      navLabel: 'Talent Acquisition',
      eyebrow: 'Talent Acquisition',
      title: 'Talent Strategies for Sustainable Growth',
      description:
        'We help you attract, assess, and retain high-impact talent with hiring frameworks tailored to your company stage and culture.',
      bullets: ['Workforce planning', 'Leadership hiring support', 'Employer brand and onboarding strategy'],
      image: '/client-rebecca.svg',
      snapshot: 'Leadership hiring and onboarding',
    },
  ];

  const activeIndex = Math.max(
    0,
    services.findIndex((service) => service.id === activeService)
  );

  const currentService = services[activeIndex];

  const handleNavClick = (id) => {
    setActiveService(id);
  };

  return (
    <main className="services-premium-page">
      <PageHeader
        title="Comprehensive Business Consulting"
        description="We help organizations redefine their direction, and improve performance. Our consultants bring deep industry knowledge and a results-oriented mindset."
      />

      <nav className="services-nav">
        <div className="services-container services-nav-flex">
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              className={`services-nav-item ${activeService === service.id ? 'active' : ''}`}
              onClick={(event) => {
                event.preventDefault();
                handleNavClick(service.id);
              }}
            >
              {service.navLabel}
            </button>
          ))}
        </div>
      </nav>

      <section className="services-content services-container" id={currentService.id}>
        <div className="services-split-grid">
          <div className={`services-image-box services-image-box-${currentService.id}`}>
            <img
              src={currentService.image}
              alt={currentService.navLabel}
              className="services-content-image"
            />
            <div className="services-image-meta-card">
              <span className="services-image-meta-label">Delivery Snapshot</span>
              <p>{currentService.snapshot}</p>
            </div>
          </div>
          <div className="services-text-box">
            <span className="services-eyebrow">{currentService.eyebrow}</span>
            <h2 className="services-section-heading">{currentService.title}</h2>
            <p className="services-body-text">
              {currentService.description}
            </p>
            <ul className="services-check-list">
              {currentService.bullets.map((item) => (
                <li key={item}>
                  <span className="services-check-icon" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="services-learn-more-btn">
              <span>Learn More</span>
              <span className="services-arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
