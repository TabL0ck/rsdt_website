import React from 'react';
import './AntennaDesign.css';

const AntennaDesign: React.FC = () => {
    // 7 фотографий по хронологии документа
    const photoSpots = [
        {
            id: 1,
            title: 'UWB Radar Antenna (7.5–8 GHz)',
            description: 'Разработанная патч-антенна для сверхширокополосного радара. Частотный диапазон 7.5–8 ГГц.',
            image: '/photos/ModelOfTheUWBRadarAntenna.png',
            alt: 'UWB antenna prototype',
        },
        {
            id: 2,
            title: '3D Model of the UWB Antenna',
            description: 'Электродинамическая модель в CST Studio Suite. Используется для расчёта S-параметров и поля.',
            image: '/photos/antenna-design-2.png',
            alt: '3D model of UWB antenna',
        },
        {
            id: 3,
            title: 'Radiation Pattern of the UWB Antenna',
            description: 'Измеренная 3D-диаграмма направленности. Гарантированное усиление и форма ДН во всём диапазоне.',
            image: '/photos/VectorNetworkAnalyzer.jpg',
            alt: 'Radiation pattern',
        },
        {
            id: 4,
            title: 'Vector Network Analyzer & Anechoic Chamber',
            description: 'Экспериментальная характеризация параметров антенны. Векторный анализатор цепей и безэховая камера до 110 ГГц.',
            image: '/photos/Radar Sensor PCB.png',
            alt: 'VNA and anechoic chamber',
        },
        {
            id: 5,
            title: 'Radar Sensor PCB with Integrated Antenna',
            description: 'Топология антенны перенесена в печатную плату радарного датчика. Полная интеграция с остальными цепями.',
            image: '/photos/Structure of a planar Schottky diode.png',
            alt: 'Radar sensor PCB',
        },
        {
            id: 6,
            title: 'Planar Schottky Diode (Terahertz Range)',
            description: 'Структура планарного диода Шоттки для терагерцового диапазона. Разработана и промоделирована в CST.',
            image: '/photos/Small signal model of the planar Schottky diode and its electron microscope image.png',
            alt: 'Schottky diode structure',
        },
        {
            id: 7,
            title: 'S‑Parameters of the Planar Schottky Diode',
            description: 'Малосигнальные S-параметры (моделирование). Подтверждают работу диода на частотах до 1 ТГц.',
            image: '/photos/3D model of the planar Schottky diode.png',
            alt: 'S-parameters simulation',
        },
    ];

    const designTools = [
        { category: '3D EM Solvers', items: ['CST Studio Suite', 'ANSYS HFSS', 'Altair FEKO', 'COMSOL Multiphysics'] },
        { category: 'Circuit & System Solvers', items: ['Keysight ADS', 'Cadence AWR Microwave Office', 'Ansys Circuit', 'QUCS Studio'] },
    ];

    const measurementTools = [
        'Vector Network Analyzers (VNA) up to 110 GHz',
        'Anechoic Chamber (fully accredited)',
        'Near‑field Scanner for antenna pattern',
        'RCS Measurement Setup',
    ];

    const whyChoose = [
        {
            icon: '📡',
            title: 'Full Frequency Coverage',
            description: 'From 1 GHz to 120 GHz, including UWB, ISM, automotive radar, 5G, and THz.',
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
            description: 'In‑house simulation, prototyping, and anechoic measurement reduce time‑to‑market.',
        },
    ];

    return (
        <div className="antenna-page">
            {/* Hero с 3D-моделью */}
            <section className="antenna-hero">
                <div className="antenna-hero-bg"></div>
                <div className="container">
                    <div className="antenna-hero-grid">
                        <div className="antenna-hero-text">
                            <div className="antenna-badge">ANTENNA & MICROWAVE DESIGN</div>
                            <h1>
                                Design and Electromagnetic Simulation of <span className="highlight">Antennas and Microwave Devices</span>
                            </h1>
                            <p className="antenna-subtitle">
                                RSDT develops microwave devices for PCBs of radar sensors – automotive, robotics, communications.
                                Patch antenna arrays, transmission lines, power dividers, matching devices, filters, and custom radiation patterns.
                                We also design Bluetooth, Wi‑Fi, and 5G antennas.
                            </p>
                            <div className="antenna-hero-cta">
                                <a href="/#contact" className="btn-primary">Discuss Your Antenna Project</a>
                            </div>
                        </div>
                        <div className="antenna-hero-model">
                        </div>
                    </div>
                </div>
            </section>

            {/* 7 фотографий – каждая в отдельной секции, по хронологии */}
            <section className="antenna-photo-gallery">
                <div className="container">
                    <h2 className="section-title">Examples of Antenna Systems and Microwave Devices</h2>
                    <p className="section-description">
                        Полный цикл разработки: от моделирования до готовой платы и СВЧ‑компонентов.
                    </p>
                    <div className="photo-timeline">
                        {photoSpots.map((spot, idx) => (
                            <div key={spot.id} className={`photo-item ${idx % 2 === 0 ? 'photo-left' : 'photo-right'}`}>
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

            {/* Инструменты */}
            <section className="antenna-tools">
                <div className="container">
                    <h2 className="section-title">Tools & Measurement Equipment</h2>
                    <p className="section-description">
                        Industry‑leading simulation platforms and state‑of‑the‑art measurement facilities.
                    </p>
                    <div className="tools-columns">
                        <div className="tools-column">
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
                        <div className="tools-column">
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
                    <h2 className="section-title">Why Choose RSDT for Antenna Design?</h2>
                    <div className="why-us-grid">
                        {whyChoose.map((item) => (
                            <div key={item.title} className="why-us-card">
                                <div className="why-us-circle">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="antenna-cta">
                <div className="container">
                    <h2>Ready to design your next‑generation antenna or microwave device?</h2>
                    <p>
                        Let's create custom antenna solutions optimised for your radar, communication,
                        or sensing application – from UWB to THz.
                    </p>
                    <a href="/#contact" className="btn-primary">Contact Our Antenna Team</a>
                </div>
            </section>
        </div>
    );
};

export default AntennaDesign;