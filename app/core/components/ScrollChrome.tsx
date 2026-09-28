"use client";

import { motion, useScroll } from "framer-motion";

/**
 * ScrollChrome — katana progress blade.
 * The only scroll-driven global chrome: a 3px red→gold blade
 * pinned to the top. Everything else scrolls on a calm,
 * solid background so components never fight the backdrop.
 */
export default function ScrollChrome() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[102] origin-left bg-gradient-to-r from-primary via-primary to-accent"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}
