import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
  '/images/radar-wave.png',
  '/images/sensor-device.png',
  '/images/sensor-chip.png',
  '/images/night-car.png',
  '/images/cockpit.png',
];

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

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
      <div className="hero-slideshow" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            className={`hero-slide ${index === activeSlide ? 'is-active' : ''}`}
            key={slide}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>
      <div className="hero-bg-pattern"></div>
      <div className="hero-grid-lines"></div>
      <div className="hero-content">
        <h1>
          Sense more.
          <span>
            Sense better.
          </span>
          <span className="hero-title-accent">
            Radar technology
            <span>for safety.</span>
          </span>
        </h1>
        <p className="hero-subtitle">
          Next-generation microwave radar sensors for automotive, robotics, medical, and smart home applications provide accurate, contactless detection of presence, motion, respiration, and heartbeat, as well as driver monitoring and analysis of environmental dynamics through advanced signal processing, built-in intelligence, and high reliability.
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
