import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Github,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import CircuitBackground from './CircuitBackground';
import './Hero.css';

export default function Hero({ onViewProjects }) {
  return (
    <section id="top" className="hero">
      <CircuitBackground />

      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <h1 className="hero__title">{personalInfo.greeting}</h1>
          <p className="hero__subtitle">{personalInfo.headline}</p>
          <p className="hero__description">{personalInfo.heroDescription}</p>

          <div className="hero__cta-group">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                if (onViewProjects) {
                  e.preventDefault();
                  onViewProjects();
                }
              }}
            >
              View My Projects
              <ArrowRight size={16} />
            </a>
            <a
              href={personalInfo.resumePath}
              download="Banamali_Sahu_Resume.pdf"
              className="btn btn-secondary"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          <div className="hero__socials">
            <span className="hero__socials-label">Connect</span>
            <a
              href={personalInfo.contact.linkedinUrl || '#contact'}
              className="hero__social-btn"
              aria-label="LinkedIn Profile (Placeholder)"
              title={personalInfo.contact.linkedinLabel}
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.contact.githubUrl || '#contact'}
              className="hero__social-btn"
              aria-label="GitHub Profile (Placeholder)"
              title={personalInfo.contact.githubLabel}
            >
              <Github size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <img
            src="/profile.jpg"
            alt="Banamali Sahu"
            className="hero__photo-img"
          />
        </motion.div>
      </div>
    </section>
  );
}
