"use client";

import { motion } from "framer-motion";
import { useGitHubRepos } from "@/app/core/hooks/useGitHubRepos";
import ExpressiveProjectCard from "./ExpressiveProjectCard";

export default function DynamicProjectsGrid() {
  const { repos, isLoading } = useGitHubRepos();

  return (
    <section id="work" className="relative py-32 px-6 md:px-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-mono text-sm tracking-[0.4em] uppercase mb-4 block">Archive 01</span>
            <h2 className="font-display text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              The <span className="text-secondary">Code</span> <br /> Manifesto.
            </h2>
          </div>
          <p className="text-on-surface-variant text-xl md:text-2xl font-light max-w-sm text-right leading-relaxed">
            Dynamic repositories forged in the fires of late-night inspiration and Android discipline.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="katana-card min-h-[400px] animate-pulse bg-white/5" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {repos.map((repo, idx) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: "circOut" }}
              >
                <ExpressiveProjectCard repo={repo} />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Japanese Watermark Background */}
      <div className="absolute left-0 bottom-0 pointer-events-none select-none opacity-[0.02] text-[20vw] font-black leading-none -z-10 vertical-text whitespace-nowrap">
        技術革新 技術革新 技術革新
      </div>
    </section>
  );
}
