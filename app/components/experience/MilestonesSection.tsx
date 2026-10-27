"use client";

import CounterChip from "@/app/core/components/CounterChip";
import SectionHeader from "@/app/core/components/SectionHeader";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import { EASE } from "@/app/core/motion";
import { motion } from "framer-motion";

export default function MilestonesSection() {
  const items = PORTFOLIO_DATA.milestones;

  return (
    <section aria-label="Milestones" className="relative py-24 md:py-32 px-6 md:px-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Milestones // How it compounded"
          japanese="歩み"
          titleA="The"
          titleB="Path."
          size="lg"
          description="Every step below is documented above: experience, work, or credentials."
          aside={
            <CounterChip
              stats={[
                { value: String(items.length).padStart(2, "0"), label: "Stops so far" },
              ]}
            />
          }
        />
        <div className="relative max-w-4xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-foreground/10" aria-hidden="true" />
          <ol className="flex flex-col">
            {items.map((m, idx) => {
              const showYear = idx === 0 || items[idx - 1].year !== m.year;
              return (
                <motion.li
                  key={`${m.year}-${m.title}`}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: idx * 0.06, ease: EASE }}
                  className="relative flex gap-6 pb-10 last:pb-0"
                >
                  <span
                    className={`relative z-10 mt-1.5 h-[15px] w-[15px] shrink-0 rotate-45 border-2 transition-colors ${idx === items.length - 1
                      ? "border-primary bg-primary"
                      : "border-primary/60 bg-background"
                      }`}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-5">
                    <span className="font-mono text-sm font-black text-accent tabular-nums shrink-0 w-12">
                      {showYear ? m.year : <span className="text-foreground/20" aria-hidden="true">·</span>}
                      {!showYear && <span className="sr-only">{m.year}</span>}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-black uppercase tracking-tight text-foreground">
                        {m.title}
                      </h3>
                      <p className="mt-1 text-sm text-foreground/55 font-light leading-relaxed">
                        {m.detail}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
