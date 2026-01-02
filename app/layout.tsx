import type { Metadata } from "next";
import { Raleway, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { PersonStructuredData, WebsiteStructuredData, ProfilePageStructuredData } from "@/components/StructuredData";
import { GoogleAnalytics } from "@/components/Analytics";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-raleway",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://geoffreymuthoni.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Geoffrey Muthoni | Frontend Developer - React, Next.js & WordPress Expert",
    template: "%s | Geoffrey Muthoni - Frontend Developer",
  },
  description: "Self-taught Frontend Developer specializing in React, Next.js, and WordPress. Building modern, responsive web applications with exceptional user experiences. 4+ years of experience.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "WordPress Developer",
    "Web Developer",
    "Geoffrey Muthoni",
    "Geoffrey Mwangi",
    "Supabase",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "UI/UX Developer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Geoffrey Mwangi Muthoni", url: siteUrl }],
  creator: "Geoffrey Mwangi Muthoni",
  publisher: "Geoffrey Mwangi Muthoni",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/assets/navlogo.png",
    shortcut: "/assets/navlogo.png",
    apple: "/assets/navlogo.png",
  },
  openGraph: {
    title: "Geoffrey Muthoni | Frontend Developer - React, Next.js & WordPress Expert",
    description: "Self-taught Frontend Developer with 4+ years of experience specializing in React, Next.js, and WordPress. Building modern, responsive web applications.",
    url: siteUrl,
    siteName: "Geoffrey Muthoni Portfolio",
    images: [
      {
        url: `${siteUrl}/assets/about.jpg`,
        width: 1200,
        height: 630,
        alt: "Geoffrey Muthoni - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geoffrey Muthoni | Frontend Developer",
    description: "Self-taught Frontend Developer specializing in React, Next.js, and WordPress. 4+ years of experience building modern web applications.",
    images: [`${siteUrl}/assets/about.jpg`],
    creator: "@geoffreymuthoni",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "technology",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <PersonStructuredData />
        <WebsiteStructuredData />
        <ProfilePageStructuredData />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </head>
      <body className={raleway.className}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[--color-primary] focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:ring-offset-2"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <Toaster position="bottom-right" richColors />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}

