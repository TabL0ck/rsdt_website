import React from 'react';
import RadarModel3D from '../components/RadarModel3D';
import './ROAS.css';

const ROAS: React.FC = () => {
  return (
    <div className="product-page roas-page">
      {/* HERO — 3D теперь сильно правее */}
      <section className="product-hero">
        <div className="product-hero-content">
          <div className="product-badge">64 GHz FMCW Radar AiP</div>
          <h1>
            ROAS — Rear Occupant<br />
            <span className="highlight">Alert Sensor</span>
          </h1>
          <p className="product-subtitle">
            Contactless mmWave radar that detects children, pets and passengers left in the rear seats.<br />
            Prevents tragic hot-car incidents with instant alerts.
          </p>
          <div className="product-cta">
            <a href="/#contact" className="btn-primary">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </a>
          </div>
        </div>

        {/* 3D модель — теперь явно правее */}
        <div className="product-hero-model">
          <RadarModel3D usePlaceholder={false} />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="product-section">
        <div className="product-container">
          <h2>How ROAS Works</h2>
          <p className="section-description">
            Using advanced 64 GHz mmWave radar, ROAS detects micro-movements (breathing, heartbeats, body motion) inside the vehicle without any cameras or wearables — 100% privacy protected.
          </p>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-icon">🔍</div>
              <h3>Presence Detection</h3>
              <p>Instantly identifies any living being in rear seats — even when the vehicle is parked.</p>
            </div>
            <div className="product-card">
              <div className="product-icon">🚨</div>
              <h3>Smart Alerts</h3>
              <p>Sends notifications to driver’s phone, horn or connected system if an occupant is left behind.</p>
            </div>
            <div className="product-card">
              <div className="product-icon">🌡️</div>
              <h3>Hot-Car Prevention</h3>
              <p>Critical safety feature for families — protects children and pets from extreme temperatures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="product-section product-section-alt">
        <div className="product-container">
          <h2>Applications</h2>
          <div className="product-grid">
            <div className="product-app-card">
              <h3>Family Vehicles</h3>
              <p>Child left in car detection</p>
            </div>
            <div className="product-app-card">
              <h3>Ride-Sharing &amp; Taxis</h3>
              <p>Passenger safety verification</p>
            </div>
            <div className="product-app-card">
              <h3>Commercial Fleets</h3>
              <p>Occupant monitoring &amp; compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="product-section" id="specs">
        <div className="product-container">
          <h2>Technical Specifications</h2>
          <div className="specs-table">
            <table>
              <tbody>
                <tr><td>Operating Frequency</td><td>64 GHz FMCW Radar AiP</td></tr>
                <tr><td>Field of View (Az/EI)</td><td>115° / 108°</td></tr>
                <tr><td>Power Consumption</td><td>&lt; 65 mW (standby)</td></tr>
                <tr><td>Dimensions</td><td>66 × 34 × 10 mm</td></tr>
                <tr><td>Temperature Range</td><td>-40°C … +85°C</td></tr>
                <tr><td>Interface</td><td>CAN-FD / LIN / UART</td></tr>
                <tr><td>Protection</td><td>IP51 / AEC-Q100 Grade 2</td></tr>
                <tr><td>Detection Range</td><td>Full rear cabin coverage</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="product-cta-final">
        <div className="product-container">
          <h2>Ready to integrate ROAS into your next vehicle?</h2>
          <a href="/#contact" className="btn-primary">Contact RSDT Team</a>
        </div>
      </section>
    </div>
  );
};

export default ROAS;