export const Logo = ({ className = "" }: { className?: string }) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Saddam Arbaa - Developer Logo"
  >
    {/* Background pill shape with gradient */}
    <defs>
      <linearGradient id="pillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0EA5E9" />   {/* sky-500 */}
        <stop offset="50%" stopColor="#3B82F6" />  {/* blue-500 */}
        <stop offset="100%" stopColor="#6366F1" /> {/* indigo-500 */}
      </linearGradient>
      <filter id="shadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
        <feOffset dx="4" dy="10" result="offsetblur" />
        <feFlood floodColor="#000000" floodOpacity="0.3" />
        <feComposite in2="offsetblur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Main pill background */}
    <rect
      x="20"
      y="60"
      width="200"
      height="120"
      rx="60"
      fill="url(#pillGradient)"
      filter="url(#shadow)"
    />

    {/* Circuit lines - left side */}
    <g stroke="#60A5FA" strokeWidth="3" opacity="0.9">
      <path d="M30 90 H10" strokeLinecap="round" />
      <path d="M30 120 H5" strokeLinecap="round" />
      <path d="M30 150 H10" strokeLinecap="round" />
      <circle cx="10" cy="90" r="6" fill="#60A5FA" />
      <circle cx="5" cy="120" r="6" fill="#60A5FA" />
      <circle cx="10" cy="150" r="6" fill="#60A5FA" />
    </g>

    {/* Circuit lines - right side */}
    <g stroke="#60A5FA" strokeWidth="3" opacity="0.9">
      <path d="M210 85 H230" strokeLinecap="round" />
      <path d="M210 115 H235" strokeLinecap="round" />
      <path d="M210 145 H230" strokeLinecap="round" />
      <circle cx="230" cy="85" r="6" fill="#60A5FA" />
      <circle cx="235" cy="115" r="6" fill="#60A5FA" />
      <circle cx="230" cy="145" r="6" fill="#60A5FA" />
    </g>

    {/* Lightning bolt inside "h" */}
    <path
      d="M158 108 L152 118 L160 118 L154 130 L162 120 L156 120 Z"
      fill="#FBBF24"
      stroke="#F59E0B"
      strokeWidth="2"
    />

    {/* Main "Sh" Text */}
    <text
      x="120"
      y="140"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="ui-sans-serif, system-ui, sans-serif"
      fontSize="96"
      fontWeight="900"
      fill="white"
      letterSpacing="-2"
      style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}
    >
      Sh
    </text>
  </svg>
);