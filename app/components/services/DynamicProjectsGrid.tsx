"use client";

import { motion } from "framer-motion";
import { useGitHubRepos } from "@/app/core/hooks/useGitHubRepos";
import ExpressiveProjectCard from "./ExpressiveProjectCard";

export default function DynamicProjectsGrid() {
  const { repos, isLoading } = useGitHubRepos();

  return (
    <section id="projects" className="relative py-40 px-6 md:px-20 bg-background overflow-hidden">
      {/* Background Japanese Watermark */}
      <div
        className="absolute left-10 top-20 pointer-events-none select-none text-white/[0.03] text-[15vw] font-black z-0 vertical-text uppercase"
        aria-hidden="true"
        role="img"
      >
        <span>設</span>
        <span>計</span>
        <span>開</span>
        <span>発</span>
      </div>

      {/* Decorative speed lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 mb-32 items-end">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-accent text-xs font-black tracking-[0.4em] uppercase font-mono">
                The Code Manifesto
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              <span className="text-white">System</span> <br />
              <span className="text-primary italic">Architecture.</span>
            </h2>
          </motion.div>

          {/* Counter Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex lg:justify-end"
          >
            <div className="relative px-6 py-3 border border-white/10 bg-surface/60 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary" />
              <div className="flex items-center gap-3">
                <span className="font-mono text-primary text-2xl font-black">
                  {isLoading ? "--" : String(repos.length).padStart(2, "0")}
                </span>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-on-surface-variant tracking-[0.3em] uppercase">
                    Projects
                  </span>
                  <span className="font-mono text-[9px] text-on-surface-variant tracking-[0.3em] uppercase">
                    Indexed
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-[4/5] bg-surface/50 border border-white/5 overflow-hidden">
                {/* Skeleton pulse with red accent */}
                <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-primary/5 via-surface to-surface" />
                <div className="absolute top-6 left-6 w-8 h-8 bg-white/5 animate-pulse" />
                <div className="absolute bottom-6 left-6 right-6 space-y-3">
                  <div className="h-6 bg-white/5 animate-pulse w-3/4" />
                  <div className="h-3 bg-white/5 animate-pulse w-full" />
                  <div className="h-3 bg-white/5 animate-pulse w-2/3" />
                </div>
                {/* Red accent line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/40 via-primary/20 to-transparent animate-pulse" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {repos.map((repo, idx) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: idx * 0.12,
                  duration: 0.9,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="flex"
              >
                <ExpressiveProjectCard repo={repo} index={idx} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom Decorative Line — gradient from transparent to red to transparent */}
        <div className="mt-32 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </div>
    </section>
  );
}
