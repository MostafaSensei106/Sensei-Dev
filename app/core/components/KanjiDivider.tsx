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
  angle = -1.5,
}: KanjiDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? ["-40%", "0%"] : ["0%", "-40%"]
  );

  return (
    <div
      ref={containerRef}
      className="relative h-24 w-full overflow-hidden z-20 flex items-center"
      style={{
        transform: `rotate(${angle}deg) scale(1.1)`,
        margin: "2rem 0",
        backgroundImage:
          "repeating-linear-gradient(45deg, #FFD700 0px, #FFD700 10px, #080808 10px, #080808 20px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Red Accent Borders */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-primary z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary z-10" />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <motion.div
        style={{ x }}
        className="relative flex whitespace-nowrap gap-12 text-2xl md:text-4xl font-black text-white/20 uppercase tracking-[0.5em] select-none pointer-events-none italic"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="flex items-center gap-12">
            {/* Glitch/Flicker Sensei Label */}
            <motion.span
              animate={{
                opacity: [1, 0.4, 1, 1, 0.6, 1],
                x: [0, -2, 0, 1, 0, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.15,
              }}
              className="text-primary text-sm font-mono font-bold not-italic mr-4 tracking-widest"
            >
              SENSEI
            </motion.span>
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
