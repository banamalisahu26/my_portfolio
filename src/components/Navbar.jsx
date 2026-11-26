import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Area of Interest', href: '#about', id: 'about', slide: 'engineering' },
  { label: 'Projects', href: '#projects', id: 'projects', slide: 'engineering' },
  { label: 'Skills', href: '#skills', id: 'skills', slide: 'engineering' },
  { label: 'Academics', href: '#education', id: 'education', slide: 'personal' },
  { label: 'Research', href: '#research', id: 'research', slide: 'personal' },
  { label: 'Certifications', href: '#certifications', id: 'certifications', slide: 'personal' },
  { label: 'Contact', href: '#contact', id: 'contact', slide: null },
];

export default function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (e, link) => {
    setMenuOpen(false);
    if (link.slide && onNavigate) {
      e.preventDefault();
      onNavigate(link.slide, link.id);
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" aria-label="Banamali Sahu Home">
          <span className="navbar__logo-icon">
            <Cpu size={18} />
          </span>
          <span className="navbar__brand-text">
            Banamali<span className="navbar__brand-accent">.ece</span>
          </span>
        </a>

        <nav className="navbar__links" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={(e) => handleLinkClick(e, link)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="#resume" className="btn btn-secondary navbar__resume-btn">
            Resume
          </a>
          <button
            type="button"
            className="navbar__menu-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="navbar__mobile" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              onClick={(e) => handleLinkClick(e, link)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#resume"
            className="btn btn-primary navbar__mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            View &amp; Download Resume
          </a>
        </nav>
      )}
    </header>
  );
}
