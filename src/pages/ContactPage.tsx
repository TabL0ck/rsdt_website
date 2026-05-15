import React, { useState } from 'react';
import './ContactPage.css';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../components/APILoginData'

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
        const SERVICE_ID = EMAILJS_CONFIG.SERVICE_ID;
        const TEMPLATE_ID = EMAILJS_CONFIG.TEMPLATE_ID;
        const PUBLIC_KEY = EMAILJS_CONFIG.PUBLIC_KEY;

        await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
            from_name: formData.name,
            from_email: formData.email,
            company: formData.company || 'Не указано',
            message: formData.message,
            to_name: 'RSDT Team',
            reply_to: formData.email,           // ← добавлено
        },
        PUBLIC_KEY
        );

        setSubmitted(true);

        setTimeout(() => {
        setSubmitted(false);
        setFormData({
            name: '',
            email: '',
            company: '',
            message: ''
        });
        }, 2800);

    } catch (err) {
        console.error('EmailJS error:', err);
        setError('Ошибка отправки. Попробуйте позже или напишите на contact@rsdt.tech');
    } finally {
        setIsSubmitting(false);
    }
    };

  return (
    <div className="contact-page">
      {/* Hero Section (без изменений) */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <div className="contact-badge">GET IN TOUCH</div>
          <h1>Contact Us</h1>
          <p>
            Ready to discuss your next radar sensor project? <br />
            Our team is here to help bring your ideas to life.
          </p>
          <div className="info-buttons" style={{ justifyContent: 'center', marginTop: '2rem' }}>
            <Link to="/" className="btn-primary">← Back to Home</Link>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send us a message</h2>
              <p className="form-subtitle">
                Fill out the form below and we'll respond within 24 hours.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="input-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label htmlFor="company">Company / Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="message">Message / Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, requirements, timeline..."
                      rows={7}
                      required
                    />
                  </div>

                  {error && (
                    <div style={{ color: '#e74c3c', fontSize: '0.9rem', marginBottom: '1rem' }}>
                      {error}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="btn-primary contact-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span> Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  <p className="form-note">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              ) : (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Thank you!</h3>
                  <p>
                    Your message has been sent successfully.<br />
                    We'll get back to you within <strong>24 hours</strong>.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Information (без изменений) */}
            <div className="contact-info">
              <h2>Let's connect</h2>
              
              <div className="info-block">
                <div className="info-icon">✉️</div>
                <div>
                  <h4>Email Us</h4>
                  <a href="mailto:contact@rsdt.tech">contact@rsdt.tech</a>
                  <p>General inquiries & project requests</p>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:+971585299178">+971 58 5299178 </a>
                  <p>Mon–Fri, 9:00–18:00 (EET)</p>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Visit Us</h4>
                  <address>
                    RSDT Engineering Center<br />
                    Dhubai Hills, Dhubai<br />
                    United Arab Emirates
                  </address>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow our work</h4>
                <div className="social-icons">
                  <a href="https://linkedin.com/company/rsdt" target="_blank" rel="noopener noreferrer">in</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">𝕏</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">▶</a>
                </div>
              </div>

              <div className="response-time">
                <strong>Average response time:</strong> &lt; 4 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (без изменений) */}
      <section className="contact-faq">
        <div className="contact-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How quickly can we start a project?</h4>
              <p>Most projects begin within 2–4 weeks after initial consultation and requirements alignment.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer NDA before discussion?</h4>
              <p>Yes. We routinely sign NDAs and can provide our standard template upon request.</p>
            </div>
            <div className="faq-item">
              <h4>What is the typical project timeline?</h4>
              <p>From concept to production-ready sensor: 6 to 18 months depending on complexity and certification needs.</p>
            </div>
            <div className="faq-item">
              <h4>Do you work with international clients?</h4>
              <p>Absolutely. We have successfully delivered projects for customers in South Korea, Europe, and North America.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;