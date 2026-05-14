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
    <div className="product-page-roas roas-page">
        {/* HERO — 3D теперь сильно правее */}
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
            <div className="product-badge-roas">60-64 GHz FMCW Radar</div>
            <h1>
                ROAS — Rear Occupant<br />
                <span className="highlight">Alert Sensor</span>
            </h1>
            <p className="product-subtitle-roas">
                <strong>Contactless mmWave radar that detects children, pets and passengers left in the rear seats.<br />
                Prevents tragic hot-car incidents with instant alerts.</strong>
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
                    modelPath="/models/ROAS.glb"
                    cameraPosition={[0, 0, 150]}
                    fov={45}
                    modelCenter={[70, 90, 20]}
                    modelScale={1.5}
                    rotationAxis={'y'}
                    rotationSpeed={0}
                    rotationCenter={[40, 60, 20]}
                />
            </div>
        </section>

        {/* CORE FUNCTIONALITY — 6 карточек */}
        <section className="product-section-roas">
            <div className="product-container-roas">
            <h2>Core Functionality</h2>
            <p className="section-description-roas">
                Advanced mmWave radar capabilities that make ROAS one of the most intelligent and privacy-focused rear occupant monitoring systems on the market.
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

        {/* APPLICATIONS */}
        <section className="product-section-roas product-section-roas-alt">
            <div className="product-container-roas">
            <h2>Applications</h2>
            <div className="product-grid-roas">
                <div className="product-app-card-roas">
                <h3>Family Vehicles</h3>
                <p>Child left in car detection</p>
                </div>
                <div className="product-app-card-roas">
                <h3>Ride-Sharing &amp; Taxis</h3>
                <p>Passenger safety verification</p>
                </div>
                <div className="product-app-card-roas">
                <h3>Commercial Fleets</h3>
                <p>Occupant monitoring &amp; compliance</p>
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
        <section className="product-cta-final-roas">
            <div className="product-container-roas">
            <h2>Ready to integrate ROAS into your next vehicle?</h2>
            <a href="/#contact" className="btn-primary">Contact RSDT Team</a>
            </div>
        </section>
        </div>
    );
};

export default ROAS;