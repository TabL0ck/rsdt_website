import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


const DualBlocksSection: React.FC = () => {
  const navigate = useNavigate();

  const handleLearnMore = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    if (window.location.hash !== '#/' && window.location.hash !== '') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    e.preventDefault();
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="dual-blocks-section" id="solutions">
      <div className="dual-blocks-inner">
        {/* Radar Solutions – фон 1.jpg */}
        <div
          className="service-card"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(/photos/1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="service-icon">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="24" cy="24" r="10" />
              <circle cx="24" cy="24" r="3" />
              <line x1="24" y1="14" x2="24" y2="6" />
              <line x1="24" y1="34" x2="24" y2="42" />
              <line x1="14" y1="24" x2="6" y2="24" />
              <line x1="34" y1="24" x2="42" y2="24" />
              <line x1="16.3" y1="16.3" x2="10" y2="10" />
              <line x1="31.7" y1="31.7" x2="38" y2="38" />
              <line x1="16.3" y1="31.7" x2="10" y2="38" />
              <line x1="31.7" y1="16.3" x2="38" y2="10" />
            </svg>
          </div>
          <h3>Radar Solutions</h3>
          <ul className="service-list">

            <li>
              <b><strong>Frequency-Modulated Continuous-Wave (FMCW) Radar Sensors:</strong></b>
              <ul>
                <li><Link to="/roas">Rear Occupant Alert Sensor</Link></li>
                <li><Link to="/medical-sensor">Vital Signs Monitoring Sensor</Link></li>
                <li>Driver Monitoring Sensor</li>
                <li>Driver & Passenger Monitoring System</li>
                <li>Child presence detection</li>
                <li>Intrusion detection</li>
              </ul>
            </li>

            <li>
              <b><strong>Ultra Wide Band (UWB) Radar Sensors:</strong></b>
              <ul>
                <li>UWB Rear Occupant Alert Sensor</li>
                <li>UWB Rear KICK Sensor </li>
                <li>Child presence detection</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Design Services – фон 7.jpg */}
        <div
          className="service-card"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(/photos/7.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="service-icon">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="8" y="12" width="32" height="24" rx="3" />
              <line x1="24" y1="12" x2="24" y2="8" />
              <line x1="24" y1="36" x2="24" y2="40" />
              <line x1="8" y1="20" x2="4" y2="20" />
              <line x1="8" y1="28" x2="4" y2="28" />
              <line x1="40" y1="20" x2="44" y2="20" />
              <line x1="40" y1="28" x2="44" y2="28" />
              <rect x="14" y="16" width="8" height="6" rx="1" />
              <rect x="26" y="16" width="8" height="6" rx="1" />
              <rect x="14" y="25" width="20" height="6" rx="1" />
            </svg>
          </div>
          <h3>Design Services</h3>
          <ul className="service-list">
            <li><Link to="/embedded-software">Embedded software</Link></li>
            <li><Link to="/embedded-hardware">Embedded hardware</Link></li>
            <li><b>Embedded testing</b></li>
            <li><b>Antenna design</b></li>
          </ul>
        </div>

        {/* Semiconductors*/}
        <div
          className="service-card"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(/photos/2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        <div className="service-icon">
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Основной корпус чипа */}
            <rect x="10" y="10" width="28" height="28" rx="3" />
            
            {/* Центральная область (кристалл) */}
            <rect x="16" y="16" width="16" height="16" rx="2" />
            
            {/* Внутренние линии (схема) */}
            <line x1="18" y1="20" x2="30" y2="20" />
            <line x1="18" y1="24" x2="30" y2="24" />
            <line x1="18" y1="28" x2="30" y2="28" />
            
            {/* Ножки сверху */}
            <line x1="16" y1="10" x2="16" y2="6" />
            <line x1="24" y1="10" x2="24" y2="6" />
            <line x1="32" y1="10" x2="32" y2="6" />
            
            {/* Ножки снизу */}
            <line x1="16" y1="38" x2="16" y2="42" />
            <line x1="24" y1="38" x2="24" y2="42" />
            <line x1="32" y1="38" x2="32" y2="42" />
            
            {/* Ножки слева */}
            <line x1="10" y1="16" x2="6" y2="16" />
            <line x1="10" y1="24" x2="6" y2="24" />
            <line x1="10" y1="32" x2="6" y2="32" />
            
            {/* Ножки справа */}
            <line x1="38" y1="16" x2="42" y2="16" />
            <line x1="38" y1="24" x2="42" y2="24" />
            <line x1="38" y1="32" x2="42" y2="32" />
          </svg>
        </div>
          <h3>Semiconductors</h3>
          <ul className="service-list">
            <li><b>blank</b></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DualBlocksSection;