"use client";

import SectionHeader from "@/app/core/components/SectionHeader";
import SectionWatermark from "@/app/core/components/SectionWatermark";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import { EASE } from "@/app/core/motion";
import { motion } from "framer-motion";

export default function NowSection() {
  return (
    <section aria-label="What I am doing now" className="relative py-24 md:py-32 px-6 md:px-20 bg-surface/30 border-y border-foreground/5 overflow-hidden">
      <SectionWatermark japanese="現在" corner="left" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Now // Loading the present"
          japanese="現在"
          titleA="Right"
          titleB="Now."
          size="lg"
          description="A snapshot, not a promise. Updated as the work shifts."
          aside={
            <div className="relative flex items-center gap-3 px-6 py-3 border border-primary/40 bg-surface/60 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary" aria-hidden="true" />
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping bg-primary opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="eyebrow text-primary">Live</span>
            </div>
          }
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.now.map((n, idx) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: idx * 0.08, ease: EASE }}
              className="spotlight spotlight-blue relative bg-background/60 border border-foreground/5 p-7 hover:border-primary/50 transition-colors duration-500"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 bg-primary" />
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  {n.label}
                </span>
              </div>
              <p className="border-l-2 border-primary/70 pl-4 text-sm text-foreground/75 font-light leading-relaxed">
                {n.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
