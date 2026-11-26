import React from 'react';
import { motion } from 'framer-motion';
import { Radio, CircuitBoard, Activity, Layers, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const focusHighlights = [
  {
    icon: Radio,
    title: 'IoT & Wireless Sensor Networks',
    detail: 'Connected sensor nodes, LoRa telemetry, and low-power wireless data acquisition.',
  },
  {
    icon: CircuitBoard,
    title: 'Embedded Systems',
    detail: 'Hands-on firmware & hardware prototyping with ESP32, ESP32-S3, Arduino UNO, and Raspberry Pi 4.',
  },
  {
    icon: Activity,
    title: 'Biomedical Electronics',
    detail: 'Non-invasive physiological signal acquisition (ECG, PPG/SpO2, GSR, thermal) for healthcare.',
  },
  {
    icon: Layers,
    title: 'Hardware & Software Development',
    detail: 'Connecting physical sensor front-ends to Python edge pipelines and Flutter mobile dashboards.',
  },
  {
    icon: Cpu,
    title: 'VLSI & Semiconductor',
    detail: 'Digital logic, CMOS design, RTL modeling in Verilog/VHDL, and TCAD device simulation.',
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">01 / Engineering Focus</span>
          <h2 className="section-title">Area of Interest</h2>
          <p className="section-subtitle">
            Core domains spanning IoT, embedded hardware, biomedical instrumentation, software, and VLSI.
          </p>
        </div>

        <div className="about__interests-list about__interests-list--spaced">
          {personalInfo.careerInterests.map((interest) => (
            <span key={interest} className="tech-chip">
              {interest}
            </span>
          ))}
        </div>

        <div className="about__cards about__cards--grid">
          {focusHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="glass-card about__feature-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <div className="about__feature-icon">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="about__feature-title">{item.title}</h3>
                  <p className="about__feature-detail">{item.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
