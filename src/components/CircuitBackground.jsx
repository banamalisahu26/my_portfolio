import React from 'react';
import { motion } from 'framer-motion';

export default function CircuitBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 820"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.55 }}
      >
        <defs>
          <linearGradient id="traceGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="traceGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Static PCB Bus Traces */}
        <g stroke="rgba(59, 130, 246, 0.16)" strokeWidth="1.2">
          <path d="M0 140 H260 L310 190 H520" />
          <path d="M0 156 H248 L298 206 H480" />
          <path d="M1440 220 H1160 L1100 280 H920" />
          <path d="M1440 238 H1172 L1112 298 H950" />
          <path d="M120 820 V640 L180 580 H380" />
          <path d="M1320 820 V610 L1250 540 H1020" />
        </g>

        {/* PCB Vias / Solder Pads */}
        <g fill="#050811" stroke="rgba(34, 211, 238, 0.35)" strokeWidth="1.5">
          <circle cx="520" cy="190" r="4.5" />
          <circle cx="480" cy="206" r="3.5" />
          <circle cx="920" cy="280" r="4.5" />
          <circle cx="950" cy="298" r="3.5" />
          <circle cx="380" cy="580" r="4.5" />
          <circle cx="1020" cy="540" r="4.5" />
        </g>

        {/* Subtle Animated Signal Pulses */}
        <motion.path
          d="M0 140 H260 L310 190 H520"
          stroke="url(#traceGrad1)"
          strokeWidth="2"
          strokeDasharray="90 520"
          animate={{ strokeDashoffset: [610, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M1440 220 H1160 L1100 280 H920"
          stroke="url(#traceGrad2)"
          strokeWidth="2"
          strokeDasharray="100 540"
          animate={{ strokeDashoffset: [640, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M120 820 V640 L180 580 H380"
          stroke="url(#traceGrad1)"
          strokeWidth="1.8"
          strokeDasharray="80 480"
          animate={{ strokeDashoffset: [560, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </div>
  );
}
