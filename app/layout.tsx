import React from "react";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from "next";

// Custom Metadata
type CustomMetadata = Metadata & {
    description: string;
    keywords: string;
    author: string;
    charset: string;
    viewport: string;
};

// Metadata configuration
export const metadata: CustomMetadata = {
    description: "Hello! I'm Mostafa Mahmoud, a Software Engineer specializing in Flutter, backend development, and AI.",
    keywords: "Mostafa Mahmoud, Flutter, Backend Development, AI",
    author: "Mostafa Sensei106",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1.0",
};

config.autoAddCss = false;

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en" dir="ltr">
        <head>
            <title>Mostafa Mahmoud</title>
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keywords} />
            <meta name="author" content={metadata.author} />
            <meta name="viewport" content={metadata.viewport} />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&amp;family=Overlock&amp;family=Yuji+Syuku&amp;display=swap" rel="stylesheet" />
        </head>
        <body className="bg-black text-white">
        {children}
        </body>
        </html>
    );
}