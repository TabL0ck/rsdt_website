import React from 'react';
import './EmbeddedSoftware.css';
import RadarModel3D from '../components/RadarModel3D';

const EmbeddedSoftware: React.FC = () => {
    const services = [
        {
            title: "Firmware Development",
            description: "Low‑level drivers, BSP, RTOS integration (FreeRTOS, Zephyr), bare‑metal for ARM Cortex‑M, RISC‑V, DSP cores. Optimised for power‑sensitive and real‑time radar applications.",
            icon: "⚙️"
        },
        {
            title: "Digital Signal Processing (DSP)",
            description: "Implementation of FMCW/UWB signal processing chains – FFT, CFAR, tracking filters, AoA estimation. Fixed‑point and floating‑point optimisation for embedded DSPs and MCUs.",
            icon: "📊"
        },
        {
            title: "Communication Protocols",
            description: "CAN 2.0 / CAN‑FD, UART, SPI, I²C, USB, Ethernet stacks. Custom lightweight protocols for multi‑sensor networks and vehicle integration.",
            icon: "🔗"
        },
        {
            title: "GUI & Visualisation Tools",
            description: "Cross‑platform desktop GUIs (Qt, Python) for sensor calibration, real‑time data visualisation and debugging. Web‑based dashboards for fleet monitoring.",
            icon: "🖥️"
        },
        {
            title: "Testing & Validation",
            description: "Unit tests, HIL/SIL frameworks, continuous integration. Automated regression testing on real hardware with in‑house developed test rigs.",
            icon: "🧪"
        },
        {
            title: "Over‑the‑Air Updates (OTA)",
            description: "Secure bootloaders, delta‑update mechanisms, rollback protection. Designed for automotive and industrial devices that cannot be physically recalled.",
            icon: "🔄"
        }
    ];

    const expertiseAreas = [
        "ARM Cortex‑M / Cortex‑R / Cortex‑A",
        "RISC‑V Embedded Processors",
        "FreeRTOS, Zephyr, SafeRTOS",
        "DSP Programming (CMSIS‑DSP, custom)",
        "Automotive SPICE & ISO 26262",
        "Cybersecurity (HSM, Secure Boot)"
    ];

    const processSteps = [
        {
            step: "01",
            title: "Requirements & Architecture",
            description: "Define software architecture, choose OS/RTOS, partition functionality across DSP, MCU and application cores. Early risk analysis and prototyping."
        },
        {
            step: "02",
            title: "Core Development & Integration",
            description: "Implement drivers, middleware, algorithms. Continuous integration with automated tests on evaluation boards and custom hardware."
        },
        {
            step: "03",
            title: "Verification & Optimisation",
            description: "Profiling and optimisation for MIPS/memory constraints. HIL testing with real radar signals, validation against reference sensors."
        },
        {
            step: "04",
            title: "Production & Lifecycle Management",
            description: "Secure OTA update infrastructure, production programming tools, long‑term maintenance and feature upgrades."
        }
    ];

    const toolsList = [
        { category: "IDEs & Toolchains", items: ["VS Code", "Code Composer Studio", "GCC (ARM/RISC‑V)", "Visual Studio"] },
        { category: "Debug & Trace", items: ["J‑Trace Pro", "Segger Ozone", "Lauterbach", "Logic Analysers"] },
        { category: "CI/CD & Testing", items: ["Jenkins", "GitLab CI", "VectorCAST", "Ceedling/Unity"] }
    ];

    const whyChoose = [
        { icon: "🧠", title: "Algorithmic Expertise", description: "Deep knowledge of radar signal processing, optimised for embedded targets." },
        { icon: "🤝", title: "Full‑Stack Approach", description: "From DSP kernel to graphical user interface – one team, no integration gaps." },
        { icon: "⚡", title: "Real‑Time Performance", description: "Hard real‑time guarantees on resource‑constrained microcontrollers." },
        { icon: "🔒", title: "Security by Design", description: "HSM integration, secure boot, encrypted OTA updates – built in from day one." }
    ];

    return (
        <div className="embedded-hardware-page">
            {/* Hero Section */}
            <section className="embedded-hero">
                <div
                    className="embedded-hero-bg"
                    style={{
                        backgroundImage: "url('/background/emb-soft_bg-orange.png')",
                        opacity: 0.4
                    }}
                ></div>
                <div className="container">
                    <div className="embedded-badge">EMBEDDED SOFTWARE</div>
                    <h1>
                        Software <span className="highlight">Development</span>
                    </h1>
                    <p className="embedded-subtitle">
                        End‑to‑end embedded software services — from bare‑metal drivers to DSP algorithms and
                        graphical user interfaces. Over 10 years of experience delivering reliable, real‑time
                        firmware for automotive, industrial and medical devices.
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
                        We develop complete software stacks for radar sensors and embedded systems —
                        from low‑level BSP and real‑time DSP to cross‑platform GUI tools.
                        Our software is always verified on real hardware in our own lab.
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

            {/* Development Process */}
            <section className="embedded-process">
                <div className="container">
                    <h2 className="section-title">From Requirements to Production</h2>
                    <p className="section-description">
                        Our structured development process ensures quality, traceability and on‑time delivery.
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
                        We use industry‑standard toolchains and modern CI/CD pipelines for reliable,
                        repeatable builds and tests.
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

            {/* Testing & Validation Section (аналог Debug Access) */}
            <section className="embedded-debug-access">
                <div className="container">
                    <div className="debug-grid">
                        <div className="debug-content">
                            <div className="debug-badge">AUTOMATED TESTING</div>
                            <h2>Testing & Validation Infrastructure</h2>
                            <p>
                                We built a dedicated HIL (Hardware‑in‑the‑Loop) test rig that simulates real radar
                                reflections, enabling automated regression testing of our DSP algorithms and firmware
                                on actual hardware – without needing a real vehicle or human subject.
                            </p>
                            <ul>
                                <li>Fully automated overnight regression suites</li>
                                <li>Exact repeatable test conditions for DSP validation</li>
                                <li>Continuous integration with Jenkins / GitLab CI</li>
                                <li>Coverage reports and static analysis integrated into workflow</li>
                            </ul>
                            <p className="debug-note">
                                Essential for safety‑critical applications where every software change must be
                                verified before release.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

             {/* GUI Showcase – replaces old Expertise section */}
            <section className="gui-showcase">
            <div className="container">
                {/* Первый ряд: DMS GUI – текст слева, видео справа */}
                <div className="gui-row">
                <div className="gui-text">
                    <h2>DMS GUI</h2>
                    <p>
                    DMS GUI is a Windows desktop application for configuring, controlling,
                    and testing DMS2 radar sensors. It provides engineers with a clear
                    interface for connecting to sensors, uploading configurations,
                    monitoring live radar data, and validating detection results.
                    </p>
                    <p>
                    The software supports CAN/CAN FD and UART communication, real-time 3D
                    visualization of detected points and detection zones, sensor
                    calibration, EEPROM configuration storage, TLV data logging,
                    temperature monitoring, and firmware updates through the bootloader.
                    </p>
                    <p>
                    DMS2 GUI can be used during development, testing, calibration, and
                    demonstration of radar-based monitoring systems. It helps reduce setup
                    time, simplify diagnostics, and make sensor behavior easier to analyze.
                    </p>
                    <h3>Key Features</h3>
                    <ul className="gui-features">
                    <li>CAN/CAN FD and UART sensor connection</li>
                    <li>Real-time 3D point cloud visualization</li>
                    <li>FM, SM, and global detection zone configuration</li>
                    <li>Sensor calibration and validation tools</li>
                    <li>TLV data logging and analysis</li>
                    <li>Temperature and system status monitoring</li>
                    <li>EEPROM configuration read/write</li>
                    <li>Firmware update via bootloader</li>
                    <li>Multi-radar Master-Slave support</li>
                    <li>Engineering tools for debugging and testing</li>
                    </ul>
                </div>
                <div className="gui-media">
                    <video
                    controls
                    muted
                    loop
                    autoPlay
                    playsInline
                    poster="/photos/gui-poster.jpg"
                    >
                    <source src="/videos/output_DMS2_GUI.webm" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                </div>

                {/* Второй ряд: Signal Level GUI – видео слева, текст справа */}
                <div className="gui-row gui-row-reverse">
                <div className="gui-media">
                    <video
                    controls
                    muted
                    loop
                    autoPlay
                    playsInline
                    poster="/photos/signal-gui-poster.jpg"
                    >
                    <source src="/videos/UWB_GUI.webm" type="video/mp4" />
                    </video>
                </div>
                <div className="gui-text">
                    <h2>Signal Level & AOA Visualization</h2>
                    <p>
                    GUI displays the reflected signal received from objects located within
                    the sensor’s field of view. The signal level and AOA are calculated on
                    the sensor.
                    </p>
                    <p>
                    This tool is essential for antenna pattern verification, installation
                    tuning, and real‑time debugging of the radar signal processing chain.
                    </p>
                </div>
                </div>
            </div>
            </section>

            {/* Why Choose Us */}
            <section className="embedded-why-us">
                <div className="container">
                    <h2 className="section-title">Why Choose RSDT for Embedded Software?</h2>
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
                    <h2>Ready to bring intelligence to your embedded device?</h2>
                    <p>Let's create reliable, real‑time software that unlocks the full potential of your hardware.</p>
                    <a href="/#contact" className="btn-primary">Contact Our Team</a>
                </div>
            </section>
        </div>
    );
};

export default EmbeddedSoftware;