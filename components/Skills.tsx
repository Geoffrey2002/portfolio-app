"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Html from "@/public/assets/skills/html.png";
import Css from "@/public/assets/skills/css.png";
import Javascript from "@/public/assets/skills/javascript.png";
import ReactImg from "@/public/assets/skills/react.png";
import Tailwind from "@/public/assets/skills/tailwind.png";
import NextJS from "@/public/assets/skills/nextjs.png";
import Supabase from "@/public/assets/skills/supaBase__1_-removebg-preview.png";
import WordPress from "@/public/assets/skills/wordpress.png";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { FaStar, FaTrophy } from "react-icons/fa";

interface Skill {
  name: string;
  image: StaticImageData;
  proficiency: number; // 0-100
  category: string;
  yearsOfExperience?: number;
  description?: string;
}

const skills: Skill[] = [
  { 
    name: "HTML", 
    image: Html, 
    proficiency: 95, 
    category: "Frontend", 
    yearsOfExperience: 4,
    description: "Semantic markup & accessibility"
  },
  { 
    name: "CSS", 
    image: Css, 
    proficiency: 90, 
    category: "Frontend", 
    yearsOfExperience: 4,
    description: "Modern styling & animations"
  },
  { 
    name: "JavaScript", 
    image: Javascript, 
    proficiency: 90, 
    category: "Frontend", 
    yearsOfExperience: 4,
    description: "ES6+ & async programming"
  },
  { 
    name: "React", 
    image: ReactImg, 
    proficiency: 85, 
    category: "Frontend", 
    yearsOfExperience: 3,
    description: "Hooks, Context & performance"
  },
  { 
    name: "Tailwind", 
    image: Tailwind, 
    proficiency: 90, 
    category: "Frontend", 
    yearsOfExperience: 3,
    description: "Utility-first CSS framework"
  },
  { 
    name: "Next.js", 
    image: NextJS, 
    proficiency: 85, 
    category: "Frontend", 
    yearsOfExperience: 2,
    description: "SSR, SSG & App Router"
  },
  { 
    name: "Supabase", 
    image: Supabase, 
    proficiency: 75, 
    category: "Backend", 
    yearsOfExperience: 2,
    description: "Authentication & database"
  },
  { 
    name: "WordPress", 
    image: WordPress, 
    proficiency: 80, 
    category: "CMS", 
    yearsOfExperience: 4,
    description: "Theme & plugin development"
  },
];

// Circular progress component
const CircularProgress = ({ percentage, isInView, skillName }: { percentage: number; isInView: boolean; skillName: string }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-28 h-28">
      <svg className="transform -rotate-90 w-28 h-28">
        {/* Background circle */}
        <circle
          cx="56"
          cy="56"
          r={radius}
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
          className="text-[--color-border]"
        />
        {/* Progress circle */}
        <motion.circle
          cx="56"
          cy="56"
          r={radius}
          stroke={`url(#gradient-${skillName})`}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset: strokeDashoffset } : { strokeDashoffset: circumference }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
        <defs>
          <linearGradient id={`gradient-${skillName}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-primary-light)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const SkillCard = ({ skill, isInView }: { skill: Skill; isInView: boolean }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group h-full"
    >
      <Card className="relative overflow-hidden h-full bg-[--color-bg-card] border-2 border-[--color-border] hover:border-[--color-primary]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[--color-primary]/10">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[--color-primary]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <CardContent className="p-6 flex flex-col items-center text-center relative z-10 h-full">
          {/* Top badge for expert level */}
          {skill.proficiency >= 90 && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
              className="absolute top-3 right-3"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full p-2 shadow-lg">
                <FaTrophy className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          )}

          {/* Icon container with circular progress */}
          <div className="relative mb-4 flex flex-col items-center">
            <div className="relative">
              <CircularProgress percentage={skill.proficiency} isInView={isInView} skillName={skill.name} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image
                    src={skill.image}
                    width={48}
                    height={48}
                    alt={`${skill.name} logo`}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            {/* Percentage display below circle */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-2"
            >
              <span className="text-2xl font-bold text-[--color-primary]">{skill.proficiency}%</span>
            </motion.div>
          </div>

          {/* Skill name */}
          <h3 className="text-xl font-bold text-[--color-text] mb-2 group-hover:text-[--color-primary] transition-colors">
            {skill.name}
          </h3>

          {/* Category badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[--color-primary]/10 border border-[--color-primary]/20 mb-3">
            <span className="text-xs font-medium text-[--color-primary]">
              {skill.category}
            </span>
          </div>

          {/* Description */}
          {skill.description && (
            <p className="text-sm text-[--color-text-light] mb-4 leading-relaxed">
              {skill.description}
            </p>
          )}

          {/* Experience */}
          {skill.yearsOfExperience && (
            <div className="mt-auto flex items-center gap-2 text-[--color-text-light]">
              <FaStar className="w-3 h-3 text-[--color-primary]" />
              <span className="text-sm font-medium">
                {skill.yearsOfExperience}+ years experience
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("all");

  const categories = {
    all: skills,
    frontend: skills.filter(s => s.category === "Frontend"),
    backend: skills.filter(s => s.category === "Backend"),
    cms: skills.filter(s => s.category === "CMS"),
  };


  return (
    <div id="skills" className="relative w-full px-4 py-20 md:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 right-20 w-96 h-96 bg-[--color-primary]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-[--color-primary]/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-[1240px] mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          {/* Section badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-primary]/10 border border-[--color-primary]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[--color-primary] animate-pulse" />
            <span className="text-sm font-medium text-[--color-primary] uppercase tracking-wider">
              Skills & Expertise
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">My Skillset</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[--color-primary] to-[--color-primary-light] rounded-full mx-auto mb-6" />
            <p className="text-[--color-text-light] text-lg max-w-2xl mx-auto">
              A comprehensive collection of technologies and tools I use to build modern, scalable web applications
            </p>
          </motion.div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="gap-2 bg-[--color-bg-card] p-1 border border-[--color-border]">
                <TabsTrigger value="all" className="data-[state=active]:bg-[--color-primary] data-[state=active]:text-white">
                  All Skills
                </TabsTrigger>
                <TabsTrigger value="frontend" className="data-[state=active]:bg-[--color-primary] data-[state=active]:text-white">
                  Frontend
                </TabsTrigger>
                <TabsTrigger value="backend" className="data-[state=active]:bg-[--color-primary] data-[state=active]:text-white">
                  Backend
                </TabsTrigger>
                <TabsTrigger value="cms" className="data-[state=active]:bg-[--color-primary] data-[state=active]:text-white">
                  CMS
                </TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(categories).map(([key, categorySkills]) => (
              <TabsContent key={key} value={key} className="mt-0">
                {/* Desktop Grid View */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                  {categorySkills.map((skill) => (
                    <motion.div key={skill.name} variants={staggerItem}>
                      <SkillCard skill={skill} isInView={isInView} />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Mobile Carousel View */}
                <div className="md:hidden">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {categorySkills.map((skill) => (
                        <CarouselItem key={skill.name} className="basis-[85%] sm:basis-1/2">
                          <SkillCard skill={skill} isInView={isInView} />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Technologies", value: skills.length.toString() },
            { label: "Years Experience", value: "4+" },
            { label: "Average Proficiency", value: `${Math.round(skills.reduce((acc, s) => acc + s.proficiency, 0) / skills.length)}%` },
            { label: "Expert Level", value: skills.filter(s => s.proficiency >= 90).length.toString() },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-2xl bg-[--color-bg-card] border border-[--color-border] hover:border-[--color-primary]/30 transition-all"
            >
              <div className="text-3xl md:text-4xl font-bold text-[--color-primary] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[--color-text-light]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

