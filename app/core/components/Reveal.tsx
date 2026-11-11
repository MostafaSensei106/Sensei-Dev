"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

// Small animation boundaries: the content passed as children stays in the
// server component graph instead of being imported into the browser bundle.
export function RevealDiv(props: HTMLMotionProps<"div">) {
  return <motion.div {...props} />;
}

export function RevealListItem(props: HTMLMotionProps<"li">) {
  return <motion.li {...props} />;
}

export function RevealLink(props: HTMLMotionProps<"a">) {
  return <motion.a {...props} />;
}
