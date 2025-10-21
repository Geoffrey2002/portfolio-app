import ProjectDetail from "@/components/ProjectDetail";
import foodImg from "@/public/assets/projects/foodApp.png";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://geoffreymuthoni.com';

export const metadata: Metadata = {
  title: "Food Ordering App - React Context API Project",
  description: "A modern React JS food ordering application demonstrating Context API for efficient state management. Built with React and CSS showcasing component architecture and modern design patterns.",
  keywords: [
    "Food Ordering App",
    "React Context API",
    "React State Management",
    "JavaScript Application",
    "Restaurant App",
    "Geoffrey Muthoni Projects",
  ],
  openGraph: {
    title: "Food Ordering App - React Context API Project | Geoffrey Muthoni",
    description: "Modern food ordering application built with React JS and Context API, featuring efficient state management and intuitive UI.",
    url: `${siteUrl}/food`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/assets/projects/foodApp.png`,
        width: 1200,
        height: 630,
        alt: "Food Ordering App Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Ordering App - React Context API Project",
    description: "Modern food ordering application with React Context API",
    images: [`${siteUrl}/assets/projects/foodApp.png`],
  },
  alternates: {
    canonical: `${siteUrl}/food`,
  },
};

export default function FoodPage() {
  return (
    <ProjectDetail
      title="Food App"
      subtitle="React JS / CSS / Context API"
      image={foodImg}
      overview="This app demonstrates how to use Context API to pass data from one component to another component efficiently. Built with React JS and CSS, it showcases modern state management patterns and component architecture."
      codeUrl="https://github.com/Geoffrey2002/Food-App"
      demoUrl="https://food-app-dun.vercel.app/"
      technologies={[
        { name: "React" },
        { name: "CSS" },
        { name: "Context API" },
        { name: "JavaScript" },
      ]}
    />
  );
}



