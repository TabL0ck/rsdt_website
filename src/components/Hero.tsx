import React from 'react';
import RadarModel3D from './RadarModel3D';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    // Если мы не на главной, переходим на главную
    if (window.location.hash !== '#/' && window.location.hash !== '') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    e.preventDefault();
    const element = document.getElementById(anchor);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <video
        className="hero-bg-video"
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/automob_salon.mp4"
      >
        <source src="/videos/automob_salon.mp4" type="video/mp4" />
        <img src="/photos/hero-poster.jpg" alt="hero background" />
      </video>
      <div className="hero-bg-pattern"></div>
      <div className="hero-grid-lines"></div>
      <div className="hero-content">
        <h1>
          Sense more. Sense better.<br />
          <span className="highlight">Radar technology for safety.</span>
        </h1>
        <p className="hero-subtitle">
          <strong>Next-generation microwave radar sensors for automotive, robotics, medical, and smart home applications provide accurate, contactless detection of presence, motion, respiration, and heartbeat, as well as driver monitoring and analysis of environmental dynamics through advanced signal processing, built-in intelligence, and high reliability.</strong>
        </p>
        <div className="hero-buttons">
          <a href="/#solutions" onClick={(e) => handleAnchor(e, 'solutions')} className="btn-primary">
            Explore Solutions
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </a>
          <a href="/#why-radar" onClick={(e) => handleAnchor(e, 'why-radar')} className="btn-outline">Why a radar sensors?</a>
        </div>
      </div>
      <a href="/#parallax-transition" onClick={(e) => handleAnchor(e, 'parallax-transition')} className="scroll-indicator">
      </a>
    </section>
  );
};

export default Hero;