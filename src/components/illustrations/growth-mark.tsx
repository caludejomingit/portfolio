export function GrowthMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 460"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M255,60.8C288,86,304,132,306,177C308,222,294,266,264,300C234,334,188,358,142,354C96,350,50,318,28,272C6,226,8,166,38,124C68,82,126,58,175,44C224,30,222,35.6,255,60.8Z"
        className="fill-sage/15 dark:fill-sage/10"
      />

      {/* trunk / core line rising from roots to canopy */}
      <path
        d="M200 400 C 195 340, 205 300, 198 250 C 192 200, 206 160, 200 100"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* roots — the analyst foundation */}
      {[
        "M200 400 C 170 405, 150 420, 120 430",
        "M200 400 C 230 405, 250 420, 280 430",
        "M200 400 C 195 412, 195 424, 195 440",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="var(--fg)"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      ))}
      {/* root labels as small dots */}
      <circle cx="120" cy="430" r="4" className="fill-fg" opacity="0.4" />
      <circle cx="280" cy="430" r="4" className="fill-fg" opacity="0.4" />
      <circle cx="195" cy="440" r="4" className="fill-fg" opacity="0.4" />

      {/* branching toward engineering canopy */}
      <path
        d="M200 250 C 170 235, 150 210, 130 180"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M198 250 C 228 232, 250 205, 270 172"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* canopy nodes — cloud / pipeline blocks */}
      <rect x="110" y="150" width="30" height="30" rx="7" transform="rotate(-6 125 165)" className="fill-accent" opacity="0.9" />
      <circle cx="270" cy="155" r="16" className="fill-card" stroke="var(--accent)" strokeWidth="2.5" />
      <circle cx="200" cy="86" r="20" className="fill-sage" opacity="0.85" />

      {/* small flourish leaves */}
      <path
        d="M200 100 C 185 92, 178 78, 182 64"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M200 130 C 214 122, 222 108, 218 94"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
