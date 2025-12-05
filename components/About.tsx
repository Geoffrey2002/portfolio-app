"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AboutImg from "@/public/assets/about.jpg";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Laptop, Rocket } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code, label: "Self-Taught Developer", value: "4+ Years" },
    { icon: Laptop, label: "Projects Completed", value: "10+" },
    { icon: Rocket, label: "Technologies", value: "8" },
  ];

  return (
    <div
      id="about"
      ref={ref}
      className="relative flex items-center w-full px-4 py-16 md:py-24 lg:py-32 overflow-hidden bg-[var(--color-bg-alt)]"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-[--color-primary]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[--color-primary]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 items-center">
        <div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="space-y-6"
          >
            {/* Section badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full relative overflow-hidden border-2 border-[--color-border]"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 dark:opacity-30 animate-gradient-rotate" />
              <div className="absolute inset-[2px] bg-[--color-bg-card] rounded-full" />

              {/* Content */}
              <span className="relative z-10 w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse" />
              <span className="relative z-10 text-sm font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase tracking-wider">
                About Me
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeInUp} className="space-y-3 md:space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Who I Am
              </h2>
              <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[--color-primary] to-[--color-primary-light] rounded-full" />
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp} className="space-y-3 md:space-y-4">
              <p className="text-[--color-text-light] text-base md:text-lg leading-relaxed">
                I am a <span className="text-[--color-text] font-semibold">self-taught web developer</span> with a passion for creating beautiful
                and functional websites. Over the past <span className="text-[--color-primary] font-semibold">4 years</span>, I have dedicated myself to
                mastering coding and crafting exceptional digital experiences.
              </p>

              <p className="text-[--color-text-light] text-base md:text-lg leading-relaxed">
                My journey began in 2019 with simple HTML and CSS edits for a small business website.
                What started as minor tweaks quickly evolved into a <span className="text-[--color-text] font-semibold">deep passion for programming</span>.
              </p>

              <p className="text-[--color-text-light] text-base md:text-lg leading-relaxed">
                Fascinated by the intricacy of code, I dove into JavaScript and became captivated by
                creating interactive experiences. Today, I specialize in building modern applications with
                <span className="text-[--color-primary] font-semibold"> React, Next.js, and Supabase</span>, constantly exploring new technologies.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-2 md:gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="text-center p-2 md:p-4 rounded-lg md:rounded-xl bg-[--color-bg-card] border border-[--color-border] hover:border-[--color-primary]/30 transition-all"
                >
                  <item.icon className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-1 md:mb-2 text-[--color-primary]" />
                  <div className="text-lg md:text-2xl font-bold text-[--color-text] mb-0.5 md:mb-1">{item.value}</div>
                  <div className="text-[10px] md:text-xs text-[--color-text-light] leading-tight">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} className="pt-2 md:pt-4">
              <Link href="/#projects">
                <Button
                  size="lg"
                  className="group bg-[--color-primary] hover:bg-[--color-primary-light] text-white font-semibold px-6 md:px-8 py-5 md:py-6 rounded-full shadow-lg shadow-[--color-primary]/20 hover:shadow-xl hover:shadow-[--color-primary]/30 transition-all text-sm md:text-base"
                >
                  View My Projects
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

        </div>

        {/* Image Column - Now separated from text column */}
        <div className="col-span-1 flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInRight}
            className="relative w-full max-w-sm md:max-w-none"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative group"
            >
              {/* Decorative border effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[--color-primary] to-[--color-primary-light] rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />

              {/* Main image card */}
              <Card className="relative overflow-hidden p-0 border-2 border-[--color-border] bg-[--color-bg-card] rounded-3xl shadow-2xl">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={AboutImg}
                    alt="Geoffrey working on development projects"
                    className="object-cover w-full h-full"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    placeholder="blur"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[--color-bg]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Card>

              {/* Floating badge - hidden on small mobile, shown on md+ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="hidden md:block absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-2xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <span className="text-xl md:text-2xl">💡</span>
                  </div>
                  <div>
                    <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">Always Learning</div>
                    <div className="text-[10px] md:text-xs font-medium text-slate-600 dark:text-slate-300">Building the future</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

