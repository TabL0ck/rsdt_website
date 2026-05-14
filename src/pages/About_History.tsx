// CompanyHistoryPage.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './About_History.css'; // общие стили

// Данные для таймлайна
const timelineData = [
  {
    year: '2020',
    title: 'Launch of Automotive Development',
    content: (
      <>
        <p>
          The first major area of activity was the development of automotive radar sensors for a large
          South Korean company.
        </p>
        <ul>
          <li><strong>Passenger Occupancy Sensor v1</strong> – universal solution with omnidirectional antennas for passenger presence detection.</li>
          <li><strong>Driver & Passenger Vital Signs Sensor</strong> – non-contact respiration and heart rate measurement.</li>
          <li><strong>Passenger Occupancy Sensor v2</strong> – shifted scanning area + passenger recognition.</li>
        </ul>
        <p>
          This marked the transition from basic sensing to intelligent radar systems with advanced analytics.
        </p>
      </>
    ),
  },
  {
    year: '2021–2023',
    title: 'Technology Development',
    content: (
      <>
        <p>Focused on improving:</p>
        <ul>
          <li>Radar signal processing algorithms</li>
          <li>Antenna structures</li>
          <li>Embedded software</li>
          <li>Object classification & recognition inside vehicle cabins</li>
        </ul>
        <p>Gained substantial experience in reliable automotive sensors for modern safety systems.</p>
      </>
    ),
  },
  {
    year: '2024',
    title: 'Expansion into Medical Technologies',
    content: (
      <p>
        Started development of non-contact medical technologies – a compact radar system for monitoring
        human physiological parameters without contact sensors.
      </p>
    ),
  },
  {
    year: '2025',
    title: 'Intelligent Driver Monitoring Systems',
    content: (
      <>
        <p>
          Development of a <strong>Driver Monitoring System (DMS)</strong> for continuous driver condition
          monitoring, vital signs analysis, and detection of fatigue or attention loss.
        </p>
        <p>
          By this stage, the company had completed <strong>six automotive sensor projects</strong> and
          <strong> two research projects</strong> in non-contact medical sensors.
        </p>
      </>
    ),
  },
];

// Хук для отслеживания видимости элемента
function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.2) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // анимируем только один раз
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
}

// Отдельный элемент таймлайна
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
      <div className="timeline-content">
        <span className="timeline-year">{year}</span>
        <h3>{title}</h3>
        <div className="timeline-body">{children}</div>
      </div>
    </div>
  );
};

const CompanyHistoryPage: React.FC = () => {
  return (
    <div className="product-page-roas uwb-page">
      {/* Hero */}
      <section
        className="product-hero-roas"
        style={{ gap: '1rem', justifyContent: 'center', alignItems: 'center', padding: '4rem 2rem' }}
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
            pointerEvents: 'none',
          }}
        ></div>
        <div className="product-hero-content-roas" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="product-badge-roas">Our Journey</div>
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

      {/* Timeline */}
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

      {/* CTA */}
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