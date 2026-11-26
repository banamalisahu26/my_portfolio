import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import './Certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">04 / Certifications</span>
          <h2 className="section-title">Training &amp; Certifications</h2>
          <p className="section-subtitle">
            Industry-aligned technical training in semiconductor technology, VLSI design, and electronic characterization.
          </p>
        </div>

        <div className="certs__grid">
          {certifications.map((cert, idx) => (
            <motion.article
              key={cert.id}
              className="glass-card cert-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.38, delay: idx * 0.05 }}
            >
              <div className="cert-card__body">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span className="cert-card__issuer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <Award size={15} />
                    {cert.issuer}
                  </span>
                  <span className="tech-chip">{cert.code}</span>
                </div>
                <h3 className="cert-card__title">{cert.title}</h3>
                <p className="cert-card__focus">{cert.focus}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
