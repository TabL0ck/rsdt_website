import React from 'react';
import RadarModel3D from '../components/RadarModel3D';
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
            icon: '🛡️',
            title: 'Anti-Spoofing',
            description: 'Secure ranging prevents relay attacks and unauthorized relay of credentials.'
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
        <div className="product-page uwb-page">
            {/* HERO — с фотографией вместо 3D */}
            <section className="product-hero">
                <div className="product-hero-content">
                    <div className="product-badge">Ultra-Wideband (UWB) 8 GHz</div>
                    <h1>
                        UWB Precision <br />
                        <span className="highlight">Positioning Sensor</span>
                    </h1>
                    <p className="product-subtitle">
                        Centimeter-level spatial and directional tracking for automotive and industrial applications.<br />
                        Enables secure keyless entry, in-cabin occupant detection, and asset tracking with ultra-low power.
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

            <div className="product-hero-model">
                <RadarModel3D 
                    modelPath="/models/UWB.glb"
                    cameraPosition={[0, 0, 50]}
                    fov={45}
                    modelCenter={[40, 60, 20]}
                    modelScale={1.1}
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
                        Next‑generation UWB technology delivering secure, precise, and low‑power ranging for any environment.
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

            {/* APPLICATIONS — расширенный блок */}
            <section className="product-section product-section-alt">
                <div className="product-container">
                    <h2>Applications</h2>
                    <div className="product-grid">
                        {applications.map((app, index) => (
                            <div key={index} className="product-app-card">
                                <h3>{app.title}</h3>
                                <p>{app.description}</p>
                            </div>
                        ))}
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
                                <tr><td>Operating Frequency</td><td>8 GHz (UWB Channel 5 / 9)</td></tr>
                                <tr><td>Field of View (Az/EI)</td><td>120° / 120° (symmetrical)</td></tr>
                                <tr><td>Minimum Distance</td><td>15 cm</td></tr>
                                <tr><td>Maximum Distance (0° boresight)</td><td>50 meters</td></tr>
                                <tr><td>Distance Accuracy</td><td>±5 cm (static), ±10 cm (dynamic)</td></tr>
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
            <section className="product-cta-final">
                <div className="product-container">
                    <h2>Ready to bring UWB precision to your next project?</h2>
                    <a href="/#contact" className="btn-primary">Contact RSDT Team</a>
                </div>
            </section>
        </div>
    );
};

export default UWB;