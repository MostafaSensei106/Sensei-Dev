"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/app/core/theme/fx";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenis = useLenis();
  /* Resolved once on the client: smooth wheel scrolling is exactly the kind of
     motion vestibular-sensitive users opt out of. Values are read at mount by
     Lenis, so this cannot be a live media query listener. */
  const [reduced] = useState(prefersReducedMotion);

  useEffect(() => {
    if (!lenis) return;

    lenis.on("scroll", ScrollTrigger.update);

    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(updateRaf);
    };
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: !reduced,
      }}
    >
      {children}
    </ReactLenis>
  );
}
