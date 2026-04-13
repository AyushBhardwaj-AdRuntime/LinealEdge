import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const goals = [
  { id: 'child', name: "Child's Education", years: 12, target: "₹2.5 Cr", risk: "Moderate-Aggressive", points: "0,150 50,140 100,120 150,90 200,60 250,30" },
  { id: 'home', name: "Dream Home", years: 5, target: "₹1.2 Cr", risk: "Conservative", points: "0,150 50,135 100,120 150,105 200,90 250,70" },
  { id: 'retire', name: "Early Retirement", years: 25, target: "₹8.0 Cr", risk: "Aggressive", points: "0,150 50,145 100,130 150,100 200,50 250,10" },
  { id: 'health', name: "Healthcare Corpus", years: 10, target: "₹1.5 Cr", risk: "Moderate", points: "0,150 50,130 100,110 150,90 200,70 250,50" }
];

export default function BespokeJourneySlider() {
  const [index, setIndex] = useState(2); // Default to Retirement
  const graphRef = useRef(null);

  useEffect(() => {
    // Animate the polyline points when category changes to make it look like a dynamic projection
    gsap.fromTo(graphRef.current, 
      { strokeDashoffset: 400 }, 
      { strokeDashoffset: 0, duration: 1, ease: 'power3.out' }
    );
  }, [index]);

  const activeGoal = goals[index];

  return (
    <section className="py-24 px-6 relative z-10 w-full mb-12">
      <div className="max-w-5xl mx-auto border border-gray-200 bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.08)]">
        <div className="p-10 md:p-14 md:flex gap-16 items-center">
          
          <div className="flex-1 mb-12 md:mb-0">
            <div className="text-[10px] tracking-[0.3em] text-green-400 mb-4 uppercase">Interactive Projection</div>
            <h2 className="text-3xl tracking-tight text-gray-900/90 mb-6">The Bespoke Journey</h2>
            <p className="text-gray-700/40 mb-10 leading-relaxed text-sm">
              We do not believe in generic portfolios. Adjust the matrix to match your specific life ambition, and we instantly project the required alignment.
            </p>

            <div className="space-y-6">
              {goals.map((g, i) => (
                <button 
                  key={g.id} 
                  onClick={() => setIndex(i)}
                  className={`block w-full text-left px-5 py-3 rounded-lg border transition-all duration-300 ${index === i ? 'bg-[rgba(43,216,103,0.1)] border-green-500/50 text-green-400' : 'bg-transparent border-gray-200 text-gray-700/50 hover:bg-gray-100 hover:border-gray-400/30'}`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{g.name}</span>
                    {index === i && <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(43,216,103,0.8)]" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-gray-50 rounded-xl p-8 border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-[60px] pointer-events-none" />
            
            <div className="flex justify-between items-end border-b border-gray-400/20 pb-6 mb-8">
              <div>
                <div className="text-[10px] text-gray-600/30 uppercase tracking-wider mb-2">Target Trajectory</div>
                <div className="text-3xl text-gray-900/90 font-light">{activeGoal.target}</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-gray-600/30 uppercase tracking-wider mb-2">Time Horizon</div>
                <div className="text-xl text-green-400">{activeGoal.years} Years</div>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-[10px] text-gray-600/30 uppercase tracking-wider mb-2">Recommended Alignment</div>
              <div className="inline-block px-3 py-1 bg-gray-900/5 rounded border border-gray-400/20 text-gray-800/70 text-sm">
                {activeGoal.risk} Profile
              </div>
            </div>

            {/* Simulated Graph */}
            <div className="relative w-full h-[150px] border-l border-b border-gray-400/20 mt-8">
              <svg width="100%" height="100%" viewBox="0 0 250 150" preserveAspectRatio="none" className="overflow-visible">
                {/* Grid lines */}
                <line x1="0" y1="50" x2="250" y2="50" stroke="rgba(10,20,40,0.04)" strokeWidth="1" />
                <line x1="0" y1="100" x2="250" y2="100" stroke="rgba(10,20,40,0.04)" strokeWidth="1" />
                
                {/* Dynamically changing curve */}
                <polyline 
                  ref={graphRef}
                  points={activeGoal.points} 
                  fill="none" 
                  stroke="#2BD867" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="400"
                  strokeDashoffset="0"
                />
                
                {/* Endpoint dot */}
                <circle cx="250" cy={activeGoal.points.split(' ').pop().split(',')[1]} r="4" fill="#2BD867" className="animate-pulse" />
              </svg>
            </div>
            
            <button className="w-full mt-10 py-4 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300">
              Align My Objective →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
