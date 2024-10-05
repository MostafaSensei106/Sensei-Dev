import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import dynamic from 'next/dynamic';

config.autoAddCss = false;

const ServiceWorkerRegistration = dynamic(() => import('./ServiceWorkerRegistration'), { ssr: false });

export const metadata: Metadata = {
    description: "Hi My Name is Mostafa",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>Mostafa Sensei</title>
            <link rel="manifest" href="/manifest.json"/>
            <meta name="theme-color" content="#fcf0e1"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
                  integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
                  crossOrigin="anonymous" referrerPolicy="no-referrer"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&amp;family=Overlock&amp;family=Yuji+Syuku&amp;display=swap"
                rel="stylesheet"/>
        </head>
        <body>
        {children}
        <ServiceWorkerRegistration />
        </body>
        </html>
    );
}