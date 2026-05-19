import React, { useEffect, useRef } from 'react';
import './AntennaDesign.css';

const AntennaDesign: React.FC = () => {
    // 8 фотографий (как у вас)
    const photoSpots = [
        {
            id: 1,
            title: '3D Model of the UWB Antenna',
            description: 'Трёхмерная модель антенны сверхширокополосного радара. Частотный диапазон 7.737-8.237 ГГц.',
            image: '/photos/ModelOfTheUWBRadarAntenna.png',
            alt: 'UWB antenna prototype',
        },
        {
            id: 2,
            title: 'Vector Network Analyzer',
            description: 'Экспериментальная характеризация параметров антенны с помощью векторного анализатора цепей в безэховой камере (до 110 ГГц).',
            image: '/photos/VectorNetworkAnalyzer.jpg',
            alt: 'VNA measurement',
        },
        {
            id: 3,
            title: 'Radiation Pattern of the UWB Antenna',
            description: 'Измеренная 3D-диаграмма направленности антенны сверхширокополосного радара. Подтверждает заданные заказчиком характеристики усиления и формы.',
            image: '/photos/antenna-design-2.png',
            alt: 'Radiation pattern',
        },
        {
            id: 4,
            title: 'Radar sensor PCB',
            description: 'Топология антенны перенесена в печатную плату радарного датчика. Полная интеграция с остальными цепями.',
            image: '/photos/Radar Sensor PCB.png',
            alt: 'Radar PCB',
        },
        {
            id: 5,
            title: 'Structure of a planar Schottky diode',
            description: 'Структура планарного диода Шоттки для терагерцового диапазона. Разработана и промоделирована в CST.',
            image: '/photos/Structure of a planar Schottky diode.png',
            alt: 'Schottky structure',
        },
        {
            id: 6,
            title: 'Small signal model and electron microscope image',
            description: 'Малосигнальная модель планарного диода Шоттки и его изображение, полученное с помощью электронного микроскопа.',
            image: '/photos/Small signal model of the planar Schottky diode and its electron microscope image.png',
            alt: 'Schottky model and SEM',
        },
        {
            id: 7,
            title: 'Small signal S parameters (simulation)',
            description: 'Малосигнальные S-параметры (моделирование). Подтверждают работу диода на частотах до 1 ТГц.',
            image: '/photos/GraphShottky.png',
            alt: 'S-parameters simulation',
        },
        {
            id: 8,
            title: '3D model of the planar Schottky diode',
            description: 'Трёхмерная модель планарного диода Шоттки для терагерцового диапазона.',
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
        'Near‑field Scanner for antenna pattern',
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
            description: 'In‑house simulation, prototyping, and anechoic measurement reduce time‑to‑market.',
        },
    ];

    // Анимация появления при скролле
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // анимация только один раз
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px' } // срабатывает, когда 15% элемента видно
        );

        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="antenna-page">
            {/* Hero */}
            <section className="antenna-hero">
                <div
                    className="antenna-hero-bg"
                    style={{
                        backgroundImage: "url('/photos/lab-bg.png')",
                        opacity: 0.4,
                    }}
                ></div>
                <div className="container">
                    <div className="antenna-hero-grid">
                        <div className="antenna-hero-text animate-on-scroll fade-up">
                            <div className="antenna-badge">ANTENNA & MICROWAVE DESIGN</div>
                            <h1>
                                Design and Electromagnetic Simulation of{' '}
                                <span className="highlight">Antennas and Microwave Devices</span>
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
                        <div className="antenna-hero-model"></div>
                    </div>
                </div>
            </section>

            {/* Галерея фотографий – каждая карточка анимируется */}
            <section className="antenna-photo-gallery">
                <div className="container">
                    <h2 className="section-title animate-on-scroll fade-up">Examples of Antenna Systems and Microwave Devices</h2>
                    <p className="section-description animate-on-scroll fade-up delay-1">
                        Полный цикл разработки: от моделирования до готовой платы и СВЧ‑компонентов.
                    </p>
                    <div className="photo-timeline">
                        {photoSpots.map((spot, idx) => (
                            <div
                                key={spot.id}
                                className={`photo-item ${idx % 2 === 0 ? 'photo-left' : 'photo-right'} animate-on-scroll ${
                                    idx % 2 === 0 ? 'fade-left' : 'fade-right'
                                }`}
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

            {/* Инструменты */}
            <section className="antenna-tools">
                <div className="container">
                    <h2 className="section-title animate-on-scroll fade-up">Tools & Measurement Equipment</h2>
                    <p className="section-description animate-on-scroll fade-up delay-1">
                        Industry‑leading simulation platforms and state‑of‑the‑art measurement facilities.
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

            {/* CTA */}
            <section className="antenna-cta">
                <div className="container">
                    <h2 className="animate-on-scroll fade-up">Ready to design your next‑generation antenna or microwave device?</h2>
                    <p className="animate-on-scroll fade-up delay-1">
                        Let's create custom antenna solutions optimised for your radar, communication,
                        or sensing application – from UWB to THz.
                    </p>
                    <a href="/#contact" className="btn-primary animate-on-scroll fade-up delay-2">Contact Our Antenna Team</a>
                </div>
            </section>
        </div>
    );
};

export default AntennaDesign;