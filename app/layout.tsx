import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;



export const metadata: Metadata = {
  title: "Mostafa Sensei",
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
            integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
            crossOrigin="anonymous" referrerPolicy="no-referrer"/>
      <title>Mostafa Sensei</title>
    </head>
    <body>
    {children}
    </body>
    </html>
  );
}
