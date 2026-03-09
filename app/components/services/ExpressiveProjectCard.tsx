"use client";

import Image from "next/image";
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
    TypeScript: "border-quaternary",
    JavaScript: "border-accent",
    Kotlin: "border-orange-500",
    Python: "border-blue-400",
    Go: "border-tertiary",
    Rust: "border-primary",
  };

  const accentColor = languageColors[repo.language] || "border-white/10";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`katana-card interactive group relative min-h-[380px] md:min-h-[320px] flex flex-col p-0 rounded-card ${accentColor}`}
    >
      <div className="absolute inset-0 opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-700">
        <Image 
          src={`https://opengraph.githubassets.com/1/${repo.html_url.replace("https://github.com/", "")}`} 
          alt={repo.name}
          width={600}
          height={300}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/80 group-hover:bg-background/40 transition-colors" />
      </div>

      <div style={{ transform: "translateZ(60px)" }} className="relative z-10 h-full flex flex-col p-6 md:p-8">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2.5 bg-white/5 rounded-xl backdrop-blur-md border border-white/10">
            <Github className="text-tertiary" size={20} />
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-full text-[10px] font-bold backdrop-blur-md border border-white/10">
              <Star size={10} className="text-accent" />
              {repo.stargazers_count}
            </div>
          </div>
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 tracking-tight group-hover:text-tertiary transition-colors text-shadow-lg uppercase">
          {highlight?.name || repo.name.replace(/-/g, " ")}
        </h3>

        <p className="text-on-surface-variant line-clamp-2 mb-6 text-base font-light leading-relaxed">
          {highlight?.description || repo.description || "Experimental Ronin Project."}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest bg-tertiary/10 rounded-full text-tertiary border border-tertiary/20">
            {repo.language || "Native"}
          </span>
        </div>

        <div className="flex gap-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 bg-primary text-white rounded-button font-black text-[10px] tracking-widest text-center flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all shadow-lg shadow-primary/20"
          >
            SOURCE
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/10 rounded-button hover:bg-primary hover:text-white hover:border-primary transition-all backdrop-blur-md text-white/60"
              aria-label={`Visit live demo for ${repo.name}`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
