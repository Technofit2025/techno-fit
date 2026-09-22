const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconPose({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="4.5" r="2" />
      <path d="M12 6.5v6M12 8.5l-4 2M12 8.5l4 2M12 12.5l-3 6M12 12.5l3 6" />
    </svg>
  );
}
export function IconCoach({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 2.5l8 4.2v8.6L12 21.5 4 15.3V6.7z" />
      <path d="M12 2.5v19M4 6.7l8 4.4 8-4.4" />
    </svg>
  );
}
export function IconDiet({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M6 3v6a2 2 0 0 0 2 2v10M8 3v5M10 3v6a2 2 0 0 1-2 2" />
      <path d="M17 3c-1.6 0-2.5 2-2.5 4.5S15.4 12 17 12v9" />
    </svg>
  );
}
export function IconWellness({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 21s-7-4.3-7-9.3A3.7 3.7 0 0 1 12 8a3.7 3.7 0 0 1 7 3.7C19 16.7 12 21 12 21z" />
    </svg>
  );
}
export function IconVoice({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6" />
    </svg>
  );
}
export function IconPhysio({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12" />
    </svg>
  );
}
export function IconScan({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
export function IconTarget({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}
export function IconGlobe({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  );
}
export function IconShield({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 2.5l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9v-5z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
