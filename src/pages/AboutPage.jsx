import React, { useEffect } from 'react';
import SubscribeBand from '../components/SubscribeBand';
import PageHeader from '../components/PageHeader';

const highlights = [
  {
    title: 'Higher return on investment',
    desc: 'We help founders make sharper capital decisions through strategic planning and practical operating models.',
  },
  {
    title: 'Greater stakeholder value',
    desc: 'We align leadership, operations, and delivery so growth creates measurable value across the business.',
  },
];

const team = [
  { name: 'Johnatan Moralle', role: 'Founder', image: 'https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&w=900&q=80' },
  { name: 'Daniel Brila', role: 'President', image: 'https://images.unsplash.com/photo-1573497019707-1c04de26e58c?auto=format&fit=crop&w=900&q=80' },
  { name: 'Rebeca Johnson', role: 'Senior Tax Manager', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80' },
];

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="page-content">
      <PageHeader
        title="Who We Are"
        description="With years of experience and a results-focused approach, we empower businesses to navigate complexity and achieve their goals."
      />

      <section className="aboutx-shell aboutx-intro">
        <div className="aboutx-grid aboutx-grid-top">
          <div className="aboutx-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80"
              alt="Executive strategy meeting"
              className="aboutx-image-main"
            />
            <aside className="aboutx-hire-card">
              <h3>Why Hire Lineal Edge?</h3>
              <ul>
                <li>15+ years of advisory expertise</li>
                <li>Top-rated consulting delivery</li>
                <li>Certified, cross-domain specialists</li>
              </ul>
              <button type="button" className="aboutx-btn-dark">
                <span>Free Consultation</span>
                <span className="aboutx-btn-arrow" aria-hidden="true">→</span>
              </button>
            </aside>
          </div>

          <div className="aboutx-copy-col">
            <span className="aboutx-tag">Who We Are</span>
            <h1 className="aboutx-title-xl">Driving Success Through Strategy</h1>
            <p className="aboutx-text">We specialize in helping growth-stage and established businesses thrive through expert guidance in business planning, goal setting, process optimization, and sustainable growth strategy.</p>
            <p className="aboutx-text">Our team understands how the right systems, team alignment, and execution cadence fit together to create durable performance. Whether you are looking to enhance efficiency, seize new growth opportunities, or navigate operational complexity, we are here to help.</p>
            <ul className="aboutx-checks">
              <li>Business strategy and planning</li>
              <li>Marketing strategy and execution</li>
              <li>Process efficiency and workflow improvement</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="aboutx-shell aboutx-mission">
        <div className="aboutx-grid aboutx-mission-head">
          <div>
            <span className="aboutx-tag">Our Mission</span>
            <h2 className="aboutx-title-lg">Empowering Clients to Create Lasting Value</h2>
          </div>
          <p className="aboutx-text">Our mission is to help clients unlock clear long-term growth with strategic guidance, modern systems, and execution support tailored to each business stage.</p>
        </div>

        <div className="aboutx-mission-panel">
          <div className="aboutx-highlight-row">
            {highlights.map((item) => (
              <article className="aboutx-highlight" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="aboutx-wide-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80"
              alt="Consultants collaborating in meeting room"
              className="aboutx-wide-image"
            />
            <button type="button" className="aboutx-btn-light">
              <span>Explore Our Services</span>
              <span className="aboutx-btn-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="aboutx-shell aboutx-tradition">
        <div className="aboutx-grid aboutx-grid-top">
          <div className="aboutx-architecture-wrap">
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=80"
              alt="Modern architecture representing strong foundations"
              className="aboutx-architecture-image"
            />
            <div className="aboutx-accent-block">
              <div className="aboutx-accent-top">
                <span className="aboutx-accent-brand">Lineal Edge</span>
                <div className="aboutx-accent-big">10+</div>
                <p className="aboutx-accent-desc">Years of Tradition & Innovation</p>
              </div>
              <button type="button" className="aboutx-accent-btn">Contact Us <span className="arrow">&rarr;</span></button>
            </div>
          </div>

          <div className="aboutx-copy-col">
            <span className="aboutx-tag">Company With Traditions</span>
            <h2 className="aboutx-title-lg">Building on Tradition, Driving Innovation</h2>
            <p className="aboutx-text">Lineal Edge combines deep advisory experience with forward-thinking execution to deliver practical, high-impact solutions. Our team brings strategic depth, operational clarity, and a personal commitment to each client partnership.</p>
            <p className="aboutx-text">From optimizing processes to enabling transformation initiatives, we help organizations build a stronger operating foundation and sustained long-term growth.</p>
          </div>
        </div>
      </section>

      <section className="aboutx-shell aboutx-team">
        <div className="aboutx-grid aboutx-team-head">
          <div>
            <span className="aboutx-tag">Our Team</span>
            <h2 className="aboutx-title-lg">A Team With Proven Expertise and Excellence</h2>
          </div>
          <p className="aboutx-text">Our consultants blend management, finance, and operations expertise with hands-on implementation support, helping leadership teams move from uncertainty to confident growth.</p>
        </div>

        <div className="aboutx-team-grid">
          <article className="aboutx-quote-card">
            <p>"Strong systems and bold strategy create enduring success."</p>
            <div className="aboutx-signature" aria-hidden="true">LE</div>
            <button type="button" className="aboutx-btn-light">
              <span>Learn More</span>
              <span className="aboutx-btn-arrow" aria-hidden="true">→</span>
            </button>
          </article>

          {team.map((member) => (
            <article className="aboutx-member-card" key={member.name}>
              <img src={member.image} alt={member.name} className="aboutx-member-image" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <SubscribeBand />
    </main>
  );
}
