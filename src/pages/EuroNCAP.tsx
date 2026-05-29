import React from 'react';
import { Link } from 'react-router-dom';
import './EuroNCAP.css';

const protocolHighlights = [
  {
    section: '1.1',
    title: 'Why CPD matters',
    text: 'Euro NCAP states that temperatures can reach a critical level in just 15 minutes and that leaving windows ajar does little to reduce the threat.',
  },
  {
    section: '2.1.1',
    title: 'Direct sensing',
    text: 'The protocol defines direct sensing as detection of the absolute presence of a human by heartbeat, respiration, movement, or another sign of life.',
  },
  {
    section: '3.3.2',
    title: 'Children up to six',
    text: 'A CPD system with warnings must address children up to and including six years old, covering both unintentionally and intentionally left-behind cases.',
  },
  {
    section: '4.2.1',
    title: 'Initial warning',
    text: 'When a child is assumed or detected inside a locked vehicle, an exterior initial warning is required at the moment of locking, with only a short assessment delay permitted.',
  },
];

const requirementCards = [
  {
    title: 'Full cabin coverage',
    reference: 'Sections 3.3.3 and 8.4.1',
    copy: 'Euro NCAP expects likely child positions, all seat rows, optional seats, removable seats, and, for Scenario 3, footwell areas to be considered. Microwave Sensors Development radar architecture is developed for cabin-wide coverage across passenger seating zones and hidden child positions.',
  },
  {
    title: 'Life-sign based detection',
    reference: 'Sections 2.1.1 and 8.6',
    copy: 'The protocol specifically recognizes heartbeat, respiration, movement, and other signs of life. It also lists sleeping-child respiration rates from newborn to six-year-old children. Microwave Sensors Development uses mmWave radar to detect subtle breathing and motion without a camera image of the child.',
  },
  {
    title: 'Required warning behavior',
    reference: 'Sections 4.2.3, 4.3.4, and 4.3.6',
    copy: 'From 2025, the initial warning must include visual and audible vehicle components. Escalation warnings must start within the defined timing window and repeat persistently. Microwave Sensors Development CPD outputs are designed to support OEM warning strategies that follow these timing and signal requirements.',
  },
  {
    title: 'Intervention readiness',
    reference: 'Sections 5.3.1 and 5.3.2',
    copy: 'Euro NCAP rewards interventions that actively reduce hyperthermia risk by initiating rescue, allowing access, or reducing interior temperature within defined time limits. Microwave Sensors Development sensing provides the reliable child-presence trigger needed for those vehicle-level interventions.',
  },
];

const EuroNCAP: React.FC = () => {
  return (
    <div className="about-page euroncap-page">
      <section className="about-hero euroncap-hero">
        <div
          className="euroncap-hero-bg"
          style={{
            backgroundImage: "url('/background/child_sit.png')",
          }}
        />
        <div className="about-hero-content euroncap-hero-content">
          <span className="about-badge">Euro NCAP CPD Protocol v1.1</span>
          <h1>Child Presence Detection for Hot-Car Safety</h1>
          <p>
            Microwave Sensors Development builds direct-sensing radar technology aligned with
            Euro NCAP Child Presence Detection requirements.
          </p>
          <div className="info-buttons">
            <Link to="/" className="btn-primary">Back to main</Link>
          </div>
        </div>
      </section>

      <section className="about-section about-history">
        <div className="about-container">
          <h2>The Problem: Heat Turns a Parked Car into a Trap</h2>
          <div className="about-story-grid">
            <div className="about-story-text">
              <p>
                Pediatric vehicular heatstroke is a preventable tragedy. A parked vehicle can
                become dangerous quickly because the cabin traps solar heat while a young child
                has limited ability to regulate body temperature or escape independently. Euro
                NCAP highlights this urgency in Section 1.1 of the CPD Test and Assessment
                Protocol: critical temperatures can be reached in just 15 minutes, and slightly
                opened windows do little to reduce the risk.
              </p>
              <p>
                Section 1.2 expands the safety case beyond hot summer weather. CPD technology is
                intended to address children left behind intentionally or unintentionally, and it
                also recognizes older children who may enter an unlocked vehicle and become
                trapped. This is why Microwave Sensors Development treats CPD as a core
                life-saving function, not as a comfort feature.
              </p>
            </div>
            <div className="about-story-image">
              <img
                src="/images/child-safety.png"
                alt="Child safety monitoring inside a vehicle"
              />
            </div>
          </div>

          <h2>Protocol Points that Shape the Solution</h2>
          <div className="euroncap-highlight-grid">
            {protocolHighlights.map((item) => (
              <article className="euroncap-highlight-card" key={item.section}>
                <span>Section {item.section}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <h2>How Microwave Sensors Development Matches Euro NCAP Expectations</h2>
          <div className="euroncap-requirements">
            {requirementCards.map((item) => (
              <article className="euroncap-requirement" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <span>{item.reference}</span>
                </div>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>

          <h2>Direct Sensing is the 2025 Direction</h2>
          <div className="about-story-grid">
            <div className="about-story-image">
              <img
                src="/images/radar-wave.png"
                alt="Radar wave visualization for in-cabin sensing"
              />
            </div>
            <div className="about-story-text">
              <p>
                Euro NCAP Section 6.2 makes the market direction clear: from 2025 onward, points
                are awarded to direct-sensing systems that cover the required scenarios and
                provide initial warnings, escalation warnings, and, for maximum scoring,
                intervention support. Indirect sensing and reminder-only approaches no longer
                receive points in that scoring path.
              </p>
              <p>
                Microwave Sensors Development CPD sensors correspond to this direct-sensing
                expectation because they detect physical signs of a living occupant rather than
                relying only on door logic or seat events. This supports Euro NCAP-aligned
                detection for sleeping infants, restrained children, and children hidden under
                blankets or in low-light conditions.
              </p>
            </div>
          </div>

          <h2>Assessment Evidence for OEM Programs</h2>
          <div className="about-story-grid">
            <div className="about-story-text">
              <p>
                Section 8.4 requires a dossier with sensor type and principle, sensor location,
                system architecture, detection method, coverage areas, deactivation logic, sensing
                data, thresholds, and compliance demonstrations. Microwave Sensors Development
                engineering documentation is structured to support these dossier needs for OEM
                validation and Euro NCAP assessment.
              </p>
              <p>
                Section 8.6 identifies respiration and movement as specific system parameters,
                including sleeping-child breathing rates of 30 bpm for a newborn, 22 bpm for a
                one-year-old, 20 bpm for a three-year-old, and 18 bpm for a six-year-old.
                Microwave Sensors Development radar technology is built around precisely these
                non-contact vital-sign and motion cues.
              </p>
            </div>
            <div className="about-story-image">
              <img
                src="/images/cockpit.png"
                alt="Vehicle cabin prepared for occupant monitoring"
              />
            </div>
          </div>

          <h3>Euro NCAP Alignment Summary</h3>
          <div className="about-projects">
            <div className="project-item">
              <div className="project-icon">01</div>
              <div className="project-info">
                <h4>Direct sensing of signs of life</h4>
                <span className="project-client">Protocol Sections 2.1.1 and 8.6</span>
              </div>
            </div>
            <div className="project-item">
              <div className="project-icon">02</div>
              <div className="project-info">
                <h4>Child scenarios up to six years old</h4>
                <span className="project-client">Protocol Sections 3.3.2 and 8.5.3</span>
              </div>
            </div>
            <div className="project-item">
              <div className="project-icon">03</div>
              <div className="project-info">
                <h4>Warnings and intervention-ready outputs</h4>
                <span className="project-client">Protocol Sections 4.2, 4.3, and 5.3</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EuroNCAP;
