import React from 'react';
import { Link } from 'react-router-dom';
import './RadarAdvantageSection.css';

const RadarAdvantageSection: React.FC = () => {
  return (
    <section className="radar-advantage-section" id="why-radar">
      <div className="container">
        <div className="radar-advantage-content">
          <h2>Why Radar Is the <span className="gradient-text">Smarter Choice</span> for In‑Cabin Safety</h2>
          <p className="lead">
            Cameras need light. LiDAR fails through fabric. But radar sees through seats, blankets, and darkness — 
            detecting a sleeping child, a passenger in distress, or an intruder <strong>with absolute reliability</strong>.
          </p>
          
          {/* Кнопка Learn more */}
          <div className="learn-more-wrapper">
            <Link to="/why-radars" className="btn-learn-more" onClick={() => console.log('Link clicked: /why-radars')}>
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <p className="highlight-statement">
            We chose radar because <strong className="accent">only radar combines privacy, all‑weather performance, and life‑saving accuracy inside the vehicle</strong>:
          </p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🛡️👶</div>
              <h3>Privacy‑Preserving</h3>
              <p>No camera means no video footage — zero privacy concerns. Radar detects presence and vital signs without recording occupants.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌙🔒</div>
              <h3>Any Condition, Any Cover</h3>
              <p>Works through child seats, blankets, thick clothing, and in complete darkness. Cameras fail — radar never sleeps.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">❤️📈</div>
              <h3>Vital Sensing, No Contact</h3>
              <p>Measures micro‑chest movements for heart rate and breathing — alerts to drowsiness, stress, or medical emergencies without wearables.</p>
            </div>
          </div>
          <div className="radar-quote">
            <span className="quote-mark">“</span>
            Cameras see what's visible. Radar sees what matters — even when hidden.
            <span className="quote-mark">”</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadarAdvantageSection;