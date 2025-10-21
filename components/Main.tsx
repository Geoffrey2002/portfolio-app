"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Passport from "@/public/assets/my passport.jpg";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Main = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/geoffrey-muthoni/",
      icon: FaLinkedinIn,
      label: "LinkedIn",
      external: true,
    },
    {
      href: "https://github.com/Geoffrey2002",
      icon: FaGithub,
      label: "GitHub",
      external: true,
    },
    {
      href: "/#contact",
      icon: AiOutlineMail,
      label: "Contact via Email",
      external: false,
    },
    {
      href: "/resume",
      icon: BsFillPersonLinesFill,
      label: "View Resume",
      external: false,
    },
  ];

  return (
    <div id="home" className="w-full h-screen text-center pt-36 px-4">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <Card className="w-full bg-[--color-bg-card] border-[--color-border] p-8 md:p-12 rounded-2xl">
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
                className="rounded-full p-4 shadow-lg shadow-black/30 object-cover border-4 border-[--color-primary]"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={fadeInUp} 
            className="py-4 text-[--color-text]"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 animate-gradient font-bold">
              Geoffrey Mwangi
            </span>
          </motion.h1>

          {/* Typing Animation Subheading */}
          <motion.div
            variants={fadeInUp}
            className="py-2 text-2xl sm:text-3xl font-bold min-h-[2.5rem] sm:min-h-[3rem]"
          >
            <TypeAnimation
              sequence={[
                "Self-Taught Frontend Developer",
                2000,
                "React & Next.js Specialist",
                2000,
                "WordPress Expert",
                2000,
                "UI/UX Enthusiast",
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-[--color-text]"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="py-4 text-[--color-text-light] sm:max-w-[70%] m-auto max-w-[90%] text-base sm:text-lg leading-relaxed"
          >
            Specializing in WordPress, Next.js, and React to build modern, responsive web applications. 
            Passionate about creating exceptional user experiences through clean code and innovative design.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 py-6 max-w-2xl mx-auto"
          >
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <span className="text-2xl font-bold text-white">4+</span>
              <span className="text-sm text-white/90 ml-2">Years Experience</span>
            </div>
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <span className="text-2xl font-bold text-white">15+</span>
              <span className="text-sm text-white/90 ml-2">Projects Completed</span>
            </div>
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-amber-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <span className="text-2xl font-bold text-white">8+</span>
              <span className="text-sm text-white/90 ml-2">Technologies</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 justify-center py-6"
          >
            <Link href="/#projects">
              <Button size="lg" className="text-base px-8">
                View My Work
              </Button>
            </Link>
            <Link href="/#contact">
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white">
                Get In Touch
              </Button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={staggerContainer}
            className="flex items-center justify-center gap-6 max-w-[400px] m-auto py-4 flex-wrap"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              const linkContent = (
                <motion.div
                  variants={staggerItem}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full shadow-lg shadow-black/20 p-5 cursor-pointer bg-[--color-bg-card] hover:bg-gradient-to-r hover:from-[--color-primary] hover:to-[--color-primary-light] transition-all duration-300 group min-h-[60px] min-w-[60px] flex items-center justify-center border border-[--color-border]"
                >
                  <Icon className="text-[--color-text] group-hover:text-white transition-colors" size={24} />
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

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeInUp}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <Link href="/#about" aria-label="Scroll to about section">
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="flex flex-col items-center cursor-pointer group"
              >
                <span className="text-xs text-[--color-text-light] mb-2 uppercase tracking-wider">
                  Scroll Down
                </span>
                <HiArrowDown className="text-[--color-primary] group-hover:text-[--color-primary-light] transition-colors" size={24} />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
        </Card>
      </div>
    </div>
  );
};

export default Main;

