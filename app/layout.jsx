import { Inter, Playfair_Display, DM_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: 'swap',
    preload: true,
});

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    display: 'swap',
    preload: true,
});

const dmMono = DM_Mono({
    variable: "--font-dm-mono",
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    display: 'swap',
    preload: true,
});

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: '(prefers-color-scheme: dark)', color: '#12110f' },
    ],
};

export const metadata = {
    metadataBase: new URL('https://shounakchatterjee.tech'),
    title: {
        default: "Shounak Chatterjee | Full Stack Developer",
        template: "%s | Shounak Chatterjee"
    },
    description: "Portfolio of Shounak Chatterjee - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building innovative digital experiences.",
    keywords: ["Shounak Chatterjee", "Full Stack Developer", "Web Developer", "React", "Next.js", "Portfolio", "JavaScript", "Node.js"],
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
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
            { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
        ],
    },
    manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${playfair.variable} ${dmMono.variable} antialiased`}
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
                {children}
            </body>
        </html>
    );
}
