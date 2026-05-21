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
        poster="/videos/automob_salon.mp4"  // статичная заглушка на время загрузки видео
      >
        <source src="/videos/automob_salon.mp4" type="video/mp4" />
        {/* Резервное изображение, если видео не поддерживается */}
        <img src="/photos/hero-poster.jpg" alt="hero background" />
      </video>
      <div className="hero-bg-pattern"></div>
      <div className="hero-grid-lines"></div>
      <div className="hero-content">
        <h1>
          Watch the road. We’ll watch the rest.<br />
          <span className="highlight">Radar Technology for a Safer World.</span>
        </h1>
        <p className="hero-subtitle">
          <strong>Next-generation mmWave radar systems for automotive, medical, and smart living applications — 
            delivering precise, contactless sensing of presence, motion, respiration, heartbeat, driver attention, 
            and environmental dynamics through advanced signal processing, embedded intelligence, and uncompromising reliability.</strong>
        </p>
        <div className="hero-buttons">
          <a href="/#solutions" onClick={(e) => handleAnchor(e, 'solutions')} className="btn-primary">
            Explore Solutions
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </a>
          <a href="/#specs" onClick={(e) => handleAnchor(e, 'specs')} className="btn-outline">View Specifications</a>
        </div>
      </div>
      <a href="/#parallax-transition" onClick={(e) => handleAnchor(e, 'parallax-transition')} className="scroll-indicator">
      </a>
    </section>
  );
};

export default Hero;