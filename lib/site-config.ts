export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://geoffreymuthoni.com";

export const siteConfig = {
  name: "Geoffrey Muthoni",
  fullName: "Geoffrey Mwangi Muthoni",
  alternateNames: ["Geoffrey Mwangi", "Geoffrey Muthoni"],
  title: "Frontend Developer & IT Lead",
  currentRole: "IT Lead & Frontend Developer",
  currentCompany: "Mwango Capital",
  tagline:
    "Frontend Developer and IT Lead building data-driven web apps with Next.js, TypeScript, and Supabase — and automating workflows with AI.",
  description:
    "Geoffrey Muthoni is a Frontend Developer and IT Lead based in Nairobi, Kenya with 4+ years of experience building responsive, data-driven web applications with Next.js, React, TypeScript, Tailwind CSS, and Supabase. At Mwango Capital he builds internal tools and automated NSE data pipelines that power real-time financial dashboards, and integrates AI tooling (Claude, Cursor, n8n) into development and operations workflows.",
  url: siteUrl,
  email: "gmwangi3174@gmail.com",
  contactEmail: "contact@geoffreymuthoni.com",
  location: "Nairobi, Kenya",
  country: "KE",
  yearsExperience: 4,
  projectsCompleted: 15,
  technologiesCount: 16,
  linkedIn: "https://www.linkedin.com/in/geoffrey-muthoni/",
  github: "https://github.com/Geoffrey2002",
  twitter: "@geoffreymuthoni",
  lastUpdated: "2026-06-06",
  services: [
    "React and Next.js application development",
    "Data-driven dashboards and internal tooling",
    "Workflow automation with n8n and Google Apps Script",
    "AI integration for products and developer workflows",
    "Custom website development and SEO-optimized UI",
    "WordPress theme and plugin development",
  ],
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Supabase",
    "PostgreSQL",
    "Node.js",
    "Framer Motion",
    "Claude AI",
    "Cursor",
    "n8n",
    "Google Apps Script",
    "Git",
    "Vercel",
  ],
} as const;

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Who is Geoffrey Muthoni?",
    answer:
      "Geoffrey Muthoni (Geoffrey Mwangi) is a self-taught frontend developer based in Nairobi, Kenya. He has 4+ years of experience building modern, responsive websites and web applications for clients in healthcare, automotive, finance, and other industries.",
  },
  {
    question: "What technologies does Geoffrey Muthoni use?",
    answer:
      "Geoffrey specializes in React, Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, shadcn/ui, and Framer Motion. He also builds with WordPress, Wix, and Velo, and deploys production apps on Vercel with Git-based workflows.",
  },
  {
    question: "Is Geoffrey Muthoni available for hire?",
    answer:
      "Yes. Geoffrey is available for freelance projects, contract work, and full-time frontend developer roles. He works remotely with clients worldwide and accepts inquiries through the contact form on geoffreymuthoni.com or via email.",
  },
  {
    question: "What services does Geoffrey Muthoni offer?",
    answer:
      "Geoffrey offers custom website development, React and Next.js app builds, WordPress theme and plugin development, Wix/Velo customization, responsive UI implementation, and SEO-friendly frontend engineering for business and portfolio sites.",
  },
  {
    question: "Where is Geoffrey Muthoni based?",
    answer:
      "Geoffrey Muthoni is based in Nairobi, Kenya, and works remotely with clients locally and internationally. His portfolio includes live projects for businesses in Kenya and the United States.",
  },
  {
    question: "Does Geoffrey Muthoni work with WordPress?",
    answer:
      "Yes. Geoffrey has 4+ years of WordPress experience including custom themes, plugins, WooCommerce, and Elementor. He combines WordPress CMS flexibility with modern frontend practices for fast, maintainable business websites.",
  },
  {
    question: "What is Geoffrey Muthoni's experience with Next.js?",
    answer:
      "Geoffrey builds production Next.js applications using the App Router, Server Components, API routes, and Server Actions. Recent client work includes corporate sites for Jendie Automobiles and Atozee LLC deployed on Vercel.",
  },
  {
    question: "How can I contact Geoffrey Muthoni?",
    answer:
      "You can contact Geoffrey through the contact form at geoffreymuthoni.com/#contact, email gmwangi3174@gmail.com, connect on LinkedIn at linkedin.com/in/geoffrey-muthoni, or view his resume at geoffreymuthoni.com/resume.",
  },
];

export const blogPosts = [
  {
    slug: "building-modern-web-apps-nextjs-14",
    title: "Building Modern Web Applications with Next.js 14",
    date: "2024-10-10",
  },
  {
    slug: "mastering-tailwind-css-tips-tricks",
    title: "Mastering Tailwind CSS: Tips and Tricks",
    date: "2024-09-25",
  },
  {
    slug: "wordpress-development-2024-best-practices",
    title: "WordPress Development in 2024: Best Practices",
    date: "2024-09-10",
  },
  {
    slug: "state-management-react-guide",
    title: "State Management in React: A Comprehensive Guide",
    date: "2024-08-28",
  },
] as const;
