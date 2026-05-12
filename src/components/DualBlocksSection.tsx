import React from 'react';

const DualBlocksSection: React.FC = () => (
  <section className="dual-blocks-section" id="solutions">
    <div className="dual-blocks-inner">
      {/* Radar Solutions */}
      <div className="service-card">
        <div className="service-icon">
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="24" cy="24" r="10" />
            <circle cx="24" cy="24" r="3" />
            <line x1="24" y1="14" x2="24" y2="6" />
            <line x1="24" y1="34" x2="24" y2="42" />
            <line x1="14" y1="24" x2="6" y2="24" />
            <line x1="34" y1="24" x2="42" y2="24" />
            <line x1="16.3" y1="16.3" x2="10" y2="10" />
            <line x1="31.7" y1="31.7" x2="38" y2="38" />
            <line x1="16.3" y1="31.7" x2="10" y2="38" />
            <line x1="31.7" y1="16.3" x2="38" y2="10" />
          </svg>
        </div>
        <h3>Radar Solutions</h3>
        <ul className="service-list">
          <li>Rear Occupant Alert Sensor</li>
          <li>Vital Signs Monitoring Sensor</li>
          <li>Driver Monitoring Sensor</li>
          <li>Driver & Passenger Monitoring System (DMS2)</li>
        </ul>
        <a href="#" className="btn-service">
          Learn more <svg viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
        </a>
      </div>

      {/* Design Services */}
      <div className="service-card">
        <div className="service-icon">
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="12" width="32" height="24" rx="3" />
            <line x1="24" y1="12" x2="24" y2="8" />
            <line x1="24" y1="36" x2="24" y2="40" />
            <line x1="8" y1="20" x2="4" y2="20" />
            <line x1="8" y1="28" x2="4" y2="28" />
            <line x1="40" y1="20" x2="44" y2="20" />
            <line x1="40" y1="28" x2="44" y2="28" />
            <rect x="14" y="16" width="8" height="6" rx="1" />
            <rect x="26" y="16" width="8" height="6" rx="1" />
            <rect x="14" y="25" width="20" height="6" rx="1" />
          </svg>
        </div>
        <h3>Design Services</h3>
        <ul className="service-list">
          <li>Embedded software</li>
          <li>Embedded hardware</li>
          <li>Embedded testing</li>
          <li>Antenna design</li>
        </ul>
        <a href="#" className="btn-service">
          Learn more <svg viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
        </a>
      </div>
    </div>
  </section>
);

export default DualBlocksSection;