import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, CircuitBoard, Wrench, Layers, Terminal } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import './Skills.css';

const categoryIcons = {
  programming: Terminal,
  hdl: Code2,
  vlsi: Cpu,
  eda: Layers,
  embedded: CircuitBoard,
  software: Wrench,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const visibleCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">03 / Technical Stack</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Core competencies across HDL &amp; VLSI design, EDA toolchains, embedded microcontrollers, and application software.
          </p>
        </div>

        <div className="skills__tabs" role="tablist" aria-label="Skill categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'all'}
            className={`skills__tab ${activeCategory === 'all' ? 'skills__tab--active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Domains
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`skills__tab ${activeCategory === cat.id ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills__grid">
          {visibleCategories.map((category, idx) => {
            const Icon = categoryIcons[category.id] || Cpu;
            return (
              <motion.article
                key={category.id}
                className="glass-card skills__card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <div className="skills__card-header">
                  <div className="skills__card-title-wrap">
                    <span className="skills__card-icon">
                      <Icon size={18} />
                    </span>
                    <h3 className="skills__card-title">{category.label}</h3>
                  </div>
                  <span className="skills__card-code">{category.code}</span>
                </div>

                <ul className="skills__list">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="skills__item">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-tag">{skill.tag}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
