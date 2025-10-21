"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Html from "@/public/assets/skills/html.png";
import Css from "@/public/assets/skills/css.png";
import Javascript from "@/public/assets/skills/javascript.png";
import ReactImg from "@/public/assets/skills/react.png";
import Tailwind from "@/public/assets/skills/tailwind.png";
import NextJS from "@/public/assets/skills/nextjs.png";
import Supabase from "@/public/assets/skills/supaBase__1_-removebg-preview.png";
import WordPress from "@/public/assets/skills/wordpress.png";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

interface Skill {
  name: string;
  image: StaticImageData;
  proficiency: number; // 0-100
  category: string;
  yearsOfExperience?: number;
}

const skills: Skill[] = [
  { name: "HTML", image: Html, proficiency: 95, category: "Frontend", yearsOfExperience: 4 },
  { name: "CSS", image: Css, proficiency: 90, category: "Frontend", yearsOfExperience: 4 },
  { name: "JavaScript", image: Javascript, proficiency: 90, category: "Frontend", yearsOfExperience: 4 },
  { name: "React", image: ReactImg, proficiency: 85, category: "Frontend", yearsOfExperience: 3 },
  { name: "Tailwind", image: Tailwind, proficiency: 90, category: "Frontend", yearsOfExperience: 3 },
  { name: "Next.js", image: NextJS, proficiency: 85, category: "Frontend", yearsOfExperience: 2 },
  { name: "Supabase", image: Supabase, proficiency: 75, category: "Backend", yearsOfExperience: 2 },
  { name: "WordPress", image: WordPress, proficiency: 80, category: "CMS", yearsOfExperience: 4 },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div id="skills" className="w-full lg:h-screen p-4 py-16 md:py-24">
      <div
        ref={ref}
        className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <p className="text-xl tracking-widest uppercase text-[--color-primary] font-semibold">
            Skills
          </p>
          <h2 className="py-4">My Skillset</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={staggerItem}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="cursor-pointer hover:shadow-2xl hover:shadow-[--color-primary]/20 transition-all duration-300 min-h-[160px] md:min-h-[180px] bg-[--color-bg-card] border-[--color-border] group">
                  <CardContent className="p-4 md:p-6 flex flex-col h-full">
                    <div className="flex flex-col items-center flex-1">
                      <div className="mb-3">
                        <Image
                          src={skill.image}
                          width={56}
                          height={56}
                          alt={`${skill.name} logo`}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-[--color-text] mb-2">
                        {skill.name}
                      </h3>
                      <div className="text-xs text-[--color-text-light] mb-3">
                        {skill.category}
                      </div>
                      
                      {/* Proficiency Bar */}
                      <div className="w-full">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-[--color-text-light]">
                            Proficiency
                          </span>
                          <span className="text-xs font-semibold text-[--color-primary]">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="w-full bg-[--color-border] rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-[--color-primary] to-[--color-primary-light] rounded-full"
                          />
                        </div>
                      </div>

                      {skill.yearsOfExperience && (
                        <div className="text-xs text-[--color-text-light] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {skill.yearsOfExperience}+ years
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

