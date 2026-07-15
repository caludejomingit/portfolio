export function PanamoArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true" fill="none">
      <path
        d="M284,66C312,94,318,140,312,182C306,224,288,262,250,280C212,298,158,296,120,274C82,252,60,210,60,168C60,126,82,84,118,60C154,36,198,30,236,38C274,46,256,38,284,66Z"
        className="fill-sage/15 dark:fill-sage/10"
      />
      {/* blueprint grid */}
      <g stroke="var(--accent)" strokeOpacity="0.25" strokeWidth="1">
        {[100, 130, 160, 190, 220, 250, 280].map((x) => (
          <line key={`v${x}`} x1={x} y1="60" x2={x} y2="250" />
        ))}
        {[80, 110, 140, 170, 200, 230].map((y) => (
          <line key={`h${y}`} x1="90" y1={y} x2="310" y2={y} />
        ))}
      </g>
      {/* building elevation as bars */}
      <rect x="120" y="170" width="30" height="70" className="fill-card" stroke="var(--accent)" strokeWidth="2.5" />
      <rect x="160" y="130" width="30" height="110" className="fill-accent" opacity="0.9" />
      <rect x="200" y="150" width="30" height="90" className="fill-card" stroke="var(--accent)" strokeWidth="2.5" />
      <rect x="240" y="100" width="30" height="140" className="fill-sage" opacity="0.85" />
      {/* dashed baseline */}
      <line x1="100" y1="240" x2="290" y2="240" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 6" />
      {/* compass flourish */}
      <g transform="translate(90 90)" opacity="0.7">
        <circle r="14" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
        <line x1="0" y1="-18" x2="0" y2="18" stroke="var(--accent)" strokeWidth="1.5" />
        <line x1="-18" y1="0" x2="18" y2="0" stroke="var(--accent)" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
