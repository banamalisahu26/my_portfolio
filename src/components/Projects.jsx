import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Github, X, CheckCircle2, Info } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectVisual from './ProjectVisual';
import './Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [placeholderNotice, setPlaceholderNotice] = useState('');

  const handleGithubClick = (project) => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    } else {
      setPlaceholderNotice(
        `GitHub link for "${project.title}" is a placeholder. Add the repository URL in src/data/portfolioData.js.`
      );
      setTimeout(() => setPlaceholderNotice(''), 4000);
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">02 / Hardware &amp; Systems</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Selected engineering prototypes spanning biomedical instrumentation, IoMT, Verilog RTL design, and embedded automation.
          </p>
        </div>

        {placeholderNotice && (
          <div className="projects__notice" role="status">
            <Info size={16} />
            <span>{placeholderNotice}</span>
          </div>
        )}

        <div className="projects__grid">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              className="glass-card project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <ProjectVisual
                type={project.visualType}
                code={project.code}
                imagePath={project.imagePath}
                title={project.title}
              />

              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className="project-card__code">{project.code}</span>
                  <span className="project-card__domain">{project.domain}</span>
                </div>

                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.shortDescription}</p>

                <div className="project-card__tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card__actions">
                <button
                  type="button"
                  className="btn btn-primary project-card__btn"
                  onClick={() => setSelectedProject(project)}
                >
                  <Eye size={16} />
                  View Details
                </button>
                <button
                  type="button"
                  className="btn btn-ghost project-card__btn"
                  onClick={() => handleGithubClick(project)}
                  title="GitHub Repository (Placeholder)"
                >
                  <Github size={16} />
                  GitHub
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-card modal-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-panel__header">
                <div>
                  <span className="project-card__code">{selectedProject.code} • {selectedProject.domain}</span>
                  <h3 id="modal-project-title" className="modal-panel__title">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  className="modal-panel__close"
                  aria-label="Close project details"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={20} />
                </button>
              </div>

              <ProjectVisual
                type={selectedProject.visualType}
                code={selectedProject.code}
                imagePath={selectedProject.imagePath}
                title={selectedProject.title}
              />

              <p className="modal-panel__desc">{selectedProject.shortDescription}</p>

              <div className="modal-panel__section">
                <h4>Key Engineering Highlights</h4>
                <ul className="modal-panel__list">
                  {selectedProject.highlights.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-panel__section">
                <h4>Technologies &amp; Hardware Stack</h4>
                <div className="project-card__tech">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-panel__footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => handleGithubClick(selectedProject)}
                >
                  <Github size={16} />
                  {selectedProject.githubUrl ? 'Open Repository' : 'GitHub Repo (Placeholder)'}
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
