export function CarmeliaArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true" fill="none">
      <path
        d="M290,70C318,98,324,142,318,184C312,226,292,262,254,280C216,298,162,296,122,274C82,252,58,210,58,168C58,126,82,84,118,60C154,36,198,30,236,38C274,46,262,42,290,70Z"
        className="fill-sage/15 dark:fill-sage/10"
      />
      {/* dashed route */}
      <path
        d="M80 220 C 130 200, 150 160, 190 150 C 240 138, 260 100, 305 90"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeDasharray="1 10"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      {/* route pins */}
      <circle cx="80" cy="220" r="5" className="fill-fg" opacity="0.4" />
      <circle cx="190" cy="150" r="5" className="fill-accent" />
      {/* paper airplane */}
      <g transform="translate(275 78) rotate(28)">
        <path
          d="M0 0 L46 16 L0 32 L8 16 Z"
          className="fill-card"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M8 16 L26 16" stroke="var(--accent)" strokeWidth="1.5" />
      </g>
      {/* map pin destination */}
      <path
        d="M300 130 C 314 130, 324 140, 324 154 C 324 172, 300 194, 300 194 C 300 194, 276 172, 276 154 C 276 140, 286 130, 300 130 Z"
        className="fill-accent"
        opacity="0.9"
      />
      <circle cx="300" cy="153" r="7" className="fill-cream" />
      {/* chat bubble accent */}
      <path
        d="M110 236 C110 226, 118 218, 128 218 L168 218 C178 218, 186 226, 186 236 C186 246, 178 254, 168 254 L142 254 L130 264 L132 254 L128 254 C118 254, 110 246, 110 236 Z"
        className="fill-sage"
        opacity="0.85"
      />
    </svg>
  );
}
