// About_History.tsx — финальная версия с блоком Milestones & Expertise
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './About_History.css';

const timelineData = [
  {
    year:'2015',
    title:'Launch of Development',
    content: (
      <>
      <p>
        The company's history began in 2015. Its primary focus was the development of radio-frequency integrated circuits
         (RF IC) for communications systems, UWB radars, and communication modules.
      </p>
      <p>
        From the beginning, the company established a full-cycle development process for electronic devices — from requirements analysis
         and system design to prototype manufacturing and comprehensive testing. 
      </p>
         <p>Project activities included:</p>
      <ul>
        <li>design of RF IC based on RFCMOS and SiGe BiCMOS technologies</li>
        <li>design of Wi-Fi and Bluetooth communication modules</li>
        <li>design of antenna systems and RF/microwave circuits</li>
        <li>development of communication and control systems based on DSPs and microcontrollers</li>
        <li>development of embedded DSP software</li>
        <li>electrical and mechanical design of devices</li>
        <li>testing and preparation of technical documentation</li>
        <li>prototyping using the company's in-house technologies.</li>
      </ul>
      </>
    )
  },
  {
    year: '2020',
    title: 'Launch of Automotive Microwave Sensors Development',
    content: (
      <>
      <p>
        The development of automotive microwave sensors began in 2020. The company’s key activities included the creation 
       of in‑cabin sensors for a South Korean customer.
      In 2020, the company developed ROAS (Rear Occupant Alert Sensor) version 1 – a universal solution with omnidirectional antennas designed to detect the presence of passengers in a vehicle, implementing the Child Presence Detection 
      (CPD) function – one of the requirements of the EURO NCAP standard. 
      </p>
      </>
    ),
  },
  {
    year: '2021–2022',
    title: 'Microwave Radar Sensor Enhancement',
    content: (
      <>
        <p>
          During the following years, the company focused on improving:
        </p>
        <ul>
          <li>radar signal processing algorithms;</li>
          <li>antenna structures;</li>
          <li>embedded software;</li>
          <li>object classification and recognition methods inside vehicle cabins.</li>
        </ul>
        <p>
          During this period, the company gained substantial experience in developing reliable automotive sensors
          suitable for integration into modern vehicle safety and monitoring systems.
        </p>
        <p>
          In <strong>2021</strong>, the <strong>DMS (Driver Monitoring System version 1)</strong> automotive sensor was developed.
        </p>
        <p>
          In <strong>2022</strong>, the <strong>ROA2 (Rear Occupant Alert version 2)</strong> automotive sensor was developed.
        </p>
      </>
    ),
  },
  {
    year: '2023',
    title: 'Medical Sensing System',
    content: (
      <>
        <p>
          In 2023, the company began developing the Vital Signs Monitor (VSM), a non-contact medical technology. 
          The same year, it also started developing a compact radar-based medical sensor that realized this technology.
           The project focused on creating a Contactless Medical Monitoring System (CMMS) with Wi-Fi 
           data transmission to measure the heart rate and breathing rate of hospital patients.
        </p>
        <p>
          In the end of 2023, the VSM radar sensor and CMMS were first introduced.
        </p>
        <p>Driver Monitoring System version 2</p>
        <p>In 2023, the DMS2 (Driver Monitoring System version 2) automotive radar sensor was developed.
           The DMS2 project aimed to improve vehicle safety through continuous driver condition monitoring, vital
            signs analysis, and detection of potentially dangerous conditions associated with fatigue or loss of attention.</p>
      </>
    ),
  },
  {
    year: '2024',
    title: "Intelligent Driver and Passenger Monitoring System",
    content:(
      <p>This year, the development of the Driver and Passenger Monitoring System (D&PMS) began.
        The D&PMS is based on three mmWave slave radar sensors and one mmWave master sensor, connected via a local CAN network 
        for data exchange and synchronization.
        The D&PMS features seat occupancy detection, passenger classification, driver and passenger vital sign monitoring, child 
        presence detection, and intrusion detection.
      </p>
    )
  },
  {
    year: "2025",
    title: "Low Power Intelligent Driver and Passengers Monitoring System and SDR Transceiver IC",
    content:(
      <>
      <p>In 2025, a unified Low Power Sensor (LPS) based on the AWRL6843 chip was developed. 
        The Low Power Driver & Passengers Monitoring System (LPD&PMS) was implemented using four LPSs, 
        with the potential to connect more sensors. These LPSs are connected via a local CAN network to form 
        the LPD&PMS system, with signal processing performed by the master sensor to improve the probability of
        passengers detection, recognition, and child presence detection.</p>

      <p><strong className="extra-bold">Integrated Circuit of SDR Transceiver</strong></p>

      <p>In 2025, the development of a <strong className="extra-bold">0.1 – 6 GHz SDR transceiver integrated circuit (IC)</strong> 
        based on a 28 nm RF CMOS process technology was started.</p>
      </>
    )    
  },
  {
    year: '2026',
    title: 'Current projects',
    content: (
      <>
        <p>
        1. Development of the Ultra-Wideband (UWB) Rear Occupant Alert (ROA) & Kick radar sensor was started.
        </p>
        <p>
          The UWB ROA & Kick radar sensor utilizes a new chip based on the IEEE 802.15.4a standard, which enhances the detection probability of occupants, including infants, by improving radio wave penetration into areas of the vehicle interior obscured by seats. The sensor also implements gesture recognition algorithms for opening the car trunk.
        </p>        
        <p>
        2. Development of the Enhanced In-Cabin Monitoring Sensor (ICMS) was started.
        </p>
        <p>The enhanced driver and occupant monitoring system based on the new sensor is designed to improve the accuracy of driver respiratory rate and heart rate measurements 
          through improved digital signal processing algorithms and sensor fusion.</p>
         
        <p>
          The development project of the <strong className="extra-bold">0.1–6 GHz SDR transceiver integrated circuit (IC)</strong> based on a 28 nm RF CMOS process technology is ongoing.
        </p>
        <p>
          The IC is suitable for a wide range of applications, including the construction of communication systems that realize V2X technology for autonomous vehicles.
        </p>
      </>
    ),
  },
];

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.2) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
}

const TimelineItem = ({
  year,
  title,
  children,
  position,
}: {
  year: string;
  title: string;
  children: React.ReactNode;
  position: 'left' | 'right';
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className={`timeline-item ${position} ${inView ? 'timeline-item--visible' : ''}`}
    >
      <div className="timeline-marker" />
      <div className="timeline-year-big">{year}</div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <div className="timeline-body">{children}</div>
      </div>
    </div>
  );
};

const MilestonesBlock: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.3);

  return (
    <section className="milestones-section">
      <div className="product-container-roas">
        <div
          ref={ref}
          className={`milestones-card ${inView ? 'milestones-card--visible' : ''}`}
        >
          <h2 className="milestones-title">Milestones & Expertise</h2>
          <div className="milestones-grid">
            <div className="milestones-col">
              <h3>Completed projects</h3>
              <ul>
                <li>Six projects dedicated to the development of automotive microwave radar sensors;</li>
                <li>One project that delivered a contactless medical sensor;</li>
                <li>Five projects focused on the development of radio-frequency and microwave integrated circuits for communications and radar systems.
</li>
              </ul>
            </div>
            <div className="milestones-col">
              <h3>Core expertise</h3>
              <ul>
                <li>Automotive radar systems;</li>
                <li>Contactless vital sign monitoring systems;</li>
                <li>Intelligent microwave radar sensors for automotive and medical applications;</li>
                <li>Embedded and front-end software;</li>
                <li>Radio frequency/microwave integrated circuits and semiconductor devices;</li>
                <li>Antennas, including AESA (Active Electronically Scanned Arrays).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CompanyHistoryPage: React.FC = () => {
  return (
    <div className="product-page-roas uwb-page">
      <section
        className="product-hero-roas"
        style={{ gap: '1rem', justifyContent: 'center', alignItems: 'center', padding: '4rem 2rem' }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/background/bg_history.JPG')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.12,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
        <div className="product-hero-content-roas" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="product-badge-roas">Microwave Sensors Development</div>
          <h1>Company History</h1>
          <p className="product-subtitle-roas">
           From RF integrated circuits in 2015 to automotive microwave radar sensors,<br></br> intelligent driver and passengers monitoring systems in 2026 — a timeline of innovation.
          </p>
          <div className="info-buttons" style={{ justifyContent: 'center' }}>
            <Link to="/" className="btn-primary">← Back to main</Link>
          </div>
        </div>
      </section>

      <section className="product-section-roas">
        <div className="product-container-roas">
          <div className="timeline">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={item.year}
                year={item.year}
                title={item.title}
                position={index % 2 === 0 ? 'left' : 'right'}
              >
                {item.content}
              </TimelineItem>
            ))}
          </div>
        </div>
      </section>

      <MilestonesBlock />
    </div>
  );
};

export default CompanyHistoryPage;