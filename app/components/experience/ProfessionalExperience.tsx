"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ProfessionalExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".exp-item");
      
      cards.forEach((card: any, i: number) => {
        gsap.from(card, {
          x: i % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-40 px-6 md:px-20 bg-background overflow-hidden">
      {/* Decorative Background Text */}
      <div 
        className="absolute top-20 right-0 pointer-events-none select-none text-white/[0.02] text-[15vw] font-black leading-none z-0 vertical-text uppercase" 
        aria-hidden="true"
        role="img"
      >
        職歴 — EXPERIENCE
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-accent" />
            <span className="text-accent text-xs font-black tracking-[0.4em] uppercase">Professional Path</span>
          </div>
          <h2 className="font-display text-5xl md:text-8xl font-black tracking-tighter uppercase leading-tight">
            Professional <br /> <span className="text-accent italic">Experience.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-20">
          {PORTFOLIO_DATA.experience.map((item, idx) => (
            <div 
              key={idx} 
              className="exp-item group relative grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start"
            >
              {/* Left Column: Metadata */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-tertiary">
                  <Calendar size={18} />
                  <span className="font-mono text-sm tracking-widest font-bold uppercase">{item.period}</span>
                </div>
                <h3 className="font-display text-3xl md:text-5xl font-black text-white group-hover:text-primary transition-colors duration-500">
                  {item.company}
                </h3>
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <MapPin size={14} />
                  <span>{item.location}</span>
                </div>
                <div className="mt-4 inline-flex px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-quaternary text-[10px] font-black uppercase tracking-widest w-fit">
                  {item.japaneseRole || "ソフトウェア開発者"}
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="relative p-8 md:p-12 bg-surface border border-white/5 rounded-card backdrop-blur-3xl group-hover:border-primary/20 transition-all duration-700">
                <p className="text-xl md:text-2xl font-light text-white mb-8 leading-relaxed italic border-l-2 border-primary pl-6">
                  {item.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {item.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-4 group/detail">
                      <div className="mt-1.5 shrink-0 w-4 h-4 rounded-full border border-accent/40 flex items-center justify-center group-hover/detail:border-accent transition-colors">
                        <CheckCircle2 size={10} className="text-accent opacity-0 group-hover/detail:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-on-surface-variant group-hover/detail:text-white transition-colors text-sm font-light leading-relaxed">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="absolute top-8 right-8 text-white/[0.03] font-black text-6xl select-none group-hover:text-primary/10 transition-colors">
                  0{idx + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
