export function GoldlockerArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true" fill="none">
      <path
        d="M296,52C330,74,346,116,344,158C342,200,322,240,286,262C250,284,198,288,158,272C118,256,90,220,78,180C66,140,70,96,98,68C126,40,178,28,220,30C262,32,262,30,296,52Z"
        className="fill-sage/15 dark:fill-sage/10"
      />
      {/* sparkline rising */}
      <path
        d="M60 220 L120 190 L155 205 L200 140 L245 155 L300 90"
        stroke="var(--fg)"
        strokeOpacity="0.3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* lock body */}
      <rect x="140" y="150" width="120" height="92" rx="14" className="fill-card" stroke="var(--accent)" strokeWidth="3" />
      {/* lock shackle */}
      <path
        d="M165 150 L165 118 C165 92, 235 92, 235 118 L235 150"
        stroke="var(--accent)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* coin */}
      <circle cx="200" cy="196" r="26" className="fill-accent" />
      <text
        x="200"
        y="203"
        textAnchor="middle"
        className="fill-cream"
        style={{ font: "700 15px var(--font-mono, monospace)" }}
      >
        22K
      </text>
      {/* orbit dots */}
      <circle cx="300" cy="90" r="5" className="fill-accent" />
      <circle cx="70" cy="240" r="4" className="fill-sage" opacity="0.8" />
    </svg>
  );
}
