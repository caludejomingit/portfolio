export function OrmaArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true" fill="none">
      <path
        d="M288,64C318,92,326,138,320,180C314,222,294,260,256,278C218,296,162,294,122,272C82,250,58,208,58,166C58,124,82,82,118,58C154,34,200,28,236,36C272,44,258,36,288,64Z"
        className="fill-sage/15 dark:fill-sage/10"
      />
      {/* speech bubble */}
      <path
        d="M110 120 C110 100, 126 86, 148 86 L262 86 C284 86, 300 100, 300 120 L300 172 C300 192, 284 206, 262 206 L180 206 L150 232 L154 206 L148 206 C126 206, 110 192, 110 172 Z"
        className="fill-card"
        stroke="var(--accent)"
        strokeWidth="3"
      />
      {/* soundwave inside bubble */}
      {[
        [140, 20],
        [162, 34],
        [184, 14],
        [206, 40],
        [228, 22],
        [250, 30],
        [272, 16],
      ].map(([x, h], i) => (
        <line
          key={i}
          x1={x}
          y1={146 - h / 2}
          x2={x}
          y2={146 + h / 2}
          stroke="var(--accent)"
          strokeWidth="5"
          strokeLinecap="round"
        />
      ))}
      {/* radiating voice arcs bottom right */}
      <g transform="translate(210 250)" opacity="0.6">
        <path d="M-10 0 A10 10 0 0 1 10 0" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
        <path d="M-20 4 A20 18 0 0 1 20 4" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  );
}
