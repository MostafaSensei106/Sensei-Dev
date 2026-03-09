"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSectionV3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scale and shift main text on scroll
      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.2,
        y: -50,
        opacity: 0.2,
      });

      // Parallax for background "stroke" text
      gsap.to(bgTextRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
        x: -200,
        skewX: -10,
      });

      // Entry animation
      gsap.from(".hero-reveal", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "expo.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Large Text */}
      <div 
        ref={bgTextRef}
        className="absolute top-1/2 left-0 -translate-y-1/2 font-display text-[25vw] font-black text-stroke opacity-10 whitespace-nowrap pointer-events-none select-none z-0"
      >
        MOSTAFASENSEI MOSTAFASENSEI
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-[90vw]">
        <h1 
          ref={textRef}
          className="font-display text-[12vw] md:text-[10vw] font-extrabold leading-[0.85] tracking-tighter uppercase"
        >
          <div className="hero-reveal overflow-hidden">
            Building
          </div>
          <div className="hero-reveal overflow-hidden text-primary">
            Expressive
          </div>
          <div className="hero-reveal overflow-hidden">
            Universes.
          </div>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
          <p className="hero-reveal text-on-surface-variant text-xl md:text-2xl font-light max-w-md text-balance">
            Creative Software Engineer blending logic with aesthetic disruption.
          </p>
          
          <div className="hero-reveal flex gap-4">
            <button className="interactive group px-10 py-5 bg-primary text-on-primary rounded-full font-bold text-lg hover:scale-110 active:scale-95 transition-all">
              VIEW WORK
            </button>
            <button className="interactive px-10 py-5 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary hover:text-on-primary transition-all">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
