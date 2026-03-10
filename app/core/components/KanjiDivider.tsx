"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface KanjiDividerProps {
  text?: string;
  reverse?: boolean;
  angle?: number;
}

export default function KanjiDivider({
  text = "武士道 • 継続は力なり • 改善 • 不撓不屈 • 七転八起",
  reverse = false,
  angle = -1.5
}: KanjiDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create a continuous movement based on scroll
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? ["-20%", "0%"] : ["0%", "-20%"]
  );

  return (
    <div
      ref={containerRef}
      className="relative h-24 w-full overflow-hidden z-20 flex items-center bg-black/40 backdrop-blur-sm border-y border-white/5"
      style={{
        transform: `rotate(${angle}deg) scale(1.1)`,
        margin: "2rem 0"
      }}
    >
      <motion.div
        style={{ x }}
        className="flex whitespace-nowrap gap-12 text-2xl md:text-4xl font-black text-white/10 uppercase tracking-[0.5em] select-none pointer-events-none italic"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="text-primary/40 text-sm italic mr-4">Sensei</span>
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
