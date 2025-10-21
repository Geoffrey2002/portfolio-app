import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";
import captureImg from "@/public/assets/projects/capture.png";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://geoffreymuthoni.com';

export const metadata: Metadata = {
  title: "Photography Portfolio - Next.js Landing Page",
  description: "A stunning Next.js 14 photography portfolio landing page with modern design, smooth animations, and optimized image loading. Built with TypeScript and Tailwind CSS showcasing elegant UI/UX.",
  keywords: [
    "Photography Portfolio",
    "Next.js Landing Page",
    "TypeScript",
    "Tailwind CSS",
    "Modern Web Design",
    "Geoffrey Muthoni Projects",
  ],
  openGraph: {
    title: "Photography Portfolio - Next.js Landing Page | Geoffrey Muthoni",
    description: "Modern photography portfolio built with Next.js 14, TypeScript, and Tailwind CSS featuring stunning visuals and optimized performance.",
    url: `${siteUrl}/photograph`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/assets/projects/capture.png`,
        width: 1200,
        height: 630,
        alt: "Photography Portfolio Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography Portfolio - Next.js Project",
    description: "Stunning Next.js photography portfolio with modern design",
    images: [`${siteUrl}/assets/projects/capture.png`],
  },
  alternates: {
    canonical: `${siteUrl}/photograph`,
  },
};

export default function PhotographPage() {
  return (
    <ProjectDetailTemplate
      title="Photography Portfolio"
      description="A stunning Next.js photography landing page with modern design and smooth animations"
      longDescription="Photography Portfolio is a modern, responsive landing page built with Next.js 14 and styled using Tailwind CSS. The project showcases a collection of beautiful photographs with an elegant, minimal design that puts the focus on the imagery. Featuring smooth page transitions, lazy-loaded images for optimal performance, and a fully responsive layout that looks great on all devices. This project demonstrates proficiency in modern frontend development, performance optimization, and creating visually appealing user interfaces."
      image={captureImg}
      tech={["Next.js", "TypeScript", "Tailwind", "React"]}
      features={[
        "Fully responsive design that works seamlessly across all devices",
        "Optimized image loading with Next.js Image component for better performance",
        "Smooth animations and transitions using Framer Motion",
        "SEO-optimized with proper meta tags and semantic HTML",
        "Fast page loads with static generation and optimized assets",
        "Modern UI/UX with attention to typography and spacing",
        "Accessible design following WCAG guidelines",
        "Dark mode support for enhanced user experience",
      ]}
      challenges={[
        "Optimizing large image files without compromising quality",
        "Creating smooth animations that don't impact performance",
        "Ensuring accessibility across all interactive elements",
        "Implementing efficient lazy loading for image galleries",
      ]}
      solutions={[
        "Utilized Next.js Image optimization with appropriate sizing and formats",
        "Implemented GPU-accelerated CSS animations and Framer Motion",
        "Added proper ARIA labels and keyboard navigation support",
        "Leveraged intersection observer API for smart image loading",
      ]}
      githubUrl="https://github.com/Geoffrey2002/next-landingpage-tw"
      liveUrl="https://next-landingpage-tw.vercel.app/"
    />
  );
}

