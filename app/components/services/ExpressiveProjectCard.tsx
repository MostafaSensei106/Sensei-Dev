"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Star, Shield } from "lucide-react";
import { Repo } from "../../core/hooks/useGitHubRepos";
import { useRef } from "react";
import { PORTFOLIO_DATA } from "../../core/config/portfolio";

export default function ExpressiveProjectCard({ repo }: { repo: Repo }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 300 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 300 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Check if this project is a "Highlight" from our CV data
  const highlight = PORTFOLIO_DATA.projects.highlights.find(h => 
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

  const languageColors: Record<string, string> = {
    Dart: "border-primary",
    TypeScript: "border-secondary",
    JavaScript: "border-tertiary",
    Kotlin: "border-orange-500",
    Python: "border-blue-400",
    Go: "border-cyan-400",
  };

  const accentColor = languageColors[repo.language] || "border-white/10";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`katana-card interactive group relative min-h-[480px] flex flex-col p-0 ${accentColor}`}
    >
      <div className="absolute inset-0 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700">
        <img 
          src={`https://opengraph.githubassets.com/1/${repo.html_url.replace("https://github.com/", "")}`} 
          alt={repo.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60 group-hover:bg-background/20 transition-colors" />
      </div>

      <div style={{ transform: "translateZ(60px)" }} className="relative z-10 h-full flex flex-col p-8 md:p-10">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-md">
            <Github className="text-primary" size={24} />
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full text-xs font-bold backdrop-blur-md">
              <Star size={12} className="text-primary" />
              {repo.stargazers_count}
            </div>
            {repo.license && (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full text-[10px] font-bold text-primary border border-primary/20">
                <Shield size={10} />
                {repo.license.spdx_id}
              </div>
            )}
          </div>
        </div>

        <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors text-shadow-lg">
          {highlight?.name || repo.name.replace(/-/g, " ")}
        </h3>

        <p className="text-on-surface-variant line-clamp-3 mb-6 text-lg font-light leading-relaxed">
          {highlight?.description || repo.description || "Experimental Ronin Project."}
        </p>

        {highlight?.metrics && (
          <div className="flex flex-col gap-2 mb-6">
            {highlight.metrics.map((metric, i) => (
              <div key={i} className="flex items-center gap-2 text-primary font-mono text-[10px] uppercase tracking-widest">
                <div className="w-4 h-[1px] bg-primary" />
                {metric}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-primary/20 rounded-full text-primary border border-primary/30">
            {repo.language || "Native"}
          </span>
          {repo.topics?.slice(0, 2).map((topic) => (
            <span key={topic} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/10 rounded-full text-white/50">
              {topic}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-4 px-6 bg-primary text-on-primary rounded-katana font-black text-center flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-primary/20"
          >
            SOURCE
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-white/10 rounded-katana hover:bg-white/10 transition-colors backdrop-blur-md"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
