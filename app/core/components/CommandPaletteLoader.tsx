"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const CommandPalette = dynamic(
  () => import("@/app/core/components/CommandPalette").then((m) => m.CommandPalette),
  { ssr: false }
);

/**
 * Command palette is only needed once the visitor opens it (Ctrl/⌘+K or the
 * search button in the nav), so its JS is fetched on demand instead of being
 * part of the initial bundle.
 */
export default function CommandPaletteLoader() {
  const [mounted, setMounted] = useState(false);
  const [pendingOpen, setPendingOpen] = useState(false);

  useEffect(() => {
    if (mounted) return;

    const requestLoad = () => {
      setMounted(true);
      setPendingOpen(true);
    };

    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        requestLoad();
      }
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("sensei:palette", requestLoad);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("sensei:palette", requestLoad);
    };
  }, [mounted]);

  // Once the chunk is mounted, replay the intent so the palette actually opens.
  useEffect(() => {
    if (!mounted || !pendingOpen) return;
    const id = requestAnimationFrame(() => {
      window.dispatchEvent(new Event("sensei:palette"));
      setPendingOpen(false);
    });
    return () => cancelAnimationFrame(id);
  }, [mounted, pendingOpen]);

  return mounted ? <CommandPalette /> : null;
}
