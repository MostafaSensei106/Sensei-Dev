"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import KatanaScene from "@/app/core/components/KatanaScene";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import { Github, Linkedin, MessageCircle, Download, ExternalLink } from "lucide-react";

export default function SamuraiHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".samurai-char", {
        x: 100,
        opacity: 0,
        duration: 2,
        stagger: 0.1,
        ease: "expo.out",
      });

      gsap.from(".hero-photo", {
        scale: 1.2,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.from(".main-title span", {
        y: 150,
        rotate: 10,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "expo.out",
        delay: 0.8,
      });

      gsap.from(".hero-actions", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const socials = [
    { name: "GitHub", icon: Github, href: `https://github.com/${PORTFOLIO_DATA.profile.contact.github}`, color: "hover:text-primary" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-400" },
    { name: "WhatsApp", icon: MessageCircle, href: `https://wa.me/${PORTFOLIO_DATA.profile.contact.whatsapp}`, color: "hover:text-green-400" },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-32 pb-20">
      <KatanaScene />

      {/* Hero Photo with Responsive Sizing */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 md:opacity-40">
        <div className="hero-photo relative w-[90vw] h-[70vh] md:w-[45vw] md:h-[80vh] rounded-[3rem] md:rounded-[6rem] overflow-hidden grayscale contrast-125 border border-primary/10">
          <img 
            src={PORTFOLIO_DATA.profile.hero.photo} 
            alt={PORTFOLIO_DATA.profile.name} 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </div>

      {/* Vertical Japanese Text - Hidden on small mobile */}
      <div className="hidden sm:flex absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex-col gap-4 text-primary/10 font-black text-5xl md:text-[10rem] lg:text-[12rem] select-none pointer-events-none z-10">
        <span className="samurai-char vertical-text">モ</span>
        <span className="samurai-char vertical-text">ス</span>
        <span className="samurai-char vertical-text">タ</span>
        <span className="samurai-char vertical-text">ファ</span>
      </div>

      <div className="relative z-30 w-full max-w-7xl">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mb-12 origin-left" />
        
        <h1 className="main-title font-display text-5xl sm:text-7xl md:text-[9rem] lg:text-[11rem] font-bold leading-none tracking-tighter uppercase flex flex-col mix-blend-difference">
          <span className="inline-block">Mastering</span>
          <span className="inline-block text-secondary">The Blade</span>
          <span className="inline-block">& Code.</span>
        </h1>

        <div className="mt-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-on-surface-variant text-balance mix-blend-difference leading-relaxed">
              {PORTFOLIO_DATA.profile.name} — <span className="text-primary italic font-bold">{PORTFOLIO_DATA.profile.title}</span> Ronin crafting high-performance Android & Web ecosystems.
            </p>
          </div>

          <div className="hero-actions flex flex-col sm:flex-row items-start sm:items-center gap-8 w-full lg:w-auto">
            {/* Quick Socials */}
            <div className="flex items-center gap-6">
              {socials.map((s) => (
                <a 
                  key={s.name} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`interactive p-2 text-white/40 transition-all ${s.color} hover:scale-125`}
                  aria-label={s.name}
                >
                  <s.icon size={24} />
                </a>
              ))}
            </div>

            {/* Main Action Buttons */}
            <div className="flex gap-4 w-full sm:w-auto">
              <a 
                href={PORTFOLIO_DATA.profile.hero.cvUrl}
                download
                className="interactive flex-1 sm:flex-none flex items-center justify-center gap-3 px-8 py-5 bg-white text-black rounded-katana font-black uppercase tracking-widest text-sm hover:bg-primary transition-colors shadow-xl shadow-white/5"
              >
                <Download size={18} />
                RESUME
              </a>
              <a 
                href="#work"
                className="interactive flex-1 sm:flex-none flex items-center justify-center gap-3 px-8 py-5 border border-white/20 rounded-katana font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors"
              >
                PROJECTS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
