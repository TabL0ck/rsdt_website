import React from 'react';

const SpecsStrip: React.FC = () => (
  <section className="specs-strip" id="specs">
    <div className="specs-strip-inner">
      <div className="spec-item"><div className="spec-value">64 GHz</div><div className="spec-label">FMCW Radar AiP</div></div>
      <div className="spec-item"><div className="spec-value">115° / 108°</div><div className="spec-label">Azimuth / Elevation</div></div>
      <div className="spec-item"><div className="spec-value">&lt; 65 mW</div><div className="spec-label">Active Standby</div></div>
      <div className="spec-item"><div className="spec-value">-40°C…85°C</div><div className="spec-label">Ambient Temperature</div></div>
      <div className="spec-item"><div className="spec-value">CAN Bus</div><div className="spec-label">Connection</div></div>
    </div>
  </section>
);

export default SpecsStrip;