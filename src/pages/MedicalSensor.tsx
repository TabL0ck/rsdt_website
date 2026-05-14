// MedicalSensor.tsx
import React from 'react';
import RadarModel3D from '../components/RadarModel3D';
import './MedicalSensor.css';

const MedicalSensor: React.FC = () => {
  const features = [
    {
      icon: '🫀',
      title: 'Heart Rate & Breathing',
      description: 'Continuous contactless measurement of heart rate (±2 bpm) and respiration rate (±1 breath/min) from up to 3 meters.'
    },
    {
      icon: '📡',
      title: 'mmWave FMCW Radar',
      description: '60–64 GHz with 12 virtual channels (3Tx/4Rx) for precise phase‑based motion detection.'
    },
    {
      icon: '🧠',
      title: 'On‑Board DSP Processing',
      description: 'Real‑time FFT, phase extraction, digital filtering, and interference cancellation – no cloud needed.'
    },
    {
      icon: '👥',
      title: 'Multi‑Person Tracking',
      description: 'Spatial separation allows simultaneous monitoring of several people in the same field of view.'
    },
    {
      icon: '📶',
      title: 'Wi‑Fi & Bluetooth',
      description: 'Data output via MQTT/JSON (Wi‑Fi) and configuration via Bluetooth. Built‑in Blazor web interface.'
    },
    {
      icon: '🛋️',
      title: 'Furniture Penetration',
      description: 'Works through blankets, clothing and thin obstacles – ideal for bedside or driver monitoring.'
    }
  ];

  const applications = [
    {
      title: 'Hospital & Home Care',
      description: 'Remote patient monitoring without wearables, sleep apnoea detection, post‑op recovery.'
    },
    {
      title: 'Driver / Operator Monitoring',
      description: 'Detects microsleep, sudden health events or distraction for fleets and industrial vehicles.'
    },
    {
      title: 'Smart Home & Wellness',
      description: 'Sleep quality analysis, stress tracking, presence detection for elderly care.'
    },
    {
      title: 'Telemedicine Kiosks',
      description: 'Quick vital signs check in pharmacies, airports or gyms – no physical contact required.'
    }
  ];

  return (
    <div className="product-page-roas medical-sensor-page">
      {/* HERO — identical structure to ROAS */}
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
            backgroundImage: "url('/background/sensors_background.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.12,
            zIndex: 0,
            pointerEvents: 'none'
          }}
        ></div>
        <div className="product-hero-content-roas">
          <div className="product-badge-roas">60-64 GHz mmWave Radar | TI IWR6843</div>
          <h1>
            VitalMonitor —<br />
            <span className="highlight">Contactless Vital Signs Sensor</span>
          </h1>
          <p className="product-subtitle-roas">
            <strong>Measures breathing rate and heart rate from up to 3 meters away, through clothing and blankets.<br />
            On‑board DSP with FFT, phase extraction and multi‑person tracking. Wi‑Fi &amp; Bluetooth, MQTT/JSON. </strong>
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
        <div className="product-hero-model-roas">
            <RadarModel3D 
                modelPath="/models/medical.glb"
                cameraPosition={[0, 0, 200]}
                fov={45}
                modelCenter={[43, 65, 20]}
                modelScale={1.5}
                rotationAxis={'y'}
                rotationSpeed={0.008}
                rotationCenter={[43, 65, 20]}
            />
        </div>
      </section>

      {/* CORE FUNCTIONALITY — 6 cards */}
      <section className="product-section-roas">
        <div className="product-container-roas">
          <h2>Core Functionality</h2>
          <p className="section-description-roas">
            Advanced 60‑GHz FMCW radar with integrated DSP, delivering clinical‑grade vital signs without any physical contact.
          </p>
          <div className="product-grid-roas">
            {features.map((feature, index) => (
              <div key={index} className="product-card-roas">
                <div className="product-icon-roas">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS — 4 cards */}
      <section className="product-section-roas product-section-roas-alt">
        <div className="product-container-roas">
          <h2>Applications</h2>
          <div className="product-grid-roas">
            {applications.map((app, index) => (
              <div key={index} className="product-app-card-roas">
                <h3>{app.title}</h3>
                <p>{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="product-section-roas" id="specs">
        <div className="product-container-roas">
          <h2>Technical Specifications</h2>
          <div className="specs-table-roas">
            <table>
              <tbody>
                <tr><td>Radar Technology</td><td>60–64 GHz FMCW, 12 virtual channels (3Tx / 4Rx)</td></tr>
                <tr><td>Chipset</td><td>Texas Instruments IWR6843 + ESP32‑WROOM‑32E</td></tr>
                <tr><td>Detection Range</td><td>0.3 m – 8 m (optimal vital signs up to 3 m)</td></tr>
                <tr><td>Heart Rate Accuracy</td><td>±2 bpm (after 46 s settling)</td></tr>
                <tr><td>Breathing Rate Accuracy</td><td>±1 breath/min (after 18 s settling)</td></tr>
                <tr><td>Sampling Rate</td><td>Up to 20 Hz for vital signs</td></tr>
                <tr><td>Interfaces</td><td>Wi‑Fi 802.11 b/g/n, Bluetooth 4.2/5.0, MQTT, JSON</td></tr>
                <tr><td>Web Interface</td><td>ASP.NET Blazor (built‑in config and data viewer)</td></tr>
                <tr><td>Power Supply</td><td>5 V USB‑C (or 12 V via optional adapter)</td></tr>
                <tr><td>Power Consumption</td><td>&lt; 2.5 W (active), &lt; 100 mW (standby)</td></tr>
                <tr><td>Dimensions</td><td>60 × 50 × 15 mm (radar + baseboard)</td></tr>
                <tr><td>Operating Temperature</td><td>-20°C … +60°C</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="product-cta-final-roas">
        <div className="product-container-roas">
          <h2>Ready to integrate contactless vital signs monitoring?</h2>
          <a href="/#contact" className="btn-primary">Contact RSDT Team</a>
        </div>
      </section>
    </div>
  );
};

export default MedicalSensor;