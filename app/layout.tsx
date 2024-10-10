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
    // The children prop is the content which is passed to this
    // component by its parent.
    children: React.ReactNode;
}>) {
    return (
        // The root element of the document is an HTML element.
        <html lang="en">
        <head>
            {/*// The title element is used to set the title of the page*/}
            {/*// which is displayed in the browser's title bar.*/}
            <title>Mostafa Sensei</title>
            {/*// The manifest.json file is used by modern web browsers to*/}
            {/*// control how the application is displayed when it is added to*/}
            {/*// a user's home screen.*/}
            <link rel="manifest" href="/manifest.json"/>
            {/*// The theme-color meta tag is used to set the color of the*/}
            {/*// browser's title bar and other UI elements.*/}
            <meta name="theme-color" content="#fcf0e1"/>
            {/*// The font-awesome CSS file is included here to support the*/}
            {/*// use of font-awesome icons throughout the application.*/}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
                  integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
                  crossOrigin="anonymous" referrerPolicy="no-referrer"/>
            {/*// The google fonts CSS file is included here to support the*/}
            {/*// use of custom fonts throughout the application.*/}
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&amp;family=Overlock&amp;family=Yuji+Syuku&amp;display=swap"
                rel="stylesheet"/>
        </head>
        <body>
            {/*// The children prop is the content which is passed to this*/}
            {/*// component by its parent. It is rendered here.*/}
            {children}
            {/*// The ServiceWorkerRegistration component is used to*/}
            {/*// register the service worker which is used to implement*/}
            {/*// offline support for the application.*/}
            <ServiceWorkerRegistration />
        </body>
        </html>
    );
}