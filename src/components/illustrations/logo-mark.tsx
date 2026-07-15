export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} aria-hidden="true" fill="none">
      <circle cx="22" cy="22" r="21" className="fill-none" stroke="var(--accent)" strokeWidth="1.4" opacity="0.4" />
      {/* flowing J stroke, echoing the hero pipeline line */}
      <path
        d="M28 12 C28 12, 28 24, 28 27 C28 32.5, 24 34.5, 20 33.5 C17.5 32.9, 16 31, 15.5 28.5"
        stroke="var(--accent)"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* node dot completing the mark */}
      <circle cx="28" cy="10.5" r="3" className="fill-accent" />
    </svg>
  );
}
