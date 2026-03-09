import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/app/core/components/ThemeProvider";
import { SmoothScroll } from "@/app/core/components/SmoothScroll";
import CustomCursor from "@/app/core/components/CustomCursor";
import ClientOnly from "@/app/core/components/ClientOnly";
import NeuralSakuraBackground from "@/app/core/components/NeuralSakuraBackground";

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

export const metadata: Metadata = {
  title: "Mostafa Mahmoud | Samurai Android",
  description: "Neo-Samurai Software Engineering Portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${syne.variable} ${notoJP.variable}`}>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        <ThemeProvider>
          <ClientOnly>
            <SmoothScroll>
              <CustomCursor />
              <NeuralSakuraBackground />
              {children}
            </SmoothScroll>
          </ClientOnly>
        </ThemeProvider>
      </body>
    </html>
  );
}
