export function BookCover({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 440" className={className} aria-hidden="true" fill="none">
      <rect x="0" y="0" width="300" height="440" rx="6" className="fill-forest" />
      <rect
        x="10"
        y="10"
        width="280"
        height="420"
        rx="3"
        stroke="var(--sage)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />

      {/* moon */}
      <circle cx="220" cy="90" r="34" className="fill-cream" opacity="0.92" />
      <circle cx="232" cy="80" r="30" className="fill-forest" />

      {/* shadow figure silhouette */}
      <path
        d="M150 260 C150 230, 168 210, 150 190 C 138 176, 138 160, 150 148 C162 136, 180 136, 190 150 C 200 164, 196 178, 184 190 C 168 208, 186 232, 186 260 Z"
        className="fill-cream"
        opacity="0.9"
      />
      <path
        d="M150 260 L120 340 L150 340 L158 290 L166 340 L196 340 L184 260 Z"
        className="fill-cream"
        opacity="0.9"
      />

      {/* ground shadow / reflection */}
      <ellipse cx="158" cy="350" rx="55" ry="8" className="fill-cream" opacity="0.15" />

      {/* scattered stars */}
      {[
        [40, 50],
        [70, 110],
        [40, 170],
        [260, 200],
        [270, 300],
        [30, 260],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" className="fill-cream" opacity="0.5" />
      ))}

      {/* decorative frame corners */}
      {[
        [24, 24, 0],
        [276, 24, 90],
        [276, 416, 180],
        [24, 416, 270],
      ].map(([x, y, r], i) => (
        <path
          key={i}
          d="M0 0 L16 0 M0 0 L0 16"
          stroke="var(--sage)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          transform={`translate(${x} ${y}) rotate(${r})`}
        />
      ))}
    </svg>
  );
}
