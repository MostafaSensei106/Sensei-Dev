"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function NavigationPill() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navWidth = useTransform(scrollY, [0, 100], ["80%", "40%"]);
  const navY = useTransform(scrollY, [0, 100], [20, 20]);

  if (!mounted) return null;

  return (
    <motion.nav
      className="fixed z-50 left-1/2 -translate-x-1/2 glass-panel rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ease-out"
      style={{
        width: navWidth,
        y: navY,
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 20, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="font-display font-bold text-xl tracking-tighter cursor-pointer">
        MM<span className="text-primary">.</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        {["Home", "Work", "Art", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-primary transition-colors interactive relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="interactive p-2 rounded-full hover:bg-surface-variant/50 transition-colors"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </motion.nav>
  );
}
