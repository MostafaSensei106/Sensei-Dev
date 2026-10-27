"use client";

import type { CSSProperties } from "react";

const DEFAULT_ITEMS = [
  "設計",
  "開発",
  "構築",
  "計測",
  "出荷",
  "SHIP SMALL, SHIP OFTEN",
];

const JP = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/;

interface TickerStripProps {
  items?: string[];
  /** Seconds per loop. Slower is better  this is a chapter break, not an ad. */
  duration?: number;
  reverse?: boolean;
  className?: string;
}

/**
 * Ticker divider  one thin band of brush kanji and mono caps drifting past.
 * The track is duplicated so the -50% loop is seamless; hovering pauses it.
 * Decorative only, so the whole track is hidden from assistive tech.
 */
export default function TickerStrip({
  items = DEFAULT_ITEMS,
  duration = 56,
  reverse = false,
  className = "",
}: TickerStripProps) {
  const loop = [...items, ...items];

  return (
    <div
      className={`marquee relative z-20 my-6 flex h-14 w-full items-center overflow-hidden border-y border-foreground/10 bg-background/70 backdrop-blur-sm md:h-16 ${className}`}
    >
      {/* Edge fades  text dissolves instead of getting cut */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent"
        aria-hidden="true"
      />

      <div
        className="marquee-track"
        style={
          {
            animationDuration: `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as CSSProperties
        }
        aria-hidden="true"
      >
        {loop.map((item, i) => {
          const isJp = JP.test(item);
          return (
            <span
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-8 pr-8"
            >
              <span
                className={
                  isJp
                    ? "brush-jp text-lg leading-none text-foreground/35"
                    : "font-mono text-[11px] font-bold uppercase tracking-[0.35em] text-foreground/40"
                }
                lang={isJp ? "ja" : undefined}
              >
                {item}
              </span>
              <span className="inline-block h-1 w-1 rotate-45 bg-primary/70" />
            </span>
          );
        })}
      </div>
    </div>
  );
}
