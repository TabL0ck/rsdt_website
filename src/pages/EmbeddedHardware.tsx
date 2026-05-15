// src/pages/EmbeddedHardware.tsx
import React from 'react';
import './EmbeddedHardware.css';
import RadarModel3D from '../components/RadarModel3D';

const EmbeddedHardware: React.FC = () => {
    const services = [
        {
            title: "Analysis and Technical Modeling",
            description: "In-depth analysis of requirements, architecture, and constraints. Early risk evaluation, cost-performance optimization, and focus on EMC, thermal behavior, and certification requirements. Reduces design iterations and speeds up time-to-market.",
            icon: "🔬"
        },
        {
            title: "Circuit Design Solutions",
            description: "Digital, analog, and mixed-signal circuits. Interfaces: RS485/422, CAN, HSSPI, SPI/QSPI, USB, Ethernet, I²C, 1-Wire. Power and control systems with modern design tools for high accuracy.",
            icon: "📐"
        },
        {
            title: "PCB Design",
            description: "Multi-layer, high-speed, microstrip, and compact HDI boards. Special attention to EMC/EMI, thermal management, manufacturability, and operational reliability. Full production documentation (Gerber, BOM, Pick & Place, etc.).",
            icon: "🖥️"
        },
        {
            title: "Prototyping & Mass Production Prep",
            description: "Design for Manufacturability (DFM) approach. Complete documentation package: schematics, PCB stack-up, assembly files, BOM. Optimization for production defects reduction and cost efficiency.",
            icon: "⚙️"
        },
        {
            title: "Debugging & Experimental Verification",
            description: "In-house lab with oscilloscopes, spectrum analyzers, VNAs, RLC meters. Full hardware-software debugging, high-speed signal and RF path validation before mass production.",
            icon: "🛠️"
        },
        {
            title: "Debug & Service Access Technologies",
            description: "Compact contact pads instead of full debug connectors. Custom pogo-pin adapters for diagnostics, programming, and testing. Saves PCB space while maintaining full access — ideal for automotive and industrial electronics.",
            icon: "🔌"
        }
    ];

    const expertiseAreas = [
        "Automotive & Industrial Electronics",
        "High-Speed Digital & RF Design",
        "EMC/EMI Compliance",
        "Thermal Management",
        "Design for Manufacturability (DFM)",
        "Firmware & Embedded Software Integration"
    ];

    const processSteps = [
        {
            step: "01",
            title: "Idea & Requirements",
            description: "We analyze your technical idea, define architecture, and evaluate risks early to choose optimal solutions for cost, performance, and reliability."
        },
        {
            step: "02",
            title: "Schematic & PCB Design",
            description: "Create schematics (digital, analog, RF), design multi-layer PCBs with attention to EMC, thermal, and manufacturability constraints."
        },
        {
            step: "03",
            title: "Debugging & Prototyping",
            description: "In-house experimental verification, full hardware/software debugging, and functional prototype testing under real-world conditions."
        },
        {
            step: "04",
            title: "Mass Production Support",
            description: "Prepare full production docs, DFM optimization, and ongoing support to ensure seamless ramp-up and lifecycle management."
        }
    ];

    const toolsList = [
        { category: "ECAD", items: ["Altium Designer", "Cadence Allegro", "KiCad"] },
        { category: "Simulation", items: ["ANSYS HFSS", "MATLAB/Simulink", "SPICE"] },
        { category: "Testing", items: ["Oscilloscopes", "Spectrum Analyzers", "Vector Network Analyzers", "HIL/SIL Systems"] }
    ];

    const whyChoose = [
        { icon: "🏆", title: "10+ Years of Experience", description: "Proven track record in automotive, industrial, and consumer electronics." },
        { icon: "🤝", title: "Turnkey Solutions", description: "From idea to finished device – hardware, firmware, and software under one roof." },
        { icon: "⚡", title: "Reliability & Manufacturability", description: "DFM focus, reduced production defects, and faster time-to-market." },
        { icon: "🔧", title: "In-House Lab", description: "Oscilloscopes, spectrum analyzers, VNAs – rapid testing and validation." }
    ];

    return (
        <div className="embedded-hardware-page">
            {/* Hero Section */}
            <section className="embedded-hero">
                <div
                    className="embedded-hero-bg"
                    style={{
                        backgroundImage: "url('/photos/filtered-photo.png')",
                        opacity: 0.4
                    }}
                ></div>
                <div className="container">
                    <div className="embedded-badge">HARDWARE DESIGN</div>
                    <h1>
                        Hardware <span className="highlight">Development</span>
                    </h1>
                    <p className="embedded-subtitle">
                        End-to-end embedded hardware solutions — from concept and circuit design to documentation for mass production.
                        With over 10 years of experience, we turn technical ideas into reliable, high-tech products ready for real-world operation.
                    </p>
                    <div className="embedded-hero-cta">
                        <a href="/#contact" className="btn-primary">Discuss Your Project</a>
                    </div>
                </div>
            </section>

            {/* What We Do - Services Grid */}
            <section className="embedded-services">
                <div className="container">
                    <h2 className="section-title">What We Do</h2>
                    <p className="section-description">
                        We design complex boards hosting single-chip radar ICs, patched antennas, processors, microcontrollers, DSPs, FPGAs, high-speed peripherals, and analog/digital RF components.
                        Our hardware services are complemented by in-house firmware and embedded software teams for a complete turnkey product design.
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
                                With over 10 years of experience in automotive, industrial, and consumer applications,
                                our engineers take into account mass production specifics, electromagnetic compatibility,
                                thermal behavior, and certification requirements. This approach reduces iterations and accelerates time-to-market.
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
                    <h2 className="section-title">From Idea to Finished Device</h2>
                    <p className="section-description">
                        We support your project at every development stage — from initial analysis to mass production readiness.
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
                        We use industry-leading tools for efficient and precise design, simulation, and testing.
                    </p>
                    <div className="tools-list">
                        {toolsList.map((tool, idx) => (
                            <div key={idx} className="tool-category">
                                <h3>{tool.category}</h3>
                                <ul>
                                    {tool.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Debug Access Section - Special highlight */}
            <section className="embedded-debug-access">
                <div className="container">
                    <div className="debug-grid">
                        <div className="debug-content">
                            <div className="debug-badge">SMART DEBUG DESIGN</div>
                            <h2>Debugging & Service Access Technologies</h2>
                            <p>
                                During device development, we plan ahead for debugging, testing, and service access.
                                Signals required for diagnostics are routed to compact contact pads instead of full-size debug connectors.
                                Specialized pogo-pin adapters, custom-made for each device, provide access to these interfaces.
                            </p>
                            <ul>
                                <li>Reduces final device footprint and frees PCB space</li>
                                <li>Maintains access to all development and testing interfaces</li>
                                <li>Simplifies manufacturing and service maintenance</li>
                                <li>Only necessary connectors remain on the final product</li>
                            </ul>
                            <p className="debug-note">
                                Essential for compact, automotive, and industrial electronics where size, reliability, and manufacturability are critical.
                            </p>
                        </div>
                            <div className="product-hero-model-roas">
                            <RadarModel3D 
                                modelPath="/models/Pogo-pin.glb"
                                cameraPosition={[0, 0, 150]}
                                fov={45}
                                modelCenter={[0, 0, 0]}
                                modelScale={1.2}
                                rotationAxis={'y'}
                                rotationSpeed={0.008}
                                rotationCenter={[0, 0, 0]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="embedded-why-us">
                <div className="container">
                    <h2 className="section-title">Why Choose RSDT for Hardware Design?</h2>
                    <div className="why-us-grid">
                        {whyChoose.map((item, index) => (
                            <div key={index} className="why-us-item">
                                <div className="why-us-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="embedded-cta">
                <div className="container">
                    <h2>Ready to turn your idea into a finished device?</h2>
                    <p>Let's create modern hardware solutions ready for prototyping, testing, and mass production.</p>
                    <a href="/#contact" className="btn-primary">Contact Our Team</a>
                </div>
            </section>
        </div>
    );
};

export default EmbeddedHardware;