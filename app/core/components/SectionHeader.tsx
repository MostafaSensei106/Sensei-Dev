"use client";

import { motion } from "framer-motion";
import { EASE } from "@/app/core/motion";

interface SectionHeaderProps {
  eyebrow: string;
  japanese: string;
  titleA: string;
  titleB: string;
  description?: string;
  align?: "left" | "split";
}

export default function SectionHeader({
  eyebrow,
  japanese,
  titleA,
  titleB,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: EASE }}
      className={align === "split" ? "mb-16 md:mb-20" : "mb-16 md:mb-20 max-w-3xl"}
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-[2px] bg-primary" aria-hidden="true" />
        <span className="text-primary text-[11px] font-mono font-bold tracking-[0.35em] uppercase">
          {eyebrow}
        </span>
        <span className="jp-eyebrow text-[11px] text-white/30 uppercase" lang="ja">
          {japanese}
        </span>
      </div>
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
        <span className="text-white">{titleA}</span> <br />
        <span className="text-primary italic">{titleB}</span>
      </h2>
      {description ? (
        <p className="mt-5 text-base md:text-lg text-white/60 font-light leading-relaxed max-w-2xl">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
