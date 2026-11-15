import { RevealDiv } from "@/app/core/components/Reveal";
import CounterChip from "@/app/core/components/CounterChip";
import { TiltCard } from "@/app/core/components/Motion";
import SectionHeader from "@/app/core/components/SectionHeader";
import SectionWatermark from "@/app/core/components/SectionWatermark";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import { EASE } from "@/app/core/motion";

export default function UsesSection() {
  const toolCount = PORTFOLIO_DATA.uses.reduce((s, g) => s + g.items.length, 0);

  return (
    <section aria-label="Daily drivers" className="relative py-24 md:py-32 px-6 md:px-20 bg-background overflow-hidden">
      <SectionWatermark japanese="毎日" corner="left" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Development tools"
          japanese="道具"
          titleA="Daily"
          titleB="Tools"
          size="lg"
          aside={
            <CounterChip
              stats={[
                { value: String(toolCount).padStart(2, "0"), label: "Tools" },
              ]}
            />
          }
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.uses.map((g, idx) => (
            <RevealDiv
              key={g.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: idx * 0.08, ease: EASE }}
            >
              <TiltCard className="spotlight spotlight-blue group relative bg-surface/60 border border-foreground/5 p-6 h-full hover:border-tertiary/50 transition-colors duration-500"
              >
                <div
                  className="absolute top-0 left-0 w-full h-[2px] bg-tertiary/0 group-hover:bg-tertiary transition-colors duration-500"
                  aria-hidden="true"
                />
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-display text-lg font-black uppercase tracking-tight text-foreground">
                    {g.title}
                  </h3>
                  <span className="brush-jp text-xl text-tertiary" lang="ja">
                    {g.japanese}
                  </span>
                </div>
                <div className="w-8 h-[2px] bg-tertiary/60 mb-5" aria-hidden="true" />
                <ul className="flex flex-wrap gap-2" aria-label={`${g.title} tools`}>
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-foreground bg-tertiary/10 border border-tertiary/40"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
