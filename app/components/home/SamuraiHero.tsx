"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import { Github, Linkedin, MessageCircle, Download, ExternalLink, Cpu, Code2, Sparkles } from "lucide-react";

export default function SamuraiHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5,
      });

      gsap.from(".hero-image", {
        scale: 1.1,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        delay: 0.2,
      });

      gsap.from(".japanese-bg", {
        x: 100,
        opacity: 0,
        duration: 2,
        ease: "expo.out",
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const socials = [
    { name: "GitHub", icon: Github, href: `https://github.com/${PORTFOLIO_DATA.profile.contact.github}`, color: "hover:text-primary" },
    { name: "LinkedIn", icon: Linkedin, href: `${PORTFOLIO_DATA.profile.contact.linkedin}`, color: "hover:text-[#0077b5]" },
    { name: "WhatsApp", icon: MessageCircle, href: `https://wa.me/${PORTFOLIO_DATA.profile.contact.whatsapp}`, color: "hover:text-green-400" },
  ];

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-40 pb-20 bg-background">
      {/* Background Japanese Watermark */}
      <div
        className="japanese-bg absolute right-10 top-1/2 -translate-y-1/2 flex gap-12 text-white/[0.03] font-black text-[10vw] select-none pointer-events-none z-0 leading-none"
        aria-hidden="true"
        role="img"
      >
        <div className="vertical-text">
          <span>エ</span><span>ン</span><span>ジ</span><span>ニ</span><span>ア</span>
        </div>
        <div className="vertical-text">
          <span>師</span><span>匠</span>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="hero-content flex flex-col items-start text-left order-2 lg:order-1">
          {/* Badge */}
          <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
            <Cpu size={14} className="text-quaternary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant">
              {PORTFOLIO_DATA.profile.japaneseTitle}
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-black leading-[0.85] tracking-tighter uppercase mb-8">
            <span className="block text-white">Mostafa</span>
            <span className="block text-primary">Mahmoud</span>
          </h1>

          <div className="max-w-xl mb-12">
            <p className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-6">
              {PORTFOLIO_DATA.profile.hero.tagline}
            </p>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              {PORTFOLIO_DATA.profile.hero.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            {/* CTA Buttons */}
            <div className="flex gap-4">
              <a
                href={PORTFOLIO_DATA.profile.hero.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="interactive flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-primary text-white rounded-button font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-500 shadow-2xl shadow-primary/20"
                aria-label="Download Resume PDF"
              >
                <Download size={16} />
                RESUME.pdf
              </a>
              <a
                href="#projects"
                className="interactive flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 border border-white/20 bg-white/5 backdrop-blur-md text-white rounded-button font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-500"
              >
                PROJECTS
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-6 mt-4 lg:mt-0 lg:ml-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white/40 transition-all duration-300 ${s.color} hover:scale-150 active:scale-95`}
                  aria-label={s.name}
                >
                  <s.icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Image / Identity */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="hero-image relative w-full aspect-square max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
            {/* Decorative Rings */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 md:inset-8 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            {/* The Photo */}
            <a href="https://youtu.be/-RRWvHTQjPE?si=m3W9ZcEmMZ1Z59O3&t=167" target="_blank" rel="noopener noreferrer"><div className="absolute inset-2 md:inset-4 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl shadow-primary/10">
              <Image
                src={PORTFOLIO_DATA.profile.hero.photo}
                alt={PORTFOLIO_DATA.profile.name}
                width={500}
                height={500}
                priority
                className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div> </a>
          </div>
        </div>
      </div>

      {/* Bottom Japanese Quote */}
      <div className="absolute bottom-10 left-10 hidden md:block" aria-hidden="true" role="img">
        <p className="text-[10px] text-white/10 font-bold uppercase tracking-[0.5em] text-on-surface-muted">
          継続は力なり — PERSEVERANCE IS POWER
        </p>
      </div>
    </section>
  );
}
