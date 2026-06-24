"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import {
  Github,
  Linkedin,
  MessageCircle,
  Download,
  ExternalLink,
} from "lucide-react";

export default function SamuraiHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Entrance: content stack */
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.5,
      });

      /* Entrance: hero image area */
      gsap.from(".hero-image", {
        scale: 1.1,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        delay: 0.2,
      });

      /* Entrance: background kanji */
      gsap.from(".japanese-bg", {
        x: 100,
        opacity: 0,
        duration: 2,
        ease: "expo.out",
        delay: 1,
      });

      /* Entrance: hinomaru sun */
      gsap.from(".hinomaru-sun", {
        scale: 0,
        opacity: 0,
        duration: 2.5,
        ease: "expo.out",
        delay: 0.3,
      });

      /* Entrance: spec sheet */
      gsap.from(".spec-item", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1.2,
      });

      /* Entrance: speed lines */
      gsap.from(".speed-line", {
        scaleX: 0,
        opacity: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: "expo.out",
        delay: 1.5,
        transformOrigin: "left center",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const socials = [
    {
      name: "GitHub",
      icon: Github,
      href: `https://github.com/${PORTFOLIO_DATA.profile.contact.github}`,
      hoverClass: "hover:text-primary hover:border-primary/50",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `${PORTFOLIO_DATA.profile.contact.linkedin}`,
      hoverClass: "hover:text-[#0077b5] hover:border-[#0077b5]/50",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/${PORTFOLIO_DATA.profile.contact.whatsapp}`,
      hoverClass: "hover:text-green-400 hover:border-green-400/50",
    },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-40 pb-20 bg-background"
    >
      {/* ─── Speed Lines Background ─── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="speed-line absolute h-[1px] bg-gradient-to-r from-primary/20 via-primary/5 to-transparent"
            style={{
              top: `${15 + i * 10}%`,
              left: 0,
              width: `${40 + i * 8}%`,
              transform: `rotate(${-2 + i * 0.5}deg)`,
            }}
          />
        ))}
      </div>

      {/* ─── Floating Particles (CSS-only) ─── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-primary/30 rounded-none"
            style={{
              left: `${10 + (i * 7) % 80}%`,
              top: `${5 + (i * 13) % 90}%`,
              animation: `float-particle ${3 + (i % 4)}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* ─── Background Japanese Watermark ─── */}
      <div
        className="japanese-bg absolute right-10 top-1/2 -translate-y-1/2 flex gap-12 text-white/[0.03] font-black text-[10vw] select-none pointer-events-none z-0 leading-none"
        aria-hidden="true"
        role="img"
      >
        <div className="vertical-text">
          <span>エ</span>
          <span>ン</span>
          <span>ジ</span>
          <span>ニ</span>
          <span>ア</span>
        </div>
        <div className="vertical-text">
          <span>師</span>
          <span>匠</span>
        </div>
      </div>

      {/* ─── Scanline Overlay ─── */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      {/* ─── Main Grid ─── */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Content */}
        <div className="hero-content flex flex-col items-start text-left order-2 lg:order-1">
          {/* Badge */}
          <div className="flex items-center gap-3 px-4 py-2 bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-primary animate-pulse" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-on-surface-variant">
              {PORTFOLIO_DATA.profile.japaneseTitle}
            </span>
          </div>

          {/* Name — Massive Display */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-black leading-[0.85] tracking-tighter uppercase mb-4">
            <span className="block text-white">Mostafa</span>
            <span className="block text-primary">Mahmoud</span>
          </h1>

          {/* Tech Spec Sheet */}
          <div className="mb-10 w-full max-w-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <div className="border-b border-white/5 px-4 py-2 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary" />
              <span className="font-mono text-[9px] text-white/40 uppercase tracking-[0.3em]">
                Technical Specifications
              </span>
            </div>
            <div className="px-4 py-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="spec-item flex flex-col gap-1">
                <span className="font-mono text-[9px] font-bold text-accent tracking-[0.2em] uppercase">
                  Framework
                </span>
                <span className="font-mono text-xs text-white/80">
                  Flutter, Gin
                </span>
              </div>
              <div className="spec-item flex flex-col gap-1">
                <span className="font-mono text-[9px] font-bold text-accent tracking-[0.2em] uppercase">
                  Systems
                </span>
                <span className="font-mono text-xs text-white/80">
                  Go, Rust
                </span>
              </div>
              <div className="spec-item flex flex-col gap-1">
                <span className="font-mono text-[9px] font-bold text-accent tracking-[0.2em] uppercase">
                  Arch
                </span>
                <span className="font-mono text-xs text-white/80">
                  Clean Architecture
                </span>
              </div>
            </div>
          </div>

          {/* Tagline & Description */}
          <div className="max-w-xl mb-12">
            <p className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-6">
              {PORTFOLIO_DATA.profile.hero.tagline}
            </p>
            <p className="text-base text-on-surface-variant font-light leading-relaxed">
              {PORTFOLIO_DATA.profile.hero.description}
            </p>
          </div>

          {/* CTA Buttons + Socials */}
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex gap-4">
              <a
                href={PORTFOLIO_DATA.profile.hero.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="interactive flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-primary text-white font-mono font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-500 shadow-2xl shadow-primary/20"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
                }}
                aria-label="Download Resume PDF"
              >
                <Download size={16} />
                RESUME.pdf
              </a>
              <a
                href="#projects"
                className="interactive flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 border border-white/20 bg-white/[0.03] backdrop-blur-md text-white font-mono font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-500"
              >
                <ExternalLink size={14} />
                PROJECTS
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-4 lg:mt-0 lg:ml-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 transition-all duration-300 ${s.hoverClass} hover:scale-110 active:scale-95`}
                  aria-label={s.name}
                >
                  <s.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Hero Image / Identity */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="hero-image relative w-full aspect-square max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
            {/* Hinomaru — Red Sun */}
            <div className="hinomaru-sun absolute inset-[-20%] flex items-center justify-center pointer-events-none">
              <div
                className="w-[80%] h-[80%] rounded-full opacity-[0.07]"
                style={{
                  background:
                    "radial-gradient(circle, #E2001A 0%, #E2001A 40%, transparent 70%)",
                }}
              />
            </div>

            {/* Rotating Red Ring */}
            <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-[spin_25s_linear_infinite]" />
            <div className="absolute inset-2 border border-primary/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

            {/* Camera Viewfinder Brackets */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/20 pointer-events-none" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/20 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/20 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/20 pointer-events-none" />

            {/* HUD Overlay — Japanese Text */}
            <div className="absolute top-6 right-12 flex flex-col items-end gap-1 pointer-events-none z-20">
              <span className="font-mono text-[8px] text-primary/60 tracking-widest uppercase">
                REC ●
              </span>
              <span className="font-mono text-[8px] text-white/30">
                センセイ 106
              </span>
            </div>
            <div className="absolute bottom-6 left-12 flex flex-col gap-1 pointer-events-none z-20">
              <span className="font-mono text-[8px] text-white/20 tracking-widest">
                F/2.8 1/250s
              </span>
              <span className="font-mono text-[8px] text-accent/40 tracking-wider">
                エンジニア
              </span>
            </div>

            {/* The Photo */}
            <a
              href="https://youtu.be/-RRWvHTQjPE?si=m3W9ZcEmMZ1Z59O3&t=167"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-6 md:inset-8 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary/10">
                <Image
                  src={PORTFOLIO_DATA.profile.hero.photo}
                  alt={PORTFOLIO_DATA.profile.name}
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
              </div>
            </a>

            {/* Outer decorative ring with dashes */}
            <div
              className="absolute inset-[-4px] rounded-full pointer-events-none"
              style={{
                border: "1px dashed rgba(255,255,255,0.06)",
              }}
            />
          </div>
        </div>
      </div>

      {/* ─── Bottom Japanese Quote ─── */}
      <div
        className="absolute bottom-10 left-10 hidden md:flex items-center gap-4"
        aria-hidden="true"
        role="img"
      >
        <div className="w-8 h-[1px] bg-primary/40" />
        <p className="text-[10px] text-white/15 font-mono font-bold uppercase tracking-[0.5em]">
          継続は力なり — PERSEVERANCE IS POWER
        </p>
      </div>

      {/* ─── Floating Particle Keyframes (CSS) ─── */}
      <style jsx>{`
        @keyframes float-particle {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          100% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.1;
          }
        }
      `}</style>
    </section>
  );
}
