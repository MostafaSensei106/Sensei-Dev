"use client";

import type { ReactNode } from "react";

interface CounterStat {
  /** Usually a stringified/padded number, but may be a <CountUp />. */
  value: ReactNode;
  /** Split on spaces  each word becomes its own line. */
  label: string;
}

interface CounterChipProps {
  stats: CounterStat[];
  /** primary = action/structure, accent = metrics/proof. */
  tone?: "primary" | "accent";
  icon?: ReactNode;
  className?: string;
}

const TONE = {
  primary: {
    frame: "border-primary/40",
    bracket: "border-primary",
    value: "text-primary",
  },
  accent: {
    frame: "border-accent/40",
    bracket: "border-accent",
    value: "text-accent",
  },
} as const;

export default function CounterChip({
  stats,
  tone = "primary",
  icon,
  className = "",
}: CounterChipProps) {
  const t = TONE[tone];

  return (
    <div
      className={`relative flex items-center gap-4 px-6 py-3 border bg-surface/60 backdrop-blur-sm ${t.frame} ${className}`}
    >
      <div
        className={`absolute top-0 left-0 w-3 h-3 border-t border-l ${t.bracket}`}
        aria-hidden="true"
      />
      <div
        className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r ${t.bracket}`}
        aria-hidden="true"
      />

      {icon ? <span className="shrink-0">{icon}</span> : null}

      <div className="flex items-center gap-3">
        {stats.map((stat, idx) => (
          <div key={`${stat.label}-${idx}`} className="flex items-center gap-3">
            {idx > 0 ? (
              <span
                className={`font-mono text-xl font-black opacity-50 ${t.value}`}
                aria-hidden="true"
              >
                •
              </span>
            ) : null}
            <span
              className={`font-mono text-2xl font-black tabular-nums ${t.value}`}
            >
              {stat.value}
            </span>
            <div className="flex flex-col">
              {stat.label.split(" ").map((word) => (
                <span key={word} className="eyebrow-sm text-on-surface-variant">
                  {word}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
