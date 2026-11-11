import { TiltCard } from "@/app/core/components/Motion";
import SectionHeader from "@/app/core/components/SectionHeader";
import SectionWatermark from "@/app/core/components/SectionWatermark";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import { EASE } from "@/app/core/motion";
import { RevealDiv } from "@/app/core/components/Reveal";
import WorkFilter from "./WorkFilter";
import { ExternalLink, Github, Lock, Package, Server, Smartphone } from "lucide-react";

const TYPE_ICON = {
  app: Smartphone,
  backend: Server,
  library: Package,
  tool: Package,
} as const;

export default function WorkShowcase() {
  return (
    <section id="work" className="relative py-24 md:py-32 px-6 md:px-20 bg-background overflow-hidden">
      <SectionWatermark japanese="仕事" corner="right" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Selected work // Apps & APIs"
          japanese="仕事"
          titleA="Shipped"
          titleB="Work."
          description="Not only GitHub libraries. Apps with store constraints and backend APIs with measured behavior. Private work is marked as private-demo."
        />

        <WorkFilter items={PORTFOLIO_DATA.work.map((w, idx) => {
            const Icon = TYPE_ICON[w.type];
            return { type: w.type, card: (
              <RevealDiv
                key={w.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: (idx % 2) * 0.1, ease: EASE }}
              >
                <TiltCard className="spotlight group relative bg-surface/60 border border-foreground/5 p-8 hover:border-primary/40 transition-colors duration-500 flex flex-col h-full"
                >
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-primary/40 to-transparent opacity-70" aria-hidden="true" />

                  {/* Halftone print grain  drifts in on hover */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                    <div className="halftone absolute inset-0 scale-100 opacity-0 transition-[opacity,transform] duration-[900ms] ease-out group-hover:scale-[1.2] group-hover:opacity-100" />
                  </div>

                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-foreground/5 border border-foreground/10">
                        <Icon size={18} className="text-tertiary" />
                      </div>
                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-tertiary">{w.type} • {w.platform}</div>
                        <div className="font-mono text-[9px] text-foreground/30 tracking-widest mt-1">{w.year} • {w.status}</div>
                      </div>
                    </div>
                    {w.status === "private-demo" && (
                      <span className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-accent border border-accent/30 bg-accent/10">
                        <Lock size={11} /> Private
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-2">
                    {w.title}
                  </h3>
                  <p className="text-foreground/80 font-medium mb-3">{w.tagline}</p>
                  <p className="text-sm text-foreground/55 font-light leading-relaxed mb-2">
                    <span className="text-foreground/35 font-mono text-[10px] uppercase tracking-[0.2em]">Problem  </span>
                    {w.problem}
                  </p>
                  <p className="text-sm text-foreground/55 font-light leading-relaxed mb-5">
                    <span className="text-foreground/35 font-mono text-[10px] uppercase tracking-[0.2em]">Role  </span>
                    {w.role}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {w.stack.map((s) => (
                      <span key={s} className="px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-tertiary bg-tertiary/10 border border-tertiary/25">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {w.metrics.map((m) => (
                      <span key={m} className="px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-accent bg-accent/10 border border-accent/25">
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto pt-5 border-t border-foreground/5">
                    {w.links.github && (
                      <a href={w.links.github} target="_blank" rel="noopener noreferrer" className="btn-sheen min-h-11 inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-mono text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors">
                        <Github size={13} /> Source
                      </a>
                    )}
                    {w.links.live && (
                      <a href={w.links.live} target="_blank" rel="noopener noreferrer" className="min-h-11 inline-flex items-center gap-2 px-4 py-2.5 border border-foreground/15 text-foreground/70 font-mono text-[10px] uppercase tracking-[0.2em] hover:border-primary hover:text-foreground transition-colors">
                        <ExternalLink size={13} /> Live
                      </a>
                    )}
                    {!w.links.github && !w.links.live && (
                      <span className="font-mono text-[10px] text-foreground/35 tracking-[0.2em] uppercase">Demo on request  NDA client work</span>
                    )}
                  </div>
                </TiltCard>
              </RevealDiv>
            ) };
          })} />
      </div>
    </section>
  );
}
