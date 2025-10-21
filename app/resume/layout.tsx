import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://geoffreymuthoni.com';

export const metadata: Metadata = {
  title: "Resume - Professional Experience & Skills",
  description: "View Geoffrey Muthoni's professional resume. Frontend Developer with 4+ years of experience in React, Next.js, WordPress, and modern web technologies. Available for freelance and full-time opportunities.",
  keywords: [
    "Geoffrey Muthoni Resume",
    "Frontend Developer CV",
    "React Developer Resume",
    "Next.js Developer CV",
    "WordPress Developer Resume",
    "Web Developer Portfolio",
    "Hire Frontend Developer",
  ],
  openGraph: {
    title: "Geoffrey Muthoni - Professional Resume",
    description: "Frontend Developer with 4+ years of experience specializing in React, Next.js, and WordPress. View my professional experience, skills, and achievements.",
    url: `${siteUrl}/resume`,
    type: "profile",
    images: [
      {
        url: `${siteUrl}/assets/about.jpg`,
        width: 1200,
        height: 630,
        alt: "Geoffrey Muthoni Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geoffrey Muthoni - Professional Resume",
    description: "Frontend Developer with 4+ years of experience. React | Next.js | WordPress specialist.",
    images: [`${siteUrl}/assets/about.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/resume`,
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

