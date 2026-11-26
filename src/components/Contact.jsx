import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Info, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

// Set this to your real Formspree / backend endpoint when ready to enable live submissions.
const CONTACT_ENDPOINT = '';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', text: 'Please fill in all fields before submitting.' });
      return;
    }

    if (!CONTACT_ENDPOINT) {
      setStatus({
        type: 'info',
        text: 'Contact form submission is currently disabled until a real backend or email service endpoint (e.g., Formspree, EmailJS, or a Vercel serverless function) is configured in src/components/Contact.jsx.',
      });
      return;
    }

    try {
      setSubmitting(true);
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', text: 'Thank you! Your message has been sent.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', text: 'Unable to send message. Please try again later.' });
      }
    } catch {
      setStatus({ type: 'error', text: 'Network error while sending message.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Open to VLSI, semiconductor, embedded systems, and biomedical hardware opportunities.
          </p>
        </div>

        <div className="contact__grid">
          <motion.div
            className="glass-card contact__info"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="contact__info-title">Direct Channels</h3>
            <p className="contact__info-desc">
              Feel free to reach out regarding internships, research collaborations, or entry-level hardware engineering roles.
            </p>

            <div className="contact__links">
              <div className="contact__link-item">
                <span className="contact__link-icon">
                  <Mail size={18} />
                </span>
                <div>
                  <span className="contact__link-label">Email</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {personalInfo.contact.emails.map((emailAddress) => (
                      <a
                        key={emailAddress}
                        href={`mailto:${emailAddress}`}
                        className="contact__link-anchor"
                      >
                        {emailAddress}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="contact__link-item">
                <span className="contact__link-icon">
                  <Linkedin size={18} />
                </span>
                <div>
                  <span className="contact__link-label">LinkedIn</span>
                  {personalInfo.contact.linkedinUrl ? (
                    <a
                      href={personalInfo.contact.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__link-anchor"
                    >
                      {personalInfo.contact.linkedinLabel}
                    </a>
                  ) : (
                    <span className="contact__link-value">{personalInfo.contact.linkedinLabel}</span>
                  )}
                </div>
              </div>

              <div className="contact__link-item">
                <span className="contact__link-icon">
                  <Github size={18} />
                </span>
                <div>
                  <span className="contact__link-label">GitHub</span>
                  {personalInfo.contact.githubUrl ? (
                    <a
                      href={personalInfo.contact.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__link-anchor"
                    >
                      {personalInfo.contact.githubLabel}
                    </a>
                  ) : (
                    <span className="contact__link-value">{personalInfo.contact.githubLabel}</span>
                  )}
                </div>
              </div>

              <div className="contact__link-item">
                <span className="contact__link-icon">
                  <MapPin size={18} />
                </span>
                <div>
                  <span className="contact__link-label">Location</span>
                  <span className="contact__link-value">Berhampur, Odisha, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="glass-card contact__form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Internship / Research / Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {status.text && (
              <div className={`contact__status contact__status--${status.type}`} role="status">
                <Info size={16} />
                <span>{status.text}</span>
              </div>
            )}

            <button type="submit" className="btn btn-primary contact__submit" disabled={submitting}>
              <Send size={16} />
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
