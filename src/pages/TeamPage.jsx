import React, { useEffect } from 'react';
import SubscribeBand from '../components/SubscribeBand';
import PageHeader from '../components/PageHeader';

const teamMembers = [
  {
    name: 'Daniel Brila',
    role: 'President',
    image: '/leader-daniel.svg',
    bio: 'Leads strategic advisory and business transformation programs with a focus on execution quality and measurable outcomes.',
  },
  {
    name: 'Rebecca Johnson',
    role: 'Senior Tax Manager',
    image: '/leader-rebecca.svg',
    bio: 'Guides planning, compliance, and growth readiness with a practical, client-first approach to long-term financial stability.',
  },
];

export default function TeamPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="page-content teamx-page">
      <PageHeader
        title="Meet Our Leadership"
        description="A focused senior team helping clients move from uncertainty to confidence through strategy, execution, and trusted financial guidance."
      />

      <section className="teamx-section">
        <div className="teamx-container">
          <div className="teamx-grid">
            {teamMembers.map((member) => (
              <article className="teamx-card" key={member.name}>
                <div className="teamx-image-wrap">
                  <img src={member.image} alt={member.name} className="teamx-image" />
                </div>
                <div className="teamx-content">
                  <h2>{member.name}</h2>
                  <p className="teamx-role">{member.role}</p>
                  <p className="teamx-bio">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SubscribeBand />
    </main>
  );
}
