import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-image"></div>
      <div className="hero-bg-pattern"></div>
      <div className="hero-grid-lines"></div>
      <div className="hero-content">
        <div className="hero-badge">64 GHz FMCW Radar AiP</div>
        <h1>
          Intelligent Sensing.<br />
          <span className="highlight">Complete Cabin Awareness.</span>
        </h1>
        <p className="hero-subtitle">
          Advanced mmWave radar sensors engineered for tomorrow's mobility — detecting heartbeat,
          respiration, presence, and inattention with uncompromising precision and privacy.
        </p>
        <div className="hero-buttons">
          <a href="#solutions" className="btn-primary">
            Explore Solutions
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </a>
          <a href="#specs" className="btn-outline">View Specifications</a>
        </div>
      </div>
      <a href="#parallax-transition" className="scroll-indicator" aria-label="Scroll to Radar Solutions">
        <span>Radar Solutions</span>
        <div className="scroll-arrow">
          <svg viewBox="0 0 24 24"><path d="M12 5v14M7 14l5 5 5-5" /></svg>
        </div>
      </a>
    </section>
  );
};

export default Hero;