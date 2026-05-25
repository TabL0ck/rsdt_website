import React from 'react';
import '../styles/design-services-page-styles.css';

const Footer: React.FC = () => (
  <footer className="footer" id="contact">
      {/* FINAL CTA — Contact Us style (orange) */}
      <section className="cta-orange-grid">
          <div className="container">
              <div className="contact-grid">
                  <div>
                      <h2>Ready to experience next-generation radar?</h2>
                      <p style={{ fontSize: '1.15rem', color: '#555', maxWidth: '480px' }}>
                          Let’s create a custom radar solution optimized for your defense, surveillance, or research application.
                      </p>
                  </div>

                  <div className="contact-card">
                      <h3>
                          <span className="icon">📍</span> 
                          Get in Touch
                      </h3>
                      <p>
                          <strong>Email:</strong> <a href="mailto:contact@mw-sensor.com">contact@mw-sensor.com</a><br />
                          <strong>Phone:</strong> <a href="https://t.me/emirates_temi4">+971 58 5299178 (Telegram)</a><br />
                          <strong>Address:</strong> Dubai, United Arab Emirates
                      </p>
                      
                      <a href="/contact" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                          Book a Consultation →
                      </a>
                  </div>
              </div>
          </div>
      </section>
    <p className="footer-copy">
      &copy; 2026 MW-Sensor. Shaping safer, smarter, and more responsive vehicles.<br />
      Intelligent mmWave technology that sees more. So you can do more.<br />
      <span className="footer-tenure">10 years of innovation in radar sensing.</span>
    </p>
  </footer>
);

export default Footer;