export function PipelineArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true" fill="none">
      <path
        d="M286,72C314,100,320,144,314,186C308,228,288,264,250,282C212,300,158,298,118,276C78,254,54,212,54,170C54,128,78,86,114,62C150,38,194,32,232,40C270,48,258,44,286,72Z"
        className="fill-sage/15 dark:fill-sage/10"
      />
      {/* cloud shape */}
      <path
        d="M110 110 C 96 110, 84 100, 84 86 C 84 72, 96 62, 110 62 C 114 48, 128 38, 144 38 C 162 38, 176 50, 180 66 C 194 66, 206 78, 206 92 C 206 106, 194 116, 180 116 L 110 116 Z"
        className="fill-card"
        stroke="var(--accent)"
        strokeWidth="2.5"
      />
      {/* arrow down from cloud (Event Grid) */}
      <path d="M145 116 L145 148" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M136 140 L145 150 L154 140" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Functions node */}
      <rect x="115" y="152" width="60" height="42" rx="8" className="fill-accent" opacity="0.9" />
      <path d="M138 163 L132 173 L140 173 L134 184" stroke="var(--cream)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* arrow to medallion stack */}
      <path d="M175 173 L215 173" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M207 165 L217 173 L207 181" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* medallion architecture: bronze/silver/gold stacked plates */}
      <g transform="translate(225 145)">
        <ellipse cx="35" cy="46" rx="38" ry="12" className="fill-none" stroke="#8a5a2b" strokeWidth="2.5" opacity="0.8" />
        <ellipse cx="35" cy="30" rx="38" ry="12" className="fill-none" stroke="var(--fg)" strokeOpacity="0.5" strokeWidth="2.5" />
        <ellipse cx="35" cy="14" rx="38" ry="12" className="fill-sage" opacity="0.9" />
      </g>

      {/* arrow to chart */}
      <path d="M300 165 C 320 165, 320 165, 320 165" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" opacity="0" />

      {/* Power BI style bar chart */}
      <g transform="translate(230 210)">
        <rect x="0" y="20" width="14" height="30" rx="3" className="fill-card" stroke="var(--accent)" strokeWidth="2" />
        <rect x="20" y="6" width="14" height="44" rx="3" className="fill-accent" />
        <rect x="40" y="14" width="14" height="36" rx="3" className="fill-sage" />
        <rect x="60" y="0" width="14" height="50" rx="3" className="fill-accent" opacity="0.7" />
      </g>

      {/* connecting curve from medallion to chart */}
      <path
        d="M262 191 C 262 205, 262 205, 250 210"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
