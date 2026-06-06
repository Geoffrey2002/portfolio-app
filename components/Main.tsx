"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, FileUser, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Passport from "@/public/assets/my passport.jpg";
import { TypingAnimation } from "@/components/TypingAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Main = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/geoffrey-muthoni/",
      icon: Linkedin,
      label: "LinkedIn",
      external: true,
    },
    {
      href: "https://github.com/Geoffrey2002",
      icon: Github,
      label: "GitHub",
      external: true,
    },
    {
      href: "/#contact",
      icon: Mail,
      label: "Contact via Email",
      external: false,
    },
    {
      href: "/resume",
      icon: FileUser,
      label: "View Resume",
      external: false,
    },
  ];

  return (
    <div id="home" className="w-full min-h-[100dvh] text-center pt-20 md:pt-36 px-4 pb-10 md:pb-20">
      <div className="max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center">
        <Card className="w-full bg-[--color-bg-card] border-[--color-border] p-6 md:p-8 lg:p-12 rounded-2xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            {/* Profile Image */}
            <motion.div variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={Passport}
                  width={200}
                  height={200}
                  alt="Geoffrey Muthoni - Front-End Developer"
                  className="rounded-full p-3 md:p-4 shadow-lg shadow-black/30 object-cover border-4 border-[--color-primary] w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                  priority
                  placeholder="blur"
                  sizes="(max-width: 768px) 150px, 200px"
                />
              </motion.div>
            </motion.div>

            {/* Availability badge */}
            <motion.div variants={fadeInUp} className="mt-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[--color-success]/30 bg-[--color-success]/10 text-xs font-semibold uppercase tracking-[0.18em] text-[--color-success]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[--color-success] opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[--color-success]" />
                </span>
                Available for new roles
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="py-3 md:py-4 text-[--color-text] text-3xl md:text-4xl lg:text-5xl"
            >
              Hi, I&apos;m{" "}
              <span
                className="animate-gradient font-bold whitespace-nowrap"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #6366f1 0%, #818cf8 45%, #f59e0b 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Geoffrey Mwangi
              </span>
            </motion.h1>
            {/* Hidden heading for screen readers to maintain hierarchy */}
            <h2 className="sr-only">Frontend Developer Portfolio</h2>

            {/* Typing Animation Subheading */}
            <motion.div
              variants={fadeInUp}
              className="py-2 text-lg sm:text-2xl md:text-3xl font-bold min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem]"
              role="status"
              aria-live="polite"
              aria-label="Professional title"
            >
              <TypingAnimation
                texts={[
                  "Frontend Developer",
                  "IT Lead @ Mwango Capital",
                  "AI & Automation Specialist",
                  "Next.js & TypeScript Engineer",
                ]}
                className="text-[--color-text]"
              />
            </motion.div>

            {/* Description — static text for search engines and AI extractors */}
            <motion.p
              variants={fadeInUp}
              className="py-3 md:py-4 text-[--color-text-light] sm:max-w-[70%] m-auto max-w-[95%] text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Frontend Developer and IT Lead in Nairobi, Kenya. I build data-driven web apps with Next.js,
              TypeScript, and Supabase, automate NSE financial data pipelines, and ship faster with AI tools
              like Claude and Cursor.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center divide-x divide-[--color-border] py-4 md:py-6 max-w-2xl mx-auto"
            >
              {[
                { value: "4+", label: "Years Experience" },
                { value: "15+", label: "Projects Shipped" },
                { value: "16", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label} className="px-5 md:px-8 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[--color-text] tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[--color-text-light] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-row flex-wrap gap-2 md:gap-4 justify-center py-4 md:py-6"
            >
              <Link href="/#projects">
                <Button size="lg" className="text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 h-10 sm:h-11 md:h-12">
                  View My Work
                </Button>
              </Link>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 h-10 sm:h-11 md:h-12 bg-transparent border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white">
                  Get In Touch
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={staggerContainer}
              className="flex items-center justify-center gap-3 md:gap-6 max-w-full m-auto py-4 flex-wrap"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const linkContent = (
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="rounded-xl cursor-pointer bg-[--color-bg-card] hover:bg-[--color-primary] hover:border-[--color-primary] transition-colors duration-200 group h-11 w-11 md:h-12 md:w-12 flex items-center justify-center border border-[--color-border] shadow-sm"
                  >
                    <Icon className="text-[--color-text-light] group-hover:text-white transition-colors" size={20} />
                  </motion.div>
                );

                return social.external ? (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {linkContent}
                  </a>
                ) : (
                  <Link key={social.href} href={social.href} aria-label={social.label}>
                    {linkContent}
                  </Link>
                );
              })}
            </motion.div>
          </motion.div>
        </Card>
      </div>
    </div>
  );
};

export default Main;

