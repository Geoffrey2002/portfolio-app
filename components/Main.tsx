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
    <div id="home" className="w-full min-h-screen text-center pt-20 md:pt-36 px-4 pb-10 md:pb-20">
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

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="py-3 md:py-4 text-[--color-text] text-3xl md:text-4xl lg:text-5xl"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 animate-gradient font-bold whitespace-nowrap">
                Geoffrey Mwangi
              </span>
            </motion.h1>

            {/* Typing Animation Subheading */}
            <motion.div
              variants={fadeInUp}
              className="py-2 text-lg sm:text-2xl md:text-3xl font-bold min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem]"
            >
              <TypingAnimation
                texts={[
                  "Self-Taught Frontend Developer",
                  "React & Next.js Specialist",
                  "WordPress Expert",
                  "UI/UX Enthusiast",
                ]}
                className="text-[--color-text]"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="py-3 md:py-4 text-[--color-text-light] sm:max-w-[70%] m-auto max-w-[95%] text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Specializing in WordPress, Next.js, and React to build modern, responsive web applications.
              Passionate about creating exceptional user experiences through clean code and innovative design.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-2 md:gap-4 py-4 md:py-6 max-w-2xl mx-auto"
            >
              <div className="px-3 py-1.5 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center">
                <span className="text-base md:text-2xl font-bold text-white">4+</span>
                <span className="text-[10px] md:text-sm text-white/90 ml-1 md:ml-2">Years Experience</span>
              </div>
              <div className="px-3 py-1.5 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center">
                <span className="text-base md:text-2xl font-bold text-white">15+</span>
                <span className="text-[10px] md:text-sm text-white/90 ml-1 md:ml-2">Projects Completed</span>
              </div>
              <div className="px-3 py-1.5 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-pink-500 to-amber-500 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center">
                <span className="text-base md:text-2xl font-bold text-white">8+</span>
                <span className="text-[10px] md:text-sm text-white/90 ml-1 md:ml-2">Technologies</span>
              </div>
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
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full shadow-lg shadow-black/20 p-3 md:p-5 cursor-pointer bg-[--color-bg-card] hover:bg-gradient-to-r hover:from-[--color-primary] hover:to-[--color-primary-light] transition-all duration-300 group min-h-[44px] min-w-[44px] md:min-h-[60px] md:min-w-[60px] flex items-center justify-center border border-[--color-border]"
                  >
                    <Icon className="text-[--color-text] group-hover:text-white transition-colors" size={20} />
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

