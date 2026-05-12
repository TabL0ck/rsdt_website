import React from 'react';

const AdvantagesSection: React.FC = () => (
  <section className="advantages-section" id="advantages">
    <h2>Advantages of mmWave Radar Sensors</h2>
    <div className="advantages-grid">
      <div className="advantage-card"><h4>🔬 High Sensitivity</h4><p>Detects the slightest micro-movements — reliable presence detection in any condition.</p></div>
      <div className="advantage-card"><h4>🔧 Flexible Mounting</h4><p>Customizable for specific vehicle architecture — behind headliner, B-pillar, or roof.</p></div>
      <div className="advantage-card"><h4>📐 Seamless Integration</h4><p>Compact 66×34×10 mm form factor integrates effortlessly into interior locations.</p></div>
      <div className="advantage-card"><h4>🛡️ Built to Perform</h4><p>Operates reliably in extreme conditions. Robust to vibration, temperature, and interference.</p></div>
      <div className="advantage-card"><h4>📡 Reliable Performance</h4><p>Wide field-of-view ensures consistent detection throughout the entire cabin — even footwell areas.</p></div>
      <div className="advantage-card"><h4>🔒 Privacy-Focused</h4><p>Monitors presence and movement without capturing images — protecting passenger privacy.</p></div>
    </div>
  </section>
);

export default AdvantagesSection;