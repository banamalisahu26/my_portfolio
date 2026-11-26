export const personalInfo = {
  name: 'Banamali Sahu',
  headline: 'Electronics Engineer | VLSI & Embedded Systems Enthusiast',
  greeting: "Hi, I'm Banamali Sahu",
  heroDescription:
    'I am an Electronics and Communication Engineering student passionate about semiconductor technology, digital circuit design, embedded systems, and intelligent healthcare solutions. I enjoy transforming electronic concepts into practical hardware-based solutions through research, experimentation, and development.',
  degree: 'B.Tech in Electronics and Communication Engineering',
  university: 'NIST University, Berhampur, Odisha, India',
  cgpa: '8.7/10 (up to 6th semester)',
  identities: [
    'Electronics and Communication Engineering Student',
    'VLSI and Semiconductor Technology Enthusiast',
    'Embedded Systems Developer',
    'IoT and Biomedical Electronics Researcher',
  ],
  careerInterests: [
    'IoT & Wireless Sensor Networks',
    'Embedded Systems',
    'Biomedical Electronics',
    'Hardware & Software Development',
    'VLSI & Semiconductor',
  ],
  resumePath: '/resume.pdf',
  // Replace placeholders below with actual profile URLs and email address
  contact: {
    email: 'banamalisahu1836@gmail.com',
    emails: ['banamalisahu1836@gmail.com', 'banamali.sahu.ece.2023@gmail.com'],
    isEmailPlaceholder: false,
    linkedinUrl: 'https://www.linkedin.com/in/banamali-sahu',
    linkedinLabel: 'linkedin.com/in/banamali-sahu',
    githubUrl: '',
    githubLabel: 'github.com/banamali-sahu (Placeholder)',
  },
};

export const skillCategories = [
  {
    id: 'programming',
    label: 'Programming',
    code: 'SW_01',
    skills: [
      { name: 'C', tag: 'Core Systems' },
      { name: 'Python', tag: 'Scripting & Data' },
      { name: 'Embedded C', tag: 'Firmware' },
    ],
  },
  {
    id: 'hdl',
    label: 'Hardware Description Languages',
    code: 'HDL_02',
    skills: [
      { name: 'Verilog HDL', tag: 'RTL Modeling' },
      { name: 'VHDL', tag: 'Digital Systems' },
    ],
  },
  {
    id: 'vlsi',
    label: 'VLSI and Semiconductor',
    code: 'VLSI_03',
    skills: [
      { name: 'Digital Logic Design', tag: 'Combinational & Sequential' },
      { name: 'CMOS Design', tag: 'Transistor Level' },
      { name: 'Basic RTL Design', tag: 'Synthesis Ready' },
      { name: 'Semiconductor Device Simulation', tag: 'Physics & I-V' },
      { name: 'TCAD Fundamentals', tag: 'Process & Device' },
    ],
  },
  {
    id: 'eda',
    label: 'EDA Tools',
    code: 'EDA_04',
    skills: [
      { name: 'Xilinx Vivado', tag: 'FPGA & RTL' },
      { name: 'Intel Quartus', tag: 'FPGA Synthesis' },
      { name: 'DSCH', tag: 'Schematic & Logic' },
      { name: 'Microwind', tag: 'CMOS Layout' },
      { name: 'Sentaurus Workbench', tag: 'TCAD Simulation' },
    ],
  },
  {
    id: 'embedded',
    label: 'Embedded Systems',
    code: 'MCU_05',
    skills: [
      { name: 'ESP32', tag: 'Wi-Fi / BLE SoC' },
      { name: 'ESP32-S3', tag: 'Dual-Core MCU' },
      { name: 'Arduino UNO', tag: 'ATmega328P' },
      { name: 'Raspberry Pi 4', tag: 'Edge Compute' },
      { name: 'Sensor Interfacing', tag: 'Analog & Digital' },
      { name: 'UART, SPI, I2C', tag: 'Serial Protocols' },
      { name: 'PCB Implementation', tag: 'Schematic & Layout' },
    ],
  },
  {
    id: 'software',
    label: 'Software',
    code: 'APP_06',
    skills: [
      { name: 'Flutter', tag: 'Cross-Platform UI' },
      { name: 'Dart', tag: 'Client Logic' },
      { name: 'Mobile Application Integration', tag: 'Hardware-to-App' },
      { name: 'HTML', tag: 'Semantic Markup' },
      { name: 'CSS', tag: 'Responsive Layout' },
      { name: 'JavaScript', tag: 'Web Interactivity' },
    ],
  },
];

export const projects = [
  {
    id: 'smart-stress-health',
    code: 'PRJ-01',
    domain: 'Biomedical & Mobile IoT',
    visualType: 'biomedical-waveform',
    imagePath: '/projects/stress-monitor.jpg',
    title: 'Smart Stress and Physiological Health Monitoring System',
    shortDescription:
      'A portable hardware-integrated healthcare monitoring system tracking heart rate, SpO2, and electrodermal activity (GSR) with ESP32, paired with a custom Flutter mobile application for real-time visualization.',
    technologies: ['ESP32', 'GSR Sensor', 'MAX30100', 'Flutter', 'Dart', 'Mobile App Integration'],
    highlights: [
      'Real-time acquisition of heart rate and blood oxygen saturation (SpO2) via MAX30100 optical sensor over I2C.',
      'Electrodermal activity (EDA) / Galvanic Skin Response (GSR) signal conditioning for stress-level tracking.',
      'ESP32 wireless telemetry integrated with a custom-built Flutter/Dart mobile interface for live data visualization.',
    ],
    githubUrl: '', // Placeholder: add repository URL when available
  },
  {
    id: 'iomt-framework',
    code: 'PRJ-02',
    domain: 'IoMT & Mobile Hardware Integration',
    visualType: 'iomt-network',
    title: 'Internet of Medical Things (IoMT) Framework for Advanced Healthcare Monitoring',
    shortDescription:
      'Development of an IoMT-based healthcare monitoring framework integrating physiological hardware sensors, Raspberry Pi edge processing, and mobile application integration for live remote health tracking.',
    technologies: ['Raspberry Pi 4 Model B', 'Biomedical Sensors', 'Python', 'IoT', 'Mobile App Integration'],
    highlights: [
      'Centralized physiological data aggregation on Raspberry Pi 4 Model B running Python-based processing pipelines.',
      'Structured hardware sensor interfacing architecture integrated with a mobile application for real-time telemetry.',
      'Foundation for intelligent health analytics and remote clinical monitoring workflows.',
    ],
    githubUrl: '',
  },
  {
    id: 'poc-ni-diagnostic',
    code: 'PRJ-03',
    domain: 'Clinical Hardware & Mobile Integration',
    visualType: 'poc-sensor-hub',
    imagePath: '/projects/poc-ni.jpg',
    title: 'Point-of-Care Diagnostic Model (POC-NI)',
    shortDescription:
      'A research-based prototype developed during the IASc-INSA-NASI Summer Research Fellowship at ICMR-RMRIMS, Patna. Integrates non-invasive physiological hardware acquisition on ESP32-S3 with LoRa telemetry and mobile application support for feverish patients.',
    technologies: ['ESP32-S3', 'AD8232', 'MAX30102', 'MLX90640', 'AS7263', 'LoRa SX1278', 'Mobile App Integration'],
    highlights: [
      'Multi-modal non-invasive sensor fusion: ECG (AD8232), PPG/SpO2 (MAX30102), IR thermal imaging (MLX90640), and spectral sensing (AS7263).',
      'ESP32-S3 microcontroller firmware for synchronized physiological signal acquisition.',
      'Long-range LoRa SX1278 wireless transmission paired with mobile application integration for point-of-care diagnostic support.',
    ],
    githubUrl: '',
  },
  {
    id: 'rtc-async-counters',
    code: 'PRJ-04',
    domain: 'RTL & Digital Design',
    visualType: 'rtl-clock',
    imagePath: '/projects/rtc-rtl.png',
    title: 'Real-Time Clock Using Asynchronous Counters',
    shortDescription:
      'Designed a digital real-time clock using asynchronous counter architecture, including mod-60 seconds, mod-60 minutes, mod-24 hours and clock frequency division.',
    technologies: ['Verilog HDL', 'Xilinx Vivado', 'DSCH'],
    highlights: [
      'Implemented clock frequency divider to derive a 1 Hz timing reference from high-frequency system clock.',
      'Cascaded mod-60 (seconds), mod-60 (minutes), and mod-24 (hours) asynchronous counter stages.',
      'Verified timing behavior and logic synthesis in Xilinx Vivado and schematic-level simulation in DSCH.',
    ],
    githubUrl: '',
  },
  {
    id: 'bluetooth-obstacle-robot',
    code: 'PRJ-05',
    domain: 'Robotics & Control',
    visualType: 'robotics-sonar',
    imagePath: '/projects/robot-car.jpg',
    title: 'Bluetooth-Controlled Obstacle-Avoiding Robot',
    shortDescription:
      'Developed a mobile-controlled robotic vehicle with obstacle detection and avoidance capabilities.',
    technologies: ['Arduino UNO', 'HC-05', 'L298N Motor Driver', 'HC-SR04 Ultrasonic Sensor'],
    highlights: [
      'Dual-mode control combining Bluetooth serial commands (HC-05) with autonomous ultrasonic obstacle avoidance.',
      'H-bridge DC motor actuation and speed/direction control via L298N driver.',
      'Real-time distance measurement and collision prevention using HC-SR04 ultrasonic ranging.',
    ],
    githubUrl: '',
  },
  {
    id: 'smart-irrigation',
    code: 'PRJ-06',
    domain: 'IoT Automation',
    visualType: 'iot-telemetry',
    title: 'Smart Irrigation System',
    shortDescription:
      'An IoT-based irrigation prototype that monitors soil conditions and supports automated irrigation control.',
    technologies: ['ESP32', 'Soil Moisture Sensor', 'DHT11', 'Relay', 'IoT'],
    highlights: [
      'Continuous monitoring of volumetric soil moisture and ambient temperature/humidity (DHT11).',
      'Automated threshold-based water pump actuation via relay module controlled by ESP32.',
      'IoT connectivity for remote environmental status monitoring and irrigation scheduling.',
    ],
    githubUrl: '',
  },
];

export const researchExperience = {
  fellowship: 'IASc-INSA-NASI Summer Research Fellowship Programme 2026',
  organization: 'ICMR-RMRIMS, Patna, Bihar',
  duration: '1 June 2026 – 27 July 2026',
  projectTitle:
    'Point of Care Diagnostic Model (Microcontroller Based) for Prediction of Hemorrhagic Disease in Feverish Patients by Non-Invasive Method (POC-NI).',
  supervisor: 'Dr. Ganesh Chandra Sahoo, Scientist-F',
  highlights: [
    'Biomedical sensor integration',
    'Microcontroller-based hardware development',
    'Physiological signal acquisition',
    'LoRa wireless communication',
    'Embedded system development',
    'Research documentation and experimentation',
  ],
  additionalWorks: [
    {
      id: 'peltier-air-to-water',
      title: 'Air-to-Water Generation Based on Peltier Effect Using Solar Power',
      status: 'Research Work',
      isUnsuccessful: false,
      description:
        'Worked on atmospheric moisture condensation and air-to-water generation using thermoelectric Peltier cooling modules powered by solar energy.',
      tags: ['Peltier Effect', 'Solar Power', 'Thermoelectric Cooling', 'Hardware'],
    },
    {
      id: 'platelet-count-research',
      title: 'Platelet Count Estimation Research Work',
      status: 'Unsuccessful Attempt',
      isUnsuccessful: true,
      description:
        'Conducted exploratory research and experimentation on platelet count estimation; the approach was unsuccessful, providing valuable insights into biomedical sensing limitations and signal constraints.',
      tags: ['Biomedical Research', 'Platelet Count', 'Exploratory'],
    },
  ],
};

export const certifications = [
  {
    id: 'cert-iisc-iswdp',
    code: 'CERT-01',
    title: 'IISc ISWDP Level 1',
    issuer: 'IISc — Samsung and Synopsys',
    focus: 'Semiconductor Workforce Development Program covering foundational VLSI & semiconductor concepts.',
    imagePath: '', // Replace with actual certificate image path when uploaded
  },
  {
    id: 'cert-iisc-rs',
    code: 'CERT-02',
    title: 'Advanced Electronic Design for Reliable Operation',
    issuer: 'IISc and Rohde & Schwarz',
    focus: 'Electronic circuit reliability, signal integrity, and hardware measurement methodologies.',
    imagePath: '',
  },
  {
    id: 'cert-iisc-tektronix',
    code: 'CERT-03',
    title: 'Electrical Characterization of Material and Device',
    issuer: 'IISc and Tektronix',
    focus: 'Semiconductor material and electronic device electrical characterization techniques.',
    imagePath: '',
  },
  {
    id: 'cert-cttc-vlsi',
    code: 'CERT-04',
    title: 'VLSI Design Training',
    issuer: 'CTTC Bhubaneswar',
    focus: 'Hands-on training in digital VLSI design flow, HDL modeling, and simulation tools.',
  },
  {
    id: 'cert-nptel-verilog',
    code: 'CERT-05',
    title: 'System Design Through Verilog',
    issuer: 'NPTEL — IIT Guwahati',
    focus: 'Digital system modeling, RTL design, and hardware description using Verilog HDL.',
  },
];

export const educationList = [
  {
    level: 'B.Tech in Electronics and Communication Engineering',
    institution: 'NIST University, Berhampur, Odisha',
    detail: 'CGPA: 8.7/10 (up to 6th semester)',
    badge: 'Undergraduate',
  },
  {
    level: 'Higher Secondary',
    institution: 'Government Science College, Chatarpur',
    detail: 'Science Stream',
    badge: 'Class XII',
  },
  {
    level: 'School',
    institution: 'SSVM',
    detail: 'Secondary Education',
    badge: 'Schooling',
  },
];

export const achievements = [
  {
    title: 'Selected for IASc-INSA-NASI Summer Research Fellowship Programme 2026',
    category: 'National Research Fellowship',
    description:
      'Selected for the prestigious summer research fellowship hosted at ICMR-RMRIMS, Patna, working on non-invasive point-of-care biomedical hardware.',
  },
  {
    title: 'IISc ISWDP Level 1 Certification',
    category: 'Semiconductor & VLSI',
    description:
      'Completed the Indian Institute of Science (IISc) India Semiconductor Workforce Development Program Level 1 in collaboration with Samsung and Synopsys.',
  },
  {
    title: 'Technical training in VLSI and semiconductor technology',
    category: 'Specialized Training',
    description:
      'Completed industry-aligned technical programs with IISc, Rohde & Schwarz, Tektronix, and CTTC Bhubaneswar.',
  },
  {
    title: 'Practical experience in embedded systems and biomedical electronics',
    category: 'Hardware Engineering',
    description:
      'Designed and built multi-sensor microcontroller prototypes integrating ESP32, ESP32-S3, Raspberry Pi 4, Arduino UNO, and LoRa telemetry.',
  },
];
