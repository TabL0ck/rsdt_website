import React from 'react';
import RadarModel3D from '../components/RadarModel3D';
import './US6634.css';

const US6634: React.FC = () => {
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
    <div className="product-page-us6634 us6634-page">
        {/* HERO — 3D теперь сильно правее */}
            <section 
            className="product-hero-us6634" 
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
            <div className="product-hero-content-us6634">
            <div className="product-badge-us6634">60-64 GHz FMCW Radar</div>
            <h1>
                US6634 — Unified Sensor<br />
            </h1>
            <p className="product-subtitle-us6634">
                <strong>Contactless mmWave radar that combine full functionality of <a href="/#/roas">ROAS</a> and <a href="/#/master-sensor-unit">MS</a> allowing the use of the same software and boards of the same type throughout the entire vehicle without the need to explicitly load different programs for the master and slaves.</strong>
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
            <div className="product-hero-model-us6634">
                <RadarModel3D 
                    modelPath="/models/US6634.glb"
                    cameraPosition={[0, 180, 0]}
                    fov={45}
                    modelCenter={[45, 90, -10]}
                    modelScale={1.5}
                    rotationAxis={'z'}
                    rotationSpeed={0.008}
                    rotationCenter={[45, 90, 5]}
                />
            </div>
        </section>

        {/* CORE FUNCTIONALITY — 6 карточек */}
        <section className="product-section-us6634">
            <div className="product-container-us6634">
            <h2>Core Functionality</h2>
            <p className="section-description-us6634">
                Advanced mmWave radar capabilities that make ROAS one of the most intelligent and privacy-focused rear occupant monitoring systems on the market.
            </p>

            <div className="product-grid-us6634">
                {features.map((feature, index) => (
                <div key={index} className="product-card-us6634">
                    <div className="product-icon-us6634">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* APPLICATIONS */}
        <section className="product-section-us6634 product-section-us6634-alt">
            <div className="product-container-us6634">
            <h2>Applications</h2>
            <div className="product-grid-us6634">
                <div className="product-app-card-us6634">
                <h3>Family Vehicles</h3>
                <p>Child left in car detection</p>
                </div>
                <div className="product-app-card-us6634">
                <h3>Ride-Sharing &amp; Taxis</h3>
                <p>Passenger safety verification</p>
                </div>
                <div className="product-app-card-us6634">
                <h3>Commercial Fleets</h3>
                <p>Occupant monitoring &amp; compliance</p>
                </div>
            </div>
            </div>
        </section>

        {/* TECHNICAL SPECIFICATIONS */}
        <section className="product-section-us6634" id="specs">
            <div className="product-container-us6634">
            <h2>Technical Specifications</h2>
            <div className="specs-table-us6634">
                <table>
                <tbody>
                    <tr><td>Operating Frequency</td><td>60-64 GHz FMCW Radar AiP</td></tr>
                    <tr><td>Field of View (Az/EI)</td><td>146° / 108°</td></tr>
                    <tr><td>Power Consumption</td><td>&lt; 5 mW (standby) and  2.4 W (active radiation)</td></tr>
                    <tr><td>Dimensions</td><td>66 × 34 × 7 mm</td></tr>
                    <tr><td>Temperature Range</td><td>-40°C … +85°C</td></tr>
                    <tr><td>Interface</td><td>2 x CAN-FD / 2 x CAN 2.0 / UART</td></tr>
                    <tr><td>Detection Range</td><td>Full cabin coverage up to 8 rows of seats</td></tr>
                    <tr><td>Key feature</td><td>Convenient installation and software download</td></tr>
                </tbody>
                </table>
            </div>
            </div>
        </section>

        {/* CTA FINAL */}
        <section className="product-cta-final-us6634">
            <div className="product-container-us6634">
            <h2>Ready to integrate ROAS into your next vehicle?</h2>
            <a href="/#contact" className="btn-primary">Contact RSDT Team</a>
            </div>
        </section>
        </div>
    );
};

export default US6634;