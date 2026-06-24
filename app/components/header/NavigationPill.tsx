"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Code2,
  Award,
  Palette,
  Mail,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home, katakana: "ホーム" },
  { name: "Exp", href: "#experience", icon: Briefcase, katakana: "経験" },
  { name: "Work", href: "#projects", icon: Code2, katakana: "作品" },
  { name: "Cert", href: "#certificates", icon: Award, katakana: "証明" },
  { name: "Art", href: "#art", icon: Palette, katakana: "芸術" },
  { name: "Mail", href: "#contact", icon: Mail, katakana: "連絡" },
];

export default function NavigationPill() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navWidth = useTransform(scrollY, [0, 100], ["95%", "85%"]);
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(5, 5, 5, 0.4)", "rgba(18, 18, 18, 0.85)"]
  );

  if (!mounted) return null;

  return (
    <>
      {/* ─── Main Navigation Bar ─── */}
      <motion.nav
        className="fixed z-[100] left-1/2 -translate-x-1/2 backdrop-blur-xl border border-white/10 px-4 md:px-8 py-2 md:py-3 flex items-center justify-between transition-all duration-500 ease-out"
        style={{
          width: navWidth,
          backgroundColor: navBackground,
          top: 20,
          borderTop: "2px solid #E2001A",
          clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-display font-bold text-lg md:text-xl tracking-tighter cursor-pointer flex items-center group shrink-0"
          aria-label="Sensei Portfolio Home"
        >
          <span className="text-white group-hover:text-primary transition-colors duration-300">
            MH
          </span>
          <span className="text-primary text-2xl leading-none">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative flex items-center gap-2 text-[9px] lg:text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-white/60 hover:text-white transition-all duration-300 group"
            >
              <item.icon
                size={12}
                strokeWidth={2.5}
                className="text-white/30 group-hover:text-primary transition-colors duration-300"
              />
              <span>{item.name}</span>
              {/* Red dot indicator */}
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative p-2 text-white/60 hover:text-primary transition-colors z-[110]"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* ─── Mobile Full-Screen Overlay ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[95] md:hidden bg-background/95 backdrop-blur-2xl flex flex-col"
            onClick={() => setIsOpen(false)}
          >
            {/* Background Decorative Kanji */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
              aria-hidden="true"
            >
              <span className="text-white/[0.02] text-[40vw] font-black leading-none">
                武
              </span>
            </div>
            <div
              className="absolute top-20 right-8 pointer-events-none select-none vertical-text text-white/[0.04] text-4xl font-black"
              aria-hidden="true"
            >
              <span>侍</span>
              <span>道</span>
              <span>魂</span>
            </div>

            {/* Red accent lines */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-primary" />
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/30" />
            <div className="absolute top-0 left-8 w-[2px] h-full bg-white/[0.03]" />

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-[110] w-12 h-12 flex items-center justify-center border border-primary/40 text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Close Menu"
            >
              <X size={20} strokeWidth={3} />
            </motion.button>

            {/* Navigation Items */}
            <div
              className="flex flex-col justify-center flex-1 px-10 gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + idx * 0.07,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  onClick={() => setIsOpen(false)}
                  className="group relative flex items-center gap-6 py-4 border-b border-white/5 last:border-b-0"
                >
                  {/* Index Number */}
                  <span className="font-mono text-[10px] text-white/20 w-6 tabular-nums">
                    0{idx + 1}
                  </span>

                  {/* Icon */}
                  <item.icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-white/15 group-hover:text-primary transition-colors duration-300"
                  />

                  {/* Name - large katakana style */}
                  <div className="flex flex-col">
                    <span className="font-display text-3xl font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </span>
                    <span className="font-mono text-[10px] text-white/25 tracking-[0.3em]">
                      {item.katakana}
                    </span>
                  </div>

                  {/* Red accent on hover */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-primary group-hover:w-6 transition-all duration-300" />
                </motion.a>
              ))}

              {/* Bottom tagline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 flex flex-col gap-3"
              >
                <div className="w-16 h-[2px] bg-primary" />
                <span className="text-[9px] font-mono text-white/30 tracking-[0.5em] uppercase">
                  Sensei Portfolio
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
