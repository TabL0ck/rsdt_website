// About_History.tsx — финальная версия с обновлённым текстом
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './About_History.css';

const timelineData = [
  {
    year: '2020',
    title: 'Launch of Automotive Development',
    content: (
      <>
        <p>
          The company’s development history began in 2020. The company’s primary areas of activity became the
          development of automotive sensors for a South Korean customer, as well as research and development in
          the field of non‑contact medical sensors.
        </p>
        <p>
          From the very beginning, the company established a full‑cycle development process for electronic and
          radar devices — from requirements analysis and system design to prototype manufacturing and comprehensive
          testing. Project activities included:
        </p>
        <ul>
          <li>development of digital signal processing algorithms;</li>
          <li>design of antenna systems and RF/microwave front‑end circuits;</li>
          <li>electrical and mechanical design of devices;</li>
          <li>development of embedded DSP software;</li>
          <li>testing and preparation of engineering documentation;</li>
          <li>prototype manufacturing using the company’s in‑house technological capabilities.</li>
        </ul>
        <p>
          The first major area of activity was the development of automotive radar sensors for a large
          South Korean company. In 2020, the company developed <strong>ROA (Rear Occupant Alert version 1)</strong> — a
          universal solution with omnidirectional antennas designed to detect passenger presence inside a vehicle cabin.
          The development of the second‑generation sensor marked an important transition from basic sensing systems to
          intelligent radar solutions with advanced analytical capabilities.
        </p>
      </>
    ),
  },
  {
    year: '2021–2022',
    title: 'Technology Development',
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
    year: '2023–2024',
    title: 'Medical Sensing Systems',
    content: (
      <>
        <p>
          In <strong>2023</strong>, the <strong>VSM (Vital Signs Monitor)</strong> medical sensor was first introduced.
        </p>
        <p>
          In <strong>2024</strong>, the company continued developing non‑contact medical technologies. The project
          focused on creating a compact radar‑based <strong>CMMS (Contactless Medical Monitoring System)</strong> to
          measure heart rate and breath rate without the use of contact sensors.
        </p>
      </>
    ),
  },
  {
    year: '2025–2026',
    title: 'Intelligent Driver Monitoring Systems',
    content: (
      <>
        <p>
          During this year, the development of <strong>DMS2</strong> started. The DMS2 project aimed at improving
          vehicle safety through continuous driver condition monitoring, vital signs analysis, and detection of
          potentially dangerous conditions associated with fatigue or loss of attention.
        </p>
        <p>
          In <strong>2026</strong>, two new projects were started: <strong>ICMS (In‑Cabin Monitoring Sensor)</strong>{' '}
          and <strong>UWBKaROA (Ultra‑Wideband Kick and Rear Occupant Alert)</strong>. UWBKaROA utilized a new radar
          chip based on IEEE 802.15.4a standard.
        </p>
        <p>
          By this stage, the company had completed:
        </p>
        <ul>
          <li>six automotive sensor development projects;</li>
          <li>two non‑contact medical sensors.</li>
        </ul>
        <p>
          The accumulated experience enabled the company to establish expertise in:
        </p>
        <ul>
          <li>automotive radar systems;</li>
          <li>DSP and embedded software;</li>
          <li>RF/microwave engineering;</li>
          <li>non‑contact vital signs monitoring;</li>
          <li>intelligent sensor systems for transportation and medical applications.</li>
        </ul>
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
          <div className="product-badge-roas">RSDT</div>
          <h1>Company History</h1>
          <p className="product-subtitle-roas">
            From automotive radar sensors in 2020 to intelligent driver monitoring and non‑contact medical
            technologies — a timeline of innovation.
          </p>
          <div className="info-buttons" style={{ justifyContent: 'center' }}>
            <Link to="/main" className="btn-primary">← Back to main</Link>
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

      <section className="product-cta-final-roas">
        <div className="product-container-roas">
          <h2>Want to know more about our current projects?</h2>
          <Link to="/placeholder" className="btn-primary">Contact RSDT Team</Link>
        </div>
      </section>
    </div>
  );
};

export default CompanyHistoryPage;