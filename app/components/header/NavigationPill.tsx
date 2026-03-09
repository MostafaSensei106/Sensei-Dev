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
  Mail
} from "lucide-react";

export default function NavigationPill() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navWidth = useTransform(scrollY, [0, 100], ["90%", "65%"]);
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.03)", "rgba(255, 255, 255, 0.08)"]
  );

  if (!mounted) return null;

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Code2 },
    { name: "Certificates", href: "#certificates", icon: Award },
    { name: "Art", href: "#art", icon: Palette },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      <motion.nav
        className="fixed z-[100] left-1/2 -translate-x-1/2 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 md:px-8 py-3 md:py-4 flex items-center justify-between transition-all duration-500 ease-out"
        style={{
          width: navWidth,
          backgroundColor: navBackground,
          top: 24,
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Logo */}
        <div className="font-display font-bold text-xl md:text-2xl tracking-tighter cursor-pointer flex items-center gap-2 group">
          <span className="text-white group-hover:text-primary transition-colors">MH</span>
          <span className="text-primary text-3xl">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 text-white/40 hover:text-white transition-all duration-300 interactive relative group"
            >
              <item.icon size={14} className="group-hover:text-primary transition-colors" />
              <span>{item.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white/60 hover:text-primary transition-colors z-[110]"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[90] bg-black/80 lg:hidden flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="flex flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center gap-4 text-4xl font-display font-black text-white hover:text-primary uppercase tracking-tighter transition-colors"
                >
                  <item.icon size={32} className="text-white/20 group-hover:text-primary transition-colors" />
                  <span>{item.name}</span>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 flex flex-col items-center gap-2"
              >
                <div className="w-16 h-[1px] bg-primary" />
                <span className="text-[10px] font-mono text-white/20 tracking-[0.5em] uppercase">Mostafa Mahmoud Portfolio</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
