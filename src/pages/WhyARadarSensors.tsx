import React from 'react';
import { Link } from 'react-router-dom';
import './WhyARadarSensors.css';



const WhyARadarSensors: React.FC = () => {
    
  const automotiveApplications = [
    { title: 'Adaptive Cruise Control', icon: '🚗', description: 'Maintains safe distance and automatic braking.' },
    { title: 'Blind Spot Detection', icon: '👁️', description: 'Monitors blind spots during lane changes.' },
    { title: 'Parking Sensors', icon: '🅿️', description: 'Precise distance measurement to obstacles.' },
    { title: 'Gesture Recognition (Kick sensors)', icon: '🦶', description: 'Hands‑free trunk opening.' },
    { title: 'In‑cabin Sensors', icon: '👨‍👩‍👧', description: 'Child detection, breathing monitoring, gesture control.' },
  ];

  return (
    <div className="why-radar-page">
      {/* Hero section */}
      <section className="why-radar-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Why a <span className="gradient-text">Radar Sensor</span>?</h1>
            <p className="hero-lead">
              Radars are widely used in the automotive industry, robotics, medicine, and consumer electronics.
A modern car is a high tech device that uses a multitude of sensors for its operation. Premium models contain up to <strong>200 sensors</strong> – and radar plays the most critical role in safety.

            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="why-radar-content">
        <div className="container">
          {/* Преимущества радиолокации — вместо трёх абзацев */}
        {/* Radars Advantages section */}
        <div className="radar-advantages-wrapper">
        <h3 className="radar-advantages-title">Radars Advantages</h3>
        <div className="radar-advantages-list">
            <ul>
            <li>instantly measures the radial velocity of an object;</li>
            <li>has a long range at low cost;</li>
            <li>operates in any weather and dirt;</li>
            <li>does not require light;</li>
            <li>has signal penetration through dielectrics;</li>
            <li>ensures privacy of personal data.</li>
            </ul>
        </div>
        </div>

          {/* Automotive applications */}
          <div className="applications-block">
            <h2>In the automotive industry, radars are used for:</h2>
            <div className="apps-grid">
              {automotiveApplications.map((app, idx) => (
                <div className="app-card" key={idx}>
                  <div className="app-icon">{app.icon}</div>
                  <h3>{app.title}</h3>
                  <p>{app.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* NCAP standards block */}
          <div className="ncap-block">
            <h2>Euro NCAP & Asia NCAP requirements</h2>
            <p>
              <b><a href='https://www.euroncap.com/media/85820/euro-ncap-protocol-safe-driving-occupant-monitoring-v10.pdf'>Euro NCAP and Asia NCAP standards</a></b> (including their regional versions such as ASEAN NCAP and C NCAP) 
              do not directly mandate the use of any single type of radar sensor. Instead, they define a set of requirements 
              for safety systems, which in turn makes it necessary to use a combination of different radar sensor types 
              for comprehensive coverage of the road environment and the interior of the car.
            </p>
            <div className="ncap-highlight">
              <span className="quote-mark">💡</span> Radar sensors are key to achieving 5‑star safety ratings – from pedestrian detection to child presence alerts.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyARadarSensors;