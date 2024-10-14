import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import {config} from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

/**
 * @author Mostafa Sensei106
 * @description A layout component that includes the header, footer, and other components.
 * @returns A layout component that includes the header, footer, and other components.
 */

// Custom Metadata
type CustomMetadata = Metadata & {
    description: string; // The description of the page
    keywords: string;// The keywords of the page
    author: string;// The author of the page
    viewport: string;// The viewport of the page
    charset: string;// The character set of the page
    themeColor?: string;// The theme color of the page
    ogTitle?: string;// The title of the page for social media
    ogDescription?: string;// The description of the page for social media
    ogUrl?: string;// The URL of the page for social media
};

// Metadata
// The metadata is used to set the title, description, keywords, author, viewport, and charset of the page.
// The metadata is also used to set the theme color of the page.
// The metadata is also used to set the title of the page for social media.
export const metadata: CustomMetadata = {
    description: "Hello! I'm Mostafa Mahmoud, a Software Engineer specializing in Flutter, backend development, and AI. Explore my projects, services ArtGallery, and learn more about my skills.",
    keywords: "Mostafa Mahmoud, Mostafa Sensei, Flutter,Flutter Developer, Backend Development, AI, Sensei Dev, TypeScript,Dart,Python, Programming, UI Design, Artificial Intelligence, App Development, Mobile App Development, Game Development, Art, Digital Art, Web Design, Web Development",
    author: "Mostafa Sensei106",// Sets the author of the page
    viewport: "width=device-width, initial-scale=1.0",// Sets the viewport of the page
    charset: "UTF-8",// Sets the character encoding of the document
    themeColor: "#000",  // Sets the browser theme color
    ogTitle: "Mostafa Mahmoud - Web Developer & Designer",  // Title for social media
    ogDescription: "Discover the projects and services of Mostafa Mahmoud, specializing in Flutter, Backend development, AI, Digital Art",  // Description for social media
    ogUrl: "https://mostafasensei106.github.io/Sensei-Dev",  // URL of your website
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
        </body>
        </html>
    );
}