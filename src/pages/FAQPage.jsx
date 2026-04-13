import React, { useEffect, useState } from 'react';
import SubscribeBand from '../components/SubscribeBand';

const faqData = [
  {
    category: 'General',
    items: [
      { q: 'What is Lineal Edge?', a: 'Lineal Edge is a bespoke wealth management firm dedicated to aligning your investments meticulously with your life\'s ambitions. We focus on personal goals like funding your child\'s education, maintaining your post-retirement lifestyle, and securing emergency healthcare reserves.' },
      { q: 'Who is Lineal Edge for?', a: 'We serve individuals and families who desire a deeply personalized, objective approach to wealth management and understand that financial success is measured by the realization of life goals.' },
      { q: 'How is Lineal Edge different from other wealth advisors?', a: 'Unlike traditional advisors using generic models, we bring an objective eye and a purely customized approach. Every recommendation is uniquely mapped to ensure your child\'s education, health contingencies, and comfortable retirement are fully supported.' },
    ],
  },
  {
    category: 'Account & Onboarding',
    items: [
      { q: 'What is the minimum investment?', a: 'Because our approach is deeply bespoke and tailored to substantial life milestones, we typically require a minimum investment of $250,000 to construct an effective roadmap.' },
      { q: 'How do I open an account?', a: 'Start by scheduling a consultation. We believe the first step is always a conversation about your ambitions and anxieties before we ever look at numbers.' },
      { q: 'Can I transfer existing portfolios?', a: 'Yes. Our fiduciary team will work to transfer existing assets carefully, ensuring they are seamlessly aligned into your new bespoke roadmap with tax efficiencies in mind.' },
    ],
  },
  {
    category: 'Fees & Alignment',
    items: [
      { q: 'What are your fees?', a: 'We believe your fiduciary should be objective. We charge a straightforward management fee based on assets under management, ensuring our success is directly tied to the security of your bespoke future. No hidden fees or commissions.' },
      { q: 'How do you define performance?', a: 'For us, performance is not tracked purely against a generic market index. True performance is maintaining your trajectory towards funding that childhood education, retiring comfortably without compromise, and sleeping soundly knowing healthcare reserves are established.' },
    ],
  },
  {
    category: 'Security & Compliance',
    items: [
      { q: 'Is my money safe?', a: 'Your family’s financial security is our highest priority. All client assets are custodied at SIPC-insured broker-dealers. We never take direct custody of your funds.' },
      { q: 'Is Lineal Edge registered with the SEC?', a: 'Yes. We are a registered investment advisor (RIA) with a strict fiduciary duty to put your interests and ambitions above all else.' },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <svg className="faq-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className="faq-answer">
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="page-content">
      <section className="page-hero compact">
        <div className="page-hero-bg" />
        <div className="page-hero-inner">
          <div className="page-label"><div className="label-line" /><span className="label-text">FAQs</span></div>
          <h1 className="page-hero-title">Frequently asked <span className="text-green">questions</span></h1>
        </div>
      </section>

      <section className="content-section">
        <div className="section-inner narrow">
          {faqData.map((cat, i) => (
            <div key={i} className="faq-category">
              <h2 className="faq-category-title">{cat.category}</h2>
              {cat.items.map((item, j) => (
                <FAQItem key={j} q={item.q} a={item.a} />
              ))}
            </div>
          ))}
        </div>
      </section>

      <SubscribeBand />
    </main>
  );
}
