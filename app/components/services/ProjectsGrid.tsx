"use client";

import { Repo } from "@/app/core/api/github";
import CounterChip from "@/app/core/components/CounterChip";
import { CountUp } from "@/app/core/components/CountUp";
import SectionHeader from "@/app/core/components/SectionHeader";
import SectionWatermark from "@/app/core/components/SectionWatermark";
import { EASE } from "@/app/core/motion";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useMemo } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ repos }: { repos: Repo[] }) {
  const totalStars = useMemo(
    () => repos.reduce((s, r) => s + (r.stargazers_count || 0), 0),
    [repos]
  );
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-20 bg-background overflow-hidden">
      <SectionWatermark japanese="設計開発" corner="left" />

      {/* Decorative speed lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Open Source // ライブラリ"
          japanese="開発"
          titleA="Code"
          titleB="Libraries."
          size="lg"
          description="Packages with bench scripts and documented limits. Numbers live in each repo, not in headlines."
          aside={
            <CounterChip
              tone="accent"
              icon={<Star size={26} className="text-accent" fill="var(--accent)" aria-hidden="true" />}
              stats={[
                { value: <CountUp target={repos.length} />, label: "Projects indexed" },
                { value: <CountUp target={totalStars} />, label: "Stars earned" },
              ]}
            />
          }
        />

        {/* Project Grid  empty state when GitHub API is down */}
        {repos.length === 0 && (
          <div className="relative bg-surface/60 border border-foreground/10 p-10 md:p-14 text-center">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" aria-hidden="true" />
            <p className="brush-jp text-4xl text-accent/80 mb-4" lang="ja">接続切れ</p>
            <p className="font-mono text-sm text-foreground/60 tracking-wider mb-2">
              GitHub API unreachable right now.
            </p>
            <p className="text-sm text-foreground/40 font-light">
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
              <ProjectCard repo={repo} index={idx} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Line  gradient from transparent to red to transparent */}
        <div className="mt-20 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </div>
    </section>
  );
}
