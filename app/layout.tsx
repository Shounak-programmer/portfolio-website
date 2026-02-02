import type { Metadata, Viewport } from "next";
import { Orbitron, Rajdhani, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: 'swap',
  preload: true,
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
  preload: true,
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0e27' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://shounakchatterjee.tech'),
  title: {
    default: "Shounak Chatterjee | Full Stack Developer",
    template: "%s | Shounak Chatterjee"
  },
  description: "Portfolio of Shounak Chatterjee - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building innovative digital experiences.",
  keywords: ["Shounak Chatterjee", "Full Stack Developer", "Web Developer", "React", "Next.js", "Portfolio", "JavaScript", "TypeScript", "Node.js"],
  authors: [{ name: "Shounak Chatterjee" }],
  creator: "Shounak Chatterjee",
  publisher: "Shounak Chatterjee",
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
    url: "https://shounakchatterjee.tech",
    title: "Shounak Chatterjee | Full Stack Developer",
    description: "Full Stack Developer crafting innovative digital experiences with modern web technologies",
    siteName: "Shounak Chatterjee Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shounak Chatterjee | Full Stack Developer",
    description: "Full Stack Developer crafting innovative digital experiences",
    creator: "@user_shounak",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} ${shareTechMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
