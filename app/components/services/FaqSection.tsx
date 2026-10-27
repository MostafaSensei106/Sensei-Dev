"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/app/core/motion";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import { Plus } from "lucide-react";
import SectionHeader from "@/app/core/components/SectionHeader";
import SectionWatermark from "@/app/core/components/SectionWatermark";
import CounterChip from "@/app/core/components/CounterChip";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" aria-label="Frequently asked questions" className="relative py-24 md:py-32 px-6 md:px-20 bg-background overflow-hidden">
      <SectionWatermark japanese="質問" corner="left" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="FAQ // Before you ask"
          japanese="質問"
          titleA="Fair"
          titleB="Questions."
          size="lg"
          description="The answers clients usually need before the first call."
          aside={
            <CounterChip
              stats={[
                { value: String(PORTFOLIO_DATA.faq.length).padStart(2, "0"), label: "Answers ready" },
              ]}
            />
          }
        />
        <div className="max-w-4xl flex flex-col border-t border-foreground/10">
          {PORTFOLIO_DATA.faq.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: EASE }}
                className="border-b border-foreground/10"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center gap-4 py-5 text-left group"
                >
                  <span className="font-mono text-[10px] text-foreground/25 tabular-nums w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`flex-1 font-display text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${isOpen ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`shrink-0 border p-1.5 transition-colors ${isOpen ? "border-primary text-primary" : "border-foreground/15 text-foreground/40"}`}
                  >
                    <Plus size={15} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pl-10 pr-4 text-sm md:text-base text-foreground/60 font-light leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
