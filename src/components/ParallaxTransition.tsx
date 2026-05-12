import React, { useEffect, useRef, useState } from 'react';

const ParallaxTransition: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateParallax = () => {
      if (!bgRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      bgRef.current.style.transform = `translateY(${offset * 80}px)`;
    };

    window.addEventListener('scroll', updateParallax, { passive: true });
    window.addEventListener('resize', updateParallax);
    updateParallax(); // initial call

    return () => {
      window.removeEventListener('scroll', updateParallax);
      window.removeEventListener('resize', updateParallax);
    };
  }, []);

  return (
    <section className="parallax-section" id="parallax-transition" ref={sectionRef}>
      <div className="parallax-bg" ref={bgRef}></div>
      <div className="parallax-overlay"></div>
      <div className="parallax-content">
        <div className="section-tag">Development Center</div>
        <h2>Engineered for Tomorrow's Mobility</h2>
        <p style={{ maxWidth: '500px', margin: '0.5rem auto 0', opacity: 0.85, fontSize: '0.95rem' }}>
          Our research and development center drives innovation in mmWave radar technology for the automotive industry.
        </p>
      </div>
    </section>
  );
};

export default ParallaxTransition;