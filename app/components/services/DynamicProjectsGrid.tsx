"use client";

import { motion } from "framer-motion";
import { useGitHubRepos } from "@/app/core/hooks/useGitHubRepos";
import ExpressiveProjectCard from "./ExpressiveProjectCard";
import { Cpu, Terminal } from "lucide-react";

export default function DynamicProjectsGrid() {
  const { repos, isLoading } = useGitHubRepos();

  return (
    <section id="projects" className="relative py-40 px-6 md:px-20 bg-background overflow-hidden">
      {/* Background Japanese Watermark */}
      <div 
        className="absolute left-10 top-20 pointer-events-none select-none text-white/[0.02] text-[15vw] font-black z-0 vertical-text uppercase" 
        aria-hidden="true"
        role="img"
      >
        <span>設</span>
        <span>計</span>
        <span>開</span>
        <span>発</span>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 mb-32 items-end">
          {/* Left Block: Identity */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-accent text-xs font-black tracking-[0.4em] uppercase">The Code Manifesto</span>
            </div>

            <h2 className="font-display text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              <span className="text-white">System</span> <br />
              <span className="text-primary italic">Architecture.</span>
            </h2>
          </div>


        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/5] rounded-card animate-pulse bg-white/5 border border-white/10" />
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
