// BabysimPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import RadarModel3D from '../components/RadarModel3D';
import './BabysimInfo.css'; 

const BabysimPage: React.FC = () => {
  return (
    <div className="product-page-roas uwb-page">
      {/* ==================== HERO ==================== */}
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
          <div className="product-badge-roas">Child Presence Detection Simulator</div>
          <h1>BABYSIM</h1>
          <p className="product-subtitle-roas">
            <strong>An infant‑sized baby simulator for debugging the Phase Detection Method and testing the
            Child Presence Detection Sensor (CPDS).</strong>
          </p>
          <div className="info-buttons">
            <div className="product-cta">
              <Link to="/uwb-sensor" className="btn-primary">
                ← Back to UWB
              </Link>
            </div>
          </div>
        </div>

        {/* Иллюстрация BABYSIM */}
        <div className="product-hero-model-roas" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="product-hero-model-roas">
                <RadarModel3D 
                    modelPath="/models/sleeping_baby.glb"
                    cameraPosition={[0, 0, 20]}
                    fov={45}
                    modelCenter={[40, 60, 20]}
                    modelScale={5}
                    rotationAxis={'y'}
                    rotationSpeed={0.01}
                    rotationCenter={[40, 60, 20]}
                />
            </div>
        </div>
      </section>

      {/* ==================== OVERVIEW ==================== */}
      <section className="product-section-roas">
        <div className="product-container-roas">
          <h2>Overview</h2>
          <div className="how-it-works-content">
            <div className="work-item">
              <div className="work-image-wrapper">
                <img
                  src="/photos/Babysim-anon.png"
                  alt="BABYSIM overview"
                  className="work-image work-image-babysimPage--overview"
                />
              </div>
              <div className="work-description">
                <p>
                  The BABYSIM is a <strong>47 cm long doll</strong> made of plastic that is radio‑transparent
                  at frequencies of <strong>60…64 GHz</strong>. It is specifically designed to debug the Phase
                  Detection Method, which recognises a sleeping baby in a car by chest movements during
                  breathing, and to validate the Child Presence Detection Sensor (CPDS).
                </p>
                <p>
                  To replicate the reflective properties of living infant skin, the doll is covered with a
                  cotton cloth soaked in a saline disinfectant solution and sealed in a plastic bag.
                  This arrangement reflects approximately <strong>30% of a 62 GHz microwave signal</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INTERNAL MECHANISM ==================== */}
      <section className="product-section-roas product-section-roas-alt">
        <div className="product-container-roas">
          <h2>Internal Mechanism</h2>
          <div className="how-it-works-content">
            <div className="work-item work-item-reverse">
              <div className="work-image-wrapper">
                <img
                  src="/photos/bluetooth-mod-babysim.jpg"
                  alt="BABYSIM internal mechanism"
                  className="work-image"
                />
              </div>
              <div className="work-description">
                <p>
                  Inside the doll’s body, a <strong>servo motor</strong> drives a plastic linkage that converts
                  rotational motion into a sine‑wave oscillation of the chest and abdomen.
                  A <strong>microcontroller</strong> precisely controls the motor to simulate realistic
                  breathing patterns.
                </p>
                <p>
                  A <strong>Bluetooth module</strong> on the main board allows remote wireless control of
                  the chest movement amplitude and breathing rate. The entire system is powered from a
                  <strong> +12 V DC</strong> source (minimum 1 A) – either via a standard AC/DC adapter
                  or directly from a vehicle’s 12 V cigarette lighter socket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RADIO SHIELDING ==================== */}
      <section className="product-section-roas">
        <div className="product-container-roas">
          <h2>Radio Transparency &amp; Shielding</h2>
          <div className="how-it-works-content">
            <div className="work-item">
              <div className="work-image-wrapper">
                <img
                  src="/photos/babysim_shielding.jpg"
                  alt="Radio shielding measurement"
                  className="work-image"
                />
              </div>
              <div className="work-description work-description--shielding">
                <p>
                  Experimental studies with 10×15 cm material samples confirmed that a <strong>
                  cotton cloth moistened with salt water</strong> accurately mimics human body tissue.
                  The sealed saline package not only reproduces the reflection of a 62 GHz signal but also
                  <strong> shields the internal metal components</strong> (servo motor, wires, screws, PCB)
                  from the radar.
                </p>
                <p>
                  Measurements show that the attenuation of a microwave signal passing once through the
                  moistened tissue exceeds <strong>30 dB at 62 GHz</strong>. Consequently, no additional
                  absorbing material is required inside the doll to suppress unwanted reflections from
                  metallic parts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== REMOTE CONTROL & GUI ==================== */}
      <section className="product-section-roas product-section-roas-alt">
        <div className="product-container-roas">
          <h2>Remote Control via Radar Sensor GUI</h2>
          <div className="how-it-works-content">
            <div className="work-item work-item-reverse">
              <div className="work-image-wrapper">
                <img
                  src="/photos/gui-babysim.png"
                  alt="Radar Sensor GUI with BABYSIM controls"
                  className="work-image"
                />
              </div>
              <div className="work-description work-description">
                <p>
                  To operate the simulator remotely, turn on its Bluetooth module and start the
                  <strong> Radar Sensor GUI</strong>. The upper‑right corner of the GUI displays a
                  <strong> TrackBar</strong> and numeric fields for the current amplitude and breathing rate.
                </p>
                <p>
                  By default, the chest oscillation amplitude is <strong>1 mm</strong> and the breathing
                  rate is <strong>20 breaths per minute (bpm)</strong>. The TrackBar allows you to vary
                  the amplitude from <strong>1 to 5 mm</strong> and the breathing rate from
                  <strong>20 to 60 bpm</strong>. Press the <strong>Connect/Disconnect</strong> button to
                  transfer the new values to the BABYSIM simulator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA / BACK ==================== */}
      <section className="product-cta-final-roas">
        <div className="product-container-roas">
          <h2>Interested in the UWB sensor?</h2>
          <Link to="/uwb" className="btn-primary">← Return to UWB</Link>
        </div>
      </section>
    </div>
  );
};

export default BabysimPage;