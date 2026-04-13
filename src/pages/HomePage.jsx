import React, { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { BrandLogo, BrandWordmark } from "@/components/ui/brand-logo";

function BrandLogoFocus({ focus, className = '' }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const parts = {
        'L': '.logo-part-l',
        'E': '.logo-part-e',
        'S': '.logo-part-s',
      };

      const allParts = ['.logo-part-l', '.logo-part-e', '.logo-part-s'];
      const unfocusedParts = allParts.filter(p => parts[focus] !== p);

      // All logo parts start at opacity 1 on render (via CSS/BrandLogo defaults)
      // When triggered, fade the unfocused parts down to 0.15 to intensely highlight the focused part.
      gsap.to(unfocusedParts, {
        opacity: 0.15,
        filter: "blur(2px)",
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 65%',
          toggleActions: 'play none none none'
        }
      });

      // Add a subtle glowing scale bounce to the focused part
      gsap.fromTo(parts[focus],
        { scale: 1 },
        {
          scale: 1.05,
          duration: 1.5,
          ease: 'elastic.out(1, 0.4)',
          transformOrigin: "50% 50%",
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 65%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [focus]);

  return (
    <div ref={ref} className={className} style={{ width: '100%', maxWidth: '460px', display: 'flex', justifyContent: 'center' }}>
      <BrandLogo markOnly style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 0 30px rgba(10,20,40,0.04))' }} />
    </div>
  );
}

/* ── Hero Section ───────────────────── */
function HeroSection() {
  const heroRef = useRef(null);

  // Ghost Parallax removed safely

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Forcibly clear any strictly cached GSAP styles on Navbar just in case of fast back/forward navigation
      const globalNav = document.querySelector('.navbar');
      if (globalNav) gsap.set(globalNav, { clearProps: 'all' });

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      gsap.delayedCall(4.9, () => {
        gsap.to('.hero-kpi-overlay', {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.7,
          ease: 'power2.out'
        });
      });

      // Anchor rotation around individual path centers
      gsap.set(['.logo-part-l', '.logo-part-e', '.logo-part-s'], { transformOrigin: "50% 50%" });

      // Initial state: parts scattered incredibly far with extreme scale, rotation, and blur for deep spatial depth
      gsap.set('.logo-part-l', { x: -1200, y: -800, rotation: -180, scale: 8, opacity: 0, filter: "blur(24px)" });
      gsap.set('.logo-part-e', { x: 0, y: 1500, rotation: 180, scale: 8, opacity: 0, filter: "blur(24px)" });
      gsap.set('.logo-part-s', { x: 1200, y: -800, rotation: 270, scale: 8, opacity: 0, filter: "blur(24px)" });

      // Layout states
      // Since logo container takes up exactly 50% of parent width, xPercent: 50 mathematically shifts it to perfect center
      gsap.set('.logo-container', { opacity: 1, y: 0, x: 0, xPercent: 50, scale: 1.08 });
      gsap.set('.hero-wordmark-wrap', { opacity: 0, y: 14 });
      gsap.set('.hero-text-content', { opacity: 0, x: 40 });
      gsap.set('.hero-kpi-overlay', { autoAlpha: 0, y: 18, scale: 0.97, filter: 'blur(8px)' });

      // 1. Cinematic Convergence Animation
      // L and E glide in smoothly
      tl.to('.logo-part-l', { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, filter: "blur(0px)", duration: 2.2, ease: "expo.out" }, 0.2)
        .to('.logo-part-e', { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, filter: "blur(0px)", duration: 2.2, ease: "expo.out" }, 0.4)
        // Green square plummets in last, slamming into place with an elastic "bounce"
        .to('.logo-part-s', { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.6, ease: "bounce.out(1.2, 0.4)" }, 0.8);

      // 2. The Impact (Shockwave triggers the exact millisecond the Green Square "hits")
      tl.fromTo('.logo-green-glow',
        { opacity: 1, scale: 0.1 },
        { opacity: 0, scale: 8, duration: 1.5, ease: "power3.out" },
        0.85 // Syncs with Green Square landing
      );

      // Flash the base white glows for the primary structure
      tl.fromTo('.logo-l-glow',
        { opacity: 1, scale: 0.5 },
        { opacity: 0, scale: 5, duration: 1.8, ease: "power2.out" },
        0.85
      );

      tl.to('.hero-wordmark-wrap', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, 1.95);

      // Phase 1: Reveal Navbar flawlessly
      if (globalNav) {
        tl.to(globalNav, {
          opacity: 1,
          y: 0,
          pointerEvents: 'auto',
          duration: 1.2,
          ease: 'power3.out'
        }, 1.8);
      }

      // NEW Phase 2: Shift Logo to the left and fade in the text content
      // Shift triggers soon after assembly finishes (around 2.8s marker)
      tl.to('.logo-container', { xPercent: 0, x: -40, scale: 0.9, duration: 1.4, ease: 'power3.inOut' }, 2.8)
        .to('.hero-text-content', { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' }, 3.1)
        .to('.hero-kpi-overlay', { autoAlpha: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out' }, 3.5);

      // 3. Subtle float after sequence completes
      gsap.to('.logo-mark', { y: -10, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 4.5 });

      // ─── SCROLL TIMELINE (Pinned Phase Transitions) ──
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=3000', // Scroll length mapped to transitions
          pin: true,
          scrub: 1,
          snap: {
            snapTo: "labelsDirectional",
            duration: { min: 0.3, max: 0.8 },
            ease: "power2.inOut"
          }
        }
      });

      scrollTl
        .set(['.logo-part-l', '.logo-part-e', '.logo-part-s'], { opacity: 1, filter: 'blur(0px)', scale: 1 })
        .addLabel('start')
        // Transition INTRO -> PHASE 1 (L focused)
        .addLabel('phase1_start')
        .to('.text-intro', { opacity: 0, y: -40, autoAlpha: 0, duration: 1, ease: 'power2.inOut' })
        .to(['.logo-part-e', '.logo-part-s'], { opacity: 0.15, filter: 'blur(8px)', duration: 1 }, "<")
        .to('.logo-part-l', { scale: 1.05, filter: 'drop-shadow(0px 0px 10px rgba(10,20,40,0.1))', duration: 1 }, "<")
        .fromTo('.text-phase1', { opacity: 0, y: 40, autoAlpha: 0 }, { opacity: 1, y: 0, autoAlpha: 1, duration: 1, ease: 'power2.out' }, "<0.2")
        .addLabel('phase1')

        // Transition PHASE 1 -> PHASE 2 (E focused)
        .addLabel('phase2_start')
        .to('.text-phase1', { opacity: 0, y: -40, autoAlpha: 0, duration: 1, ease: 'power2.inOut' })
        .to('.logo-part-l', { opacity: 0.15, filter: 'blur(8px)', scale: 1, duration: 1 }, "<")
        .to('.logo-part-e', { opacity: 1, filter: 'blur(0px)', scale: 1.05, duration: 1 }, "<")
        .fromTo('.text-phase2', { opacity: 0, y: 40, autoAlpha: 0 }, { opacity: 1, y: 0, autoAlpha: 1, duration: 1, ease: 'power2.out' }, "<0.2")
        .addLabel('phase2')

        // Transition PHASE 2 -> PHASE 3 (S focused)
        .addLabel('phase3_start')
        .to('.text-phase2', { opacity: 0, y: -40, autoAlpha: 0, duration: 1, ease: 'power2.inOut' })
        .to('.logo-part-e', { opacity: 0.15, filter: 'blur(8px)', scale: 1, duration: 1 }, "<")
        .to('.logo-part-s', { opacity: 1, filter: 'blur(0px)', scale: 1.05, duration: 1 }, "<")
        .fromTo('.text-phase3', { opacity: 0, y: 40, autoAlpha: 0 }, { opacity: 1, y: 0, autoAlpha: 1, duration: 1, ease: 'power2.out' }, "<0.2")
        .addLabel('phase3');

    }, heroRef);
    return () => {
      const navNode = document.querySelector('.navbar');
      if (navNode) gsap.set(navNode, { clearProps: 'all' });
      gsap.killTweensOf('.hero-kpi-overlay');
      gsap.killTweensOf('.logo-container');
      gsap.killTweensOf('.hero-text-content');
      ctx.revert();
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="ambient-glow glow-top" />
      <div className="ambient-glow glow-left" />
      <div className="ambient-glow glow-right" />
      <div className="ambient-glow glow-top-center" />

      <div className="hero-content" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto', gap: '30px', padding: '0 40px' }}>

        {/* Left Column: Logo */}
        <div className="logo-container" style={{ transform: 'translateY(0)', opacity: 1, display: 'flex', justifyContent: 'center', width: '50%' }}>
          <div className="logo-glow-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '414px', display: 'flex', justifyContent: 'center' }}>
            <div className="logo-green-glow" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '220px', height: '220px', background: 'radial-gradient(circle, var(--accent-green-glow) 0%, transparent 70%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
            <div className="logo-l-glow" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(10,20,40,0.04) 0%, transparent 70%)', filter: 'blur(30px)', pointerEvents: 'none' }} />

            <div className="logo-mark" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <BrandLogo markOnly style={{ width: '100%', height: 'auto', overflow: 'visible' }} />
            </div>
          </div>

          <div className="hero-wordmark-wrap">
            <BrandWordmark className="hero-wordmark" />
          </div>
        </div>

        {/* Right Column: Text & CTA Overlays */}
        <div className="hero-text-content" style={{ width: '50%', position: 'relative', height: '400px', display: 'flex', alignItems: 'center' }}>

          {/* Intro Layer */}
          <div className="text-layer text-intro" style={{ position: 'absolute', width: '100%', top: '50%', transform: 'translateY(-50%)', opacity: 1 }}>
            <h1 style={{ fontSize: 'clamp(2.15rem, 3.8vw, 3.35rem)', lineHeight: '1.08', maxWidth: '620px', color: 'rgba(10,20,40,0.9)', fontWeight: 300, marginBottom: '16px', letterSpacing: '-0.5px' }}>
              Transforming Businesses for a Stronger Future.
            </h1>
            <p style={{ fontSize: '18px', lineHeight: '1.65', maxWidth: '600px', color: 'rgba(10,20,40,0.68)', fontWeight: 300, marginBottom: '34px' }}>
              Guiding businesses at every stage toward strategic success.
            </p>
            <div className="cta-group" style={{ justifyContent: 'flex-start' }}>
              <a href="/contact" className="cta-primary arrow-hover-cta"><span className="arrow-hover-label">Get Started</span></a>
            </div>
          </div>

          {/* Phase 1 Layer */}
          <div className="text-layer text-phase1" style={{ position: 'absolute', width: '100%', top: '50%', transform: 'translateY(-50%)', opacity: 0, visibility: 'hidden' }}>
            <div className="phase-label" style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12 }}><div className="label-line" style={{ width: 30, height: 1, backgroundColor: 'rgba(10,20,40,0.2)' }} /><span className="label-text" style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: 2, fontWeight: 500, color: 'rgba(10,20,40,0.5)' }}>01 — Understanding</span></div>
            <h2 className="phase-title" style={{ fontSize: '42px', fontWeight: 300, color: 'var(--text-dark)', marginBottom: '20px' }}>Your Goals</h2>
            <p className="phase-description" style={{ fontSize: '18px', lineHeight: '1.6', color: 'rgba(10,20,40,0.7)', marginBottom: '30px' }}>Evaluating your current financial landscape and identifying the immediate needs and safety nets. Because your child's education and your comfort matter.</p>
            <div className="phase-details" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Comprehensive financial health evaluation', 'Identifying core life ambitions', 'Building an emergency healthcare fund'].map((d, i) => (
                <div key={i} className="detail-item" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div className="detail-dot" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--accent-green)' }} /><span className="detail-text" style={{ fontSize: '15px', color: 'rgba(10,20,40,0.8)' }}>{d}</span></div>
              ))}
            </div>
          </div>

          {/* Phase 2 Layer */}
          <div className="text-layer text-phase2" style={{ position: 'absolute', width: '100%', top: '50%', transform: 'translateY(-50%)', opacity: 0, visibility: 'hidden' }}>
            <div className="phase-label" style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12 }}><div className="label-line" style={{ width: 30, height: 1, backgroundColor: 'rgba(10,20,40,0.2)' }} /><span className="label-text" style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: 2, fontWeight: 500, color: 'rgba(10,20,40,0.5)' }}>02 — Aligning</span></div>
            <h2 className="phase-title" style={{ fontSize: '42px', fontWeight: 300, color: 'var(--text-dark)', marginBottom: '20px' }}>Customised Approach</h2>
            <p className="phase-description" style={{ fontSize: '18px', lineHeight: '1.6', color: 'rgba(10,20,40,0.7)', marginBottom: '30px' }}>We bring an objective eye and a customised approach towards aligning your investments to your ambitions. Charting the course to your bespoke future.</p>
            <div className="phase-details" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Objective investment alignment', 'Tailored risk profiling & strategy', 'Strategic transition planning for retirement'].map((d, i) => (
                <div key={i} className="detail-item" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div className="detail-dot" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--accent-green)' }} /><span className="detail-text" style={{ fontSize: '15px', color: 'rgba(10,20,40,0.8)' }}>{d}</span></div>
              ))}
            </div>
          </div>

          {/* Phase 3 Layer */}
          <div className="text-layer text-phase3" style={{ position: 'absolute', width: '100%', top: '50%', transform: 'translateY(-50%)', opacity: 0, visibility: 'hidden' }}>
            <div className="phase-label" style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12 }}><div className="label-line" style={{ width: 30, height: 1, backgroundColor: 'rgba(10,20,40,0.2)' }} /><span className="label-text" style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: 2, fontWeight: 500, color: 'rgba(10,20,40,0.5)' }}>03 — Accumulating</span></div>
            <h2 className="phase-title" style={{ fontSize: '42px', fontWeight: 300, color: 'var(--text-dark)', marginBottom: '20px' }}>Charting your bespoke future</h2>
            <p className="phase-description" style={{ fontSize: '18px', lineHeight: '1.6', color: 'rgba(10,20,40,0.7)', marginBottom: '30px' }}>
              Continuous strategic compounding designed to assure your comfortable life after retirement and family aspirations. Together, we secure the future.
            </p>
            <div className="cta-group" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <a href="https://execor.vamtam.com/free-consultation/" target="_blank" rel="noreferrer" className="cta-primary arrow-hover-cta"><span className="arrow-hover-label">Book a Call</span></a>
              <a href="/services" className="cta-secondary arrow-hover-cta"><span className="arrow-hover-label">View All Services</span></a>
            </div>
          </div>

        </div>

      </div>

      <div className="hero-kpi-overlay kpi-theme-glass" aria-label="Business impact highlights">
        <div className="hero-kpi-card hero-kpi-card-left">
          <div className="hero-kpi-top">
            <h2 className="hero-kpi-value">250%</h2>
            <p className="hero-kpi-period">annually</p>
          </div>
          <h3 className="hero-kpi-label">Average ROI</h3>
        </div>
        <div className="hero-kpi-card hero-kpi-card-right">
          <div className="hero-kpi-top">
            <h2 className="hero-kpi-value">28%</h2>
            <p className="hero-kpi-period">annually</p>
          </div>
          <h3 className="hero-kpi-label">Increase revenue</h3>
        </div>
      </div>

      <div className="section-connector"><div className="connector-glow" /></div>
      <div className="phase-transition" />
    </section>
  );
}

/* ── Phase Sections ─────────────────── */
function PhaseSection({ id, className, label, title, description, details, Visual, reversed, indicatorState, dividerClass }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(`.${className} .phase-visual`, {
        scrollTrigger: { trigger: `.${className}`, start: 'top 70%', toggleActions: 'play none none none' },
        opacity: 1, x: 0, duration: 0.3, ease: 'power2.out',
      });
      gsap.to(`.${className} .phase-content`, {
        scrollTrigger: { trigger: `.${className}`, start: 'top 65%', toggleActions: 'play none none none' },
        opacity: 1, x: 0, duration: 1, delay: 0.2, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, [className]);

  return (
    <section className={`phase-section ${className}`} id={id} ref={ref} style={reversed ? { flexDirection: 'row-reverse' } : undefined}>
      <div className={`top-divider ${dividerClass}`} />
      <div className="phase-indicator">
        {indicatorState.map((s, i) => <div key={i} className={`indicator-bar ${s}`} />)}
      </div>
      <div className="section-connector top"><div className="connector-glow" /></div>
      <div className="phase-visual" style={{ transform: `translateX(${reversed ? '40' : '-40'}px)`, opacity: 0 }}>
        <div className={`visual-glow ${reversed ? 'green-glow' : 'white-glow'}`} />
        <Visual className="mark-svg brand-logo-focus-wrapper" />
      </div>
      <div className={`phase-content ${reversed ? 'right-pad' : 'left-pad'}`} style={{ transform: `translateX(${reversed ? '-40' : '40'}px)`, opacity: 0 }}>
        <div className="phase-label"><div className="label-line" /><span className="label-text">{label}</span></div>
        <h2 className="phase-title">{title}</h2>
        <p className="phase-description">{description}</p>
        <div className="phase-details">
          {details.map((d, i) => (
            <div key={i} className="detail-item"><div className="detail-dot" /><span className="detail-text">{d}</span></div>
          ))}
        </div>
      </div>
      <div className={`phase-bg ${reversed ? 'right' : 'left'}`} />
      <div className="bridge-glow bottom center" />
      <div className="section-connector" style={{ bottom: 0 }}><div className="connector-glow" /></div>
    </section>
  );
}

function GrowthSection() {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: '.phase-three', start: 'top 60%', toggleActions: 'play none none none' },
      });

      // Phase 3: Growth Area
      tl.to('.phase-three .growth-visual', { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out' })

        // Text cascade
        .to('.phase-three .growth-title', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=1')
        .to('.phase-three .growth-subtitle', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.8')
        .to('.phase-three .cta-group', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.6');
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="phase-section phase-three" id="phase-three" ref={ref}>
      <div className="top-divider divider-phase-three" />
      <div className="phase-indicator">
        <div className="indicator-bar done" />
        <div className="indicator-bar done" />
        <div className="indicator-bar active" />
      </div>
      <div className="section-connector top"><div className="connector-glow" /></div>
      <div className="growth-glow-outer" />
      <div className="growth-glow-inner" />
      <div className="growth-visual" style={{ transform: 'translateY(40px) scale(0.9)', opacity: 0, position: 'relative', width: '100%', maxWidth: '460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <BrandLogoFocus focus="S" className="mark-svg brand-logo-focus-wrapper" />
      </div>
      <div className="phase-label" style={{ marginBottom: 20 }}><div className="label-line" /><span className="label-text">03 — Accumulating</span></div>
      <h2 className="growth-title" style={{ transform: 'translateY(30px)', opacity: 0 }}>Charting your bespoke future</h2>
      <p className="growth-subtitle" style={{ transform: 'translateY(20px)', opacity: 0 }}>
        Continuous strategic compounding designed to assure your comfortable life after retirement and family aspirations. Together, we secure the future.
      </p>
      <div className="cta-group" style={{ transform: 'translateY(20px)', opacity: 0 }}>
        <GetStartedButton />
        <button className="cta-secondary"><span>Learn More</span></button>
      </div>
    </section>
  );
}

function OurServicesSectionOne() {
  const services = [
    { title: 'Accounting', imageUrl: '/blog_property.png', tintClass: 'tint-accounting' },
    { title: 'Business Strategy', imageUrl: '/blog_accounting.png', tintClass: 'tint-strategy' },
    { title: 'Tax Preparation', imageUrl: '/blog_property.png', tintClass: 'tint-taxprep' },
    { title: 'Tax Planning', imageUrl: '/blog_accounting.png', tintClass: 'tint-taxplan' },
  ];

  return (
    <section className="bg-light-gray section section-our-services-1 services-image-section">
      <div className="container">
        <span className="section-subtitle section-pill">Our Services</span>
        <h2 className="section-title">Efficient Bookkeeping Solutions</h2>
        <p className="section-intro-text section-desc">
          Our team tailors workflows to your business needs, uses modern accounting tech, and brings practical expertise across industries.
        </p>
        <div className="services-grid services-image-grid">
          {services.map((service) => (
            <div key={service.title} className={`service-card img-card media-card card-surface ${service.tintClass}`}>
              <img src={service.imageUrl} alt={service.title} className="img-card-media" />
              <div className="img-card-overlay" />
              <div className="img-card-label">
                <span className="card-category-dot" aria-hidden="true" />
                <h3 className="card-title">{service.title}</h3>
                <a href="/services" className="card-link">Learn More <span aria-hidden="true">→</span></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessImpactSection() {
  return (
    <section className="bg-dark-teal impact-dark-section">
      <div className="container">
        <div className="impact-header-row">
          <span className="close-icon">✖</span>
          <span className="section-subtitle-white">Our Business<br/>Impact</span>
        </div>
        
        <div className="impact-stats-grid">
          <div className="stat-block">
            <h2 className="green-number">30%</h2>
            <p>Businesses that work with Execor reduce tax liability</p>
          </div>
          <div className="stat-block">
            <h2 className="green-number">80%</h2>
            <p>Automating accounting processes reduces manual workload</p>
          </div>
          <div className="stat-block">
            <h2 className="green-number">78%</h2>
            <p>Small businesses see higher profits after hiring Execor</p>
          </div>
        </div>

        <div className="impact-graph-container">
          <img src="/growth-graph.svg" className="graph-image-placeholder" alt="Growth Graph" />
          <div className="graph-timeline">
            <span>2021</span>
            <span>2023</span>
            <span>2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MeetOurLeadersSection() {
  return (
    <section className="bg-light-gray leaders-split-section">
      <div className="container leaders-split-grid">
        
        {/* Left Side: Text and Buttons */}
        <div className="leaders-left">
          <span className="section-pill">Personal and Business Accounting Team</span>
          <h2 className="section-title">Meet Our Leaders</h2>
          <p className="leaders-desc">Our success stems from a seasoned professional team bringing extensive experience and expertise to every client engagement.</p>
          
          <div className="leaders-actions">
            <button className="btn-solid-green arrow-hover-cta"><span className="arrow-hover-label">Meet the Team</span></button>
            <button className="btn-outline arrow-hover-cta"><span className="arrow-hover-label">Career Opportunities</span></button>
          </div>
        </div>

        {/* Right Side: Portrait Cards */}
        <div className="leaders-right">
          <div className="portrait-card">
            <img
              src="/leader-daniel.jpg"
              alt="Daniel Brila"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/leader-daniel.svg';
              }}
            />
            <h3>Daniel Brila</h3>
            <p>President</p>
          </div>
          <div className="portrait-card">
            <img
              src="/leader-rebecca.jpg"
              alt="Rebeca Johnson"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/leader-rebecca.svg';
              }}
            />
            <h3>Rebeca Johnson</h3>
            <p>Senior Tax Manager</p>
          </div>
        </div>

      </div>
    </section>
  );
}

function OurServicesSectionTwo() {
  return (
    <section className="bg-white pulse-section">
      <div className="container">
        <div className="pulse-grid">
          <div className="card card-main-dark">
            <span className="pill-white">Our Services</span>
            <h2 className="title-serif">We&apos;re on The Pulse of Tax Industry Trends</h2>
            <button className="btn-contact arrow-hover-cta"><span className="arrow-hover-label">Contact us</span></button>
          </div>

          <div className="card card-white">
            <div className="icon-circle" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 20H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M6 17V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M11 17V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M16 17V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M6 9L11 5L16 10L21 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Increased Profitability</h3>
            <p>Businesses working with Execor save up to 30% on taxes annually.</p>
          </div>

          <div className="card card-graph">
            <div className="graph-header">
              <p>Growth of Businesses Using Execor Professional Accounting Services</p>
              <span className="close-x">✕</span>
            </div>
            <div className="bar-container">
              <div className="bar-wrapper">
                <div className="bar" style={{ height: '65%' }}><span>65%</span></div>
                <p>2022</p>
              </div>
              <div className="bar-wrapper">
                <div className="bar" style={{ height: '75%' }}><span>75%</span></div>
                <p>2023</p>
              </div>
              <div className="bar-wrapper">
                <div className="bar" style={{ height: '88%' }}><span>88%</span></div>
                <p>2024</p>
              </div>
            </div>
          </div>

          <div className="card card-light-gray">
            <div className="icon-circle" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 8V12L15 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 3.5H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Time Savings</h3>
            <p>Companies reduce financial admin work by 50% with automated accounting solutions.</p>
          </div>

          <div className="card-image">
            <img
              src="/meeting-placeholder.svg"
              alt="Meeting"
            />
          </div>

          <div className="card card-green">
            <div className="icon-circle" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L19 6V11C19 15.2 16.1 19.1 12 20C7.9 19.1 5 15.2 5 11V6L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M12 8V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="12" cy="16" r="1" fill="currentColor" />
              </svg>
            </div>
            <h3>Risk Reduction</h3>
            <p>82% of business failures are due to poor financial management - Execor helps prevent this.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-white testimonials-section">
      <div className="container">
        <span className="section-pill">Testimonials</span>
        <h2 className="section-title">Why Our Clients Love to Work with Us!</h2>
        <p className="verification-label">Verified Client Reviews</p>

        <div className="testimonials-header-row">
          <div className="google-lockup">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="g-logo" />
            <span className="rating-score">5.0</span>
            <span className="rating-text">Google Reviews</span>
          </div>
          <div className="trust-metrics">
            <span className="metric-pill">4.9 Avg Rating</span>
            <span className="metric-pill">200+ Verified Reviews</span>
          </div>
          <button className="btn-light-green testimonials-cta arrow-hover-cta"><span className="arrow-hover-label">Read All Testimonials</span></button>
        </div>

        <div className="testimonials-grid">
          <div className="test-card quote-card card-surface">
            <span className="quote-badge">Client Voice</span>
            <span className="huge-quote">&ldquo;</span>
            <p className="quote-text">&quot;Partnering with Execor has been a game-changer. Their expert accounting support gives me the clarity to focus on strategic growth, confident that our finances are in perfect order.&quot;</p>
            <div className="author-row">
              <img src="/client-jack.svg" alt="Jack Wolf" className="author-avatar" />
              <div className="author-info">
                <h4>Jack Wolf</h4>
                <p>Entrepreneur, Salon Bank</p>
                <span className="verified-role">Verified Client</span>
              </div>
            </div>
          </div>

          <div className="test-card quote-card card-surface">
            <span className="quote-badge">Client Voice</span>
            <span className="huge-quote">&ldquo;</span>
            <p className="quote-text">&quot;Execor handles my accounting, allowing me to self-evaluate objectively and focus on leadership, team management, and achieving our goals.&quot;</p>
            <div className="author-row">
              <img src="/client-rebecca.svg" alt="Rebecca Parker" className="author-avatar" />
              <div className="author-info">
                <h4>Rebecca Parker</h4>
                <p>CEO, Forex</p>
                <span className="verified-role">Verified Client</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurBlogSection() {
  const blogPosts = [
    {
      imageUrl: '/blog_property.png',
      categories: ['Property'],
      date: 'March 28, 2025',
      title: 'Do Seniors Pay Property Taxes in Massachusetts?',
      excerpt: 'A breakdown of available exemptions and planning options to reduce property tax impact for seniors in Massachusetts.',
      url: 'https://execor.vamtam.com/2025/03/28/do-seniors-pay-property-taxes-in-massachusetts/',
    },
    {
      imageUrl: '/blog_accounting.png',
      categories: ['Property', 'Tax'],
      date: 'March 28, 2025',
      title: 'Reduce Taxes and Sleep Well at Night',
      excerpt: 'How disciplined bookkeeping and strategic tax planning can lower stress while improving long-term outcomes.',
      url: 'https://execor.vamtam.com/2025/03/28/reduce-taxes-and-sleep-well-at-night/',
    },
  ];

  return (
    <section className="bg-light-gray section section-our-blog">
      <div className="container">
        <span className="section-subtitle">Our blog</span>
        <h2 className="section-title">Insights &amp; Strategies. Your Guide to Smarter Accounting.</h2>
        <div className="actions-row">
          <a href="https://execor.vamtam.com/blog/" className="btn btn-secondary le-secondary-action" target="_blank" rel="noreferrer">View More</a>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.title} className="blog-post-card news-card card-surface">
              <a href={post.url} className="image-link" target="_blank" rel="noreferrer">
                <img src={post.imageUrl} alt={post.title} className="post-image" />
              </a>
              <div className="card-content">
                <div className="post-meta">
                  <span className="post-categories">
                    {post.categories.map((category) => (
                      <a key={`${post.title}-${category}`} href="https://execor.vamtam.com/blog/" target="_blank" rel="noreferrer" className="post-category-chip">{category}</a>
                    ))}
                  </span>
                  <span className="post-date">{post.date}</span>
                </div>
                <a href={post.url} className="title-link" target="_blank" rel="noreferrer">
                  <h3 className="post-title">{post.title}</h3>
                </a>
                <p className="post-excerpt">{post.excerpt}</p>
                <a href={post.url} className="post-read-link le-secondary-action" target="_blank" rel="noreferrer">Read Article <span aria-hidden="true">→</span></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorksheetsSection() {
  const worksheets = [
    {
      title: 'Entity Summary Worksheet',
      description: 'To summarize your multimember LLC, partnership, or corporation financial information.',
      url: 'https://execor.vamtam.com/worksheet',
    },
    {
      title: 'Tax Info Sheet',
      description: 'A checklist of tax documents and supporting information needed for filing.',
      url: 'https://execor.vamtam.com/worksheet',
    },
    {
      title: 'Rental Real Estate Worksheet',
      description: 'To summarize rental unit income, expenses, and key adjustments.',
      url: 'https://execor.vamtam.com/worksheet',
    },
  ];

  return (
    <section className="bg-light-gray section section-worksheets worksheets-section">
      <div className="container">
        <span className="section-subtitle">Personal and Business Accounting Team</span>
        <h2 className="section-title">Helpful Worksheets to Simplify Your Finances</h2>
        <div className="actions-row">
          <a href="https://execor.vamtam.com/worksheets/" className="btn btn-secondary le-secondary-action" target="_blank" rel="noreferrer">View More</a>
        </div>
        <div className="worksheets-grid">
          {worksheets.map((worksheet) => (
            <div key={worksheet.title} className="worksheet-card">
              <div className="ws-content">
                <h3 className="card-title ws-title">{worksheet.title}</h3>
                <p className="card-text">{worksheet.description}</p>
              </div>
              <div className="ws-footer">
                <a href={worksheet.url} className="link-download le-secondary-action" target="_blank" rel="noreferrer">Download</a>
                <span className="arrow-down" aria-hidden="true">↓</span>
              </div>
            </div>
          ))}
        </div>
        <div className="awards-container">
          <p>2024 Angies List Super Service Award</p>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-dark-teal section section-cta dark-cta-section">
      <div className="container center-content">
        <div className="cta-content">
          <span className="award-text">2024 Angies List Super Service Award</span>
          <h2 className="section-title cta-title">Ready to Come in For an Appointment?</h2>
          <p className="cta-desc">Get in touch with our accounting professionals and work with the top CPAs in the country.</p>
          <div className="button-container">
            <button className="btn btn-green arrow-hover-cta" onClick={() => window.open('https://execor.vamtam.com/free-consultation/', '_blank', 'noopener,noreferrer')}>
              <span className="arrow-hover-label">Schedule a Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Main Export ─────────────────────── */
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <div className="landing-sections">
        <OurServicesSectionOne />
        <BusinessImpactSection />
        <MeetOurLeadersSection />
        <OurServicesSectionTwo />
        <TestimonialsSection />
        <OurBlogSection />
        <WorksheetsSection />
        <CTASection />
      </div>
      {/* 
      <PhaseSection
        id="phase-one" className="phase-one"
        label="01 — Understanding" title="Your Goals"
        description="Evaluating your current financial landscape and identifying the immediate needs and safety nets. Because your child's education and your comfort matter."
        details={['Comprehensive financial health evaluation', 'Identifying core life ambitions', 'Building an emergency healthcare fund']}
        Visual={(props) => <BrandLogoFocus focus="L" {...props} />} reversed={false}
        indicatorState={['active', 'inactive', 'inactive']}
        dividerClass="divider-phase-one"
      />
      <PhaseSection
        id="phase-two" className="phase-two"
        label="02 — Aligning" title="Customised Approach"
        description="We bring an objective eye and a customised approach towards aligning your investments to your ambitions. Charting the course to your bespoke future."
        details={['Objective investment alignment', 'Tailored risk profiling & strategy', 'Strategic transition planning for retirement']}
        Visual={(props) => <BrandLogoFocus focus="E" {...props} />} reversed={true}
        indicatorState={['done', 'active', 'inactive']}
        dividerClass="divider-phase-two"
      />
      <GrowthSection />
      */}

    </main>
  );
}
