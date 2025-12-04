"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    period: string;
    location: string;
    description: string;
    skills: string[];
}

const experiences: ExperienceItem[] = [
    {
        id: 1,
        role: "Freelance Frontend Developer",
        company: "Self-Employed",
        period: "2025 - Present",
        location: "Remote",
        description:
            "Successfully delivered over 4 web projects for diverse clients, ranging from healthcare providers to financial firms. Specialized in building responsive, SEO-optimized websites using Next.js, React, and WordPress.",
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress"],
    },
    {
        id: 2,
        role: "Frontend Developer",
        company: "Jendie Automobiles Limited",
        period: "2022 - 2025",
        location: "Contract",
        description:
            "Developed and maintained  website for Jendie Automobiles Limited. Created frontend for the website using Next.js, React, and TypeScript. I also created a tracking frontend platform to be used to showcase data ",
        skills: ["WordPress", "PHP", "JavaScript", "CSS3", "SEO"],
    },
];

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div id="experience" className="relative w-full py-20 md:py-32 px-4 overflow-hidden bg-[--color-bg]">
            {/* Elegant background gradients */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
                </div>
            </div>

            <div ref={ref} className="max-w-6xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    className="text-center mb-20"
                >
                    {/* Section badge */}
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[--color-bg-card] border border-[--color-border] shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" />
                        <span className="text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent uppercase tracking-wider">
                            Career Journey
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        Work <span className="text-[--color-primary]">Experience</span>
                    </h2>
                    <p className="text-[--color-text-light] text-lg max-w-2xl mx-auto leading-relaxed">
                        My professional path and the impactful projects I've contributed to along the way.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Central Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[--color-border] to-transparent md:-translate-x-1/2" />

                    <div className="space-y-12 md:space-y-24">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 rounded-full border-[3px] border-[--color-bg] bg-[--color-primary] shadow-[0_0_0_4px_rgba(var(--color-primary-rgb),0.2)] md:-translate-x-1/2 z-10 mt-8 md:mt-10 ring-4 ring-[--color-bg]" />

                                {/* Content Card */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                                    <div className="relative group">
                                        {/* Card Glow Effect */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur-lg" />

                                        <Card className="relative overflow-hidden border border-[--color-border] bg-[--color-bg-card]/80 backdrop-blur-sm hover:border-[--color-primary]/30 transition-all duration-300 rounded-2xl shadow-lg">
                                            <CardContent className="p-6 md:p-8">
                                                <div className="flex flex-col gap-4">
                                                    {/* Header */}
                                                    <div className="flex flex-col gap-2">
                                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                                            <h3 className="text-xl md:text-2xl font-bold text-[--color-text]">
                                                                {exp.role}
                                                            </h3>
                                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[--color-primary]/10 text-[--color-primary] border border-[--color-primary]/20">
                                                                {exp.period}
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center gap-2 text-[--color-text-light] font-medium">
                                                            <Briefcase size={16} className="text-[--color-primary]" />
                                                            <span>{exp.company}</span>
                                                            <span className="w-1 h-1 rounded-full bg-[--color-border]" />
                                                            <span className="text-sm">{exp.location}</span>
                                                        </div>
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-[--color-text-light] leading-relaxed">
                                                        {exp.description}
                                                    </p>

                                                    {/* Skills */}
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        {exp.skills.map((skill) => (
                                                            <span
                                                                key={skill}
                                                                className="px-3 py-1 text-xs font-medium rounded-md bg-[--color-bg] border border-[--color-border] text-[--color-text-light] hover:text-[--color-primary] hover:border-[--color-primary]/30 transition-colors"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                {/* Empty space for alignment */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
