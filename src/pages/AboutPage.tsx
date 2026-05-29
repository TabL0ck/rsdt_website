import React from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* шапка */}
      <section className="about-hero" style={{ position: 'relative' }}>
        {/* Абсолютный фон с прозрачностью */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/background/aboutUs_bg.JPG')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.24,            // прозрачность только для фона
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
        <div className="about-hero-content" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h1>About MW-Sensor</h1>
          <p>Microwave Sensors Development</p>
        <div className="info-buttons" style={{ justifyContent: 'center' }}>
            <Link to="/" className="btn-primary">← Back to main</Link>
          </div>
        </div>
      </section>

      {/* история компании – теперь с фото справа */}
      <section className="about-section about-history">
        <div className="about-container">
          <h2>About Us</h2>

          <div className="about-story-grid">
            <div className="about-story-text">
              <p>
                Microwave Sensors Development (MW-Sensor) is an innovative IT company specializing in the development of microwave radar sensors, RF & MW integrated circuits, and unique embedded software for automotive, robotics, medical, and smart home applications.
                  With over 10 years of experience, MW-Sensor performs a full development cycle — from technical specifications to mass production documentation — combining system architecture design, signal processing, antenna and PCB design, embedded firmware design, and full validation.
                  Our proven short range microwave radar sensors for in cabin monitoring build on a track record of six completed automotive radar projects covering occupancy detection, vital sign monitoring, and Child Presence Detection. 
                  Our client engagements include a South Korean automotive supplier for KIA and Hyundai OEM companies. Our in cabin sensors are already in mass production and are equiped to the latest premium vehicle models.

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
                MW-Sensor also designs integrated circuits (ICs) and IP blocks for communication systems, including V2X technologies for autonomous vehicles. We deliver final GDSII files and complete technical documentation based on RF CMOS and SiGe BiCMOS process technologies down to 28 nm, utilizing the official PDKs of leading global foundries such as TSMC, SMIC, IHP, and others.
                MW-Sensor also designs integrated circuits (ICs) and IP blocks for communication systems, including systems that realize V2X technology for autonomous vehicles. Our ICs are designed using PDKs for RF CMOS and SiGe BiCMOS process technologies down to 28 nm. We deliver final GDSII files and complete technical documentation for tape-out and chip fabrication at leading global foundries such as TSMC, SMIC, IHP and others.
                If the required function is not yet available in any of our standard radar sensors or ICs, MW Sensor can meet specific customer requirements.

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