import type { Metadata } from "next";
import { Raleway, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { PersonStructuredData, WebsiteStructuredData, ProfilePageStructuredData } from "@/components/StructuredData";
import { GoogleAnalytics } from "@/components/Analytics";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Geoffrey Muthoni | Frontend Developer - React, Next.js & WordPress Expert",
  description: "Self-taught Frontend Developer specializing in React, Next.js, and WordPress. Building modern, responsive web applications with exceptional user experiences. 4+ years of experience.",
  keywords: ["Frontend Developer", "React Developer", "Next.js Developer", "WordPress Developer", "Web Developer", "Geoffrey Muthoni", "Supabase", "TypeScript", "JavaScript"],
  authors: [{ name: "Geoffrey Mwangi Muthoni" }],
  creator: "Geoffrey Mwangi Muthoni",
  icons: {
    icon: "/assets/navlogo.png",
    shortcut: "/assets/navlogo.png",
    apple: "/assets/navlogo.png",
  },
  openGraph: {
    title: "Geoffrey Muthoni | Frontend Developer",
    description: "Self-taught Frontend Developer with 4+ years of experience specializing in React, Next.js, and WordPress",
    type: "website",
    locale: "en_US",
    siteName: "Geoffrey Muthoni Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geoffrey Muthoni | Frontend Developer",
    description: "Self-taught Frontend Developer specializing in React, Next.js, and WordPress",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
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
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

