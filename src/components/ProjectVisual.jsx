import React from 'react';

export default function ProjectVisual({ type, code, imagePath, title }) {
  if (imagePath) {
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '168px',
          borderRadius: '10px',
          overflow: 'hidden',
          background: '#070d1d',
          border: '1px solid rgba(34, 211, 238, 0.24)',
        }}
      >
        <img
          src={imagePath}
          alt={title || code}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '168px',
        borderRadius: '10px',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #070d1d 0%, #0b152c 100%)',
        border: '1px solid rgba(34, 211, 238, 0.18)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label={`Hardware schematic placeholder for ${code}`}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 360 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Grid */}
        <pattern id={`grid-${code}`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M 24 0 L 0 0 0 24"
            fill="none"
            stroke="rgba(34, 211, 238, 0.06)"
            strokeWidth="1"
          />
        </pattern>
        <rect width="360" height="168" fill={`url(#grid-${code})`} />

        {type === 'biomedical-waveform' && (
          <g>
            <path
              d="M16 92 H78 L92 52 L106 124 L120 34 L134 114 L148 92 H212 L226 68 L240 108 L254 92 H344"
              stroke="#22d3ee"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="120" cy="34" r="3.5" fill="#3b82f6" />
            <text x="18" y="28" fill="#94a3b8" fontSize="10" fontFamily="monospace">
              ECG / PPG / GSR TELEMETRY
            </text>
          </g>
        )}

        {type === 'iomt-network' && (
          <g stroke="#3b82f6" strokeWidth="1.5">
            <rect x="148" y="58" width="64" height="52" rx="8" fill="#0f172a" stroke="#22d3ee" />
            <text x="162" y="88" fill="#22d3ee" fontSize="11" fontFamily="monospace">
              RPi 4
            </text>
            <line x1="68" y1="42" x2="148" y2="74" strokeDasharray="4 3" />
            <line x1="68" y1="126" x2="148" y2="96" strokeDasharray="4 3" />
            <line x1="292" y1="42" x2="212" y2="74" strokeDasharray="4 3" />
            <line x1="292" y1="126" x2="212" y2="96" strokeDasharray="4 3" />
            <circle cx="62" cy="40" r="10" fill="#0f172a" stroke="#22d3ee" />
            <circle cx="62" cy="128" r="10" fill="#0f172a" stroke="#22d3ee" />
            <circle cx="298" cy="40" r="10" fill="#0f172a" stroke="#22d3ee" />
            <circle cx="298" cy="128" r="10" fill="#0f172a" stroke="#22d3ee" />
          </g>
        )}

        {type === 'poc-sensor-hub' && (
          <g>
            <rect x="132" y="50" width="96" height="68" rx="8" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.6" />
            <text x="148" y="81" fill="#f8fafc" fontSize="11" fontFamily="monospace">
              ESP32-S3
            </text>
            <text x="144" y="99" fill="#22d3ee" fontSize="9.5" fontFamily="monospace">
              LoRa SX1278
            </text>
            <rect x="24" y="30" width="76" height="26" rx="5" fill="#0f172a" stroke="#3b82f6" />
            <text x="34" y="47" fill="#cbd5e1" fontSize="9.5" fontFamily="monospace">
              AD8232 ECG
            </text>
            <rect x="24" y="112" width="76" height="26" rx="5" fill="#0f172a" stroke="#3b82f6" />
            <text x="32" y="129" fill="#cbd5e1" fontSize="9.5" fontFamily="monospace">
              MAX30102
            </text>
            <rect x="260" y="30" width="76" height="26" rx="5" fill="#0f172a" stroke="#3b82f6" />
            <text x="270" y="47" fill="#cbd5e1" fontSize="9.5" fontFamily="monospace">
              MLX90640
            </text>
            <rect x="260" y="112" width="76" height="26" rx="5" fill="#0f172a" stroke="#3b82f6" />
            <text x="274" y="129" fill="#cbd5e1" fontSize="9.5" fontFamily="monospace">
              AS7263
            </text>
            <path d="M100 43 H132 M100 125 H132 M228 43 H260 M228 125 H260" stroke="#22d3ee" strokeWidth="1.3" />
          </g>
        )}

        {type === 'rtl-clock' && (
          <g>
            {/* Square Wave Timing Diagram */}
            <path
              d="M24 62 H54 V38 H84 V62 H114 V38 H144 V62 H174 V38 H204 V62 H234 V38 H264 V62 H294 V38 H324 V62"
              stroke="#22d3ee"
              strokeWidth="2"
            />
            <path
              d="M24 114 H84 V90 H144 V114 H204 V90 H264 V114 H324"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            <text x="24" y="26" fill="#94a3b8" fontSize="10" fontFamily="monospace">
              CLK_IN / MOD-60 / MOD-24 COUNTER
            </text>
            <text x="24" y="142" fill="#22d3ee" fontSize="10" fontFamily="monospace">
              1 Hz VERILOG RTL TIMING
            </text>
          </g>
        )}

        {type === 'robotics-sonar' && (
          <g>
            <circle cx="180" cy="118" r="24" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.6" />
            <path d="M130 92 A62 62 0 0 1 230 92" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M106 72 A92 92 0 0 1 254 72" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="5 4" />
            <text x="150" y="122" fill="#f8fafc" fontSize="10" fontFamily="monospace">
              HC-SR04
            </text>
            <text x="20" y="28" fill="#94a3b8" fontSize="10" fontFamily="monospace">
              ULTRASONIC + HC-05 CONTROL
            </text>
          </g>
        )}

        {type === 'iot-telemetry' && (
          <g>
            <rect x="44" y="54" width="84" height="58" rx="8" fill="#0f172a" stroke="#3b82f6" />
            <text x="64" y="86" fill="#cbd5e1" fontSize="10.5" fontFamily="monospace">
              SENSORS
            </text>
            <rect x="232" y="54" width="84" height="58" rx="8" fill="#0f172a" stroke="#22d3ee" />
            <text x="252" y="86" fill="#22d3ee" fontSize="10.5" fontFamily="monospace">
              RELAY
            </text>
            <path d="M128 83 H232" stroke="#22d3ee" strokeWidth="2" strokeDasharray="6 4" />
            <text x="152" y="72" fill="#94a3b8" fontSize="10" fontFamily="monospace">
              ESP32
            </text>
          </g>
        )}
      </svg>

      <span
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '12px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          color: 'var(--text-muted)',
          background: 'rgba(5, 8, 17, 0.85)',
          padding: '2px 8px',
          borderRadius: '4px',
          border: '1px solid var(--border-subtle)',
        }}
      >
        Image Placeholder • {code}
      </span>
    </div>
  );
}
