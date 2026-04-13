import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TrustBar() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.trust-badge', {
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="w-full py-8 border-y border-gray-200 bg-gray-50 backdrop-blur-md flex flex-wrap justify-center items-center gap-8 md:gap-24 relative z-10">
      <Badge text="AMFI Registered" />
      <Badge text="ARN Certified" />
      <Badge text="Fiduciary Standard" />
      <Badge text="Bank-Level Security" />
    </div>
  );
}

function Badge({ text }) {
  return (
    <div className="trust-badge flex items-center gap-3">
      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      <span className="text-[11px] uppercase tracking-widest text-gray-700/50 font-semibold">{text}</span>
    </div>
  );
}
