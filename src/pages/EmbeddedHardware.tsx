// src/pages/EmbeddedHardware.tsx
import React from 'react';
import './EmbeddedHardware.css';

const EmbeddedHardware: React.FC = () => {
    const services = [
        {
            title: "Analysis and Simulation",
            description: "Conduct in-depth analysis and simulations to ensure optimal hardware solutions. Includes AC/DC analysis, cost optimization, power consumption calculation, thermal, level, timing analysis, and performance optimization.",
            icon: "🔬"
        },
        {
            title: "Schematic Design Development",
            description: "Covering digital, analog, and mixed-signal schematics using cutting-edge software tools and platforms.",
            icon: "📐"
        },
        {
            title: "PCB Design and Development",
            description: "We design PCBs for all types and complexities, including multi-layer, high-speed, and rigid-flex designs. We ensure accuracy and minimize errors through a stringent approach.",
            icon: "🖥️"
        },
        {
            title: "Full Lifecycle Management",
            description: "Managing BOMs, tracking component obsolescence, and optimizing supply chains. We keep your production lines running smoothly.",
            icon: "⚙️"
        }
    ];

    const expertiseAreas = [
        "RF & mmWave Design",
        "High-Speed Digital Design",
        "Antenna Design & Simulation",
        "Power Management & Efficiency",
    ];

    const processSteps = [
        {
            step: "01",
            title: "Feasibility & Architecture",
            description: "We analyze your requirements, conduct feasibility studies, and define the optimal hardware architecture."
        },
        {
            step: "02",
            title: "Design & Development",
            description: "Our team creates schematics, performs simulations, and develops the PCB layout with precision."
        },
        {
            step: "03",
            title: "Prototyping & Testing",
            description: "We build functional prototypes, perform rigorous testing, and validate designs to ensure reliability."
        },
        {
            step: "04",
            title: "Mass Production Support",
            description: "We assist with manufacturing ramp-up and provide ongoing support throughout the product lifecycle."
        }
    ];

    const partners = [
        { name: "Infineon", logo: "/images/partners/infineon.png" },
        { name: "NXP", logo: "/images/partners/nxp.png" },
        { name: "Texas Instruments", logo: "/images/partners/ti.png" }
    ];

    return (
        <div className="embedded-hardware-page">
            {/* Hero Section */}
            <section className="embedded-hero">
                <div
                    className="embedded-hero-bg"
                    style={{
                        backgroundImage: '/photos/filtered-photo.png',
                        opacity: 0.4
                    }}
                ></div>
                <div className="container">
                    <div className="embedded-badge">EMBEDDED HARDWARE</div>
                    <h1>
                        Embedded Hardware <span className="highlight">Development</span>
                    </h1>
                    <p className="embedded-subtitle">
                        End-to-end embedded hardware solutions tailored to specific projects. We take a holistic approach to hardware development, from initial concepts to functional realization and mass production.
                    </p>
                    <div className="embedded-hero-cta">
                        <a href="/#contact" className="btn-primary">Discuss Your Project</a>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="embedded-services">
                <div className="container">
                    <h2 className="section-title">What We Offer</h2>
                    <p className="section-description">
                        Expert engineering teams excel in designing and developing complex boards, ensuring high-quality, reliable, and innovative hardware.
                    </p>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="embedded-expertise">
                <div className="container">
                    <div className="expertise-grid">
                        <div className="expertise-content">
                            <h2 className="section-title">Our Expertise</h2>
                            <p>
                                With over 10 years of experience, our skilled engineers possess an exceptional ability to predict and address potential issues in hardware design. We provide proactive solutions to mitigate risks and optimize hardware performance.
                            </p>
                            <div className="expertise-list">
                                {expertiseAreas.map((area, index) => (
                                    <div key={index} className="expertise-item">
                                        <span className="checkmark">✓</span>
                                        <span>{area}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="expertise-image">
                            <img src="/photos/embedded_hard.png" alt="Hardware Engineering Expertise" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="embedded-process">
                <div className="container">
                    <h2 className="section-title">Our Development Process</h2>
                    <p className="section-description">
                        A seamless hardware development process from initial concepts to functional realization and mass production.
                    </p>
                    <div className="process-steps">
                        {processSteps.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">{step.step}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools and Platforms */}
            <section className="embedded-tools">
                <div className="container">
                    <h2 className="section-title">Tools and Platforms</h2>
                    <p className="section-description">
                        We utilize industry-leading tools to ensure efficient and precise design development.
                    </p>
                    <div className="tools-list">
                        <div className="tool-category">
                            <h3>ECAD</h3>
                            <ul>
                                <li>Altium Designer</li>
                                <li>Cadence Allegro</li>
                                <li>KiCad</li>
                            </ul>
                        </div>
                        <div className="tool-category">
                            <h3>Simulation</h3>
                            <ul>
                                <li>ANSYS HFSS</li>
                                <li>MATLAB/Simulink</li>
                                <li>SPICE</li>
                            </ul>
                        </div>
                        <div className="tool-category">
                            <h3>Testing</h3>
                            <ul>
                                <li>Oscilloscopes</li>
                                <li>Spectrum Analyzers</li>
                                <li>HIL/SIL Test Systems</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="embedded-why-us">
                <div className="container">
                    <h2 className="section-title">Why Choose RSDT for Embedded Hardware?</h2>
                    <div className="why-us-grid">
                        <div className="why-us-item">
                            <div className="why-us-icon">🏆</div>
                            <h3>20+ Years of Experience</h3>
                            <p>Decades of expertise in delivering complex embedded hardware solutions.</p>
                        </div>
                        <div className="why-us-item">
                            <div className="why-us-icon">🤝</div>
                            <h3>Partnerships with Tier-1 Companies</h3>
                            <p>Established relationships with leading industry suppliers.</p>
                        </div>
                        <div className="why-us-item">
                            <div className="why-us-icon">⚡</div>
                            <h3>Shorter Time-to-Market</h3>
                            <p>Streamlined processes that accelerate your product development.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="embedded-cta">
                <div className="container">
                    <h2>Ready to start your embedded hardware project?</h2>
                    <p>Let's turn your vision into reality.</p>
                    <a href="/#contact" className="btn-primary">Contact Our Team</a>
                </div>
            </section>
        </div>
    );
};

export default EmbeddedHardware;