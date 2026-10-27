import {
  Dela_Gothic_One,
  JetBrains_Mono,
  Noto_Sans_JP,
  Outfit,
  Yuji_Syuku,
} from "next/font/google";

/**
 * Fonts are fetched from Google at build time and emitted as static,
 * self-hosted assets by `next/font` (no files in /public, no render-blocking
 * request to fonts.googleapis.com at runtime).
 *
 * Japanese families are large, so they are excluded from preloading and are
 * only downloaded when a glyph from their unicode-range is actually rendered.
 */

export const displayFont = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display-google",
  fallback: ["Noto Sans JP", "system-ui", "sans-serif"],
});

export const bodyFont = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body-google",
  fallback: ["system-ui", "sans-serif"],
});

export const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-google",
  fallback: ["ui-monospace", "monospace"],
});

export const jpFont = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jp-google",
  preload: false,
  fallback: ["Hiragino Sans", "Yu Gothic", "sans-serif"],
});

export const jpBrushFont = Yuji_Syuku({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jp-brush-google",
  preload: false,
  fallback: ["Noto Sans JP", "Yu Mincho", "serif"],
});

export const fontVariables = [
  displayFont.variable,
  bodyFont.variable,
  monoFont.variable,
  jpFont.variable,
  jpBrushFont.variable,
].join(" ");
