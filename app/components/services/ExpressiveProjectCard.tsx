"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { Repo } from "../../core/hooks/useGitHubRepos";
import { useRef } from "react";
import { PORTFOLIO_DATA } from "../../core/config/portfolio";

interface ExpressiveProjectCardProps {
  repo: Repo;
  index?: number;
}

export default function ExpressiveProjectCard({ repo, index = 0 }: ExpressiveProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 300 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 300 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const highlight = PORTFOLIO_DATA.projects.highlights.find((h) =>
    repo.name.toLowerCase().includes(h.name.toLowerCase())
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const languageColors: Record<string, { border: string; bg: string; text: string }> = {
    Dart: { border: "border-[#00B4AB]", bg: "bg-[#00B4AB]/15", text: "text-[#00B4AB]" },
    TypeScript: { border: "border-[#3178C6]", bg: "bg-[#3178C6]/15", text: "text-[#3178C6]" },
    JavaScript: { border: "border-accent", bg: "bg-accent/15", text: "text-accent" },
    Kotlin: { border: "border-[#F18E33]", bg: "bg-[#F18E33]/15", text: "text-[#F18E33]" },
    Python: { border: "border-[#3776AB]", bg: "bg-[#3776AB]/15", text: "text-[#3776AB]" },
    Go: { border: "border-tertiary", bg: "bg-tertiary/15", text: "text-tertiary" },
    Rust: { border: "border-[#DEA584]", bg: "bg-[#DEA584]/15", text: "text-[#DEA584]" },
  };

  const langStyle = languageColors[repo.language] || {
    border: "border-white/20",
    bg: "bg-white/10",
    text: "text-white/60",
  };

  const displayIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative w-full min-h-[380px] md:min-h-[340px] flex flex-col bg-surface/80 backdrop-blur-md border ${langStyle.border} overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(226,0,26,0.3)] hover:border-primary/60`}
    >
      {/* Background OG Image */}
      <div className="absolute inset-0 opacity-5 grayscale group-hover:grayscale-0 group-hover:opacity-20 transition-all duration-700">
        <Image
          src={`https://opengraph.githubassets.com/1/${repo.html_url.replace("https://github.com/", "")}`}
          alt={repo.name}
          width={600}
          height={300}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/90 to-surface/60 group-hover:from-surface/90 group-hover:via-surface/70 group-hover:to-surface/40 transition-all duration-700" />
      </div>

      {/* Diagonal cut line — CSS pseudo-element via inline style */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500"
        style={{
          backgroundImage: "linear-gradient(135deg, transparent 45%, var(--primary) 45%, var(--primary) 45.5%, transparent 45.5%)",
        }}
      />

      {/* Decorative index number */}
      <div className="absolute -bottom-2 -right-1 font-display text-[8rem] font-black text-white/[0.03] leading-none select-none pointer-events-none z-0 group-hover:text-primary/[0.06] transition-colors duration-700">
        {displayIndex}
      </div>

      {/* Card Content */}
      <div
        style={{ transform: "translateZ(50px)" }}
        className="relative z-10 h-full flex flex-col p-6 md:p-8"
      >
        {/* Top HUD — GitHub icon + star count */}
        <div className="flex justify-between items-start mb-5">
          <div className="p-2 bg-white/5 border border-white/10 backdrop-blur-md">
            <Github className="text-on-surface-variant group-hover:text-tertiary transition-colors" size={18} />
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 backdrop-blur-md">
            <Star size={11} className="text-accent" />
            <span className="font-mono text-[10px] font-bold text-on-surface-variant">
              {repo.stargazers_count}
            </span>
          </div>
        </div>

        {/* Project Name */}
        <h3 className="font-display text-xl md:text-2xl font-black mb-3 tracking-tight uppercase leading-tight text-white group-hover:text-primary transition-colors duration-300">
          {highlight?.name || repo.name.replace(/-/g, " ")}
        </h3>

        {/* Description */}
        <p className="text-on-surface-variant/80 line-clamp-2 mb-6 text-sm font-light leading-relaxed">
          {highlight?.description || repo.description || "Experimental Ronin Project."}
        </p>

        {/* Language Badge */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          <span
            className={`px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] font-mono ${langStyle.bg} ${langStyle.text} border ${langStyle.border}`}
          >
            {repo.language || "Native"}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 bg-primary text-white font-mono font-black text-[10px] tracking-[0.2em] uppercase text-center flex items-center justify-center gap-2 hover:bg-white hover:text-background transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Source
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 backdrop-blur-md text-on-surface-variant flex items-center justify-center"
              aria-label={`Visit live demo for ${repo.name}`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
