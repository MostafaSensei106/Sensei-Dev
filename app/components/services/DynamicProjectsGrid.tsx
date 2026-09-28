"use client";

import { motion } from "framer-motion";
import { EASE } from "@/app/core/motion";
import { Repo } from "@/app/core/api/github";
import ExpressiveProjectCard from "./ExpressiveProjectCard";

export default function DynamicProjectsGrid({ repos }: { repos: Repo[] }) {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-20 bg-background overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 mb-16 md:mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary text-xs font-black tracking-[0.4em] uppercase font-mono">
                Open Source // ライブラリ
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              <span className="text-white">Code</span> <br />
              <span className="text-primary italic">Libraries.</span>
            </h2>
            <p className="mt-5 text-white/55 max-w-xl font-light leading-relaxed">
              Packages with bench scripts and documented limits. Numbers live in each repo, not in headlines.
            </p>
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
                  {String(repos.length).padStart(2, "0")}
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

        {/* Project Grid — empty state when GitHub API is down */}
        {repos.length === 0 && (
          <div className="relative bg-surface/60 border border-white/10 p-10 md:p-14 text-center">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" aria-hidden="true" />
            <p className="brush-jp text-4xl text-accent/80 mb-4" lang="ja">接続切れ</p>
            <p className="font-mono text-sm text-white/60 tracking-wider mb-2">
              GitHub API unreachable right now.
            </p>
            <p className="text-sm text-white/40 font-light">
              Full write-ups with benchmarks live in the Selected Work section above.
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {repos.map((repo, idx) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: (idx % 3) * 0.1,
                duration: 0.7,
                ease: EASE,
              }}
              className="flex"
            >
              <ExpressiveProjectCard repo={repo} index={idx} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Line — gradient from transparent to red to transparent */}
        <div className="mt-20 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </div>
    </section>
  );
}
