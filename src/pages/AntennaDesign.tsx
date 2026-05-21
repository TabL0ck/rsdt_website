import React, { useEffect } from 'react';
import './AntennaDesign.css';

const AntennaDesign: React.FC = () => {
    const photoSpots = [
        {
            id: 1,
            title: '3D Model of the UWB Antenna',
            description: 'Three-dimensional model of the ultra-wideband radar antenna. Frequency range: 7.737–8.237 GHz.',
            image: '/photos/ModelOfTheUWBRadarAntenna.png',
            alt: 'UWB antenna prototype',
        },
        {
            id: 2,
            title: 'Vector Network Analyzer',
            description: 'Experimental characterization of antenna parameters using a vector network analyzer in an anechoic chamber (up to 110 GHz).',
            image: '/photos/VectorNetworkAnalyzer.jpg',
            alt: 'VNA measurement',
        },
        {
            id: 3,
            title: 'Radiation Pattern of the UWB Antenna',
            description: 'Measured 3D radiation pattern of the ultra-wideband radar antenna. Confirms the gain and shape characteristics requested by the customer.',
            image: '/photos/antenna-design-2.png',
            alt: 'Radiation pattern',
        },
        {
            id: 4,
            title: 'Radar Sensor PCB',
            description: 'Antenna topology transferred to the radar sensor printed circuit board. Full integration with other circuits.',
            image: '/photos/Radar Sensor PCB.png',
            alt: 'Radar PCB',
        },
        {
            id: 5,
            title: 'Structure of a Planar Schottky Diode',
            description: 'Structure of a planar Schottky diode for the terahertz range. Designed and simulated in CST Studio Suite.',
            image: '/photos/Structure of a planar Schottky diode.png',
            alt: 'Schottky structure',
        },
        {
            id: 6,
            title: 'Small Signal Model and Electron Microscope Image',
            description: 'Small-signal model of the planar Schottky diode and its image obtained using a scanning electron microscope.',
            image: '/photos/Small signal model of the planar Schottky diode and its electron microscope image.png',
            alt: 'Schottky model and SEM',
        },
        {
            id: 7,
            title: 'Small Signal S-Parameters (Simulation)',
            description: 'Small-signal S-parameters (simulation). Confirms diode operation at frequencies up to 1 THz.',
            image: '/photos/GraphShottky.png',
            alt: 'S-parameters simulation',
        },
        {
            id: 8,
            title: '3D Model of the Planar Schottky Diode',
            description: 'Three-dimensional model of the planar Schottky diode for the terahertz range.',
            image: '/photos/3D model of the planar Schottky diode.png',
            alt: '3D Schottky diode',
        },
    ];

    const designTools = [
        { category: '3D EM Solvers', items: ['CST Studio Suite', 'ANSYS HFSS', 'Altair FEKO', 'COMSOL Multiphysics'] },
        { category: 'Circuit & System Solvers', items: ['Keysight ADS', 'Cadence AWR Microwave Office', 'Ansys Circuit', 'QUCS Studio'] },
    ];

    const measurementTools = [
        'Vector Network Analyzers (VNA) up to 110 GHz',
        'Anechoic Chamber (fully accredited)',
        'Near-field Scanner for antenna pattern',
        'RCS Measurement Setup',
    ];

    const whyChoose = [
        {
            icon: '📡',
            title: 'Full Frequency Coverage',
            description: 'From 1 GHz to 75 GHz, including UWB, ISM, automotive radar, 5G, and THz.',
        },
        {
            icon: '🎓',
            title: 'Proven Experience',
            description: 'Patented planar antenna structures, custom microwave modules, and Schottky diode design in THz.',
        },
        {
            icon: '🤝',
            title: 'Seamless PCB Integration',
            description: 'Direct export from CAD (Altium, etc.) – no gap between antenna simulation and final layout.',
        },
        {
            icon: '⚡',
            title: 'Fast Turnaround',
            description: 'In-house simulation, prototyping, and anechoic measurement reduce time-to-market.',
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        );

        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="antenna-page">
            {/* HERO — используем общие классы */}
            <section className="page-hero">
                <div
                    className="page-hero-bg"
                    style={{
                        backgroundImage: "url('/photos/lab-bg.png')",
                        opacity: 0.4,
                    }}
                ></div>
                <div className="container">
                    <div className="page-hero-grid">
                        <div className="page-hero-text animate-on-scroll fade-up">
                            <div className="page-hero-badge">ANTENNA & MICROWAVE DESIGN</div>
                            <h1>
                                Design and Electromagnetic Simulation of{' '}
                                <span className="page-hero-highlight">Antennas and Microwave Devices</span>
                            </h1>
                            <p className="page-hero-subtitle">
                                RSDT develops microwave devices for PCBs of radar sensors – automotive, robotics, communications.
                                Patch antenna arrays, transmission lines, power dividers, matching devices, filters, and custom radiation patterns.
                                We also design Bluetooth, Wi-Fi, and 5G antennas.
                            </p>
                            <div className="page-hero-cta">
                                <a href="/#contact" className="btn-primary">Discuss Your Antenna Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="antenna-photo-gallery">
                <div className="container">
                    <h2 className="section-title animate-on-scroll fade-up">Examples of Antenna Systems and Microwave Devices</h2>
                    <p className="section-description animate-on-scroll fade-up delay-1">
                        Complete development cycle: from simulation to finished PCB and microwave components.
                    </p>
                    <div className="photo-timeline">
                        {photoSpots.map((spot, idx) => (
                            <div
                                key={spot.id}
                                className={`photo-item ${idx % 2 === 0 ? 'photo-left' : 'photo-right'} animate-on-scroll ${idx % 2 === 0 ? 'fade-left' : 'fade-right'}`}
                            >
                                <div className="photo-image">
                                    <img src={spot.image} alt={spot.alt} />
                                </div>
                                <div className="photo-caption">
                                    <h3>{spot.title}</h3>
                                    <p>{spot.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools & Measurement */}
            <section className="antenna-tools">
                <div className="container">
                    <h2 className="section-title animate-on-scroll fade-up">Tools & Measurement Equipment</h2>
                    <p className="section-description animate-on-scroll fade-up delay-1">
                        Industry-leading simulation platforms and state-of-the-art measurement facilities.
                    </p>
                    <div className="tools-columns">
                        <div className="tools-column animate-on-scroll fade-left">
                            <h3>Design & Simulation</h3>
                            {designTools.map((group) => (
                                <div key={group.category} className="tool-group">
                                    <h4>{group.category}</h4>
                                    <ul>
                                        {group.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="tools-column animate-on-scroll fade-right">
                            <h3>Measurement Capabilities</h3>
                            <ul className="measurement-list">
                                {measurementTools.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="antenna-why-us">
                <div className="container">
                    <h2 className="section-title animate-on-scroll fade-up">Why Choose RSDT for Antenna Design?</h2>
                    <div className="why-us-grid">
                        {whyChoose.map((item, idx) => (
                            <div
                                key={item.title}
                                className={`why-us-card animate-on-scroll fade-up delay-${(idx % 3) + 1}`}
                            >
                                <div className="why-us-circle">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA — Contact Us style (orange) */}
            <section className="cta-orange-grid">
                <div className="container">
                    <div className="contact-grid">
                        <div>
                            <h2>Ready to design your next-generation antenna?</h2>
                            <p style={{ fontSize: '1.15rem', color: '#555', maxWidth: '480px' }}>
                                Let’s create a custom antenna solution optimized for your radar, communication, or sensing application.
                            </p>
                        </div>

                        <div className="contact-card">
                            <h3>
                                <span className="icon">📍</span> 
                                Get in Touch
                            </h3>
                            <p>
                                <strong>Email:</strong> <a href="mailto:info@rsdt.com">info@rsdt.com</a><br />
                                <strong>Phone:</strong> <a href="tel:+971585299178">+971 58 5299178</a><br />
                                <strong>Address:</strong> Dubai, United Arab Emirates
                            </p>
                            
                            <a href="/#contact" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                                Book a Consultation →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AntennaDesign;