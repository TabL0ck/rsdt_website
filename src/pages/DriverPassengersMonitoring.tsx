import React, { useState } from 'react';
import './DriverPassengersMonitoring.css';

const DriverPassengersMonitoring: React.FC = () => {
    const capabilities = [
        {
            title: "Full Cabin Coverage",
            description: "Master Sensor coordinates multiple radar nodes to monitor every seat — driver and all passengers — with no blind spots.",
            icon: "👁️"
        },
        {
            title: "Driver Monitoring",
            description: "Contactless measurement of breathing rate, heart rate, and real-time detection of drowsiness and distraction.",
            icon: "❤️"
        },
        {
            title: "Passenger & Child Detection",
            description: "Accurate seat occupancy, Child Presence Detection (CPD), and vital signs monitoring for rear passengers.",
            icon: "🧒"
        },
        {
            title: "Multi-Sensor Intelligence",
            description: "Centralized data fusion from multiple sensors via private CAN network with the Master Sensor as the core.",
            icon: "🔗"
        },
        {
            title: "Cabin Intrusion Detection",
            description: "An additional sensor allows monitoring of the area outside the vehicle, alerting the owner of any attempted break-in.",
            icon: "⚠️"
        }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(0);

    const openModal = (contentIndex: number) => {
        setModalContent(contentIndex);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="driver-monitoring-page">

            {/* HERO */}
            <section className="page-hero">
                <div 
                    className="page-hero-bg"
                    style={{
                        backgroundImage: "url('/background/dpms_background.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.45
                    }}
                ></div>

                <div className="container">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="page-hero-badge">MULTI-SENSOR SYSTEM</div>
                            <h1>
                                Driver &amp; Passengers<br />
                                <span className="page-hero-highlight">Monitoring System</span>
                            </h1>
                            <p className="page-hero-subtitle">
                                Comprehensive real-time monitoring of the driver and all passengers 
                                using an intelligent multi-sensor radar network.
                            </p>
                            <div className="page-hero-cta">
                                <a href="/master-sensor-unit" className="btn-primary">Learn about Master Sensor</a>
                                <a href="#architecture" className="btn-secondary">View Architecture</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ARCHITECTURE */}
            <section id="architecture" className="section">
                <div className="container">
                    <h2 className="section-title">System Architecture</h2>
                    <p className="section-description">
                        The Master Sensor acts as both the central coordinator and the first active sensing node. 
                        It connects and intelligently fuses data from additional slave sensors across the cabin.
                    </p>

                    <div className="architecture-visual">
                        <div className="master-central">
                            <div className="master-badge">MASTER + SENSOR 1</div>
                            <h3>Master Sensor</h3>
                            <p>Central processing hub.<br />Also performs front-zone sensing.</p>
                        </div>

                        <div className="connection-line"></div>

                        <div className="slave-sensors">
                            <div className="slave-card">
                                <div className="slave-label">Sensor 2</div>
                                <p>Rear row coverage</p>
                            </div>
                            <div className="slave-card">
                                <div className="slave-label">Sensor 3</div>
                                <p>3rd row / Trunk area</p>
                            </div>
                            <div className="slave-card">
                                <div className="slave-label">Sensor 4</div>
                                <a href="/cabin-intrusion" className="sensor-dot-href"><p>Additional zone <br />(Cabin intrusion)</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LOCAL TO GLOBAL DATA PROCESSING */}
            <section className="section data-processing-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">From Local Data to Global Intelligence</h2>
                        <p className="section-description">
                            Each sensor collects data locally. The Master Sensor transforms these 
                            separate data streams into one coherent, system-wide understanding of the cabin.
                        </p>
                    </div>

                    <div className="data-processing-flow">
                        {/* Step 1 */}
                        <div className="processing-step">
                            <div className="step-icon">📡</div>
                            <div className="step-content">
                                <div className="step-number">01</div>
                                <h3>Local Data Acquisition</h3>
                                <p>Each radar node independently captures motion, distance, and vital signs 
                                within its coverage area.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="processing-step">
                            <div className="step-icon">🔗</div>
                            <div className="step-content">
                                <div className="step-number">02</div>
                                <h3>Secure Data Transmission</h3>
                                <p>Raw and pre-processed data is sent to the Master Sensor over a private, 
                                isolated high-speed CAN network.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="processing-step">
                            <div className="step-icon">🧠</div>
                            <div className="step-content">
                                <div className="step-number">03</div>
                                <h3>Centralized Data Fusion</h3>
                                <p>The Master Sensor performs coherent processing, spatial alignment, 
                                and intelligent fusion of data from all nodes.</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="processing-step">
                            <div className="step-icon">📊</div>
                            <div className="step-content">
                                <div className="step-number">04</div>
                                <h3>Unified System Output</h3>
                                <p>The result is accurate, real-time global information: driver state, 
                                passenger presence, vital signs, and child detection across the entire cabin.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section cabin-zone-section">
            <div className="container">
                <div className="cabin-zone-header">
                <h2 className="section-title">Cabin Zone Coverage</h2>
                <p className="section-description">
                    The system supports flexible volumetric monitoring of the vehicle cabin. 
                    Different sensitivity levels can be configured for the driver area, rear seats, and cargo space.
                </p>
                </div>

                <div className="cabin-zone-visual">
                    <div className="cabin-image-wrapper">
                        {/* Светлая версия */}
                        <img 
                        src="/images/cabin-zone-coverage-light.jpg" 
                        alt="Cabin intrusion detection zones" 
                        className="cabin-image cabin-image-light"
                        />
                        {/* Тёмная версия */}
                        <img 
                        src="/images/cabin-zone-coverage-dark.png" 
                        alt="Cabin intrusion detection zones (dark)" 
                        className="cabin-image cabin-image-dark"
                        />
                    </div>
                </div>
            </div>
            </section>

            {/* CABIN PLACEMENT */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Example of Sensor Placement in Cabin</h2>
                    <p className="section-description">
                        Strategic positioning of radar sensors ensures reliable detection across the entire vehicle interior.
                    </p>

                    <div className="cabin-visual">
                        <div className="cabin-image-wrapper">
                            <img 
                                src="/images/DPMS_three_sensors.png" 
                                alt="Sensor placement in vehicle cabin"
                                className="cabin-image"
                            />
                            <div className="sensor-dot dot-front">
                                <span className="tooltip">1st Row Sensor<br />Front area</span>
                            </div>
                            <div className="sensor-dot dot-middle">
                                <span className="tooltip">2nd Row Sensor</span>
                            </div>
                            <div className="sensor-dot dot-rear">
                                <span className="tooltip">3rd Row Sensor</span>
                            </div>
                            <div className="sensor-dot dot-additional">
                                <span className="tooltip">
                                    <a href="/cabin-intrusion" className="sensor-dot-href">Additional sensor <br />(Cabin Intrusion)</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CAPABILITIES */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Key Capabilities</h2>
                    <div className="capabilities-grid">
                        {capabilities.map((cap, index) => (
                            <div key={index} className="capability-card card-hover">
                                <div className="capability-icon">{cap.icon}</div>
                                <h3>{cap.title}</h3>
                                <p>{cap.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GUI SECTION */}
            <section className="gui-showcase">
                <div className="container">
                    <div className="gui-row">
                        {/* Текст */}
                        <div className="gui-text">
                            <h2>Multi-Sensor Monitoring GUI</h2>
                            <p>
                                Click on the points on the video to explore the main features 
                                of the Multi-Sensor Monitoring interface.
                            </p>
                        </div>

                        {/* Видео с интерактивными точками */}
                        <div className="gui-visual">
                            <div className="video-wrapper">
                                <video 
                                    className="gui-video" 
                                    autoPlay 
                                    muted 
                                    loop 
                                    playsInline
                                >
                                    <source src="/videos/GUI_multiple_sensors.mp4" type="video/mp4" />
                                </video>

                                {/* Интерактивные точки */}
                                <div className="video-dot DPMS-dot-1" onClick={() => openModal(0)}></div>
                                <div className="video-dot DPMS-dot-2" onClick={() => openModal(1)}></div>
                                <div className="video-dot DPMS-dot-3" onClick={() => openModal(2)}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Модальное окно */}
                {isModalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeModal}>×</button>

                            {modalContent === 0 && (
                                <div>
                                    <h3>Object Visualization by Sensor</h3>
                                    <p>
                                        The GUI allows clear visualization of detected objects. 
                                        Each sensor displays its detections using a unique color. 
                                        This helps to easily distinguish which sensor detected 
                                        a particular object and how the system combines data 
                                        from multiple sources.
                                    </p>
                                </div>
                            )}

                            {modalContent === 1 && (
                                <div>
                                    <h3>Seat Occupancy and Vital Signs</h3>
                                    <p>
                                        The interface provides information about the status of each 
                                        seat in the cabin. You can see whether a seat is occupied 
                                        or empty, as well as view basic vital signs data for 
                                        each detected person. This gives a quick overview of 
                                        the entire passenger compartment.
                                    </p>
                                </div>
                            )}

                            {modalContent === 2 && (
                                <div>
                                    <h3>Sensor Configuration</h3>
                                    <p>
                                        The GUI provides access to individual sensor settings. 
                                        This allows you to adjust detection parameters and 
                                        sensitivity for each sensor directly through the interface, 
                                        without the need to physically reconnect the hardware.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </section>

            {/* CAN BOOTLOADER */}
            <section className="section can-bootloader-section">
                <div className="container">
                    <h2 className="section-title">CAN Bootloader – Firmware Updates</h2>
                    <p className="section-description">
                        The system supports remote firmware updates for all connected sensors 
                        over the CAN interface, managed centrally through the Master Sensor.
                    </p>

                    <div className="bootloader-content">
                        <div className="bootloader-card">
                            <div className="bootloader-icon">🔄</div>
                            <h3>Centralized Updates via Master</h3>
                            <p>
                                Firmware updates are initiated and distributed through the Master Sensor. 
                                There is no need to physically connect to each individual sensor.
                            </p>
                        </div>

                        <div className="bootloader-card">
                            <div className="bootloader-icon">🛡️</div>
                            <h3>Secure &amp; Reliable</h3>
                            <p>
                                The bootloader uses a protocol with integrity checks 
                                to ensure that only valid firmware is installed on the sensors.
                            </p>
                        </div>

                        <div className="bootloader-card">
                            <div className="bootloader-icon">⚡</div>
                            <h3>Fast CAN-based Transfer</h3>
                            <p>
                                Firmware is transferred over the high-speed private CAN network, 
                                providing fast and stable update performance even in complex installations.
                            </p>
                        </div>
                    </div>

                    <div className="bootloader-note">
                        This feature significantly simplifies maintenance and allows updating 
                        the software of all sensors in the vehicle without disassembling trim 
                        or gaining physical access to each module.
                    </div>
                </div>
            </section>

            {/* PERFORMANCE */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Proven Performance</h2>
                    <div className="specs-table">
                        <table>
                            <tbody>
                                <tr><td>Breathing Rate Accuracy</td><td>±1 breath/min</td></tr>
                                <tr><td>Heart Rate Accuracy</td><td>±5 bpm</td></tr>
                                <tr><td>Child Presence Detection</td><td>&lt; 10 seconds</td></tr>
                                <tr><td>Privacy</td><td>Radar-only technology</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DriverPassengersMonitoring;