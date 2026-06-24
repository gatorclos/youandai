// Contextual abstract SVG images per conversation topic.
// Each is a unique geometric composition that visually references the topic.
import React from "react";
// aria-hidden since they're purely decorative — topic is conveyed by title.

const images: Record<string, React.ReactElement> = {

  "ai-detection-biological-constraints": (
    // Heartbeat / waveform pattern — references biological signals
    <svg viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width:"100%", height:"100%", display:"block" }}>
      <defs>
        <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#080C18"/>
          <stop offset="100%" stopColor="#0D1530"/>
        </linearGradient>
        <linearGradient id="wave1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4F6BF5" stopOpacity="0"/>
          <stop offset="30%" stopColor="#4F6BF5" stopOpacity="0.9"/>
          <stop offset="70%" stopColor="#7C5AF5" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#7C5AF5" stopOpacity="0"/>
        </linearGradient>
        <filter id="glow1">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="800" height="220" fill="url(#bg1)"/>
      {/* Grid lines */}
      {[0,1,2,3,4,5,6,7,8,9,10].map(i => (
        <line key={i} x1={i*80} y1="0" x2={i*80} y2="220" stroke="rgba(79,107,245,0.06)" strokeWidth="1"/>
      ))}
      {[0,1,2,3,4].map(i => (
        <line key={i} x1="0" y1={i*55} x2="800" y2={i*55} stroke="rgba(79,107,245,0.06)" strokeWidth="1"/>
      ))}
      {/* Flat baseline */}
      <path d="M0,110 L160,110" stroke="rgba(79,107,245,0.3)" strokeWidth="1.5" fill="none"/>
      {/* Heartbeat spike — the biological signal */}
      <path d="M160,110 L190,110 L210,40 L230,180 L250,110 L290,110" stroke="url(#wave1)" strokeWidth="2.5" fill="none" filter="url(#glow1)"/>
      {/* Second beat, dimmer */}
      <path d="M350,110 L375,110 L388,68 L400,152 L413,110 L440,110" stroke="rgba(79,107,245,0.45)" strokeWidth="1.5" fill="none"/>
      {/* Flat tail */}
      <path d="M440,110 L800,110" stroke="rgba(79,107,245,0.15)" strokeWidth="1" fill="none" strokeDasharray="4 6"/>
      {/* AI signal — perfectly flat, uncanny */}
      <path d="M0,145 L800,145" stroke="rgba(240,165,0,0.25)" strokeWidth="1.5" fill="none"/>
      <text x="640" y="138" fontSize="10" fill="rgba(240,165,0,0.5)" fontFamily="JetBrains Mono, monospace" letterSpacing="2">AI SIGNAL</text>
      <text x="628" y="107" fontSize="10" fill="rgba(79,107,245,0.5)" fontFamily="JetBrains Mono, monospace" letterSpacing="2">HUMAN rPPG</text>
      {/* Dots on beat peaks */}
      <circle cx="210" cy="40" r="3" fill="#4F6BF5" opacity="0.9"/>
      <circle cx="230" cy="180" r="3" fill="#7C5AF5" opacity="0.9"/>
    </svg>
  ),

  "engineering-manager-ai-career-impact": (
    // Split/bifurcation diagram — references the role bifurcation concept
    <svg viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width:"100%", height:"100%", display:"block" }}>
      <defs>
        <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#080C18"/>
          <stop offset="100%" stopColor="#0C1520"/>
        </linearGradient>
        <linearGradient id="pathUp" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#4F6BF5" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.8"/>
        </linearGradient>
        <linearGradient id="pathDown" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4F6BF5" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#F87171" stopOpacity="0.5"/>
        </linearGradient>
      </defs>
      <rect width="800" height="220" fill="url(#bg2)"/>
      {/* Connecting line coming in */}
      <path d="M0,110 L320,110" stroke="rgba(79,107,245,0.3)" strokeWidth="2" fill="none"/>
      {/* Bifurcation point */}
      <circle cx="320" cy="110" r="5" fill="#4F6BF5" opacity="0.9"/>
      {/* Upper path — durable skills */}
      <path d="M320,110 C420,110 500,50 800,40" stroke="url(#pathUp)" strokeWidth="2" fill="none"/>
      {/* Lower path — compressing skills */}
      <path d="M320,110 C420,110 500,170 800,185" stroke="url(#pathDown)" strokeWidth="2" fill="none" strokeDasharray="6 4"/>
      {/* Labels */}
      <text x="620" y="32" fontSize="11" fill="rgba(52,211,153,0.7)" fontFamily="JetBrains Mono, monospace">DURABLE</text>
      <text x="620" y="196" fontSize="11" fill="rgba(248,113,113,0.6)" fontFamily="JetBrains Mono, monospace">COMPRESSING</text>
      {/* Year markers */}
      {["NOW","Y1","Y2","Y3","Y5"].map((label, i) => (
        <g key={i}>
          <line x1={80 + i*160} y1="100" x2={80 + i*160} y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <text x={80 + i*160} y="135" fontSize="10" fill="var(--text-muted, #64748B)" fontFamily="JetBrains Mono, monospace" textAnchor="middle">{label}</text>
        </g>
      ))}
      {/* Ambient dots */}
      {[[450,55],[550,48],[650,44],[750,41]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="#34D399" opacity="0.4"/>
      ))}
    </svg>
  ),

  "sports-platform-trust-architecture": (
    // Network / matching nodes — references the matching algorithm
    <svg viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width:"100%", height:"100%", display:"block" }}>
      <defs>
        <linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#080C18"/>
          <stop offset="100%" stopColor="#0E1424"/>
        </linearGradient>
        <filter id="glow3">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="800" height="220" fill="url(#bg3)"/>
      {/* Left cluster — players */}
      {[[100,60],[80,110],[120,160],[60,130],[140,85]].map(([cx,cy],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="6" fill="rgba(79,107,245,0.8)" filter="url(#glow3)"/>
          <circle cx={cx} cy={cy} r="12" fill="rgba(79,107,245,0.08)" stroke="rgba(79,107,245,0.2)" strokeWidth="1"/>
        </g>
      ))}
      {/* Right cluster — teams */}
      {[[700,55],[720,110],[690,165],[740,135],[710,82]].map(([cx,cy],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="6" fill="rgba(240,165,0,0.8)" filter="url(#glow3)"/>
          <circle cx={cx} cy={cy} r="12" fill="rgba(240,165,0,0.08)" stroke="rgba(240,165,0,0.2)" strokeWidth="1"/>
        </g>
      ))}
      {/* Match lines */}
      {[
        [100,60,700,55],[80,110,720,110],[120,160,690,165]
      ].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(79,107,245,0.2)" strokeWidth="1" strokeDasharray="5 5"/>
      ))}
      {/* Highlighted best match */}
      <line x1="80" y1="110" x2="720" y2="110" stroke="rgba(79,107,245,0.7)" strokeWidth="1.5"/>
      <circle cx="400" cy="110" r="4" fill="#4F6BF5" opacity="0.9"/>
      {/* Labels */}
      <text x="60" y="205" fontSize="11" fill="rgba(79,107,245,0.5)" fontFamily="JetBrains Mono, monospace">PLAYERS</text>
      <text x="670" y="205" fontSize="11" fill="rgba(240,165,0,0.5)" fontFamily="JetBrains Mono, monospace">TEAMS</text>
      <text x="360" y="102" fontSize="10" fill="rgba(255,255,255,0.4)" fontFamily="JetBrains Mono, monospace">STABLE MATCH</text>
    </svg>
  ),

  "ev-long-distance-charging-strategy": (
    // Route / charging stop line — references the road trip concept
    <svg viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width:"100%", height:"100%", display:"block" }}>
      <defs>
        <linearGradient id="bg4" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#080C18"/>
          <stop offset="100%" stopColor="#091420"/>
        </linearGradient>
        <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.9"/>
          <stop offset="45%" stopColor="#34D399" stopOpacity="0.9"/>
          <stop offset="50%" stopColor="#F0A500" stopOpacity="0.9"/>
          <stop offset="55%" stopColor="#34D399" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.9"/>
        </linearGradient>
      </defs>
      <rect width="800" height="220" fill="url(#bg4)"/>
      {/* Road — dashed centre line */}
      <rect x="0" y="98" width="800" height="24" rx="2" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <path d="M0,110 L800,110" stroke="url(#routeGrad)" strokeWidth="2.5" fill="none"/>
      {/* Charging stops */}
      {[200, 420, 640].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={110} r="10" fill="rgba(240,165,0,0.15)" stroke="rgba(240,165,0,0.6)" strokeWidth="1.5"/>
          <text x={x} y="115" fontSize="9" fill="#F0A500" textAnchor="middle" fontFamily="JetBrains Mono, monospace">⚡</text>
          <text x={x} y="140" fontSize="9" fill="rgba(240,165,0,0.5)" textAnchor="middle" fontFamily="JetBrains Mono, monospace">~18m</text>
          {/* SOC bar */}
          <rect x={x-18} y="152" width="36" height="5" rx="2" fill="rgba(255,255,255,0.06)"/>
          <rect x={x-18} y="152" width={[22,28,22][i]} height="5" rx="2" fill="rgba(52,211,153,0.7)"/>
        </g>
      ))}
      {/* Start dot */}
      <circle cx="30" cy="110" r="6" fill="#34D399" opacity="0.9"/>
      <text x="30" y="93" fontSize="10" fill="rgba(52,211,153,0.6)" textAnchor="middle" fontFamily="JetBrains Mono, monospace">START</text>
      {/* End dot */}
      <circle cx="770" cy="110" r="6" fill="#34D399" opacity="0.9"/>
      <text x="770" y="93" fontSize="10" fill="rgba(52,211,153,0.6)" textAnchor="middle" fontFamily="JetBrains Mono, monospace">END</text>
      {/* Mileage labels */}
      {[200,420,640].map((x,i) => (
        <text key={i} x={(x + [0,200,420][i])/2 + ([0,110,210][i])} y="78" fontSize="10" fill="rgba(255,255,255,0.2)" textAnchor="middle" fontFamily="JetBrains Mono, monospace">~200mi</text>
      ))}
    </svg>
  ),
};

export default function TopicImage({ slug }: { slug: string }) {
  const img = images[slug];
  if (!img) return null;
  return (
    <div className="topic-image" role="img" aria-hidden="true">
      {img}
    </div>
  );
}
