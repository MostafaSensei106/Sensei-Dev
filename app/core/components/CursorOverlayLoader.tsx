"use client";

import dynamic from "next/dynamic";

/**
 * Decorative, pointer-only overlay: keep it out of the server payload and out
 * of the hydration bundle. There is nothing to show until the browser is idle
 * anyway.
 */
const CursorOverlay = dynamic(
  () => import("@/app/core/components/CursorOverlay"),
  { ssr: false }
);

export default function CursorOverlayLoader() {
  return <CursorOverlay />;
}
