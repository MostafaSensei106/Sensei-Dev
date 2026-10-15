"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Never show stale UI: render a neutral placeholder until mounted.
  if (!mounted) {
    return (
      <span
        aria-hidden="true"
        className="inline-block h-9 w-9 border border-foreground/10 bg-foreground/[0.03]"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="interactive flex h-9 w-9 items-center justify-center border border-foreground/10 bg-foreground/[0.03] text-foreground/60 transition-colors duration-300 hover:border-primary hover:text-primary"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
