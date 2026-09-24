import React from 'react';

interface AureosLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showDescriptor?: boolean;
  showSubmotto?: boolean;
  iconOnly?: boolean;
  inverted?: boolean;
  layout?: 'horizontal' | 'stacked';
  className?: string;
  onClick?: () => void;
}

export const AureosLogo: React.FC<AureosLogoProps> = ({
  size = 'md',
  showDescriptor = true,
  showSubmotto = false,
  iconOnly = false,
  inverted = false,
  layout = 'horizontal',
  className = '',
  onClick
}) => {
  const iconSizes = {
    sm: {
      w: 32,
      h: 28,
      text: 'text-lg',
      desc: 'text-[8px]',
      sub: 'text-[7.5px]',
      gap: 'gap-2.5',
      iconWidth: 'w-7 h-6',
      arrow: 'w-1.5 h-1.5'
    },
    md: {
      w: 42,
      h: 36,
      text: 'text-xl sm:text-2xl',
      desc: 'text-[9.5px]',
      sub: 'text-[8.5px]',
      gap: 'gap-3',
      iconWidth: 'w-9 h-8',
      arrow: 'w-2 h-2'
    },
    lg: {
      w: 56,
      h: 48,
      text: 'text-2xl sm:text-3xl',
      desc: 'text-[11px]',
      sub: 'text-[9.5px]',
      gap: 'gap-3.5',
      iconWidth: 'w-12 h-10',
      arrow: 'w-2.5 h-2.5'
    },
    xl: {
      w: 74,
      h: 64,
      text: 'text-3xl sm:text-4xl',
      desc: 'text-xs',
      sub: 'text-[10.5px]',
      gap: 'gap-4',
      iconWidth: 'w-16 h-14',
      arrow: 'w-3 h-3'
    }
  };

  const current = iconSizes[size];
  const isStacked = layout === 'stacked';

  return (
    <div
      id="aureostech-logo"
      onClick={onClick}
      className={`inline-flex ${isStacked ? 'flex-col items-center text-center gap-2' : `items-center ${current.gap}`} select-none cursor-pointer group ${className}`}
    >
      {/* Precision Vector Emblem matching uploaded corporate logo sheet */}
      <div className="relative flex-shrink-0">
        <svg
          width={current.w}
          height={current.h}
          viewBox="0 0 105 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
        >
          <defs>
            {/* Left Ribbon Face Gradient: Cyan to Royal Azure */}
            <linearGradient id="aureosLeftRibbonGrad" x1="18" y1="78" x2="54" y2="12" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="25%" stopColor="#00A3FF" />
              <stop offset="65%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>

            {/* Left Ribbon Underfold / Shadow at bottom-left corner */}
            <linearGradient id="aureosLeftFoldGrad" x1="16" y1="82" x2="36" y2="62" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#003D82" />
              <stop offset="50%" stopColor="#002759" />
              <stop offset="100%" stopColor="#001433" />
            </linearGradient>

            {/* Right Ribbon Stem: Royal Cobalt descending into Vivid Violet & Purple */}
            <linearGradient id="aureosRightRibbonGrad" x1="52" y1="12" x2="88" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="25%" stopColor="#2563EB" />
              <stop offset="55%" stopColor="#6366F1" />
              <stop offset="80%" stopColor="#8B5CF6" />
              <stop offset="95%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>

            {/* Dynamic Orbital Swoosh Gradient */}
            <linearGradient id="aureosSwooshGrad" x1="24" y1="68" x2="92" y2="20" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="35%" stopColor="#00A3FF" />
              <stop offset="70%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>

            {/* 3D Satellite Orb Gradient */}
            <radialGradient id="aureosOrbGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#67E8F9" />
              <stop offset="28%" stopColor="#00C2FF" />
              <stop offset="65%" stopColor="#0052D4" />
              <stop offset="100%" stopColor="#0A1E3F" />
            </radialGradient>

            {/* Specular White Rim Highlight */}
            <linearGradient id="aureosSpecularGrad" x1="30" y1="60" x2="85" y2="25" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* 1. Left Ribbon Underfold (creating 3D dimensional fold) */}
          <path
            d="M 18 74
               C 16 77, 19 82, 26 82
               L 38 82
               L 35 68
               L 23 70 Z"
            fill="url(#aureosLeftFoldGrad)"
          />

          {/* 2. Left Main Ribbon Limb */}
          <path
            d="M 18 74
               C 18 66, 26 48, 38 30
               L 50 12
               C 52 9.5, 55 9.5, 57 12
               L 48 30
               L 37 50
               L 29 66
               C 25 72, 20 74, 18 74 Z"
            fill="url(#aureosLeftRibbonGrad)"
          />

          {/* 3. Apex Bevel / Facet Highlight */}
          <path
            d="M 50 12
               C 53 9.5, 56 9.5, 58 12
               L 55 18
               L 48 30 Z"
            fill="#BAE6FD"
            opacity="0.8"
          />

          {/* 4. Right Ribbon Limb (Rich Purple/Violet) */}
          <path
            d="M 56 12
               C 58 9.5, 61 10.5, 62.5 13
               L 88 68
               C 89.5 71.5, 88 76, 83.5 76
               L 70.5 76
               L 53.5 42
               L 48 30
               L 56 12 Z"
            fill="url(#aureosRightRibbonGrad)"
          />

          {/* 5. Dynamic Orbital Swoosh cutting across right leg towards upper right */}
          <path
            d="M 23 66
               C 36 62, 51 54, 66 43
               C 77 34, 85 26, 92 19.5
               C 88 24, 78 34, 64 44
               C 49 54, 34 62, 23 66 Z"
            fill="url(#aureosSwooshGrad)"
          />

          {/* Specular Edge along upper curve of swoosh */}
          <path
            d="M 28 64
               C 43 58, 60 48, 91 20"
            stroke="url(#aureosSpecularGrad)"
            strokeWidth="1.3"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* 6. Satellite Orb at tip of trajectory */}
          <circle cx="92.5" cy="19" r="5.2" fill="url(#aureosOrbGrad)" />
          <circle cx="91" cy="17.5" r="1.3" fill="#FFFFFF" opacity="0.95" />
        </svg>
      </div>

      {/* Wordmark & Tagline */}
      {!iconOnly && (
        <div className={`flex flex-col justify-center leading-none ${isStacked ? 'items-center' : ''}`}>
          {/* Main Brand Wordmark: AUREOSTECH */}
          <div className="flex items-center tracking-tight">
            {/* Custom Crossbar-free Chevron 'A' glyph matching logo sheet */}
            <svg
              className={`inline-block flex-shrink-0 ${
                inverted ? 'text-white' : 'text-[#0B192C]'
              }`}
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{
                width: '0.86em',
                height: '0.92em',
                verticalAlign: '-0.04em',
                marginRight: '0.04em'
              }}
            >
              <path
                d="M 1.2 22.8
                   L 10.2 2.6
                   C 11 0.9, 12.8 0.9, 13.6 2.6
                   L 22.8 22.8
                   C 23.5 24.2, 22.2 24.2, 20.2 24.2
                   C 18.5 24.2, 17.7 23.4, 17 21.8
                   L 11.9 10.2
                   L 6.9 21.8
                   C 6.2 23.4, 5.4 24.2, 3.6 24.2
                   C 1.6 24.2, 0.5 24.2, 1.2 22.8 Z"
              />
            </svg>

            {/* UREOS */}
            <span
              className={`font-black tracking-[0.04em] font-['Inter'] uppercase ${current.text} ${
                inverted ? 'text-white' : 'text-[#0B192C]'
              }`}
            >
              UREOS
            </span>

            {/* TECH with vibrant blue-to-purple gradient */}
            <span
              className={`font-black tracking-[0.04em] font-['Inter'] uppercase ${current.text} bg-gradient-to-r from-[#007BFF] via-[#00C2FF] to-[#8B5CF6] bg-clip-text text-transparent`}
            >
              TECH
            </span>
          </div>

          {/* Descriptor Tagline: BUILD ▶ INNOVATE ▶ GROW */}
          {showDescriptor && (
            <div
              className={`flex items-center justify-center gap-1.5 sm:gap-2 font-bold tracking-[0.22em] uppercase mt-1 ${current.desc} ${
                inverted ? 'text-slate-200' : 'text-[#0B192C]'
              }`}
            >
              <span className={inverted ? 'text-white' : 'text-[#0B192C]'}>BUILD</span>
              
              {/* Solid Blue Triangle Playhead Arrow */}
              <svg
                viewBox="0 0 10 12"
                fill="#007BFF"
                className="w-1.5 h-2 flex-shrink-0 inline-block"
              >
                <polygon points="1,1 9,6 1,11" />
              </svg>

              <span className={inverted ? 'text-white' : 'text-[#0B192C]'}>INNOVATE</span>

              {/* Solid Blue Triangle Playhead Arrow */}
              <svg
                viewBox="0 0 10 12"
                fill="#007BFF"
                className="w-1.5 h-2 flex-shrink-0 inline-block"
              >
                <polygon points="1,1 9,6 1,11" />
              </svg>

              <span className={inverted ? 'text-white' : 'text-[#0B192C]'}>GROW</span>
            </div>
          )}

          {showSubmotto && (
            <div
              className={`font-medium tracking-wide mt-0.5 ${current.sub} ${
                inverted ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Smart Solutions for a Brighter Tomorrow
            </div>
          )}
        </div>
      )}
    </div>
  );
};

