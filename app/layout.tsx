import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { SmoothScroll } from "@/app/core/components/SmoothScroll";
import CustomCursor from "@/app/core/components/CustomCursor";
import LoadingScreen from "@/app/core/components/LoadingScreen";

// Fonts
import { Outfit, Dela_Gothic_One, Noto_Sans_JP, JetBrains_Mono } from "next/font/google";

const delaGothic = Dela_Gothic_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

const notoJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-jp",
});

import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL("https://mostafa-mahmoud.dev"),
  title: {
    default: PORTFOLIO_DATA.profile.name,
    template: `%s | ${PORTFOLIO_DATA.profile.name}`,
  },
  description: PORTFOLIO_DATA.profile.hero.description,
  keywords: ["Software Engineer", "Flutter", "Go", "Rust", "Portfolio", PORTFOLIO_DATA.profile.name, "Senior Developer", "Mobile Engineer"],
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
      suppressHydrationWarning
      className={`${delaGothic.variable} ${jetbrainsMono.variable} ${outfit.variable} ${notoJP.variable}`}
    >
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
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
              knowsAbout: ["Software Engineering", "Flutter", "Go", "Rust", "Mobile Development"]
            })
          }}
        />
        <LoadingScreen />
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
