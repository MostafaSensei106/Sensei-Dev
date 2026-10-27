"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

/*
 * One decorative kanji column per section, always the same recipe:
 * 3% foreground, brush font, vertical, non-interactive, hidden from AT.
 *
 * Corners are standardized to three slots and alternate down the page so two
 * neighbouring sections never repeat the side. `edge` is the oversized
 * end-of-page treatment reserved for the footer.
 */
const CORNER = {
  left: "left-0 top-24",
  right: "right-0 top-24",
  edge: "right-0 bottom-10",
} as const;

const SIZE = {
  default: "text-[13vw]",
  large: "text-[20vw]",
} as const;

interface SectionWatermarkProps {
  /** The kanji column, one character per line. */
  japanese: string;
  corner?: keyof typeof CORNER;
  size?: keyof typeof SIZE;
  className?: string;
}

export default function SectionWatermark({
  japanese,
  corner = "left",
  size = "default",
  className = "",
}: SectionWatermarkProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Slow drift  the column lags the page by a few percent, never enough to
  // reach the content column.
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 select-none ${CORNER[corner]}`}
    >
      <motion.div
        style={reduceMotion ? undefined : { y }}
        className={`font-black text-foreground/[0.03] vertical-text ${SIZE[size]} ${className}`}
      >
        {Array.from(japanese).map((char, i) => (
          <span key={`${char}-${i}`}>{char}</span>
        ))}
      </motion.div>
    </div>
  );
}
