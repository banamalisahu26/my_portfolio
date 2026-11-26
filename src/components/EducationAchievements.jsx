import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy } from 'lucide-react';
import { educationList, achievements } from '../data/portfolioData';
import './EducationAchievements.css';

export default function EducationAchievements() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="edu-ach__grid">
          {/* Education Column */}
          <div>
            <div className="section-header edu-ach__header">
              <span className="section-eyebrow">01 / Academics</span>
              <h2 className="section-title">Academics</h2>
            </div>

            <div className="edu__timeline">
              {educationList.map((edu, idx) => (
                <motion.article
                  key={edu.level}
                  className="glass-card edu__card"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.38, delay: idx * 0.06 }}
                >
                  <div className="edu__card-top">
                    <span className="edu__icon">
                      <GraduationCap size={18} />
                    </span>
                    <span className="tech-chip">{edu.badge}</span>
                  </div>
                  <h3 className="edu__level">{edu.level}</h3>
                  <p className="edu__institution">{edu.institution}</p>
                  <p className="edu__detail">{edu.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Achievements Column */}
          <div id="achievements">
            <div className="section-header edu-ach__header">
              <span className="section-eyebrow">02 / Milestones</span>
              <h2 className="section-title">Achievements</h2>
            </div>

            <div className="ach__list">
              {achievements.map((item, idx) => (
                <motion.article
                  key={item.title}
                  className="glass-card ach__card"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.38, delay: idx * 0.06 }}
                >
                  <div className="ach__icon">
                    <Trophy size={18} />
                  </div>
                  <div className="ach__content">
                    <span className="ach__category">{item.category}</span>
                    <h3 className="ach__title">{item.title}</h3>
                    <p className="ach__desc">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
