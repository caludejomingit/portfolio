export function HeroPipeline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 560"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* backdrop organic blob */}
      <path
        d="M383,84.6C433,116,468,171,478,229C488,287,473,347,436,395C399,443,340,479,278,486C216,493,151,471,103,428C55,385,24,321,20,257C16,193,39,129,84,88C129,47,196,29,258,25C320,21,333,53,383,84.6Z"
        className="fill-sage/15 dark:fill-sage/10"
      />

      {/* hand-drawn flowing pipeline path */}
      <path
        d="M60 420 C 140 380, 130 300, 210 280 C 300 258, 300 180, 400 150 C 450 135, 480 130, 505 110"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="1 14"
        opacity="0.55"
      />
      <path
        d="M60 420 C 140 380, 130 300, 210 280 C 300 258, 300 180, 400 150 C 450 135, 480 130, 505 110"
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* secondary branch line */}
      <path
        d="M210 280 C 250 330, 220 390, 260 440 C 285 470, 320 480, 360 486"
        stroke="var(--fg)"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* pipeline nodes */}
      <g>
        <circle cx="60" cy="420" r="16" className="fill-forest dark:fill-cream" />
        <circle cx="60" cy="420" r="16" stroke="var(--accent)" strokeWidth="2" fill="none" />
      </g>
      <g>
        <circle cx="210" cy="280" r="22" className="fill-card" stroke="var(--accent)" strokeWidth="2.5" />
        <path d="M200 280 L207 287 L221 271" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      <g>
        <rect x="382" y="132" width="36" height="36" rx="8" transform="rotate(-8 400 150)" className="fill-accent" opacity="0.9" />
      </g>
      <g>
        <circle cx="505" cy="110" r="14" className="fill-sage" opacity="0.9" />
      </g>
      <g>
        <circle cx="360" cy="486" r="10" className="fill-accent" opacity="0.8" />
      </g>

      {/* scattered data dots */}
      {[
        [120, 400, 4],
        [165, 345, 3],
        [255, 245, 3.5],
        [340, 195, 3],
        [455, 130, 4],
        [305, 460, 3],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} className="fill-fg" opacity="0.3" />
      ))}

      {/* hand-drawn sun / node cluster top right, brand flourish */}
      <g transform="translate(470 380)">
        <circle r="34" className="fill-none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5" />
        <circle r="20" className="fill-none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.35" />
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <line
            key={deg}
            x1="0"
            y1="-42"
            x2="0"
            y2="-52"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
            transform={`rotate(${deg})`}
          />
        ))}
      </g>

      {/* underline flourish near bottom-left */}
      <path
        d="M20 500 C 60 490, 90 512, 130 500"
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
