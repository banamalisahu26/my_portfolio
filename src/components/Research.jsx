import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Building2, Calendar, UserCheck, CheckCircle2 } from 'lucide-react';
import { researchExperience } from '../data/portfolioData';
import './Research.css';

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">03 / Internship &amp; Research Experience</span>
          <h2 className="section-title">Internship &amp; Research Experience</h2>
          <p className="section-subtitle">
            Applied biomedical hardware research and non-invasive physiological instrumentation.
          </p>
        </div>

        <motion.article
          className="glass-card research-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
        >
          <div className="research-card__top">
            <div className="research-card__badge">
              <FlaskConical size={16} />
              <span>National Summer Research Fellowship</span>
            </div>
            <span className="research-card__duration">
              <Calendar size={14} />
              {researchExperience.duration}
            </span>
          </div>

          <h3 className="research-card__fellowship">{researchExperience.fellowship}</h3>

          <div className="research-card__meta">
            <div className="research-card__meta-item">
              <Building2 size={16} />
              <span>
                <strong>Organization:</strong> {researchExperience.organization}
              </span>
            </div>
            <div className="research-card__meta-item">
              <UserCheck size={16} />
              <span>
                <strong>Research Supervisor:</strong> {researchExperience.supervisor}
              </span>
            </div>
          </div>

          <div className="research-card__project-box">
            <span className="research-card__project-label">Research Project</span>
            <p className="research-card__project-title">{researchExperience.projectTitle}</p>
          </div>

          <div className="research-card__highlights">
            <span className="research-card__highlights-label">Key Research &amp; Engineering Areas</span>
            <div className="research-card__highlights-grid">
              {researchExperience.highlights.map((item) => (
                <div key={item} className="research-card__highlight-item">
                  <CheckCircle2 size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="research-card__extra">
            <span className="research-card__highlights-label">Additional Research Work</span>
            <div className="research-card__extra-grid">
              {researchExperience.additionalWorks.map((work) => (
                <div key={work.id} className="research-extra-item">
                  <div className="research-extra-item__top">
                    <h4 className="research-extra-item__title">{work.title}</h4>
                    <span
                      className={`research-extra-item__status ${
                        work.isUnsuccessful ? 'research-extra-item__status--unsuccessful' : ''
                      }`}
                    >
                      {work.status}
                    </span>
                  </div>
                  <p className="research-extra-item__desc">{work.description}</p>
                  <div className="research-extra-item__tags">
                    {work.tags.map((tag) => (
                      <span key={tag} className="tech-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
