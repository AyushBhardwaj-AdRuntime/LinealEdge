import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function TransparencyTimeline() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top 70%' } });
      tl.to('.timeline-line', { height: '100%', duration: 1.5, ease: 'power2.inOut' })
        .from('.timeline-step', { opacity: 0, x: -20, duration: 0.8, stagger: 0.3, ease: 'power3.out' }, "-=1");
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-32 px-6 max-w-4xl mx-auto relative z-10 w-full mt-24">
      <div className="text-center mb-24">
        <div className="text-[10px] tracking-[0.3em] text-green-400 mb-4 uppercase">Clear-Box Framework</div>
        <h2 className="text-4xl tracking-tight text-gray-900/90 mb-4">Radical Transparency</h2>
        <p className="text-gray-700/40 max-w-lg mx-auto">No guessing games. No black-box jargon. Just objective execution laid out precisely before you engage.</p>
      </div>
      <div className="relative pl-10 md:pl-20 border-l border-gray-200 mx-4 md:mx-0">
        <div className="timeline-line absolute left-[-1px] top-0 w-[2px] h-0 bg-gradient-to-b from-green-400 to-blue-500" />
        
        <Step num="01" title="The Objective Audit" desc="We forensically index your current financial position, extracting raw data to establish an unshakeable ground-truth. Every asset, liability, and ambition is cataloged." />
        <Step num="02" title="The Bespoke Blueprint" desc="Our team aligns your ultimate ambitions (child's education, retirement, healthcare) with proven strategies to architect your custom trajectory." />
        <Step num="03" title="Compounding Execution" desc="We enact the blueprint meticulously. Your portfolio naturally adapts to secure sustained compounding growth customized for your life goals." />
      </div>
    </section>
  );
}

function Step({ num, title, desc }) {
  return (
    <div className="timeline-step relative mb-16 last:mb-0">
      <div className="absolute -left-[45px] md:-left-[85px] top-2 w-3 h-3 rounded-full bg-white border-2 border-green-500 shadow-[0_0_15px_rgba(43,216,103,0.5)] z-10" />
      <span className="text-[12px] font-bold tracking-[0.2em] text-green-400 mb-2 block">{num}</span>
      <h3 className="text-2xl text-gray-900/90 mb-3">{title}</h3>
      <p className="text-[14px] text-gray-700/50 max-w-md leading-relaxed">{desc}</p>
    </div>
  );
}
