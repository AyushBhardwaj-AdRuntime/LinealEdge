import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

const strategies = [
  { id: 1, title: 'Retirement Transition', goal: 'Age 55 Freedom', approach: 'Aligned fragmented assets into a unified bespoke roadmap. Ensured a comfortable, secure life after retirement.', result: '100% On Target', time: '8 Yrs Executed' },
  { id: 2, title: 'Generational Wealth', goal: 'Family Preservation', approach: 'Structured an objective, custom portfolio with health contingencies. Shielded against market drawdowns.', result: 'Preserved & Scaled', time: '14 Yrs Executed' },
  { id: 3, title: 'Education Milestones', goal: 'University Funding', approach: 'Mapped inflation against detailed future education costs. Liquidated tranches precision-timed to tuition schedules.', result: 'Fully Funded', time: '6 Yrs Executed' }
];

export default function MathematicalCaseStudies() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.case-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 relative z-10 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.3em] text-green-400 mb-4 uppercase">Proven Trajectories</div>
          <h2 className="text-4xl tracking-tight text-gray-900/90 mb-4">Objective Case Studies</h2>
          <p className="text-gray-700/40 max-w-lg mx-auto">We do not deal in generic advice. We architect bespoke roadmaps to your life's ambitions, executed flawlessly over decades.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strategies.map((s) => (
            <div key={s.id} className="case-card bg-white border border-gray-200 p-8 rounded-xl relative group hover:border-green-500/30 transition-colors duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                <svg className="w-6 h-6 text-green-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </div>
              
              <div className="text-[10px] text-gray-600/30 uppercase tracking-widest mb-6 border-b border-gray-400/10 pb-4">Dossier #{s.id.toString().padStart(3, '0')}</div>
              
              <h3 className="text-lg text-gray-900/90 mb-2 font-medium">{s.title}</h3>
              <div className="text-sm text-green-400 mb-8 font-mono">Obj: {s.goal}</div>
              
              <div className="mb-8">
                <div className="text-[10px] text-gray-600/30 uppercase tracking-wide mb-2">The Alignment</div>
                <p className="text-[13px] text-gray-700/50 leading-relaxed">{s.approach}</p>
              </div>
              
              <div className="flex justify-between items-end border-t border-gray-400/10 pt-4 mt-auto">
                <div>
                  <div className="text-[10px] text-gray-600/30 uppercase tracking-wide mb-1">Status</div>
                  <div className="text-sm text-gray-900/90 font-medium flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    {s.result}
                  </div>
                </div>
                <div className="text-[11px] text-gray-700/40 font-mono">
                  {s.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
