"use client";

import { motion } from "framer-motion";
import { EASE } from "@/app/core/motion";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import { ExternalLink } from "lucide-react";

/**
 * Upstream contributions — fixes shipped to projects I don't own.
 * Compact strip inside the proof cluster, same card language.
 */
export default function ContributionsStrip() {
  return (
    <section aria-label="Open-source contributions" className="relative py-16 md:py-20 px-6 md:px-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10 flex flex-wrap items-center gap-4"
        >
          <div className="w-12 h-[2px] bg-tertiary" aria-hidden="true" />
          <span className="text-tertiary text-[11px] font-mono font-bold tracking-[0.35em] uppercase">
            Upstream // Contributed
          </span>
          <span className="brush-jp text-lg text-white/30" lang="ja">
            貢献
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.contributions.map((c, idx) => (
            <motion.a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: idx * 0.08, ease: EASE }}
              className="group relative bg-surface/60 border border-white/5 p-6 hover:border-tertiary/50 transition-colors duration-500 flex flex-col"
              aria-label={`${c.name} — ${c.org}`}
            >
              <div
                className="absolute top-0 left-0 w-full h-[2px] bg-tertiary/0 group-hover:bg-tertiary transition-colors duration-500"
                aria-hidden="true"
              />
              <div className="flex items-center justify-between gap-3 mb-3">
                <h3 className="font-display text-lg font-black uppercase tracking-tight text-white group-hover:text-tertiary transition-colors duration-300">
                  {c.name}
                </h3>
                <ExternalLink
                  size={14}
                  className="text-white/25 group-hover:text-tertiary transition-colors duration-300 shrink-0"
                />
              </div>
              <span className="mb-3 w-fit px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-tertiary bg-tertiary/10 border border-tertiary/25">
                {c.org}
              </span>
              <p className="text-sm text-white/55 font-light leading-relaxed">{c.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
