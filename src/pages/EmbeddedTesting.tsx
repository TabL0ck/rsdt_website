import React, { useEffect } from 'react';
import './EmbeddedTesting.css';
import { Link } from 'react-router-dom';

const EmbeddedTesting: React.FC = () => {
  const testCases = [
    {
      id: 1,
      title: "Full Validation of 77 GHz Automotive Radar",
      description: "Complete testing cycle: from functional validation to AEC-Q100 and ISO 26262 qualification. Includes HIL simulation and environmental chambers.",
      image: "/photos/testing-radar-77ghz.png",
      alt: "77 GHz radar testing in anechoic chamber"
    },
    {
      id: 2,
      title: "UWB In-Cabin Monitoring Sensor (Kick & ROA)",
      description: "Validation of presence detection and object classification accuracy inside the vehicle cabin. Real-world scenario testing according to UNECE R46.",
      image: "/photos/testing-uwb-cabin.png",
      alt: "UWB cabin monitoring sensor testing"
    },
    {
      id: 3,
      title: "Medical Contactless Respiration & Heartbeat Radar",
      description: "Non-contact vital signs monitoring. Full validation of accuracy, interference immunity, and electromagnetic compatibility for medical applications.",
      image: "/photos/testing-medical-radar.png",
      alt: "Medical radar testing"
    },
    {
      id: 4,
      title: "High-Volume EOL Production Testing Line",
      description: "Development and deployment of fully automated EOL test line with custom pogo-pin fixtures. Throughput: over 2,000 modules per day.",
      image: "/photos/testing-eol-line.png",
      alt: "Automated EOL testing production line"
    },
    {
      id: 5,
      title: "Extreme Environmental Qualification",
      description: "Testing across -70°C to +180°C, vibration, shock, humidity, and salt spray. Full qualification according to ISO 16750 and AEC-Q100.",
      image: "/photos/testing-climate-chamber.png",
      alt: "Climate chamber radar testing"
    },
    {
      id: 6,
      title: "3D Antenna Pattern & Near-Field Analysis",
      description: "Radiation pattern measurement, S-parameter analysis, and near-field scanning up to 110 GHz. Antenna design validation for radar systems.",
      image: "/photos/testing-antenna-pattern.png",
      alt: "Antenna pattern measurement in near-field scanner"
    }
  ];

  const designTools = [
    {
      category: "Simulation & Modeling",
      items: ["CST Studio Suite", "ANSYS HFSS", "Keysight ADS", "MATLAB/Simulink", "Python + scikit-rf"]
    },
    {
      category: "Test Automation & Software",
      items: ["NI LabVIEW/TestStand", "Python + pytest + Allure", "VectorCAST", "Jenkins / GitLab CI", "dSPACE / NI VeriStand (HIL)"]
    }
  ];

  const measurementTools = [
    "Vector Network Analyzers (VNA) up to 110 GHz",
    "3m & 10m Anechoic Chambers + GTEM Cells",
    "Keysight / NI Radar Target Simulators",
    "Thermal Cycling Chambers (-70°C...+180°C)",
    "IMV Vibration & Shock Test Systems",
    "Near-Field Scanners & Antenna Pattern Measurement Systems"
  ];

  const whyChoose = [
    {
      icon: "🔬",
      title: "In-House Accredited Lab",
      description: "Full testing capability under one roof — from prototype to mass production"
    },
    {
      icon: "📡",
      title: "10+ Years Radar Expertise",
      description: "Deep domain knowledge in FMCW, UWB, and imaging radar systems"
    },
    {
      icon: "⚙️",
      title: "Custom Test Fixtures",
      description: "Proprietary pogo-pin adapters and fully automated EOL lines"
    },
    {
      icon: "✅",
      title: "Full Traceability",
      description: "ISO 26262, ASPICE, IATF 16949 support and external certification"
    }
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
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="em-testing-page">
      {/* HERO — используем общие классы */}
      <section className="page-hero">
        <div 
          className="page-hero-bg"
          style={{
            backgroundImage: "url('/photos/lab-bg.png')",
            opacity: 0.4
          }}
        />
        
        <div className="container">
          <div className="page-hero-grid">
            <div className="page-hero-text animate-on-scroll fade-up">
              <div className="page-hero-badge">EMBEDDED TESTING</div>
              
              <h1>
                Embedded <span className="page-hero-highlight">Testing</span><br />
                &amp; Validation
              </h1>
              
              <p className="page-hero-subtitle">
                Complete validation and qualification for radar sensors and embedded systems.<br />
                From lab prototypes to mass production.
              </p>
              
              <div className="page-hero-cta">
                <Link to="/contact" className="btn-primary">Request Testing Program</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEST CASES GALLERY */}
      <section className="em-testing-photo-gallery">
        <div className="container">
          <h2 className="section-title animate-on-scroll fade-up">Completed Testing Projects</h2>
          <p className="section-description animate-on-scroll fade-up delay-1">
            Real-world examples of radar and embedded system validation for leading automotive and medical companies
          </p>

          <div className="em-testing-photo-timeline">
            {testCases.map((testCase, index) => (
              <div 
                key={testCase.id} 
                className={`em-testing-photo-item ${index % 2 === 0 ? 'em-testing-photo-left' : 'em-testing-photo-right'} animate-on-scroll ${index % 2 === 0 ? 'fade-left' : 'fade-right'}`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="em-testing-photo-image">
                  <img 
                    src={testCase.image} 
                    alt={testCase.alt}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/photos/lab-bg.png';
                    }}
                  />
                </div>
                <div className="em-testing-photo-caption">
                  <h3>{testCase.title}</h3>
                  <p>{testCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS & EQUIPMENT */}
      <section className="em-testing-tools">
        <div className="container">
          <h2 className="section-title animate-on-scroll fade-up">Tools &amp; Equipment</h2>
          
          <div className="em-testing-tools-columns">
            <div className="em-testing-tools-column animate-on-scroll fade-left">
              <h3>Simulation &amp; Automation</h3>
              {designTools.map((tool, idx) => (
                <div key={idx} className="em-testing-tool-group">
                  <h4>{tool.category}</h4>
                  <ul>
                    {tool.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="em-testing-tools-column animate-on-scroll fade-right">
              <h3>Measurement Equipment</h3>
              <ul className="em-testing-measurement-list">
                {measurementTools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="em-testing-why-us">
        <div className="container">
          <h2 className="section-title animate-on-scroll fade-up">Why Leading Companies Choose RSDT</h2>
          
          <div className="em-testing-why-us-grid">
            {whyChoose.map((item, index) => (
              <div 
                key={index} 
                className="em-testing-why-us-card animate-on-scroll fade-up"
                style={{ animationDelay: `${0.15 * index}s` }}
              >
                <div className="em-testing-why-us-circle">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — оранжевый */}
      <section className="cta-orange-grid">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2>Ready to ensure the reliability of your radar sensor?</h2>
              <p style={{ fontSize: '1.15rem', color: '#555', maxWidth: '480px' }}>
                Contact our team today. We’ll create a custom testing program tailored to your project.
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
              
              <Link to="/contact" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                Go to Contact Page →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmbeddedTesting;