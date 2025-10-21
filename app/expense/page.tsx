import ProjectDetail from "@/components/ProjectDetail";
import expenseImg from "@/public/assets/projects/expenseapp.png";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://geoffreymuthoni.com';

export const metadata: Metadata = {
  title: "Expense Tracker App - React JS Project",
  description: "A modern React JS expense tracking application with intuitive UI and state management. Track your daily expenses efficiently with this responsive web application built by Geoffrey Muthoni.",
  keywords: [
    "Expense Tracker",
    "React App",
    "JavaScript Application",
    "Budget Management",
    "Finance App",
    "Geoffrey Muthoni Projects",
  ],
  openGraph: {
    title: "Expense Tracker App - React JS Project | Geoffrey Muthoni",
    description: "Modern expense tracking application built with React JS, featuring intuitive interface and efficient state management.",
    url: `${siteUrl}/expense`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/assets/projects/expenseapp.png`,
        width: 1200,
        height: 630,
        alt: "Expense Tracker App Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expense Tracker App - React JS Project",
    description: "Modern expense tracking application built with React JS",
    images: [`${siteUrl}/assets/projects/expenseapp.png`],
  },
  alternates: {
    canonical: `${siteUrl}/expense`,
  },
};

export default function ExpensePage() {
  return (
    <ProjectDetail
      title="Expense App"
      subtitle="React JS / CSS"
      image={expenseImg}
      overview="This app showcases my proficiency in React JS, allowing users to create and display new expenses seamlessly. Built with modern React patterns and state management, it provides an intuitive interface for tracking daily expenses."
      codeUrl="https://github.com/Geoffrey2002/Expense-App"
      demoUrl="https://expense-app-drab.vercel.app/"
      technologies={[{ name: "React" }, { name: "CSS" }, { name: "JavaScript" }]}
    />
  );
}



