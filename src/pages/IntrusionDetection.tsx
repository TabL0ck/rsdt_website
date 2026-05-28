import React, { useState } from 'react';
import './IntrusionDetection.css';

const IntrusionDetection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(0);

  const openModal = (index: number) => {
    setModalContent(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const modalContents = [
    {
      title: "Driver & Front Zone",
      description: "High-sensitivity monitoring of the driver area and front doors. Detects forced entry attempts and movement near windows."
    },
    {
      title: "Rear Passenger Zone",
      description: "Monitors the rear seats area for unauthorized presence when the vehicle is armed."
    },
    {
      title: "Full Cabin + Perimeter",
      description: "Combined volumetric monitoring of the entire cabin with proximity detection outside the vehicle."
    }
  ];

  return (
    <div className="intrusion-detection-page">

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{
          backgroundImage: "url('/background/cabin-intrusion.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4
        }}></div>

        <div className="container">
          <div className="page-hero-grid">
            <div className="page-hero-text">
              <div className="page-hero-badge">CABIN ANTI-THEFT RADAR</div>
              <h1>
                Cabin Intrusion<br />
                <span className="page-hero-highlight">Detection System</span>
              </h1>
              <p className="page-hero-subtitle">
                Low-power volumetric mmWave radar for reliable detection of intrusion and unauthorized access 
                in parked vehicles. Enables long-term "sentry mode" monitoring without draining the vehicle battery.
              </p>
              <div className="page-hero-cta">
                <a href="/contact" className="btn-primary">Request Integration</a>
                <a href="#capabilities" className="btn-secondary">See Capabilities</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY VOLUMETRIC RADAR */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Volumetric Radar for Cabin Protection?</h2>
          <p className="section-description">
            Camera-based systems consume too much power for continuous monitoring. 
            Our 60 GHz mmWave radar provides true volumetric coverage of the cabin with extremely low power consumption, 
            making long-term anti-theft protection practical.
          </p>

          <div className="advantages-grid">
            <div className="advantage-card">
              <h3>Ultra-Low Power</h3>
              <p>Designed for extended "sentry mode" operation without significant battery drain.</p>
            </div>
            <div className="advantage-card">
              <h3>True Volumetric Sensing</h3>
              <p>Monitors the entire cabin volume, not just specific points or surfaces.</p>
            </div>
            <div className="advantage-card">
              <h3>Privacy by Design</h3>
              <p>No images or video. Only radar data — fully GDPR friendly.</p>
            </div>
            <div className="advantage-card">
              <h3>Works in Any Conditions</h3>
              <p>Reliable performance in complete darkness, through materials, and in extreme temperatures.</p>
            </div>
          </div>
        </div>
      </section>

        {/* CABIN ZONES */}
        <section className="section">
        <div className="container">
            <h2 className="section-title">Cabin Zone Coverage</h2>
            <p className="section-description">
            The system supports flexible volumetric monitoring of the vehicle cabin. 
            Different sensitivity levels can be configured for the driver area, rear seats, and cargo space.
            </p>

            <div className="cabin-zones-visual">
            <div className="cabin-image-wrapper">
                <img 
                src="/images/night-car.png" 
                alt="Cabin intrusion detection zones" 
                className="cabin-image"
                />
            </div>
            </div>
        </div>
        </section>

      {/* KEY CAPABILITIES */}
      <section id="capabilities" className="section">
        <div className="container">
          <h2 className="section-title">Key Capabilities</h2>
          
          <div className="capabilities-grid">
            <div className="capability-card">
              <h3>Volumetric Intrusion Detection</h3>
              <p>Detects presence and movement throughout the entire cabin volume, not just at specific points.</p>
            </div>
            <div className="capability-card">
              <h3>Low Power Sentry Mode</h3>
              <p>Enables long-term monitoring of parked vehicles with minimal impact on battery charge.</p>
            </div>
            <div className="capability-card">
              <h3>Glass Break &amp; Forced Entry</h3>
              <p>Identifies attempts to break glass or force doors through vibration and micro-motion analysis.</p>
            </div>
            <div className="capability-card">
              <h3>Human vs Object Classification</h3>
              <p>Reduces false alarms by distinguishing between humans, animals, and inanimate objects.</p>
            </div>
            <div className="capability-card">
              <h3>Automotive Grade Integration</h3>
              <p>Native support for CAN-FD and compatibility with vehicle electrical architectures.</p>
            </div>
            <div className="capability-card">
              <h3>Privacy-Preserving</h3>
              <p>Operates without cameras or visual recording, ensuring full privacy compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Performance Highlights</h2>
          
          <div className="performance-table-wrapper">
            <table className="performance-table">
              <tbody>
                <tr><td>Detection Type</td><td>Volumetric (full cabin coverage)</td></tr>
                <tr><td>Power Consumption</td><td>Optimized for long-term parked vehicle monitoring</td></tr>
                <tr><td>False Alarm Reduction</td><td>Advanced micro-Doppler classification</td></tr>
                <tr><td>Operating Temperature</td><td>−40°C to +85°C (Automotive Grade)</td></tr>
                <tr><td>Privacy</td><td>No image or video capture</td></tr>
                <tr><td>Integration</td><td>CAN-FD ready</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h3>{modalContents[modalContent].title}</h3>
            <p>{modalContents[modalContent].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntrusionDetection;