import React from 'react';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* шапка */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About RSDT</h1>
          <p>Radar Sensor Development Team</p>
        </div>
      </section>

      {/* история компании – теперь с фото справа */}
      <section className="about-section about-history">
        <div className="about-container">
          <h2>Our Story</h2>

          <div className="about-story-grid">
            <div className="about-story-text">
              <p>
                Radar Sensor Development Team (RSDT) is a leading provider of full-cycle microwave radar sensor design, intelligent perception systems, and ad-vanced embedded engineering.
                With over 4 years of focused development, we offer a proven portfolio of short-, mid-, and long-range radar sensors for in-cabin monitoring, driver assistance, and autonomous driving applications.
                RSDT assembles top-tier expertise in system architecture, DSP al-gorithm design, microwave antenna and feeder development, embedded software, hardware, and functional testing, all within a single engineering center.

              </p>
            </div>
            <div className="about-story-image">
              <img 
                src="/13.jpg" 
                alt="Research and development laboratory" 
              />
            </div>
          </div>
         <div className="about-story-grid">
            <div className="about-story-image">
              <img 
                src="/zonds.JPG" 
                alt="Research and development laboratory" 
              />
            </div>
              <div className="about-story-text">
              <p>
               RSDT executes every phase of sensor creation – from requirement analysis and system design through signal processing, antenna and PCB development, embed-ded DSP firmware, and full validation to final technical documentation.
              Our solutions build on a track record of six completed automotive radar projects, covering occupancy detection, vital-sign monitoring, and blind-spot sensing. Additionally, two R&D programs in contactless respiration and heartbeat sensing for medical use have been successfully delivered.
              Our client engagements include multinational automotive suppliers and innovative technology companies. We also actively contribute to state-funded research initiatives and have been recognized in national innovation com-petitions.
              RSDT combines proven engineering methods with deep domain knowledge to bring pioneering radar sensing products to market faster and more reliably.
              </p>
              {/* остальные элементы (этапы, проекты) останутся ниже */}
          </div>
          </div>

          <h3>Current projects 2026</h3>
          <div className="about-projects">
            <div className="project-item">
              <div className="project-icon"></div>
              <div className="project-info">
                <h4>Development of software and hardware
of UWB Kick and Rear Occupant Alert sensors</h4>
                <span className="project-client">Customer: South Korea</span>
              </div>
            </div>
            <div className="project-item">
              <div className="project-icon"></div>
              <div className="project-info">
                <h4>Development of software and hardware of Enhancement In-Cabin Monitoring Sensor</h4>
                <span className="project-client">Customer: South Korea</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;