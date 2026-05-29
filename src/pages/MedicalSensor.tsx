// MedicalSensor.tsx
import React from 'react';
import RadarModel3D from '../components/RadarModel3D';
import './MedicalSensor.css';

const MedicalSensor: React.FC = () => {
  const systemBlocks = [
    {
      icon: '◎',
      title: 'Vital signs radar module',
      description: 'The same 60–64 GHz FMCW radar core used in the standalone Vital Signs Sensor measures breathing and heart rate without physical contact, even through clothing or blankets.'
    },
    {
      icon: '⌁',
      title: 'Wi-Fi and Bluetooth interface module',
      description: 'An ESP32-based module turns the radar into a connected system: Bluetooth is used for first-time setup, while Wi-Fi carries measurement data and commands over the local network.'
    },
    {
      icon: '▣',
      title: 'Local Web GUI included',
      description: 'Unlike the standalone radar product, this system is supplied with a browser-based interface for live monitoring, zone configuration, history review, and remote control.'
    },
    {
      icon: '↔',
      title: 'MQTT and JSON data exchange',
      description: 'The interface module receives radar packets, forwards structured JSON messages through MQTT, and sends configuration commands back to the radar over UART.'
    }
  ];

  const guiCapabilities = [
    'Live breathing-rate and heart-rate charts for the selected measurement zone.',
    'Graphical zone editor for enabling zones and adjusting their position and dimensions.',
    'History page for reviewing stored measurements by zone, date, and time interval.',
    'Local operation through standard infrastructure, without a mandatory cloud account.'
  ];

  const applications = [
    {
      title: 'Hospital and Home Care',
      description: 'Continuous non-contact observation of patients who should not be disturbed by wearable sensors, including sleep and recovery scenarios.'
    },
    {
      title: 'Telemedicine Rooms',
      description: 'A compact station where a clinician or operator can view live vital signs and adjust measurement zones from a browser.'
    },
    {
      title: 'Care Facilities',
      description: 'Room-level monitoring with stored measurement history, useful when caregivers need trends rather than only instant values.'
    }
  ];

  const specs = [
    { param: 'System composition', value: 'Vital signs radar module plus Wi-Fi/Bluetooth interface module' },
    { param: 'Radar technology', value: '60–64 GHz FMCW radar, TI IWR6843, 12 virtual channels (3Tx / 4Rx)' },
    { param: 'Interface module', value: 'ESP32-WROOM-32E class Wi-Fi/Bluetooth controller' },
    { param: 'Detection range', value: '0.3 m – 8 m; vital signs measurement is optimized up to 3 m' },
    { param: 'Breathing rate accuracy', value: '±1 breath/min after the settling interval' },
    { param: 'Heart rate accuracy', value: '±2 bpm after the settling interval' },
    { param: 'Wireless setup', value: 'Bluetooth first-time setup for Wi-Fi and MQTT connection parameters' },
    { param: 'Network protocol', value: 'MQTT transport with JSON payloads' },
    { param: 'Web GUI', value: 'Included with the medical monitoring system; not part of the standalone radar page' },
    { param: 'Stored data', value: 'Measurement zones, occupancy flags, breathing rate, heart rate, and timestamps' },
    { param: 'Power supply', value: '5 V USB-C, with optional 12 V adapter configuration' },
    { param: 'Operating temperature', value: '−20 °C to +60 °C' }
  ];

  return (
    <div className="product-page-roas medical-sensor-page">
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
            backgroundImage: "url('/background/medicalsensor.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.12,
            zIndex: 0,
            pointerEvents: 'none'
          }}
        ></div>
        <div className="product-hero-content-roas">
          <div className="product-badge-roas">Radar + Wi-Fi/Bluetooth Module + Web GUI</div>
          <h1>
            Contactless Medical Monitoring System
          </h1>
          <p className="product-subtitle-roas">
            <strong>
              A complete local monitoring system built around the Vital Signs radar module. The radar measures breathing and heart rate, while the Wi-Fi/Bluetooth module adds setup, networking, MQTT/JSON data exchange, and browser-based operation.
            </strong>
          </p>
          <p className="product-subtitle-roas product-subtitle-secondary">
            Vital Signs Sensor is the radar device itself. This page describes the system that results when that radar is combined with the interface module and delivered with the Web GUI.
          </p>
          <div className="product-cta">
            <a href="/contact" className="btn-primary">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="product-hero-model-roas">
          <RadarModel3D
            modelPath="/models/CMMS.glb"
            cameraPosition={[0, 2, 4]}
            fov={45}
            modelCenter={[0, 0, 0]}
            modelScale={1.5}
            rotationAxis={'y'}
            rotationSpeed={0.2}
            rotationCenter={[0, -1, 0]}
          />
        </div>
      </section>

      <section className="product-section-roas">
        <div className="product-container-roas">
          <h2>What Makes It a System</h2>
          <p className="section-description-roas">
            <strong>
              The medical monitoring system keeps the contactless radar measurement principle, but adds the communication layer and user-facing software needed for deployment. It is intended for teams that need a ready-to-operate device rather than only a radar sensing unit.
            </strong>
          </p>
          <div className="product-grid-roas product-grid-compact-roas">
            {systemBlocks.map((feature, index) => (
              <div key={index} className="product-card-roas">
                <div className="product-icon-roas">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section-roas product-section-roas-alt">
        <div className="product-container-roas">
          <div className="gui-showcase-roas">
            <div className="gui-copy-roas">
              <h2>Web GUI Included</h2>
              <p>
                The Web GUI is supplied only with the Contactless Medical Monitoring System. It gives operators a practical way to configure the device, watch live readings, and inspect stored measurements from a normal desktop or tablet browser on the local network.
              </p>
              <ul className="gui-feature-list-roas">
                {guiCapabilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="gui-visual-roas">
              <img
                src="/images/cmmsgui.png"
                alt="Contactless Medical Monitoring System Web GUI dashboard"
              />
              <p>Web GUI dashboard for live monitoring and zone-based configuration.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-section-roas">
        <div className="product-container-roas">
          <h2>Typical Use Cases</h2>
          <p className="section-description-roas">
            The system is designed for situations where contactless measurements, local access, and simple operator control matter more than deep radar integration work.
          </p>
          <div className="product-grid-roas product-grid-compact-roas">
            {applications.map((app, index) => (
              <div key={index} className="product-app-card-roas">
                <h3>{app.title}</h3>
                <p>{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section-roas" id="specs">
        <div className="product-container-roas">
          <h2>System Specifications</h2>
          <div className="specs-table-roas">
            <table>
              <tbody>
                {specs.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.param}</td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalSensor;
