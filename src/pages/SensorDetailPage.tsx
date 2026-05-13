import React from 'react';
import { useParams } from 'react-router-dom';
import './SensorDetailPage.css';

// Пока это просто каркас — данные можно будет подставить позже
const sensorData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  specs: [string, string][];
  image: string;
}> = {
  'rear-occupant-alert': {
    title: 'Rear Occupant Alert Sensor',
    subtitle: 'Safety.',
    description:
      'Millimeter‑wave radar sensor for detecting presence and vital signs of passengers in rear seats — including infants in child seats. Provides real‑time alerts to prevent hot‑car incidents and ensures no occupant is ever left unnoticed.',
    specs: [
      ['Operating Frequency', '64 GHz'],
      ['Technology', 'FMCW Radar AiP'],
      ['Field of View – Azimuth', '115°'],
      ['Field of View – Elevation', '108°'],
      ['Dimensions', '66 mm × 34 mm × 10 mm'],
      ['Power Consumption', '< 65 mW (active standby)'],
      ['Connection', 'CAN Bus'],
      ['Ambient Temperature', '-40°C … 85°C'],
      ['Cybersecurity', 'HSM Available'],
    ],
    image: '/photos/1.jpg',
  },
  'vital-signs-monitoring': {
    title: 'Vital Signs Monitoring Sensor',
    subtitle: 'Real‑Time Health Awareness',
    description:
      'Advanced mmWave algorithms detect micro‑movements caused by heartbeat and respiration — enabling driver health monitoring, drowsiness alerts, and passenger well‑being tracking, all without cameras.',
    specs: [
      ['Operating Frequency', '64 GHz'],
      ['Technology', 'FMCW Radar AiP'],
      ['Heart Rate Monitoring', 'Yes'],
      ['Respiration Tracking', 'Yes'],
      ['Presence & Occupancy', 'Yes'],
      ['Inattention & Drowsiness Alerts', 'Yes'],
    ],
    image: '/photos/7.jpg',
  },
};

const SensorDetailPage: React.FC = () => {
  const { sensorId } = useParams<{ sensorId: string }>();
  const sensor = sensorId ? sensorData[sensorId] : undefined;

  if (!sensor) {
    return (
      <div className="sensor-page">
        <section className="sensor-hero">
          <div className="sensor-hero-content">
            <h1>Sensor Not Found</h1>
            <p>The requested sensor does not exist.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="sensor-page">
      {/* Hero‑баннер */}
      <section className="sensor-hero">
        <div className="sensor-hero-content">
          <p className="sensor-breadcrumb">Radar Solutions / {sensor.title}</p>
          <h1>{sensor.title}</h1>
          <p className="sensor-subtitle">{sensor.subtitle}</p>
        </div>
      </section>

      {/* Описание + картинка */}
      <section className="sensor-description">
        <div className="sensor-description-grid">
          <div className="sensor-text">
            <h2>About the Sensor</h2>
            <p>{sensor.description}</p>
          </div>
          <div className="sensor-image">
            <img src={sensor.image} alt={sensor.title} />
          </div>
        </div>
      </section>

      {/* Технические характеристики (таблица) */}
      <section className="sensor-specs">
        <h2>Technical Specifications</h2>
        <table className="specs-table">
          <tbody>
            {sensor.specs.map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Блок "Why Choose RSDT" (одинаковый для всех) */}
      <section className="sensor-why">
        <h2>Why Choose RSDT</h2>
        <p>
          RSDT gathers the finest talent in mmWave, embedded hardware and software
          engineering, forming a strong foundation for creating innovative end‑to‑end
          turnkey solutions. With years of expertise in radar sensor development, we
          deliver custom solutions for automotive, commercial vehicle, industrial, and
          medical markets.
        </p>
      </section>
    </div>
  );
};

export default SensorDetailPage;