import React from 'react';
import { Link } from 'react-router-dom';
import './CareersPage.css';

const CareersPage: React.FC = () => {

  const openPositions = [
    {
      id: 1,
      title: "Radar Signal Processing Engineer",
      location: "Sevastopol / Hybrid",
      type: "Full-time",
      description: "Develop and optimize coherent processing algorithms for FMCW mmWave radars. Work on vital signs extraction, angular localization, clutter suppression and child presence detection systems.",
      requirements: [
        "Strong background in DSP, radar theory and FMCW signal processing",
        "Experience with MATLAB / Python for algorithm prototyping",
        "Knowledge of TI mmWave SDK (AWR6843 / IWR series) is a big plus",
        "Understanding of phase noise, vibration compensation, wavelet methods"
      ],
      emailSubject: "Application: Radar Signal Processing Engineer"
    },
        /*
    {
      id: 2,
      title: "Embedded Software Engineer (Firmware)",
      location: "Sevastopol / Hybrid",
      type: "Full-time",
      description: "Develop low-level firmware and signal processing pipelines for automotive and medical radar sensors. Work with TI AWR chips, CAN interfaces, power management and real-time constraints.",
      requirements: [
        "Excellent C / C++ skills for embedded systems",
        "Experience with RTOS, DMA, SPI, UART, CAN",
        "Familiarity with TI mmWave or similar radar SDKs",
        "Understanding of functional safety (ISO 26262) is advantage"
      ],
      emailSubject: "Application: Embedded Software Engineer"
    },
    {
      id: 3,
      title: "RF / Microwave Hardware Engineer",
      location: "Sevastopol",
      type: "Full-time",
      description: "Design RF front-ends, antenna feeders, PCB layout for mmWave radar modules (60-77 GHz). Perform measurements, tuning and validation of radar hardware.",
      requirements: [
        "Experience with RF design tools (Altium, HFSS, ADS or similar)",
        "Hands-on experience with VNA, spectrum analyzers, signal generators",
        "Knowledge of antenna design and impedance matching",
        "Previous work with 60/77 GHz radar modules is highly valued"
      ],
      emailSubject: "Application: RF Hardware Engineer"
    },
    {
      id: 4,
      title: "Antenna Design Engineer",
      location: "Sevastopol / Hybrid",
      type: "Full-time",
      description: "Design and simulate patch arrays, slot antennas and lens antennas for automotive radar applications. Optimize beam patterns, sidelobes and integration with radomes.",
      requirements: [
        "Strong knowledge of antenna theory and EM simulation",
        "Experience with HFSS, CST or equivalent",
        "Understanding of automotive radome materials and integration",
        "Portfolio of designed antennas is a plus"
      ],
      emailSubject: "Application: Antenna Design Engineer"
    },
    {
      id: 5,
      title: "React / TypeScript Frontend Developer",
      location: "Remote / Hybrid",
      type: "Full-time or Part-time",
      description: "Build modern web interfaces and internal tools for our Radar Sensor Development Team (RSDT). Create dashboards, 3D visualizations, configuration UIs and marketing site features.",
      requirements: [
        "Strong React + TypeScript experience",
        "Experience with modern tooling (Vite, React Router, Tailwind or CSS Modules)",
        "Interest in 3D (Three.js) and data visualization is welcome",
        "Understanding of technical products / developer tools is a plus"
      ],
      emailSubject: "Application: Frontend Developer (React/TS)"
    }
      */
];

  return (
    <div className="careers-page">
      {/* Hero */}
      <section className="careers-hero">
        <div className="careers-hero-content">
          <div className="careers-badge">WE'RE HIRING</div>
          <h1>Join Our Engineering Team</h1>
          <p>
            Help us build next-generation mmWave radar sensors for automotive safety<br />
            and contactless vital signs monitoring.
          </p>
          <div className="info-buttons" style={{ justifyContent: 'center', marginTop: '2rem' }}>
            <Link to="/about" className="btn-primary">← Back to About</Link>
            <a href="#positions" className="btn-primary" style={{ marginLeft: '1rem' }}>
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="careers-section">
        <div className="careers-container">
          <h2>Why MW-Sensor?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🚀</div>
              <h3>Real Impact</h3>
              <p>Your work directly contributes to automotive safety systems (Child Presence Detection, Rear Occupant Alert) and life-saving medical monitoring technologies.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🌍</div>
              <h3>International Projects</h3>
              <p>Collaborate with South Korean partners on production automotive radar projects. Real customers, real deadlines, real hardware.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🔬</div>
              <h3>Cutting-edge Tech</h3>
              <p>Work with TI AWR6843, advanced FMCW processing, coherent phase analysis, 3D radar perception and embedded systems.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📈</div>
              <h3>Growth &amp; Ownership</h3>
              <p>Small focused team. High ownership, fast iteration, direct influence on architecture and product decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="careers-section positions-section">
        <div className="careers-container">
          <h2>Open Positions</h2>
          <p className="section-subtitle">
            We are looking for talented engineers who are passionate about radar technology and embedded systems.
          </p>

          <div className="positions-grid">
            {openPositions.map((position) => (
              <div key={position.id} className="position-card">
                <div className="position-header">
                  <h3>{position.title}</h3>
                  <div className="position-meta">
                    <span className="meta-tag">{position.location}</span>
                    <span className="meta-tag">{position.type}</span>
                  </div>
                </div>

                <p className="position-description">{position.description}</p>

                <div className="requirements">
                  <h4>Key Requirements</h4>
                  <ul>
                    {position.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`mailto:careers@mw-sensor.com?subject=${encodeURIComponent(position.emailSubject)}`}
                  className="btn-primary apply-btn"
                >
                  Apply via Email →
                </a>
              </div>
            ))}
          </div>

          <div className="spontaneous-application">
            <h3>Don't see the right role?</h3>
            <p>
              We are always happy to hear from strong engineers. Send your CV and a short note 
              about why you want to join MW-Sensor to{' '}
              <a href="mailto:careers@mw-sensor.com">careers@mw-sensor.com</a>
            </p>
            <Link to="/contact" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
              Or use the Contact Form
            </Link>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="careers-section perks-section">
        <div className="careers-container">
          <h2>What we offer</h2>
          <div className="perks-grid">
            <div className="perk-item">
              <span className="perk-icon">💼</span>
              <div>
                <strong>Competitive compensation</strong>
                <p>Based on experience + performance bonuses</p>
              </div>
            </div>
            <div className="perk-item">
              <span className="perk-icon">🏠</span>
              <div>
                <strong>Flexible / Hybrid work</strong>
                <p>Sevastopol office + remote options</p>
              </div>
            </div>
            <div className="perk-item">
              <span className="perk-icon">📚</span>
              <div>
                <strong>Learning budget</strong>
                <p>Conferences, courses, books, hardware</p>
              </div>
            </div>
            <div className="perk-item">
              <span className="perk-icon">🤝</span>
              <div>
                <strong>International exposure</strong>
                <p>Work directly with Korean automotive Tier-1</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;