"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import expenseApp from "@/public/assets/projects/expenseapp.png";
import foodApp from "@/public/assets/projects/foodApp.png";
import weatherApp from "@/public/assets/projects/weather.png";
import capture from "@/public/assets/projects/capture.png";
import ezziaProject from "@/public/assets/projects/EzziaProject.jpg";
import kingsgateProject from "@/public/assets/projects/kingsgateProject.jpg";
import mwangoProject from "@/public/assets/projects/mwangoProject.jpg";
import jendieProject from "@/public/assets/projects/jendieweb.png";
import atozeeProject from "@/public/assets/projects/atozee.png";
import securedProject from "@/public/assets/projects/secured.png";
import ProjectItem from "./ProjectItem";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextjsProjects = [
    {
      title: "Jendie Automobiles",
      backgroundImg: jendieProject,
      projectUrl: "https://jendie.co.ke/",
      tech: ["Next.js", "TypeScript", "Shadcn UI"],
      description: "A modern and responsive website for Jendie Automobiles Limited",
      liveUrl: "https://jendie.co.ke/",
    },
    {
      title: "Atozee LLC",
      backgroundImg: atozeeProject,
      projectUrl: "https://atozeellc.com/",
      tech: ["Next.js", "TypeScript", "Shadcn UI"],
      description: "Corporate website for Atozee LLC built with modern technologies",
      liveUrl: "https://atozeellc.com/",
    },
    {
      title: "Photography Portfolio",
      backgroundImg: capture,
      projectUrl: "https://landingpage-tw-next.vercel.app/",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      description: "A stunning photography portfolio with modern UI and smooth animations",
      liveUrl: "https://landingpage-tw-next.vercel.app/",
      githubUrl: "https://github.com/Geoffrey2002/next-landingpage-tw",
    },
  ];

  const reactProjects = [
    {
      title: "Secured Wishes",
      backgroundImg: securedProject,
      projectUrl: "https://securedwishes.com/",
      tech: ["React", "TailwindCSS", "CRUD"],
      description: "A platform for securing personal documents and safekeeping wishes using a robust CRUD architecture",
      liveUrl: "https://securedwishes.com/",
    },
    {
      title: "Expense Tracker",
      backgroundImg: expenseApp,
      projectUrl: "https://expense-app-drab.vercel.app/",
      tech: ["React", "JavaScript", "CSS"],
      description: "Track your expenses efficiently with beautiful charts and insights",
      liveUrl: "https://expense-app-drab.vercel.app/",
      githubUrl: "https://github.com/Geoffrey2002/Expense-App",
    },
    {
      title: "Food Ordering App",
      backgroundImg: foodApp,
      projectUrl: "https://food-app-dun.vercel.app/",
      tech: ["React", "JavaScript", "API"],
      description: "Order food online with real-time updates and seamless checkout",
      liveUrl: "https://food-app-dun.vercel.app/",
      githubUrl: "https://github.com/Geoffrey2002/foodApp",
    },
    {
      title: "Weather App",
      backgroundImg: weatherApp,
      projectUrl: "https://weather-app-react-tw.vercel.app/",
      tech: ["React", "JavaScript", "API"],
      description: "Real-time weather application consuming data from an external API for worldwide locations",
      liveUrl: "https://weather-app-react-tw.vercel.app/",
      githubUrl: "https://github.com/Geoffrey2002/nxt-weather-apptw",
    },
  ];

  const wordpressProjects = [
    {
      title: "Ezzia Healthcare PLLC",
      backgroundImg: ezziaProject,
      projectUrl: "https://www.ezziahealthcare.com/",
      tech: ["WordPress", "Custom Theme", "SEO"],
      description: "Primary care and wellness medical practice in Everett, WA offering walk-in, urgent care, DOT physicals, weight management, and comprehensive medical services",
      liveUrl: "https://www.ezziahealthcare.com/",
    },
    {
      title: "Kingsgate Highlands AFH",
      backgroundImg: kingsgateProject,
      projectUrl: "https://kingsgateafh.com/",
      tech: ["WordPress", "Responsive Design", "Contact Forms"],
      description: "Residential care facility in Kirkland, WA providing 24/7 adult and elder care with compassion, specialized nursing, and comprehensive medical support",
      liveUrl: "https://kingsgateafh.com/",
    },
    {
      title: "Mwango Capital",
      backgroundImg: mwangoProject,
      projectUrl: "https://mwangocapital.com/",
      tech: ["WordPress", "Custom Development", "Business Tools"],
      description: "Professional financial website for Mwango Capital",
      liveUrl: "https://mwangocapital.com/",
    },
  ];

  // Combine all projects for "All" tab
  const allProjects = [...nextjsProjects, ...reactProjects, ...wordpressProjects];

  return (
    <div id="projects" className="relative w-full py-16 md:py-24 px-4 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[--color-primary]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-[--color-primary]/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-[1240px] mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          {/* Section badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 relative overflow-hidden border-2 border-[--color-border]"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 opacity-20 dark:opacity-30 animate-gradient-rotate" />
            <div className="absolute inset-[2px] bg-[--color-bg] rounded-full" />

            {/* Content */}
            <span className="relative z-10 w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 animate-pulse shadow-lg shadow-violet-500/50" />
            <span className="relative z-10 text-sm font-semibold bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent uppercase tracking-wider">
              Projects
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[--color-text]">What I&apos;ve Built</h2>
          <p className="text-[--color-text-light] text-lg max-w-2xl mx-auto leading-relaxed">
            A collection of my recent work showcasing expertise in modern web technologies
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mt-8"
        >
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8 md:mb-12 w-full">
              <TabsList className="grid grid-cols-2 md:flex md:flex-row gap-2 bg-[--color-bg-card] p-2 border-2 border-[--color-border] rounded-xl shadow-lg w-full md:w-auto h-auto">
                <TabsTrigger value="all" className="text-sm px-4 py-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-violet-500/20 transition-all">
                  All Projects
                </TabsTrigger>
                <TabsTrigger value="nextjs" className="text-sm px-4 py-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-violet-500/20 transition-all">
                  Next.js
                </TabsTrigger>
                <TabsTrigger value="react" className="text-sm px-4 py-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-violet-500/20 transition-all">
                  React
                </TabsTrigger>
                <TabsTrigger value="wordpress" className="text-sm px-4 py-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-violet-500/20 transition-all">
                  WordPress
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2"
              >
                {allProjects.map((project) => (
                  <motion.div key={project.title} variants={staggerItem}>
                    <ProjectItem {...project} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="nextjs" className="mt-0">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2"
              >
                {nextjsProjects.map((project) => (
                  <motion.div key={project.title} variants={staggerItem}>
                    <ProjectItem {...project} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="react" className="mt-0">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2"
              >
                {reactProjects.map((project) => (
                  <motion.div key={project.title} variants={staggerItem}>
                    <ProjectItem {...project} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="wordpress" className="mt-0">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2"
              >
                {wordpressProjects.map((project) => (
                  <motion.div key={project.title} variants={staggerItem}>
                    <ProjectItem {...project} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

