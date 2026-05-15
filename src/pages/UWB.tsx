// UWB.tsx
import React from 'react';
import RadarModel3D from '../components/RadarModel3D';
import { Link } from 'react-router-dom';
import './UWB.css';

const UWB: React.FC = () => {
  const features = [
    {
      icon: '📍',
      title: 'Centimeter-Level Positioning',
      description: 'Precise spatial and directional tracking with up to 5 cm accuracy for critical applications.'
    },
    {
      icon: '🚪',
      title: 'Proximity Access Control',
      description: 'Detects approaching keys or smartphones to automatically lock/unlock doors seamlessly.'
    },
    {
      icon: '🚸',
      title: 'Child Presence Detection',
      description: 'Monitors rear seats for left-behind children or pets with high reliability and low false alarms.'
    },
    {
      icon: '🔄',
      title: 'Multi-Tag Tracking',
      description: 'Simultaneously tracks up to 16 tags (keys, phones, badges) for fleet or family management.'
    },
    {
      icon: '⚡',
      title: 'Low Interference',
      description: 'Operates at 8 GHz with extremely low power spectral density, no interference with other car electronics.'
    }
  ];

  const applications = [
    {
      title: 'Keyless Entry & Start',
      description: 'Passive entry with precise distance measurement – unlock only when driver approaches.'
    },
    {
      title: 'In-Cabin Monitoring',
      description: 'Detect occupant positions for airbag control, child alert, or gesture recognition.'
    },
    {
      title: 'Charging Alignment',
      description: 'Guide wireless charging pads or EV charging ports with cm-level precision.'
    },
    {
      title: 'Fleet Tracking',
      description: 'Track tools, assets or drivers inside logistics hubs and vehicles.'
    }
  ];

  return (
    <div className="product-page-roas uwb-page">
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
          <div className="product-badge-roas">Ultra-Wideband (UWB) 8 GHz</div>
          <h1>
            UWB - ultra wideband sensor <br />
          </h1>
          <p className="product-subtitle-roas">
            Centimeter-level spatial and directional tracking for automotive and industrial applications.<br />
            Enables secure keyless entry, in-cabin occupant detection, and asset tracking with ultra-low power.
          </p>
          <div className="info-buttons">
                <div className="product-cta">
                    <a href="/#contact" className="btn-primary">
                    Get in Touch
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                    </a>
                </div>
                <div className="product-cta">
                    <a
                        href="#how-it-works"
                        className="btn-primary"
                        onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById('how-it-works');
                        if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                        }
                        }}
                    >
                        Learn more
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                        </svg>
                    </a>
                    </div>
           </div>
        </div>

        {/* 3D Model — using same positioning props as ROAS */}
        <div className="product-hero-model-roas">
          <RadarModel3D
            modelPath="/models/UWB.glb"
            cameraPosition={[0, 360, 0]}
            fov={45}
            modelCenter={[70, 90, -50]}
            modelScale={3}
            rotationAxis={'y'}
            rotationSpeed={0}
            rotationCenter={[40, 60, 20]}
          />
        </div>
      </section>

      {/* CORE FUNCTIONALITY — 6 cards */}
      <section className="product-section-roas">
        <div className="product-container-roas">
          <h2>Core Functionality</h2>
          <p className="section-description-roas">
            Next‑generation UWB technology delivering secure, precise, and low‑power ranging for any environment.
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

       {/* HOW IT WORKS */}
        {/* HOW IT WORKS */}
        <section id="how-it-works" className="product-section-roas product-section-roas-alt">
            <div className="product-container-roas">
                <h2>How It Works</h2>
                <div className="how-it-works-content">

                {/* BABYSIM */}
                <div className="work-item work-item-reverse">
                    <div className="work-image-wrapper">
                    <img
                        src="/photos/babysim.jpg"
                        alt="BABYSIM – infant-sized baby simulator"
                        className="work-image work-image--babysim"
                    />
                    </div>
                    <div className="work-description">
                    <h3>Child Presence Detection with BABYSIM</h3>
                    <p>
                        The BABYSIM is an infant‑sized doll (47 cm) covered with a special radio‑transparent cotton
                        cloth that reflects ~30% of a 62 GHz microwave signal – equivalent to living infant skin.
                        Inside, a microcontroller‑driven servo mechanism produces a sine‑wave oscillation of the
                        chest and abdomen, simulating the movements of a sleeping baby’s breathing.
                    </p>
                    <p>
                        This precise simulator is used to debug the Phase Detection Method and to test our
                        Child Presence Detection Sensor (CPDS) with realistic, repeatable conditions.
                    </p>
                    <div className="babysim-more-wrapper">
                        <Link to="/babysim" className="btn-primary">Learn More About BABYSIM</Link>
                    </div>
                    </div>
                </div>

                {/* GUI */}
                <div className="work-item">
                  <div className="work-image-wrapper">
                    <img
                      src="/photos/UWB_GUI.jpg"
                      alt="UWB GUI – reflected signal and AOA"
                      className="work-image"
                    />
                  </div>
                  <div className="work-description">
                    <h3>Graphical User Interface</h3>
                    <p>
                      GUI displays the reflected signal received from objects located within the sensor’s field of view.
                      The signal level and AOA are calculated on the sensor.
                    </p>
                    <div className="babysim-more-wrapper">
                      <Link to="/uwb-gui" className="btn-primary">More About GUI</Link>
                    </div>
                  </div>
                </div>

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
                <tr><td>Operating Frequency</td><td>6-8 GHz (UWB Channel 5, 6, 8, 9)</td></tr>
                <tr><td>Field of View (Az/EI)</td><td>120° / 120° (symmetrical)</td></tr>
                <tr><td>Minimum Distance</td><td>15 cm</td></tr>
                <tr><td>Maximum Distance (0° boresight)</td><td>50 meters</td></tr>
                <tr><td>Distance Accuracy</td><td>±15 cm (static), ±1 cm (dynamic)</td></tr>
                <tr><td>Power Supply</td><td>12 V DC (9 V – 16 V)</td></tr>
                <tr><td>Power Consumption</td><td>&lt; 150 mW (active), &lt; 10 µW (standby)</td></tr>
                <tr><td>Interface</td><td>CAN 2.0 / CAN-FD, UART</td></tr>
                <tr><td>Operating Temperature</td><td>-40°C … +85°C</td></tr>
                <tr><td>Dimensions</td><td>35 × 35 × 6 mm (without connector)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* CTA FINAL */}
      <section className="product-cta-final-roas">
        <div className="product-container-roas">
          <h2>Ready to bring UWB precision to your next project?</h2>
          <a href="/#contact" className="btn-primary">Contact RSDT Team</a>
        </div>
      </section>
    </div>
  );
};

export default UWB;