import React from 'react';
import {
  Cpu,
  Linkedin,
  Github,
  Mail,
  Phone,
  Download,
  ArrowUp,
  Layers,
  UserCheck,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer__bansuri-bg" aria-hidden="true">
        <img src="/bansuri-bg.jpg" alt="" className="footer__bansuri-img" />
      </div>

      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__brand-title">
              <Cpu size={18} />
              <span>Banamali Sahu</span>
            </div>
            <p className="footer__brand-desc">
              Electronics &amp; Communication Engineering student focused on VLSI, Semiconductor Devices, IoT, and Biomedical Embedded Systems.
            </p>
          </div>

          <div>
            <span className="footer__col-title">Important Links</span>
            <div className="footer__btn-group">
              <button
                type="button"
                className="footer__btn"
                onClick={() => onNavigate && onNavigate('engineering', 'portfolio-slides')}
              >
                <Layers size={15} />
                Engineering &amp; Projects
              </button>
              <button
                type="button"
                className="footer__btn"
                onClick={() => onNavigate && onNavigate('personal', 'portfolio-slides')}
              >
                <UserCheck size={15} />
                Personal Details
              </button>
              <a
                href={personalInfo.resumePath}
                download="Banamali_Sahu_Resume.pdf"
                className="footer__btn"
              >
                <Download size={15} />
                Resume PDF
              </a>
              <a href="#contact" className="footer__btn">
                <Mail size={15} />
                Contact
              </a>
              <a href="#top" className="footer__btn">
                <ArrowUp size={15} />
                Top
              </a>
            </div>
          </div>

          <div>
            <span className="footer__col-title">Social &amp; Direct Contact</span>
            <div className="footer__btn-group">
              <a
                href={personalInfo.contact.linkedinUrl || '#contact'}
                target={personalInfo.contact.linkedinUrl ? '_blank' : undefined}
                rel={personalInfo.contact.linkedinUrl ? 'noopener noreferrer' : undefined}
                className="footer__btn"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
              <a
                href={personalInfo.contact.githubUrl || '#contact'}
                target={personalInfo.contact.githubUrl ? '_blank' : undefined}
                rel={personalInfo.contact.githubUrl ? 'noopener noreferrer' : undefined}
                className="footer__btn"
              >
                <Github size={15} />
                GitHub
              </a>
              {personalInfo.contact.emails.map((email) => (
                <a key={email} href={`mailto:${email}`} className="footer__btn">
                  <Mail size={15} />
                  {email}
                </a>
              ))}
              <a href="tel:+919692557216" className="footer__btn">
                <Phone size={15} />
                +91 9692557216
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>Designed and Developed by Banamali Sahu</span>
          <span className="footer__bottom-tags">ECE • VLSI • Embedded Systems</span>
        </div>
      </div>
    </footer>
  );
}
