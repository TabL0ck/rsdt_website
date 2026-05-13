import React from 'react';
import RadarModel3D from '../components/RadarModel3D';
import './MasterSensorUnit.css';

const MasterSensorUnit: React.FC = () => {
    const features = [
        {
            icon: '🔗',
            title: 'Full ROAS Compatibility',
            description: 'Includes all core ROAS features and works seamlessly within the entire sensor ecosystem.'
        },
        {
            icon: '📡',
            title: 'Multi-Sensor Network',
            description: 'Unites up to 4 ROAS sensors into a private local CAN network, completely isolated from the vehicle’s main bus.'
        },
        {
            icon: '🌐',
            title: 'Centralized Intelligence',
            description: 'Analyzes position and output from every connected sensor and delivers unified, accurate data in real time.'
        },
        {
            icon: '🚘',
            title: 'Full Vehicle Coverage',
            description: 'Multiple sensors working together can monitor the entire vehicle cabin — up to 8 rows of seats.'
        }
    ];

    return (
        <div className="product-page-MS master-sensor-unit-page-MS">
            {/* HERO */}
            <section 
                className="product-hero-MS" 
                style={{ 
                    gap: '3rem',
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

                <div className="product-hero-content-MS">
                    <div className="product-badge-MS">60-64 GHz FMCW Radar</div>
                    
                    <h1>
                        MS — Master Sensor Unit
                    </h1>
                    
                    <p className="product-subtitle-MS">
                        The central hub that connects up to 4 ROAS sensors into a unified local network, 
                        completely independent of the vehicle’s CAN bus.
                    </p>

                    <div className="product-cta-MS">
                        <a href="/#contact" className="btn-primary">
                            Get in Touch
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* 3D модель */}
                <div className="product-hero-model-MS">
                    <RadarModel3D 
                        modelPath="/models/MS.glb"
                        cameraPosition={[0, 0, 140]}
                        fov={45}
                        modelCenter={[70, 90, 20]}
                        modelScale={1.5}
                        rotationAxis={'y'}
                        rotationSpeed={0}
                        rotationCenter={[40, 60, 20]}
                    />
                </div>
            </section>

            {/* CORE FUNCTIONALITY */}
            <section className="product-section-MS">
                <div className="product-container-MS">
                    <h2>Core Functionality</h2>
                    <p className="section-description-MS">
                        Advanced mmWave radar capabilities that make ROAS one of the most intelligent 
                        and privacy-focused rear occupant monitoring systems on the market.
                    </p>

                    <div className="product-grid-wide-MS">
                        {features.map((feature, index) => (
                            <div key={index} className="product-card-MS">
                                <div className="product-icon-MS">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* APPLICATIONS */}
            <section className="product-section-MS product-section-MS-alt">
                <div className="product-container-MS">
                    <h2>Applications</h2>
                    <div className="product-grid-MS">
                        <div className="product-app-card-MS">
                            <h3>Family Vehicles</h3>
                            <p>Child left in car detection</p>
                        </div>
                        <div className="product-app-card-MS">
                            <h3>Ride-Sharing & Taxis</h3>
                            <p>Passenger safety verification</p>
                        </div>
                        <div className="product-app-card-MS">
                            <h3>Commercial Fleets</h3>
                            <p>Occupant monitoring & compliance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECHNICAL SPECIFICATIONS */}
            <section className="product-section-MS" id="specs">
                <div className="product-container-MS">
                    <h2>Technical Specifications</h2>
                    <div className="specs-table-MS">
                        <table>
                            <tbody>
                                <tr><td>Operating Frequency</td><td>60-64 GHz FMCW Radar</td></tr>
                                <tr><td>Field of View (Az/EI)</td><td>146° / 108°</td></tr>
                                <tr><td>Power Consumption</td><td>&lt; 5 mW (standby) and 2.4 W (active)</td></tr>
                                <tr><td>Dimensions</td><td>52 × 43 × 7 mm</td></tr>
                                <tr><td>Temperature Range</td><td>-40°C … +85°C</td></tr>
                                <tr><td>Interface</td><td>2 × CAN-FD / 2 × CAN 2.0 / UART</td></tr>
                                <tr><td>Detection Range</td><td>Up to 8 rows of seats</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="product-cta-final-MS">
                <div className="product-container-MS">
                    <h2>Ready to integrate ROAS into your next vehicle?</h2>
                    <a href="/#contact" className="btn-primary">Contact RSDT Team</a>
                </div>
            </section>
        </div>
    );
};

export default MasterSensorUnit;