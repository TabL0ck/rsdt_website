import React from 'react';
import { Link } from 'react-router-dom';
import './AboutOurRadars.css';

const WhyARadarSensors: React.FC = () => {
  return (
    <div className="about-our-radars-page">
      {/* Hero секция */}
      <section className="about-our-radars-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About <span className="gradient-text">Our Radars</span></h1>
            <p className="hero-lead">
              FMCW and UWB radar technologies – comparison, applications, and key advantages
            </p>
          </div>
        </div>
      </section>

      {/* Таблица сравнения */}
      <section className="radar-comparison-table">
        <div className="container">
          <h2>FMCW vs UWB Radar Sensors</h2>
          <div className="table-intro">
            <div className="intro-content">
              <h3>Types of Radar Sensors</h3>
              <p>
                Compact FMCW and UWB radar sensors are becoming indispensable in areas where high accuracy and reliability are required under all conditions. 
                Radar systems are used wherever it is necessary to detect motion, determine the distance, angle, and speed of an object, while doing so without 
                physical contact, through obstacles, and in any weather conditions. Despite the similarity of the tasks they solve, the choice between these 
                technologies depends on specific requirements for range, accuracy, and power consumption.
              </p>
            </div>
          </div>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>FMCW (Frequency Modulated Continuous Wave)</th>
                  <th>UWB (Ultra-Wideband)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Property">Operating principle</td>
                  <td data-label="FMCW">Measures the frequency difference between the transmitted continuous signal with varying frequency and the reflected signal</td>
                  <td data-label="UWB">Measures the time of flight (ToF) of ultra-short wideband pulses</td>
                </tr>
                <tr>
                  <td data-label="Property">Primary application area</td>
                  <td data-label="FMCW">Transportation, industry, automation, and smart cities</td>
                  <td data-label="UWB">Consumer electronics, local navigation, and IoT</td>
                </tr>
                <tr>
                  <td data-label="Property">Operating frequency</td>
                  <td data-label="FMCW">24 GHz, 60 GHz, 77/79 GHz</td>
                  <td data-label="UWB">6–9 GHz (approved for unlicensed use)</td>
                </tr>
                <tr>
                  <td data-label="Property">Detection range</td>
                  <td data-label="FMCW">High: from centimeters to hundreds of meters</td>
                  <td data-label="UWB">Medium: up to 10 m, sometimes up to 50 m under special conditions</td>
                </tr>
                <tr>
                  <td data-label="Property">Distance measurement accuracy</td>
                  <td data-label="FMCW">High</td>
                  <td data-label="UWB">Very high, down to centimeters and millimeters</td>
                </tr>
                <tr>
                  <td data-label="Property">Power consumption</td>
                  <td data-label="FMCW">Moderate to high</td>
                  <td data-label="UWB">Very low</td>
                </tr>
                <tr>
                  <td data-label="Property">Resolution and detail</td>
                  <td data-label="FMCW">High, especially at 60/79 GHz frequencies. Capable of measuring human breathing rate</td>
                  <td data-label="UWB">Very high, capable of detecting the smallest object movements</td>
                </tr>
                <tr>
                  <td data-label="Property">Resistance to interference</td>
                  <td data-label="FMCW">High, especially against weather‑related interference</td>
                  <td data-label="UWB">High due to wide spectrum usage; resistant to multipath propagation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Преимущества радиолокации */}
      <section className="radar-advantages-section">
        <div className="container">
          <h2>Why choose radar?</h2>
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">🌧️❄️</div>
              <h3>All‑weather reliability</h3>
              <p>Radar works in rain, snow, fog, and dust – where cameras and LiDAR fail.</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">⚡📐</div>
              <h3>Instant velocity measurement</h3>
              <p>Doppler effect gives direct speed and direction without complex post‑processing.</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">📡🛡️</div>
              <h3>Privacy‑preserving</h3>
              <p>No video footage – only detection, no personal data compromise.</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">🔋💰</div>
              <h3>Low cost & low power</h3>
              <p>Especially UWB sensors consume minimal energy and are affordable for mass production.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA кнопка возврата */}
      <section className="back-home-section">
        <div className="container">
          <Link to="/" className="btn-primary">← Back to Home</Link>
        </div>
      </section>
    </div>
  );
};

export default WhyARadarSensors;