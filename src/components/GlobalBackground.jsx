import React from 'react';

function GridOverlay() {
  const lines = [];
  for (let i = 0; i < 18; i++) lines.push(<div key={`v${i}`} className="grid-line-v" style={{ left: `${(i + 1) * 5.55}%` }} />);
  for (let i = 0; i < 12; i++) lines.push(<div key={`h${i}`} className="grid-line-h" style={{ top: `${(i + 1) * 8.33}%` }} />);
  return <div className="grid-overlay global-grid">{lines}</div>;
}

function Particles() {
  const ps = [
    { size: 5, color: '#18a84a', opacity: 0.25, left: '20%', top: '15%' },
    { size: 4, color: '#0a1428', opacity: 0.08, left: '75%', top: '10%' },
    { size: 3, color: '#18a84a', opacity: 0.20, left: '85%', top: '40%' },
    { size: 6, color: '#18a84a', opacity: 0.15, left: '12%', top: '55%' },
    { size: 3, color: '#0a1428', opacity: 0.07, left: '55%', top: '70%' },
    { size: 4, color: '#18a84a', opacity: 0.18, left: '40%', top: '30%' },
    { size: 3, color: '#18a84a', opacity: 0.14, left: '65%', top: '85%' },
    { size: 4, color: '#0a1428', opacity: 0.06, left: '30%', top: '90%' },
  ];
  return <>{ps.map((p, i) => (
    <div key={i} className="particle global-particle" style={{ width: p.size, height: p.size, background: p.color, opacity: p.opacity, left: p.left, top: p.top }} />
  ))}</>;
}

export default function GlobalBackground() {
  return (
    <div className="global-bg">
      <GridOverlay />
      <div className="ambient-glow global-glow-top" />
      <div className="ambient-glow global-glow-left" />
      <div className="ambient-glow global-glow-right" />
      <div className="ambient-glow global-glow-center" />
      <div className="data-stream-layer global-streams">
        <div className="data-line data-line-1" />
        <div className="data-line data-line-2" />
      </div>
      <Particles />
    </div>
  );
}
