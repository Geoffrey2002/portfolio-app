import { Metadata } from "next";
import { siteConfig, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog — Web Development Articles",
  description:
    "Articles by Geoffrey Muthoni on Next.js, React, Tailwind CSS, WordPress, and modern frontend development best practices.",
  keywords: [
    "Next.js blog",
    "React development articles",
    "WordPress development tips",
    "Tailwind CSS tutorials",
    "Frontend development blog Kenya",
  ],
  openGraph: {
    title: `${siteConfig.name} — Web Development Blog`,
    description:
      "Articles and insights on React, Next.js, WordPress, and modern web development from a frontend developer in Nairobi, Kenya.",
    url: `${siteUrl}/blog`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
