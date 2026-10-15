"use client";

import { prefersReducedMotion } from "@/app/core/theme/fx";

/**
 * Pac-Man chomper (inline SVG + SMIL — no CSS @property needed).
 * Mouth freezes open when reduced-motion is on.
 */
export function Pacman({
  size = 26,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const reduced =
    typeof window !== "undefined" && prefersReducedMotion();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="15" fill="var(--accent)" />
      <polygon fill="var(--background)" points="16,16 31,7 31,25">
        {!reduced && (
          <animate
            attributeName="points"
            values="16,16 31,5 31,27;16,16 31,16 31,16;16,16 31,5 31,27"
            dur="0.34s"
            repeatCount="indefinite"
          />
        )}
      </polygon>
      <circle cx="16" cy="9" r="2.2" fill="var(--background)" />
    </svg>
  );
}
