import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/app/core/components/ThemeProvider";
import { MotionProvider } from "@/app/core/components/MotionProvider";
import { ThemeFxProvider } from "@/app/core/theme/ThemeFxProvider";
import { SpotlightHost } from "@/app/core/components/Motion";
import CommandPaletteLoader from "@/app/core/components/CommandPaletteLoader";
import { SmoothScroll } from "@/app/core/components/SmoothScroll";
import CursorOverlayLoader from "@/app/core/components/CursorOverlayLoader";
import AppLoader from "@/app/core/components/AppLoader";
import { fontVariables } from "@/app/fonts";

import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL("https://mostafa-mahmoud.dev"),
  title: {
    default: PORTFOLIO_DATA.profile.name,
    template: `%s | ${PORTFOLIO_DATA.profile.name}`,
  },
  description: PORTFOLIO_DATA.profile.hero.description,
  keywords: ["Software Engineer", "Flutter", "Dart", "Kotlin", "Android Native", "Go", "Gin", "Spring Boot", "Rust", "Cryptography", "Vector Database", "Portfolio", PORTFOLIO_DATA.profile.name, "Senior Developer", "Mobile Engineer"],
  authors: [{ name: PORTFOLIO_DATA.profile.name, url: "https://mostafa-mahmoud.dev" }],
  creator: PORTFOLIO_DATA.profile.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mostafa-mahmoud.dev",
    title: PORTFOLIO_DATA.profile.name,
    description: PORTFOLIO_DATA.profile.hero.description,
    siteName: PORTFOLIO_DATA.profile.name,
    images: [
      {
        url: "/Assets/art-gallery/Images/image_display/Mostafa_Logo.png",
        width: 1200,
        height: 630,
        alt: `${PORTFOLIO_DATA.profile.name} - ${PORTFOLIO_DATA.profile.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PORTFOLIO_DATA.profile.name,
    description: PORTFOLIO_DATA.profile.hero.description,
    creator: "@MostafaSensei",
    images: ["/Assets/art-gallery/Images/image_display/Mostafa_Logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={fontVariables}
      suppressHydrationWarning
    >
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        <ThemeProvider>
        <ThemeFxProvider>
        <MotionProvider>
          <a href="#home" className="skip-link">Skip to content</a>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: PORTFOLIO_DATA.profile.name,
                jobTitle: PORTFOLIO_DATA.profile.title,
                url: "https://mostafa-mahmoud.dev",
                sameAs: [
                  PORTFOLIO_DATA.profile.contact.linkedin,
                  `https://github.com/${PORTFOLIO_DATA.profile.contact.github}`,
                  PORTFOLIO_DATA.profile.contact.x,
                ],
                image: "https://mostafa-mahmoud.dev/Assets/art-gallery/Images/image_display/Mostafa_Logo.png",
                alumniOf: "Benha University",
                knowsAbout: ["Software Engineering", "Flutter", "Dart", "Kotlin", "Android Native", "Go", "Gin", "Spring Boot", "Rust", "Post-Quantum Cryptography", "Vector Databases", "Mobile Development"]
              })
            }}
          />
          <AppLoader />
          <SpotlightHost />
          <CommandPaletteLoader />
          <SmoothScroll>
            <CursorOverlayLoader />
            {children}
          </SmoothScroll>
        </MotionProvider>
        </ThemeFxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
