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
import ProjectItem from "./ProjectItem";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextjsProjects = [
    {
      title: "Photography Portfolio",
      backgroundImg: capture,
      projectUrl: "/photograph",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      description: "A stunning photography portfolio with modern UI and smooth animations",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Geoffrey2002",
    },
  ];

  const reactProjects = [
    {
      title: "Expense Tracker",
      backgroundImg: expenseApp,
      projectUrl: "/expense",
      tech: ["React", "JavaScript", "CSS"],
      description: "Track your expenses efficiently with beautiful charts and insights",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Geoffrey2002",
    },
    {
      title: "Food Ordering App",
      backgroundImg: foodApp,
      projectUrl: "/food",
      tech: ["React", "JavaScript", "API"],
      description: "Order food online with real-time updates and seamless checkout",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Geoffrey2002",
    },
    {
      title: "Weather App",
      backgroundImg: weatherApp,
      projectUrl: "/weather",
      tech: ["React", "JavaScript", "API"],
      description: "Get real-time weather updates for any location worldwide",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Geoffrey2002",
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
      description: "Professional financial services and investment management platform",
      liveUrl: "https://mwangocapital.com/",
    },
  ];

  // Combine all projects for "All" tab
  const allProjects = [...nextjsProjects, ...reactProjects, ...wordpressProjects];

  return (
    <div id="projects" className="w-full py-16 md:py-24 px-4">
      <div ref={ref} className="max-w-[1240px] mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <p className="text-xl tracking-widest uppercase text-[--color-primary] font-semibold">
            Projects
          </p>
          <h2 className="py-4">What I&apos;ve Built</h2>
          <p className="text-[--color-text-light] max-w-2xl mx-auto">
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
            <div className="flex justify-center mb-12">
              <TabsList className="gap-1">
                <TabsTrigger value="all">
                  All Projects
                </TabsTrigger>
                <TabsTrigger value="nextjs">
                  Next.js
                </TabsTrigger>
                <TabsTrigger value="react">
                  React
                </TabsTrigger>
                <TabsTrigger value="wordpress">
                  WordPress
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-2"
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
                className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-2"
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
                className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-2"
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
                className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-2"
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

