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
  ArrowDown,
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

      /* Entrance: portrait */
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
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `${PORTFOLIO_DATA.profile.contact.linkedin}`,
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/${PORTFOLIO_DATA.profile.contact.whatsapp}`,
    },
  ];

  const fieldRecord: [string, string, boolean][] = [
    ["Status", "● Available", true],
    ["Base", "Egypt", false],
    ["Focus", "Mobile apps + Backend APIs", false],
    ["Stack", "Flutter · Go · Rust · Kotlin", false],
    ["Mode", "Tested & measured", false],
    ["Signal", "REC 106 — F/2.8 1/250s", false],
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center px-6 overflow-hidden pt-32 pb-24 bg-background"
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
        aria-hidden="true" style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)", filter: "grayscale(100%)"
        }}
      />

      {/* ─── Flow ─── */}
      <div className="hero-content relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start">
        {/* Badge */}
        <div className="flex items-center gap-3 px-4 py-2 bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-sm">
          <div className="w-2 h-2 bg-primary animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-on-surface-variant">
            {PORTFOLIO_DATA.profile.japaneseTitle}
          </span>
        </div>

        {/* ─── Masthead: name first, portrait second — one row ─── */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 w-full">
          {/* Name */}
          <div className="text-center md:text-left order-1">
            <p className="font-mono text-[11px] md:text-xs font-bold uppercase tracking-[0.4em] text-primary mb-3">
              Portfolio — 履歴書
            </p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter uppercase">
              <span className="block text-white">Mostafa</span>
              <span
                className="block md:ml-10 text-transparent"
                style={{ WebkitTextStroke: "2px #BC002D" }}
              >
                Mahmoud
              </span>
            </h1>
            <p className="brush-jp text-xl md:text-2xl text-white/40 mt-4" lang="ja">
              モスタファ・マフムード — モバイルアプリエンジニア
            </p>
          </div>

          {/* Portrait */}
          <div className="hero-image relative w-[220px] sm:w-[260px] lg:w-[320px] aspect-square shrink-0 order-2 md:ml-auto">
            {/* Hinomaru — Red Sun */}
            <div className="hinomaru-sun absolute inset-[-20%] flex items-center justify-center pointer-events-none">
              <div
                className="w-[80%] h-[80%] rounded-full opacity-[0.07]"
                style={{
                  background:
                    "radial-gradient(circle, #BC002D 0%, #BC002D 40%, transparent 70%)",
                }}
              />
            </div>

            {/* Orbit inscription — stack names circling the portrait */}
            <div
              className="absolute -inset-3 animate-[spin_36s_linear_infinite] pointer-events-none"
              aria-hidden="true"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <path
                    id="hero-orbit"
                    d="M 100,100 m -86,0 a 86,86 0 1,1 172,0 a 86,86 0 1,1 -172,0"
                  />
                </defs>
                <text fontSize="8" letterSpacing="2.5" className="fill-white/30 font-mono uppercase">
                  <textPath href="#hero-orbit">
                    Flutter • Go • Rust • Kotlin • Spring • 侍 •
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Camera Viewfinder Brackets */}
            <div className="absolute top-2 left-2 w-7 h-7 border-l-2 border-t-2 border-white/20 pointer-events-none" />
            <div className="absolute top-2 right-2 w-7 h-7 border-r-2 border-t-2 border-white/20 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-7 h-7 border-l-2 border-b-2 border-white/20 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-7 h-7 border-r-2 border-b-2 border-white/20 pointer-events-none" />

            {/* The Photo */}
            <a
              href="https://youtu.be/-RRWvHTQjPE?si=m3W9ZcEmMZ1Z59O3&t=167"
              target="_blank"
              rel="noopener noreferrer"
              className="group/photo block"
              aria-label="Watch intro video"
            >
              <div className="absolute inset-5 rounded-full overflow-hidden border-2 border-white/10 group-hover/photo:border-primary/40 transition-colors duration-700 shadow-2xl shadow-primary/10">
                <Image
                  src={PORTFOLIO_DATA.profile.hero.photo}
                  alt={PORTFOLIO_DATA.profile.name}
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full object-cover object-top grayscale group-hover/photo:grayscale-0 group-hover/photo:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent group-hover/photo:from-transparent transition-all duration-700" />
              </div>
            </a>

            {/* Hanko seal — the maker's stamp */}
            <div
              className="absolute bottom-5 right-5 z-20 w-12 h-12 lg:w-14 lg:h-14 bg-primary rotate-6 hover:rotate-0 transition-transform duration-500 shadow-[0_0_25px_rgba(188,0,45,0.5)] flex items-center justify-center"
              role="img"
              aria-label="Maker's seal"
            >
              <div className="absolute inset-1.5 border border-white/40 pointer-events-none" />
              <span className="brush-jp text-xl lg:text-2xl text-white leading-none" lang="ja">
                斬
              </span>
            </div>

            {/* Outer decorative ring with dashes */}
            <div
              className="absolute inset-[-4px] rounded-full pointer-events-none"
              style={{
                border: "1px dashed rgba(255,255,255,0.06)",
              }}
            />
          </div>

        </div>

        {/* ─── Content row: proof + field record ─── */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.35fr_.65fr] gap-10 items-start w-full">
          <div>
            {/* Tech Spec Sheet */}
            <div className="mb-8 w-full border border-white/5 bg-white/[0.02] backdrop-blur-sm">
              <div className="border-b border-white/5 px-4 py-2 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary" />
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em]">
                  Technical Specifications
                </span>
              </div>
              <div className="px-4 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="spec-item flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] font-bold text-accent tracking-[0.2em] uppercase">
                    Mobile
                  </span>
                  <span className="font-mono text-sm text-white/85">
                    Flutter, Dart, Kotlin
                  </span>
                </div>
                <div className="spec-item flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] font-bold text-tertiary tracking-[0.2em] uppercase">
                    Backend
                  </span>
                  <span className="font-mono text-sm text-white/85">
                    Go Gin, Spring Boot
                  </span>
                </div>
                <div className="spec-item flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase">
                    Core
                  </span>
                  <span className="font-mono text-sm text-white/85">
                    Rust, Android Native
                  </span>
                </div>
              </div>
            </div>

            {/* Tagline & Description */}
            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-5">
                {PORTFOLIO_DATA.profile.hero.tagline}
              </p>
              <p className="text-lg text-on-surface-variant font-light leading-relaxed">
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
                  className="interactive btn-sheen group flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-primary text-white font-mono font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-2xl shadow-primary/25 hover:bg-[#d60030] hover:-translate-y-0.5 active:translate-y-0"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
                  }}
                  aria-label="Download Resume PDF"
                >
                  <Download size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                  RESUME.pdf
                  <span className="brush-jp text-base normal-case tracking-normal opacity-70" lang="ja">
                    履歴書
                  </span>
                </a>
                <a
                  href="#work"
                  className="interactive group flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 border border-white/15 border-l-2 border-l-primary bg-white/[0.02] backdrop-blur-md text-white font-mono font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <ArrowDown size={14} className="text-primary transition-transform duration-300 group-hover:translate-y-0.5" />
                  View Work
                  <span className="brush-jp text-base normal-case tracking-normal text-white/50" lang="ja">
                    仕事
                  </span>
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
                    className="group/social relative w-11 h-11 flex items-center justify-center border border-white/10 bg-white/[0.02] text-white/40 transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-1 hover:shadow-[0_0_18px_rgba(188,0,45,0.35)] active:translate-y-0"
                    aria-label={s.name}
                  >
                    <span
                      className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-primary/0 group-hover/social:border-primary transition-colors duration-300"
                      aria-hidden="true"
                    />
                    <s.icon size={18} strokeWidth={1.5} />
                    <span
                      className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 bg-background border border-primary/40 font-mono text-[9px] font-bold tracking-[0.25em] uppercase text-primary opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"
                      aria-hidden="true"
                    >
                      {s.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Field record — HUD panel */}
          <aside
            className="relative border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-7"
            aria-label="Field record"
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/50 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/50 pointer-events-none" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="font-mono text-[10px] font-bold tracking-[0.35em] uppercase text-primary">
                Field Record
              </span>
              <span className="brush-jp text-base text-white/30" lang="ja">
                記録
              </span>
            </div>
            <dl className="flex flex-col">
              {fieldRecord.map(([label, value, hot]) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-4 py-2.5 border-b border-white/5 last:border-b-0"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/35 shrink-0">
                    {label}
                  </dt>
                  <dd
                    className={`font-mono text-xs text-right leading-relaxed ${hot ? "text-accent font-bold" : "text-white/80"}`}
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
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
