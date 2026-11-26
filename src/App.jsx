import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Cpu, UserCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Certifications from './components/Certifications';
import EducationAchievements from './components/EducationAchievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [activeSlide, setActiveSlide] = useState('engineering');

  const switchSlide = (slide, targetId = 'portfolio-slides') => {
    setActiveSlide(slide);
    window.setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  return (
    <>
      <Navbar activeSlide={activeSlide} onNavigate={switchSlide} />
      <main>
        <Hero onViewProjects={() => switchSlide('engineering', 'projects')} />
        <div className="section-divider" />

        <div id="portfolio-slides" className="slide-switcher-wrap">
          <div className="container">
            <div className="slide-switcher" role="tablist" aria-label="Portfolio sections">
              <button
                type="button"
                role="tab"
                aria-selected={activeSlide === 'engineering'}
                className={`slide-tab ${activeSlide === 'engineering' ? 'slide-tab--active' : ''}`}
                onClick={() => setActiveSlide('engineering')}
              >
                <span className="slide-tab__title">
                  <Cpu size={18} />
                  Engineering &amp; Projects
                </span>
                <span className="slide-tab__sub">Area of Interest • Projects • Skills</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeSlide === 'personal'}
                className={`slide-tab ${activeSlide === 'personal' ? 'slide-tab--active' : ''}`}
                onClick={() => setActiveSlide('personal')}
              >
                <span className="slide-tab__title">
                  <UserCheck size={18} />
                  Personal Details
                </span>
                <span className="slide-tab__sub">Academics • Internship &amp; Research • Certifications</span>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeSlide === 'engineering' ? (
            <motion.div
              key="engineering"
              role="tabpanel"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <About />
              <div className="section-divider" />
              <Projects />
              <div className="section-divider" />
              <Skills />
              <div className="container slide-footer-nav">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => switchSlide('personal', 'portfolio-slides')}
                >
                  Next: Personal Details
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="personal"
              role="tabpanel"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <EducationAchievements />
              <div className="section-divider" />
              <Research />
              <div className="section-divider" />
              <Certifications />
              <div className="container slide-footer-nav">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => switchSlide('engineering', 'portfolio-slides')}
                >
                  <ArrowLeft size={16} />
                  Back: Engineering &amp; Projects
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="section-divider" />
        <Resume />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer onNavigate={switchSlide} />
    </>
  );
}
