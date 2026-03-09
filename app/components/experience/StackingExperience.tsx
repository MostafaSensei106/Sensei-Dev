"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";

export default function StackingExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".exp-card");
      
      cards.forEach((card: any) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          endTrigger: sectionRef.current,
          end: "bottom bottom",
        });

        gsap.fromTo(card, 
          { scale: 0.9, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              end: "top top",
              scrub: true,
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-6 md:px-20 bg-background">
      <div className="max-w-5xl mx-auto py-32">
        <div className="mb-32">
          <h2 className="font-display text-[10vw] font-black leading-none opacity-10 uppercase vertical-text absolute left-0 top-32 pointer-events-none">
            Bushido History
          </h2>
          <div className="flex items-center gap-6">
            <div className="w-20 h-[2px] bg-primary" />
            <p className="text-primary text-2xl font-bold tracking-widest uppercase">The Path of Training.</p>
          </div>
        </div>

        <div className="flex flex-col gap-[100vh]">
          {PORTFOLIO_DATA.experience.map((item, idx) => (
            <div 
              key={idx} 
              className="exp-card katana-card p-12 md:p-20 min-h-[60vh] flex flex-col justify-center items-start group bg-surface/90 border-l-4 border-l-primary"
            >
              <span className="text-secondary font-mono text-sm mb-6 tracking-[0.5em] font-bold">CHAPTER 0{idx + 1}</span>
              <h3 className="font-display text-4xl md:text-7xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{item.company}</h3>
              <p className="text-primary font-bold text-xl mb-6">{item.role}</p>
              <p className="text-on-surface-variant text-xl md:text-2xl font-light max-w-2xl leading-relaxed mb-8">{item.description}</p>
              
              <div className="flex flex-col gap-3">
                {item.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-4 text-on-surface-variant/80 font-light italic">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    {detail}
                  </div>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="w-16 h-[1px] bg-secondary" />
                <span className="text-secondary font-bold text-lg uppercase tracking-tighter">{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
