import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Resume.css';

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <motion.div
          className="glass-card resume-banner"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <div className="resume-banner__info">
            <div className="resume-banner__icon">
              <FileText size={26} />
            </div>
            <div>
              <span className="section-eyebrow">Curriculum Vitae</span>
              <h2 className="resume-banner__title">Resume</h2>
              <p className="resume-banner__desc">
                Access my complete academic background, VLSI &amp; embedded projects, and research fellowship details.
              </p>
            </div>
          </div>

          <div className="resume-banner__actions">
            <a
              href={personalInfo.resumePath}
              download="Banamali_Sahu_Resume.pdf"
              className="btn btn-primary"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <ExternalLink size={16} />
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
