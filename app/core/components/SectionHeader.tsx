"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/app/core/motion";

interface SectionHeaderProps {
  eyebrow: string;
  japanese?: string;
  titleA: string;
  titleB: string;
  description?: string;
  /** Secondary log line under the title (mono + dot). */
  subLabel?: string;
  /** "lg" is the oversized hero-of-section treatment used by feature sections. */
  size?: "default" | "lg";
  /** Right-hand slot: counters, filters, badges. Implies a split layout. */
  aside?: ReactNode;
  /** Kept for explicit control when there is no aside. */
  align?: "left" | "split";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  japanese,
  titleA,
  titleB,
  description,
  subLabel,
  size = "default",
  aside,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const split = align === "split" || Boolean(aside);

  const titleSize =
    size === "lg"
      ? "text-5xl md:text-8xl leading-[0.85]"
      : "text-4xl md:text-6xl lg:text-7xl leading-[0.9]";

  return (
    <div
      className={[
        "relative mb-16 md:mb-20",
        split
          ? "flex flex-col md:flex-row justify-between items-end gap-8"
          : "max-w-3xl",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Speed-line wipe: every section opens with the same left-to-right streak. */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        style={{ transformOrigin: "left" }}
        className="pointer-events-none absolute left-0 top-0 h-7 w-[60%] max-w-[420px]"
      >
        <div className="speed-lines absolute inset-0 opacity-70" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-primary/35" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className={split ? "max-w-3xl" : undefined}
      >
        <div className="relative flex items-center gap-4 mb-6">
          <div className="w-12 h-[2px] bg-primary" aria-hidden="true" />
          <span className="eyebrow text-primary">{eyebrow}</span>
          {japanese ? (
            <span
              className="jp-eyebrow text-[11px] text-foreground/30 uppercase hidden sm:inline"
              lang="ja"
            >
              {japanese}
            </span>
          ) : null}
        </div>

        <h2
          className={`font-display font-black tracking-tighter uppercase ${titleSize}`}
        >
          <span className="text-foreground">{titleA}</span> <br />
          <span className="text-primary italic">{titleB}</span>
        </h2>

        {subLabel ? (
          <div className="mt-6 flex items-center gap-3">
            <div className="w-2 h-2 bg-primary" aria-hidden="true" />
            <span className="eyebrow-sm text-foreground/30">{subLabel}</span>
          </div>
        ) : null}

        {description ? (
          <p className="mt-5 text-base md:text-lg text-foreground/60 font-light leading-relaxed max-w-2xl">
            {description}
          </p>
        ) : null}
      </motion.div>

      {aside ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="shrink-0"
        >
          {aside}
        </motion.div>
      ) : null}
    </div>
  );
}
