"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SlashDividerProps {
  label?: string;
  japanese?: string;
  /** Which edge the vermilion hairline draws from  alternate down the page. */
  origin?: "left" | "right";
  className?: string;
}

/**
 * Slash divider  two skewed katana hairlines that draw in as the boundary
 * enters the viewport. Red comes from `origin`, the ink echo follows from the
 * opposite edge a beat later. The mono label sits on the seam so every
 * chapter of the page has a name. Decorative: the headings carry the meaning.
 */
export default function SlashDivider({
  label,
  japanese,
  origin = "left",
  className = "",
}: SlashDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.45"],
  });

  const draw = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const echo = useTransform(scrollYProgress, [0.15, 1], [0, 1]);

  return (
    <div
      ref={ref}
      className={`relative z-20 flex h-24 w-full items-center justify-center overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Primary katana edge */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 -rotate-[0.7deg]">
        <motion.div
          className={`h-[2px] w-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 ${origin === "left" ? "origin-left" : "origin-right"
            }`}
          style={{ scaleX: reduce ? 1 : draw }}
        />
      </div>

      {/* Ink echo  opposite origin, offset a few pixels down */}
      <div className="absolute inset-x-0 top-1/2 translate-y-[6px] -rotate-[0.7deg]">
        <motion.div
          className={`h-[1px] w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent ${origin === "left" ? "origin-right" : "origin-left"
            }`}
          style={{ scaleX: reduce ? 1 : echo }}
        />
      </div>

      {(label || japanese) && (
        <span className="relative z-10 flex items-center gap-3 bg-background px-4">
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-primary/70" />
          {label && <span className="eyebrow text-primary/85">{label}</span>}
          {japanese && (
            <span className="brush-jp text-base text-foreground/40" lang="ja">
              {japanese}
            </span>
          )}
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-primary/70" />
        </span>
      )}
    </div>
  );
}
