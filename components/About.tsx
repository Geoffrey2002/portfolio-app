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
import { FaArrowRight, FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: FaCode, label: "Self-Taught Developer", value: "4+ Years" },
    { icon: FaLaptopCode, label: "Projects Completed", value: "50+" },
    { icon: FaRocket, label: "Technologies", value: "10+" },
  ];

  return (
    <div
      id="about"
      ref={ref}
      className="relative flex items-center w-full px-4 py-20 md:py-32 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-[--color-primary]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[--color-primary]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1240px] m-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInLeft}
            className="space-y-6"
          >
            {/* Section badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-primary]/10 border border-[--color-primary]/20">
              <span className="w-2 h-2 rounded-full bg-[--color-primary] animate-pulse" />
              <span className="text-sm font-medium text-[--color-primary] uppercase tracking-wider">
                About Me
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Who I Am
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[--color-primary] to-[--color-primary-light] rounded-full" />
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-[--color-text-light] text-lg leading-relaxed">
                I am a <span className="text-[--color-text] font-semibold">self-taught web developer</span> with a passion for creating beautiful
                and functional websites. Over the past <span className="text-[--color-primary] font-semibold">4 years</span>, I have dedicated myself to
                mastering coding and crafting exceptional digital experiences.
              </p>

              <p className="text-[--color-text-light] text-lg leading-relaxed">
                My journey began in 2019 with simple HTML and CSS edits for a small business website.
                What started as minor tweaks quickly evolved into a <span className="text-[--color-text] font-semibold">deep passion for programming</span>.
              </p>

              <p className="text-[--color-text-light] text-lg leading-relaxed">
                Fascinated by the intricacy of code, I dove into JavaScript and became captivated by
                creating interactive experiences. Today, I specialize in building modern applications with
                <span className="text-[--color-primary] font-semibold"> React, Next.js, and Supabase</span>, constantly exploring new technologies.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="text-center p-4 rounded-xl bg-[--color-bg-card] border border-[--color-border] hover:border-[--color-primary]/30 transition-all"
                >
                  <item.icon className="w-6 h-6 mx-auto mb-2 text-[--color-primary]" />
                  <div className="text-2xl font-bold text-[--color-text] mb-1">{item.value}</div>
                  <div className="text-xs text-[--color-text-light]">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} className="pt-2">
              <Link href="/#projects">
                <Button
                  size="lg"
                  className="group bg-[--color-primary] hover:bg-[--color-primary-light] text-white font-semibold px-8 py-6 rounded-full shadow-lg shadow-[--color-primary]/20 hover:shadow-xl hover:shadow-[--color-primary]/30 transition-all"
                >
                  View My Projects
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInRight}
            className="relative"
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
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[--color-bg]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Card>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-[--color-bg-card] border-2 border-[--color-primary]/30 rounded-2xl p-4 shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[--color-primary]/10 flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[--color-text]">Always Learning</div>
                    <div className="text-xs text-[--color-text-light]">Building the future</div>
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

