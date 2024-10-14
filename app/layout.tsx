import React from "react";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from "next";


/**
 * @author Mostafa Sensei106
 * @description A layout component that includes the header, footer, and other components.
 * @returns A layout component that includes the header, footer, and other components.
 */

// Custom Metadata
type CustomMetadata = Metadata & {
    description: string;
    keywords: string;
    author: string;
    charset: string;
};

// Metadata configuration
export const metadata: CustomMetadata = {
    description: "Hello! I'm Mostafa Mahmoud, a Software Engineer specializing in Flutter, backend development, and AI.",
    keywords: "Mostafa Mahmoud, Flutter, Backend Development, AI",
    author: "Mostafa Sensei106",
    charset: "UTF-8",
};

config.autoAddCss = false;

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        <head>
            <title>Mostafa Sensei</title>
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#fcf0e1" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&amp;family=Overlock&amp;family=Yuji+Syuku&amp;display=swap" rel="stylesheet" />
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}
