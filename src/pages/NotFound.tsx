import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      {/* Animated Radar */}
      <div className="radar-wrapper">
        <div className="radar">
          <div className="radar-sweep"></div>
          <div className="radar-dots"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="not-found-content">
        <div className="error-number">404</div>
        
        <h1 className="error-title">SIGNAL LOST</h1>
        
        <p className="error-message">
          The radar failed to detect this page.<br />
          It may have been moved or no longer exists in the system.
        </p>

        <Link to="/" className="back-home-btn">
          <span>RETURN TO HOMEPAGE</span>
          <div className="btn-glow"></div>
        </Link>
      </div>

      {/* Scanning Lines */}
      <div className="scan-lines"></div>
    </div>
  );
};

export default NotFound;