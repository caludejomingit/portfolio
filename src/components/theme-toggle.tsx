"use client";

import { useSyncExternalStore } from "react";

let listeners: Array<() => void> = [];

function subscribe(callback: () => void) {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return true;
}

function setDark(next: boolean) {
  document.documentElement.classList.toggle("dark", next);
  localStorage.setItem("theme", next ? "dark" : "light");
  listeners.forEach((l) => l());
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      onClick={() => setDark(!isDark)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg transition-colors hover:border-accent hover:text-accent cursor-pointer"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
      >
        <path
          d="M12 3.5a8.5 8.5 0 1 0 8.5 8.98.5.5 0 0 0-.62-.52 6.5 6.5 0 0 1-8.34-8.34.5.5 0 0 0-.54-.62Z"
          className={isDark ? "fill-fg" : "fill-transparent stroke-fg"}
          strokeWidth="1.4"
        />
        <g
          className={isDark ? "opacity-0" : "opacity-100"}
          style={{ transition: "opacity 0.2s ease" }}
        >
          <circle cx="12" cy="12" r="3.6" className="fill-fg" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="12"
              y1="3.2"
              x2="12"
              y2="5"
              stroke="currentColor"
              className="text-fg"
              strokeWidth="1.4"
              strokeLinecap="round"
              transform={`rotate(${deg} 12 12)`}
            />
          ))}
        </g>
      </svg>
    </button>
  );
}
