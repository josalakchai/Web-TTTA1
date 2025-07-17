import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Tiger Team Academy",
  description: "Empowering the next generation of tech leaders. Join our programs in web development, AI, cloud, and more.",
  openGraph: {
    title: "The Tiger Team Academy",
    description: "Empowering the next generation of tech leaders. Join our programs in web development, AI, cloud, and more.",
    url: "https://thetigerteamacademy.net/",
    siteName: "The Tiger Team Academy",
    images: [
      {
        url: "https://thetigerteamacademy.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Tiger Team Academy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Tiger Team Academy",
    description: "Empowering the next generation of tech leaders. Join our programs in web development, AI, cloud, and more.",
    images: [
      "https://thetigerteamacademy.net/og-image.jpg",
    ],
  },
  metadataBase: new URL("https://thetigerteamacademy.net"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0R2WBYP8KX"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0R2WBYP8KX');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
