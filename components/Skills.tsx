"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiWordpress,
  SiWix,
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiShadcnui,
  SiGit,
  SiPostgresql,
  SiFramer,
  SiVercel,
  SiNodedotjs,
  SiAnthropic,
  SiN8N,
  SiGooglesheets,
} from "react-icons/si";
import { MousePointerClick } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

type SkillIcon = React.ComponentType<{ className?: string }>;

interface Skill {
  name: string;
  icon: SkillIcon;
  features: string[];
  proficiency: number;
  category: "Frontend" | "Backend" | "AI" | "CMS" | "Tools";
  yearsOfExperience?: number;
}

const skills: Skill[] = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    features: ["App Router", "Server Components", "API Routes"],
    proficiency: 85,
    category: "Frontend",
    yearsOfExperience: 2,
  },
  {
    name: "React",
    icon: SiReact,
    features: ["Hooks", "Context", "Custom Hooks"],
    proficiency: 85,
    category: "Frontend",
    yearsOfExperience: 3,
  },
  {
    name: "WordPress",
    icon: SiWordpress,
    features: ["Custom Themes", "Plugins", "WooCommerce", "Elementor"],
    proficiency: 80,
    category: "CMS",
    yearsOfExperience: 4,
  },
  {
    name: "Wix",
    icon: SiWix,
    features: ["Site Building", "Custom Code", "Velo Development"],
    proficiency: 75,
    category: "CMS",
    yearsOfExperience: 2,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    features: ["Responsive Design", "Custom Themes"],
    proficiency: 90,
    category: "Frontend",
    yearsOfExperience: 3,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    features: ["Type Safety", "Interfaces", "Generics"],
    proficiency: 85,
    category: "Frontend",
    yearsOfExperience: 2,
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    features: ["Auth", "Database", "RLS", "Edge Functions"],
    proficiency: 80,
    category: "Backend",
    yearsOfExperience: 2,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    features: ["REST APIs", "Server-side"],
    proficiency: 72,
    category: "Backend",
    yearsOfExperience: 2,
  },
  {
    name: "Claude AI",
    icon: SiAnthropic,
    features: ["Prompt Engineering", "AI Integration"],
    proficiency: 88,
    category: "AI",
    yearsOfExperience: 1,
  },
  {
    name: "Cursor",
    icon: MousePointerClick,
    features: ["AI-Assisted Coding", "Refactoring"],
    proficiency: 88,
    category: "AI",
    yearsOfExperience: 1,
  },
  {
    name: "n8n",
    icon: SiN8N,
    features: ["Workflow Automation", "Integrations"],
    proficiency: 80,
    category: "AI",
    yearsOfExperience: 1,
  },
  {
    name: "Apps Script",
    icon: SiGooglesheets,
    features: ["Sheets API", "Data Automation"],
    proficiency: 78,
    category: "AI",
    yearsOfExperience: 2,
  },
  {
    name: "shadcn/ui",
    icon: SiShadcnui,
    features: ["Component Library", "Accessibility", "Theming"],
    proficiency: 85,
    category: "Frontend",
    yearsOfExperience: 2,
  },
  {
    name: "Git",
    icon: SiGit,
    features: ["Version Control", "Collaboration"],
    proficiency: 85,
    category: "Tools",
    yearsOfExperience: 4,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    features: ["Database", "Prisma ORM"],
    proficiency: 75,
    category: "Backend",
    yearsOfExperience: 2,
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    features: ["Animations", "Transitions", "Gestures"],
    proficiency: 80,
    category: "Frontend",
    yearsOfExperience: 2,
  },
  {
    name: "Vercel",
    icon: SiVercel,
    features: ["Deployment", "CI/CD", "Edge Functions"],
    proficiency: 80,
    category: "Tools",
    yearsOfExperience: 2,
  },
];

const SkillCard = ({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group h-full"
    >
      <Card className="relative overflow-hidden h-full bg-[--color-bg-card] border border-[--color-border] hover:border-[--color-primary]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[--color-primary]/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[--color-primary]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardContent className="p-4 md:p-5 relative z-10">
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-[--color-bg] rounded-lg border border-[--color-border] group-hover:border-[--color-primary]/20 transition-colors">
              <Icon className="w-5 h-5 text-[--color-text-light] group-hover:text-[--color-primary] transition-colors" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-sm md:text-base font-bold text-[--color-text] group-hover:text-[--color-primary] transition-colors">
                {skill.name}
              </h3>
              <p className="text-xs md:text-sm text-[--color-text-light] mt-1 leading-relaxed">
                {skill.features.join(", ")}
              </p>
            </div>
          </div>
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
    frontend: skills.filter((s) => s.category === "Frontend"),
    backend: skills.filter((s) => s.category === "Backend"),
    ai: skills.filter((s) => s.category === "AI"),
    cms: skills.filter((s) => s.category === "CMS"),
    tools: skills.filter((s) => s.category === "Tools"),
  };

  return (
    <div id="skills" className="relative w-full px-4 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 right-20 w-96 h-96 bg-[--color-primary]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-[--color-primary]/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-[1240px] mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 border border-[--color-primary]/20 bg-[--color-primary]/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[--color-primary]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[--color-primary]">
              Skills & Expertise
            </span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[--color-text]">My Skillset</h2>
            <p className="text-[--color-text-light] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              A comprehensive collection of technologies and tools I use to build modern, scalable web applications
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8 md:mb-12 w-full">
              <TabsList className="grid grid-cols-3 md:flex md:flex-row md:flex-wrap gap-2 bg-[--color-bg-card] p-2 border border-[--color-border] rounded-xl shadow-sm w-full md:w-auto h-auto">
                {[
                  { value: "all", label: "All Skills" },
                  { value: "frontend", label: "Frontend" },
                  { value: "backend", label: "Backend" },
                  { value: "ai", label: "AI & Automation" },
                  { value: "cms", label: "CMS" },
                  { value: "tools", label: "Tools" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="text-sm px-4 py-2 rounded-lg data-[state=active]:bg-[--color-primary] data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:shadow-[--color-primary]/20 transition-all"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(categories).map(([key, categorySkills]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4"
                >
                  {categorySkills.map((skill) => (
                    <motion.div key={skill.name} variants={staggerItem}>
                      <SkillCard skill={skill} />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6"
        >
          {[
            { label: "Technologies", value: skills.length.toString() },
            { label: "Years Experience", value: "4+" },
            {
              label: "Average Proficiency",
              value: `${Math.round(skills.reduce((acc, s) => acc + s.proficiency, 0) / skills.length)}%`,
            },
            { label: "Expert Level", value: skills.filter((s) => s.proficiency >= 90).length.toString() },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-[--color-bg-card] border-2 border-[--color-border] hover:border-[--color-primary]/30 hover:shadow-lg transition-all group"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[--color-primary] tabular-nums mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-[--color-text-light] font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
