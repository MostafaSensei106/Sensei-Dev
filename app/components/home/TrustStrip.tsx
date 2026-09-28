"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "3+", label: "Years shipping", japanese: "年" },
  { value: "6", label: "OSS packages", japanese: "庫" },
  { value: "200+", label: "Students mentored", japanese: "指導" },
  { value: "Cairo / Remote", label: "Base / availability", japanese: "場所" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Highlights" className="relative px-6 md:px-20 bg-background">
      <div className="max-w-7xl mx-auto -mt-2 grid grid-cols-2 lg:grid-cols-4 border border-white/10 bg-surface/50 backdrop-blur-md divide-x divide-white/5 divide-y lg:divide-y-0">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.07 }}
            className="px-6 py-5 flex items-center gap-4"
          >
            <span className="font-mono text-xl md:text-2xl font-black text-accent">{s.value}</span>
            <span className="flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/60">{s.label}</span>
              <span className="jp-eyebrow text-[9px] text-white/25" lang="ja">{s.japanese}</span>
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
