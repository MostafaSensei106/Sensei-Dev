"use client";

import { motion } from "framer-motion";
import { EASE } from "@/app/core/motion";
import SectionHeader from "@/app/core/components/SectionHeader";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 md:py-32 px-6 md:px-20 bg-surface/30 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Process // How I work"
          japanese="手順"
          titleA="Brief to"
          titleB="Handover."
          description="Same rhythm every time. You always know what comes next and what you receive."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.process.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: idx * 0.08, ease: EASE }}
              className="relative bg-background/60 border border-white/5 p-7 hover:border-primary/40 transition-colors duration-500"
            >
              <div className="font-mono text-5xl font-black text-white/[0.06] absolute top-4 right-5 select-none" aria-hidden="true">
                {p.index}
              </div>
              <div className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase mb-1">{p.index}</div>
              <div className="jp-eyebrow text-[10px] text-white/30 mb-3" lang="ja">{p.japanese}</div>
              <h3 className="font-display text-xl font-black uppercase text-white mb-3">{p.title}</h3>
              <p className="text-sm text-white/55 font-light leading-relaxed">{p.description}</p>
              {idx < PORTFOLIO_DATA.process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-primary/40" aria-hidden="true" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
