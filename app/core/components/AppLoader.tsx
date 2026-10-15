"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  { en: "INITIALIZING SYSTEMS", jp: "起動中" },
  { en: "LOADING BUSHIDO PROTOCOL", jp: "武士道" },
  { en: "FORGING THE KATANA", jp: "鍛錬" },
  { en: "CALIBRATING STACK", jp: "技術調整" },
  { en: "SENSEI READY", jp: "出陣" },
];

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    let doneTimer: NodeJS.Timeout | undefined;
    const start = performance.now();
    const DURATION = 2100;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      // ease-out so it feels fast then settles
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        doneTimer = setTimeout(() => setLoading(false), 250);
      }
    };
    raf = requestAnimationFrame(tick);

    // Safety: never trap the user
    const fallback = setTimeout(() => setLoading(false), 4000);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
      if (doneTimer) clearTimeout(doneTimer);
    };
  }, []);

  const safeIndex = Math.max(
    0,
    Math.min(BOOT_LINES.length - 1, Math.floor((progress / 100) * BOOT_LINES.length))
  );
  const line = BOOT_LINES[safeIndex] ?? BOOT_LINES[0] ?? { en: "LOADING", jp: "起動中" };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0.4 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden"
          onClick={() => setLoading(false)}
          role="status"
          aria-label="Loading portfolio"
        >
          {/* Backdrop texture */}
          <div className="absolute inset-0 speed-lines opacity-30" aria-hidden="true" />
          <div className="absolute inset-0 neural-grid opacity-[0.04]" aria-hidden="true" />

          {/* Giant brush watermark */}
          <div
            className="brush-jp pointer-events-none absolute inset-0 flex items-center justify-center text-white/[0.04] text-[38vw] leading-none select-none"
            aria-hidden="true"
            lang="ja"
          >
            侍
          </div>

          {/* Corner brackets */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-primary/60" aria-hidden="true" />
          <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-primary/60" aria-hidden="true" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-primary/60" aria-hidden="true" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-primary/60" aria-hidden="true" />

          {/* Center emblem */}
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="h-40 w-40 border border-primary/25 border-t-primary"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-3 border border-white/10"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span
                key={safeIndex}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="brush-jp text-6xl text-primary drop-shadow-[0_0_25px_rgba(188,0,45,0.55)]"
                lang="ja"
              >
                {line.jp}
              </motion.span>
              <span className="mt-2 font-mono text-[9px] tracking-[0.4em] text-white/40">
                {String(progress).padStart(3, "0")}%
              </span>
            </div>
          </div>

          {/* Boot line */}
          <div className="mt-10 flex items-center gap-4">
            <div className="w-10 h-[2px] bg-primary/60" aria-hidden="true" />
            <motion.span
              key={safeIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] font-mono font-bold tracking-[0.4em] text-accent/80 uppercase"
            >
              {line.en}
            </motion.span>
            <div className="w-10 h-[2px] bg-primary/60" aria-hidden="true" />
          </div>

          {/* Katana progress bar */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/5" aria-hidden="true">
            <div
              className="h-full bg-gradient-to-r from-primary via-primary to-accent transition-[width] duration-100"
              style={{
                width: `${progress}%`,
                clipPath: "polygon(0 0, 100% 0, 99% 100%, 0 100%)",
              }}
            />
          </div>

          <div className="absolute left-6 bottom-6 text-[9px] font-mono text-white/25 tracking-widest uppercase">
            SEN-001 — tap to skip
          </div>
          <div className="brush-jp absolute right-6 bottom-5 text-lg text-white/25" lang="ja" aria-hidden="true">
            準備中
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
