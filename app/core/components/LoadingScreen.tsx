"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen once everything is loaded
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] neural-grid" />
          
          <div className="relative">
            {/* Animated Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 border-2 border-primary/20 border-t-primary rounded-full"
            />
            
            {/* Center Symbol */}
            <div className="absolute inset-0 flex items-center justify-center font-display text-4xl font-black text-primary">
              師
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-col items-center gap-4 text-center"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-primary/40" />
              <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-white/40 uppercase">Loading Systems</span>
              <div className="w-8 h-[1px] bg-primary/40" />
            </div>
            <h2 className="text-xl font-display font-black text-white tracking-tighter uppercase">
              The Sensei <span className="text-primary italic">Way.</span>
            </h2>
          </motion.div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-primary"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
