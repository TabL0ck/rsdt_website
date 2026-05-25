// BabysimPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import RadarModel3D from '../components/RadarModel3D';
import './BabysimInfo.css'; 

const BabysimPage: React.FC = () => {
  return (
    <div className="product-page-roas uwb-page">
      {/* ==================== HERO ==================== */}
      <section
        className="product-hero-roas"
        style={{
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div
            style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: "url('/background/child_sit.png')",
                backgroundSize: 'cover',      /* ← было cover */
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',  /* ← чтобы не множилось */
                opacity: 0.24,
                zIndex: 0,
                pointerEvents: 'none'
            }}
            />
        <div className="product-hero-content-roas">
          <div className="product-badge-roas">Child Presence Detection Simulator</div>
          <h1>BABYSIM</h1>
          <p className="product-subtitle-roas">
            <strong>An infant‑sized baby simulator for debugging the Phase Detection Method and testing the
            Child Presence Detection Sensor (CPDS).</strong>
          </p>
          <div className="info-buttons">
          </div>
        </div>

      </section>

      <section className="product-section-roas">
        <div className="product-container-roas">
          <h2>Overview</h2>
          <div className="how-it-works-content">
            <div className="work-item">
              <div className="work-image-wrapper">
                <img
                  src="/photos/babysim_new.jpg"
                  alt="BABYSIM overview"
                  className="work-image work-image-babysimPage--overview"
                />
              </div>
              <div className="work-description">
                <p>
                  The BABYSIM is a <strong>47 cm long doll</strong> made of plastic that is radio‑transparent
                  at frequencies of <strong>60…64 GHz</strong>. It is specifically designed to debug the Phase
                  Detection Method, which recognises a sleeping baby in a car by chest movements during
                  breathing, and to validate the Child Presence Detection Sensor (CPDS).
                </p>
                <p>
                  To replicate the reflective properties of living infant skin, the doll is covered with a
                  cotton cloth soaked in a saline disinfectant solution and sealed in a plastic bag.
                  This arrangement reflects approximately <strong>30% of a 62 GHz microwave signal</strong>.
                </p>
                {/* Кнопка "Learn More About Babysim" */}
                <Link to="/babysim-main" className="btn-learn-more-babysim">
                  Learn More About Babysim
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BabysimPage;