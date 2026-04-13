import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function EmpatheticAnchor() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.empathetic-stagger', {
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-32 px-6 relative z-10 w-full mt-12 mb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070A] to-[#030508] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Placeholder for Lead Advisor / Human connection */}
        <div className="empathetic-stagger w-24 h-24 mx-auto bg-gray-100 border border-gray-200 rounded-full mb-10 flex items-center justify-center relative overflow-hidden shadow-[0_0_40px_rgba(43,216,103,0.1)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(10,20,40,0.04),transparent)]" />
          <svg className="w-8 h-8 text-gray-600/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </div>
        
        <h2 className="empathetic-stagger text-3xl md:text-5xl font-light text-gray-900/90 leading-[1.3] tracking-tight mb-8">
          "Technology powers our <span className="text-gray-900 font-medium">precision</span>.<br/>
          But empathy powers your <span className="text-green-400 font-medium">alignment</span>."
        </h2>
        
        <p className="empathetic-stagger text-lg text-gray-700/40 max-w-2xl mx-auto mb-16">
          Your family's goals aren't just points on a data matrix. Let's chart your bespoke future, together.
        </p>
        
        <button className="empathetic-stagger px-12 py-5 bg-gray-900 text-white hover:bg-green-400 rounded-full text-[13px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 shadow-[0_0_20px_rgba(10,20,40,0.08)] hover:shadow-[0_0_30px_rgba(43,216,103,0.4)]">
          Schedule Consultation
        </button>
      </div>
    </section>
  );
}
