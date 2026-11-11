"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

// Small animation boundaries: the content passed as children stays in the
// server component graph instead of being imported into the browser bundle.
// Existing sections pass different entrance values; use one restrained motion
// treatment so cards and timeline rows feel like part of the same site.
const revealMotion = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
} as const;

export function RevealDiv(props: HTMLMotionProps<"div">) {
  return <motion.div {...props} {...revealMotion} />;
}

export function RevealListItem(props: HTMLMotionProps<"li">) {
  return <motion.li {...props} {...revealMotion} />;
}

export function RevealLink(props: HTMLMotionProps<"a">) {
  return <motion.a {...props} {...revealMotion} />;
}
