"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "INITIALIZING SYSTEMS",
  "LOADING BUSHIDO PROTOCOL",
  "CALIBRATING DRIFT ANGLE",
  "ENGINE CHECK — ALL CLEAR",
  "BOOST PRESSURE NOMINAL",
  "SENSEI READY",
];

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 2200);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % BOOT_LINES.length);
    }, 350);

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            opacity: 0,
            scale: 1.05,
          }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Speed Lines Background */}
          <div className="absolute inset-0 speed-lines opacity-40" />

          {/* Neural Grid */}
          <div className="absolute inset-0 neural-grid opacity-[0.04]" />

          {/* Scanlines Overlay */}
          <div className="absolute inset-0 scanlines opacity-30" />

          {/* Corner Accents */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-primary/60" />
          <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-primary/60" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-primary/60" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-primary/60" />

          {/* Center Emblem */}
          <div className="relative">
            {/* Outer Spinning Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-36 h-36 border-2 border-primary/20 border-t-primary"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            />

            {/* Inner Pulsing Ring */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-3 border border-primary/30"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            />

            {/* Kanji Symbol */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="font-display text-5xl text-primary drop-shadow-[0_0_20px_rgba(226,0,26,0.5)]"
              >
                師
              </motion.span>
            </div>
          </div>

          {/* Boot Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-14 flex flex-col items-center gap-5 text-center"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-[2px] bg-primary/60" />
              <motion.span
                key={currentLine}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-[10px] font-mono font-bold tracking-[0.4em] text-accent/70 uppercase"
              >
                {BOOT_LINES[currentLine]}
              </motion.span>
              <div className="w-10 h-[2px] bg-primary/60" />
            </div>

            <h2 className="text-2xl font-display text-white tracking-wider uppercase">
              The Samurai <span className="text-primary">Way.</span>
            </h2>
          </motion.div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-full bg-gradient-to-r from-primary via-primary to-accent"
            />
          </div>

          {/* Side Labels */}
          <div className="absolute left-6 bottom-6 text-[9px] font-mono text-white/20 tracking-widest uppercase">
            SEN-001
          </div>
          <div className="absolute right-6 bottom-6 text-[9px] font-mono text-white/20 tracking-widest uppercase">
            武士道
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
