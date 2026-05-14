import React from 'react';
import RadarModel3D from '../components/RadarModel3D';
import './LowPowerSensor.css';

const LPS: React.FC = () => {
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
        icon: '🫀',
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
    <div className="product-page-lps lps-page">
        {/* HERO */}
            <section 
            className="product-hero-lps" 
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
            <div className="product-hero-content-lps">
            <div className="product-badge-lps">58-62 GHz FMCW Radar • Low Power</div>
            <h1>
                LPS — Low Power Sensor<br />
            </h1>
            <p className="product-subtitle-lps">
                <strong>Contactless mmWave radar with <span className="highlight">4 TX channels</span> and record-low power consumption of just <span className="highlight">1.68 W</span>. 
                Combines full functionality of <a href="/#/roas">ROAS</a> and <a href="/#/master-sensor-unit">MS</a>, 
                allowing the use of the same software and identical boards throughout the entire vehicle without the need to load different programs for master and slave units.</strong>
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

            {/* 3D модель */}
            <div className="product-hero-model-lps">
                <RadarModel3D 
                    modelPath="/models/L-power board.glb"
                    cameraPosition={[0, 0, 150]}
                    fov={45}
                    modelCenter={[45, 110, 0]}
                    modelScale={1.5}
                    rotationAxis={'y'}
                    rotationSpeed={0.008}
                    rotationCenter={[45, 100, 0]}
                />
            </div>
        </section>

        {/* CORE FUNCTIONALITY */}
        <section className="product-section-lps">
            <div className="product-container-lps">
            <h2>Core Functionality</h2>
            <p className="section-description-lps">
                Advanced mmWave radar capabilities that make LPS the most power-efficient unified sensor on the market. 
                With <strong>4 TX channels</strong> and only <strong>1.68 W</strong> active power consumption, it combines the full rear occupant monitoring of ROAS 
                with MS master sensor unit capabilities — all on identical hardware and software across the vehicle.
            </p>

            <div className="product-grid-lps">
                {features.map((feature, index) => (
                <div key={index} className="product-card-lps">
                    <div className="product-icon-lps">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* APPLICATIONS */}
        <section className="product-section-lps product-section-lps-alt">
            <div className="product-container-lps">
            <h2>Applications</h2>
            <div className="product-grid-lps">
                <div className="product-app-card-lps">
                <h3>Family Vehicles</h3>
                <p>Child left in car detection</p>
                </div>
                <div className="product-app-card-lps">
                <h3>Ride-Sharing &amp; Taxis</h3>
                <p>Passenger safety verification</p>
                </div>
                <div className="product-app-card-lps">
                <h3>Commercial Fleets</h3>
                <p>Occupant monitoring &amp; compliance</p>
                </div>
            </div>
            </div>
        </section>

        {/* TECHNICAL SPECIFICATIONS */}
        <section className="product-section-lps" id="specs">
            <div className="product-container-lps">
            <h2>Technical Specifications</h2>
            <div className="specs-table-lps">
                <table>
                <tbody>
                    <tr><td>Operating Frequency</td><td>58-62 GHz FMCW Radar AiP</td></tr>
                    <tr><td>Field of View (Az/EI)</td><td>146° / 108°</td></tr>
                    <tr><td><strong>Power Consumption</strong></td><td><strong>&lt; 5 mW (standby) and 1.68 W (active radiation)</strong></td></tr>
                    <tr><td><strong>TX Channels</strong></td><td><strong>4 (enhanced from 3)</strong></td></tr>
                    <tr><td>Dimensions</td><td>66 × 34 × 7 mm</td></tr>
                    <tr><td>Temperature Range</td><td>-40°C … +85°C</td></tr>
                    <tr><td>Interface</td><td>2 x CAN-FD / 2 x CAN 2.0 / UART</td></tr>
                    <tr><td>Detection Range</td><td>Full cabin coverage up to 8 rows of seats</td></tr>
                    <tr><td>Key feature</td><td>Ultra-low power + 4 TX channels with convenient installation</td></tr>
                </tbody>
                </table>
            </div>
            </div>
        </section>

        {/* CTA FINAL */}
        <section className="product-cta-final-lps">
            <div className="product-container-lps">
            <h2>Ready to integrate the most efficient Low Power Sensor into your next vehicle?</h2>
            <a href="/#contact" className="btn-primary">Contact RSDT Team</a>
            </div>
        </section>
        </div>
    );
};

export default LPS;