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

      <section className="why-radar-content">
        <div className="container">
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

          {/* ========== РАСШИРЕННЫЙ БЛОК NCAP + FCC ========== */}
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

            {/* ————— Euro NCAP CPD Protocol v13 (2025) ————— */}
            <div className="compliance-card">
              <h3>
                <span className="compliance-icon">📋</span> 
                Euro NCAP Child Presence Detection (CPD) Protocol v13 (2025)
              </h3>
              <p>Our newly developed CPD sensors are engineered to meet every critical requirement of the 2025 protocol. Below are the key compliance points with direct references to the document sections.</p>
              
              <div className="compliance-subsection">
                <h4>🎯 Covered scenarios (Sections 2.1, 3.2)</h4>
                <ul className="compliance-list">
                  <li><strong>Scenario 1 – Unintentional lock‑in:</strong> Child left behind unknowingly (e.g. parent forgets).</li>
                  <li><strong>Scenario 2 – Intentional lock‑in:</strong> Child left on purpose, but without safety measures.</li>
                  <li><strong>Scenario 3 – Self‑entrapment:</strong> Child climbs into the vehicle and cannot exit.</li>
                </ul>
              </div>

              <div className="compliance-subsection">
                <h4>📡 Direct sensing technology (Section 2.1.1, 3.2.1.1)</h4>
                <ul className="compliance-list">
                  <li>Unlike indirect systems (door logic, seat belt sensors), our radar detects <strong>respiration and micro‑movements</strong> – confirming absolute presence of a living child.</li>
                  <li>Works even when the child is under a blanket or inside a Child Restraint System (CRS) – as required by Section 7.6.</li>
                </ul>
              </div>

              <div className="compliance-subsection">
                <h4>👶 Age & coverage (Section 2.7)</h4>
                <ul className="compliance-list">
                  <li>Reliable detection for children <strong>up to and including 6 years old</strong> (the most critical age group for heatstroke and hyperthermia).</li>
                  <li>Covers all relevant seating positions, footwells, luggage area, and potential hiding spots.</li>
                </ul>
              </div>

              <div className="compliance-subsection">
                <h4>⏱ Warning chain & timing (Section 4.1, 4.2)</h4>
                <ul className="compliance-list">
                  <li><strong>Initial warning</strong> (audible + visual exterior, e.g. flashing lights, horn chirp) – triggered after <strong>15 seconds</strong> from locking.</li>
                  <li><strong>Escalation warning</strong> (continuous horn, hazard lights, possibly mobile alert) – after <strong>90 seconds</strong> if no intervention.</li>
                  <li>Our system architecture fully supports these precise timeframes.</li>
                </ul>
              </div>

              <div className="compliance-subsection">
                <h4>🛡 Intervention readiness (Section 5)</h4>
                <ul className="compliance-list">
                  <li>Capable of triggering <strong>automatic door unlocking</strong> and contacting third‑party services (e.g. emergency call, app notification) within required delays.</li>
                </ul>
              </div>

              <div className="compliance-subsection">
                <h4>⚙ System integrity & deactivation (Section 3.2.11)</h4>
                <ul className="compliance-list">
                  <li>The CPD system is <strong>default ON</strong> at every ignition cycle.</li>
                  <li>Temporary deactivation only allowed via a deliberate action (e.g. button press) – <strong>no permanent deactivation</strong>.</li>
                  <li>Dedicated telltale (icon) informs the driver about CPD status (active / temporarily off / malfunction).</li>
                </ul>
              </div>
            </div>

            {/* ————— FCC 60 GHz Regulations ————— */}
            <div className="compliance-card">
              <h3>
                <span className="compliance-icon">🇺🇸</span> 
                FCC 60 GHz Regulations (ET Docket No. 21‑264)
              </h3>
              <p>Our sensors comply with the latest rules for unlicensed Field Disturbance Sensors (FDS) operating in the 57‑71 GHz band. Key technical parameters are met as follows:</p>

              <div className="compliance-subsection">
                <h4>📡 Operational classification (Section 15.3(l))</h4>
                <ul className="compliance-list">
                  <li>Qualifies as a <strong>field disturbance sensor (radar)</strong> under the clarified definition.</li>
                </ul>
              </div>

              <div className="compliance-subsection">
                <h4>⚡ Power & duty cycle limits (Section 15.255(c)(2))</h4>
                <ul className="compliance-list">
                  <li>For the full 57‑64 GHz band: <strong>peak EIRP ≤ 14 dBm</strong> with transmitter off‑time intervals: minimum <strong>2 ms off</strong>, summing to <strong>25.5 ms</strong> per any 33 ms interval (i.e. average duty cycle ≤ ~23%).</li>
                  <li>Our sensors stay well within these limits while maintaining excellent detection performance.</li>
                </ul>
              </div>

              <div className="compliance-subsection">
                <h4>🔁 Pulsed radar compliance (Section 15.255(c)(3))</h4>
                <ul className="compliance-list">
                  <li>If a pulsed architecture is used: <strong>pulse duration &lt; 6 ns</strong>, duty cycle ≤10% within any 0.3 µs window, average EIRP ≤13 dBm.</li>
                  <li>Our devices meet these strict temporal requirements.</li>
                </ul>
              </div>

              <div className="compliance-subsection">
                <h4>🚗 Mobile & vehicular use – key change</h4>
                <ul className="compliance-list">
                  <li>The FCC removed the outdated “fixed‑only” restriction and the SRIMS designation.</li>
                  <li>Our sensors are fully authorised for <strong>mobile and vehicular applications</strong> – including in‑cabin child presence detection and interior monitoring.</li>
                </ul>
              </div>

              <div className="compliance-subsection">
                <h4>✈ Aircraft operation (below 400 ft AGL) – Section 15.255(b)(3)</h4>
                <ul className="compliance-list">
                  <li>For deployments on unmanned aircraft (drones) below 400 feet above ground level:</li>
                  <li>Limited to <strong>60‑64 GHz</strong> band, <strong>peak EIRP ≤ 20 dBm</strong>, maximum duty cycle <strong>50%</strong>.</li>
                  <li>Our sensors can be configured to comply with this optional use case.</li>
                </ul>
              </div>

              <div className="compliance-subsection">
                <h4>✅ Summary of compliance</h4>
                <ul className="compliance-list">
                  <li>All relevant FCC rules for unlicensed 60 GHz radar are satisfied – no special license required for integration into vehicles or consumer products.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyARadarSensors;