import React from 'react';
import RadarModel3D from '../components/RadarModel3D';
import './ROAS.css';

const ROAS: React.FC = () => {
    const features = [
        {
        icon: '💺',
        title: 'Occupancy Detection',
        description: 'Detects which seats are occupied in the vehicle in real-time.'
        },
        {
        icon: '🧑‍🧒',
        title: 'Occupant Classification',
        description: 'Instantly identifies whether the seat is occupied by an adult, child, or inanimate object.'
        },
        {
        icon: '❤️',
        title: 'Driver Vital Signs',
        description: 'Continuously monitors driver’s breathing rate and heart rate for safety and alertness.'
        },
        {
        icon: '👶',
        title: 'Child Presence Alert',
        description: 'Alerts when a child is left unattended in the vehicle without an adult.'
        },
        {
        icon: '🚨',
        title: 'Theft Attempt Detection',
        description: 'Detects unauthorized presence near the vehicle and triggers an alert on break-in attempts.'
        },
        {
        icon: '🔧',
        title: 'Flexible Installation',
        description: 'Easy to mount in any part of the vehicle at any angle — limited only by coverage zone.'
        }
    ];
    return (
    <div className="product-page roas-page">
        {/* HERO — 3D теперь сильно правее */}
        <section className="product-hero">
            <div className="product-hero-content">
            <div className="product-badge">60-64 GHz FMCW Radar</div>
            <h1>
                ROAS — Rear Occupant<br />
                <span className="highlight">Alert Sensor</span>
            </h1>
            <p className="product-subtitle">
                Contactless mmWave radar that detects children, pets and passengers left in the rear seats.<br />
                Prevents tragic hot-car incidents with instant alerts.
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
            <div className="product-hero-model">
                <RadarModel3D 
                    modelPath="/models/ROAS.glb"
                    cameraPosition={[0, 0, 50]}
                    fov={45}
                    modelCenter={[40, 60, 20]}
                    modelScale={1.5}
                    rotationAxis={'y'}
                    rotationSpeed={0}
                    rotationCenter={[10, 29, -45]}
                />
            </div>
        </section>

        {/* CORE FUNCTIONALITY — 6 карточек */}
        <section className="product-section">
            <div className="product-container">
            <h2>Core Functionality</h2>
            <p className="section-description">
                Advanced mmWave radar capabilities that make ROAS one of the most intelligent and privacy-focused rear occupant monitoring systems on the market.
            </p>

            <div className="product-grid">
                {features.map((feature, index) => (
                <div key={index} className="product-card">
                    <div className="product-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* APPLICATIONS */}
        <section className="product-section product-section-alt">
            <div className="product-container">
            <h2>Applications</h2>
            <div className="product-grid">
                <div className="product-app-card">
                <h3>Family Vehicles</h3>
                <p>Child left in car detection</p>
                </div>
                <div className="product-app-card">
                <h3>Ride-Sharing &amp; Taxis</h3>
                <p>Passenger safety verification</p>
                </div>
                <div className="product-app-card">
                <h3>Commercial Fleets</h3>
                <p>Occupant monitoring &amp; compliance</p>
                </div>
            </div>
            </div>
        </section>

        {/* TECHNICAL SPECIFICATIONS */}
        <section className="product-section" id="specs">
            <div className="product-container">
            <h2>Technical Specifications</h2>
            <div className="specs-table">
                <table>
                <tbody>
                    <tr><td>Operating Frequency</td><td>60-64 GHz FMCW Radar AiP</td></tr>
                    <tr><td>Field of View (Az/EI)</td><td>146° / 108°</td></tr>
                    <tr><td>Power Consumption</td><td>&lt; 5 mW (standby) and  2.4 W (active radiation)</td></tr>
                    <tr><td>Dimensions</td><td>40 × 41 × 7 mm</td></tr>
                    <tr><td>Temperature Range</td><td>-40°C … +85°C</td></tr>
                    <tr><td>Interface</td><td>CAN-FD / CAN 2.0 / UART</td></tr>
                    <tr><td>Detection Range</td><td>Full cabin coverage of 2 rows vehicle</td></tr>
                </tbody>
                </table>
            </div>
            </div>
        </section>

        {/* CTA FINAL */}
        <section className="product-cta-final">
            <div className="product-container">
            <h2>Ready to integrate ROAS into your next vehicle?</h2>
            <a href="/#contact" className="btn-primary">Contact RSDT Team</a>
            </div>
        </section>
        </div>
    );
};

export default ROAS;