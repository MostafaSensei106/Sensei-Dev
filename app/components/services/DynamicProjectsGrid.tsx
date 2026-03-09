"use client";

import { motion } from "framer-motion";
import { useGitHubRepos } from "@/app/core/hooks/useGitHubRepos";
import ExpressiveProjectCard from "./ExpressiveProjectCard";
import { Cpu, Terminal, ShieldAlert } from "lucide-react";

export default function DynamicProjectsGrid() {
  const { repos, isLoading } = useGitHubRepos();

  return (
    <section id="projects" className="relative py-40 px-6 md:px-20 bg-[#050505] overflow-hidden">
      {/* Background Japanese Watermark */}
      <div className="absolute left-10 top-20 pointer-events-none select-none opacity-[0.02] text-[15vw] font-black leading-none -z-0 vertical-text uppercase">
        開発マニフェスト — MANIFESTO
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary text-xs font-black tracking-[0.4em] uppercase">The Code Manifesto</span>
            </div>
            <h2 className="font-display text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
              System <br /> <span className="text-white/40 italic">Architecture.</span>
            </h2>
          </div>
          <div className="flex flex-col items-end text-right max-w-sm">
            <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-6">
              Precision-engineered repositories focused on high-performance concurrency, sorting algorithms, and native system integration.
            </p>
            <div className="flex gap-4">
              <div className="p-3 bg-white/5 border border-white/10 rounded-2xl">
                <Cpu size={20} className="text-primary" />
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-2xl">
                <Terminal size={20} className="text-secondary" />
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/5] rounded-[3rem] animate-pulse bg-white/5 border border-white/10" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {repos.map((repo, idx) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1, ease: [0.23, 1, 0.32, 1] }}
                className="flex"
              >
                <ExpressiveProjectCard repo={repo} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom Decorative Line */}
        <div className="mt-32 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
