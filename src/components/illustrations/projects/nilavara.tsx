export function NilavaraArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true" fill="none">
      <path
        d="M282,58C316,84,328,132,322,176C316,220,292,260,252,278C212,296,156,292,118,270C80,248,60,208,58,166C56,124,72,80,106,56C140,32,192,28,232,34C272,40,248,32,282,58Z"
        className="fill-sage/15 dark:fill-sage/10"
      />
      {/* house outline */}
      <path
        d="M110 170 L200 100 L290 170"
        stroke="var(--accent)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="122" y="170" width="156" height="90" rx="6" className="fill-card" stroke="var(--accent)" strokeWidth="3" />
      {/* shelf line */}
      <line x1="122" y1="215" x2="278" y2="215" stroke="var(--accent)" strokeWidth="2" opacity="0.5" />
      {/* jars/boxes on shelf */}
      <rect x="140" y="188" width="20" height="26" rx="4" className="fill-accent" opacity="0.9" />
      <circle cx="185" cy="200" r="13" className="fill-sage" />
      <rect x="212" y="190" width="24" height="24" rx="5" transform="rotate(-5 224 202)" className="fill-none" stroke="var(--accent)" strokeWidth="2.5" />
      <rect x="150" y="228" width="26" height="22" rx="4" className="fill-none" stroke="var(--fg)" strokeOpacity="0.4" strokeWidth="2" />
      <circle cx="205" cy="238" r="11" className="fill-accent" opacity="0.7" />
      <rect x="228" y="226" width="22" height="24" rx="5" className="fill-sage" opacity="0.85" />
    </svg>
  );
}
