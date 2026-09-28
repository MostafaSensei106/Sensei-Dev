"use client";

import { motion } from "framer-motion";
import { EASE } from "@/app/core/motion";
import SectionHeader from "@/app/core/components/SectionHeader";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import { Code2, Server, Package, GraduationCap } from "lucide-react";

const ICONS = [Code2, Server, Package, GraduationCap];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-20 bg-background overflow-hidden">
      <div
        className="absolute left-8 top-16 pointer-events-none select-none text-white/[0.03] text-[13vw] font-black z-0 vertical-text"
        aria-hidden="true"
      >
        <span>役</span>
        <span>務</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Services // What I ship"
          japanese="役務"
          titleA="What I"
          titleB="Do."
          description="Four focused offers. Each one ends with a concrete deliverable and docs, not slides."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.services.map((s, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: EASE }}
                className="group relative bg-surface/60 border border-white/5 p-7 flex flex-col hover:border-primary/40 transition-colors duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/0 group-hover:bg-primary transition-colors duration-500" aria-hidden="true" />
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 bg-white/5 border border-white/10">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="jp-eyebrow text-[10px] text-white/25" lang="ja">{s.japanese}</span>
                </div>
                <h3 className="font-display text-xl font-black uppercase tracking-tight text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-white/60 font-light leading-relaxed mb-5">{s.description}</p>
                <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                  {s.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-tertiary bg-tertiary/10 border border-tertiary/25"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/5 font-mono text-[10px] text-accent tracking-[0.2em] uppercase">
                  → {s.deliverable}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
