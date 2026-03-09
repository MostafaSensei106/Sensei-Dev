"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { knowledgeEducationItems } from "@/app/core/data";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <section id="work" ref={containerRef} className="relative py-32 px-6 md:px-20 min-h-screen">
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
            {knowledgeEducationItems.filter((_, i) => i % 2 === 0).map((item, index) => (
              <motion.div
                key={index}
                style={{ y: y1 }}
                className="interactive glass-panel rounded-3xl md:rounded-[3rem] p-8 md:p-12 hover:bg-surface/90 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 relative z-10">{item.tag}</h3>
                {item.subTag && (
                  <a
                    href={item.subTagHyperlink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-primary font-medium mb-4 relative z-10 hover:underline"
                  >
                    {item.subTag}
                  </a>
                )}
                <p className="text-on-surface-variant relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {knowledgeEducationItems.filter((_, i) => i % 2 !== 0).map((item, index) => (
              <motion.div
                key={index}
                style={{ y: y2 }}
                className="interactive glass-panel rounded-3xl md:rounded-[3rem] p-8 md:p-12 hover:bg-surface/90 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 relative z-10">{item.tag}</h3>
                {item.subTag && (
                  <a
                    href={item.subTagHyperlink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-tertiary font-medium mb-4 relative z-10 hover:underline"
                  >
                    {item.subTag}
                  </a>
                )}
                <p className="text-on-surface-variant relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
