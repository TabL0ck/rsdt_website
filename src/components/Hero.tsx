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
        <div className="hero-radar-model">
          <div style={{ marginTop: '2rem' }}>
            <RadarModel3D 
              modelPath="/models/US6634.glb"
              cameraPosition={[0, 150, 0]}
              fov={45}
              modelCenter={[35, 29, -85]}
              modelScale={1.5}
              rotationAxis={'z'}
              rotationSpeed={0}
              rotationCenter={[10, 29, -45]}
            />
          </div>
        </div>
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