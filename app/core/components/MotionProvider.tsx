"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Global motion policy. `reducedMotion="user"` makes every framer-motion
 * descendant honour the OS setting without each component re-reading it:
 * transform and layout animations are skipped, opacity fades still run.
 *
 * Components that drive GSAP or raw CSS animation keep their own explicit
 * guards (`prefersReducedMotion()`, `useReducedMotion()`, media queries) —
 * MotionConfig only covers framer.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
