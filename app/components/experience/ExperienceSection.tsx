"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <section id="work" ref={containerRef} className="relative py-32 px-6 md:px-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Experience <span className="text-primary">&</span> Education.
          </h2>
          <p className="text-on-surface-variant text-xl max-w-2xl">
            My journey through software engineering, building solid foundations and real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
          <div className="flex flex-col gap-8 pt-0 md:pt-20">
            {PORTFOLIO_DATA.experience.filter((_, i) => i % 2 === 0).map((item, index) => (
              <motion.div
                key={index}
                style={{ y: y1 }}
                className="interactive glass-panel rounded-card p-8 md:p-12 hover:bg-surface/90 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 relative z-10">{item.role}</h3>
                {item.company && (
                  <div className="mb-4 relative z-10">
                    <span className="text-primary font-medium">{item.company}</span>
                    <span className="text-white/20 mx-2">|</span>
                    <span className="text-white/40 text-sm">{item.period}</span>
                  </div>
                )}
                <p className="text-on-surface-variant relative z-10">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {PORTFOLIO_DATA.experience.filter((_, i) => i % 2 !== 0).map((item, index) => (
              <motion.div
                key={index}
                style={{ y: y2 }}
                className="interactive glass-panel rounded-card p-8 md:p-12 hover:bg-surface/90 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 relative z-10">{item.role}</h3>
                {item.company && (
                  <div className="mb-4 relative z-10">
                    <span className="text-accent font-medium">{item.company}</span>
                    <span className="text-white/20 mx-2">|</span>
                    <span className="text-white/40 text-sm">{item.period}</span>
                  </div>
                )}
                <p className="text-on-surface-variant relative z-10">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
