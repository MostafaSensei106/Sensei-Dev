"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { prefersReducedMotion } from "@/app/core/theme/fx";

interface Mascot {
  id: string;
  name: string;
  lang: string;
  src: string;
  width: number;
  height: number;
}

// Official artwork, self-hosted:
// - Ferris: CC0 (rustacean.net, Karen Rustad Tölva)
// - Gopher: CC0 free-gophers-pack (Maria Letta)
// - Dash: Google Flutter brand asset, decorative fan use
const MASCOTS: Mascot[] = [
  {
    id: "ferris",
    name: "Ferris",
    lang: "Rust",
    src: "/mascots/ferris.png",
    width: 460,
    height: 307,
  },
  {
    id: "gopher",
    name: "Gopher",
    lang: "Go",
    src: "/mascots/gopher.png",
    width: 200,
    height: 120,
  },
  {
    id: "dash",
    name: "Dash",
    lang: "Flutter",
    src: "/mascots/dash.png",
    width: 772,
    height: 789,
  },
];

/**
 * Random language-mascot companion in the hero (randomized after
 * mount so server and client render the same first paint).
 * Idle float + click cycles to the next mascot with a bounce.
 * Static when reduced-motion is on.
 */
export function HeroMascot({ className }: { className?: string }) {
  // Deterministic first paint (hydration-safe), randomize on mount.
  const [index, setIndex] = useState(0);
  const [reduced] = useState(
    () => typeof window !== "undefined" && prefersReducedMotion()
  );

  useEffect(() => {
    setIndex(Math.floor(Math.random() * MASCOTS.length));
  }, []);

  const bounce = useAnimationControls();
  const mascot = MASCOTS[index % MASCOTS.length] ?? MASCOTS[0]!;

  const play = () => {
    setIndex((i) => (i + 1) % MASCOTS.length);
    if (!reduced) {
      bounce.start({
        y: [0, -20, 0],
        scale: [1, 1.08, 1],
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  };

  return (
    <motion.div
      className={className}
      animate={reduced ? {} : { y: [0, -7, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.button
        type="button"
        onClick={play}
        animate={bounce}
        title={`${mascot.name}  ${mascot.lang} mascot. Click to meet the next one.`}
        aria-label={`${mascot.name}, ${mascot.lang} mascot. Activate to meet the next mascot.`}
        className="group relative block w-20 cursor-pointer lg:w-24"
      >
        <Image
          src={mascot.src}
          alt={`${mascot.name}, the ${mascot.lang} mascot`}
          width={mascot.width}
          height={mascot.height}
          sizes="96px"
          className="h-auto w-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]"
        />
        <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap border border-foreground/15 bg-background/90 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          {mascot.name} • {mascot.lang}
        </span>
      </motion.button>
    </motion.div>
  );
}
