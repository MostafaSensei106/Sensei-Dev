import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { SmoothScroll } from "@/app/core/components/SmoothScroll";
import CustomCursor from "@/app/core/components/CustomCursor";
import ClientOnly from "@/app/core/components/ClientOnly";
import LoadingScreen from "@/app/core/components/LoadingScreen";

// Fonts
import { Outfit, Syne, Noto_Sans_JP } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

const notoJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-jp",
});

import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";

export const metadata: Metadata = {
  title: {
    default: PORTFOLIO_DATA.profile.name,
    template: `%s | ${PORTFOLIO_DATA.profile.name}`,
  },
  description: PORTFOLIO_DATA.profile.hero.description,
  keywords: ["Software Engineer", "Flutter", "Go", "Rust", "Portfolio", PORTFOLIO_DATA.profile.name],
  authors: [{ name: PORTFOLIO_DATA.profile.name }],
  creator: PORTFOLIO_DATA.profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mostafa-mahmoud.dev",
    title: PORTFOLIO_DATA.profile.name,
    description: PORTFOLIO_DATA.profile.hero.description,
    siteName: PORTFOLIO_DATA.profile.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${syne.variable} ${notoJP.variable}`}>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        <ClientOnly>
          <LoadingScreen />
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </ClientOnly>
      </body>
    </html >
  );
}
