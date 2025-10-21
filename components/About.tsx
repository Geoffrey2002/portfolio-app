"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AboutImg from "@/public/assets/about.jpg";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { Card } from "@/components/ui/card";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      id="about"
      ref={ref}
      className="flex items-center w-full p-4 py-16 md:py-24 md:h-screen"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        {/* Content */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideInLeft}
          className="col-span-2"
        >
          <motion.p
            variants={fadeInUp}
            className="uppercase text-xl tracking-widest text-[--color-primary] font-semibold"
          >
            About
          </motion.p>

          <motion.h2 variants={fadeInUp} className="py-4">
            Who I Am
          </motion.h2>

          <motion.p variants={fadeInUp} className="py-2 text-[--color-text-light] leading-relaxed">
            I am a self-taught web developer with a passion for creating beautiful
            and functional websites. I am passionate about crafting clean and
            functional websites. Over the past 4 years, I have dedicated myself to
            mastering coding. I have always had a knack for technology and working
            with computers. In 2019 I started working with HTML and CSS to make some
            minor edits on a small business website that I was operating. What
            started as minor edits quickly grew into a deep passion for programming.
          </motion.p>

          <motion.p variants={fadeInUp} className="py-2 text-[--color-text-light] leading-relaxed">
            Fascinated with how intricate programming can be I was quickly drawn to
            learn more. I started learning javascript and was even more enthused
            with making websites interactive. I am now spending my time building
            projects with React JS, Supabase and learning new technologies.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link
              href="/#projects"
              className="inline-block py-2 text-[--color-primary] underline underline-offset-4 hover:text-[--color-primary-light] transition-colors font-medium"
            >
              Check out some of my latest projects.
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideInRight}
          className="flex items-center justify-center w-full h-auto p-4 m-auto mt-8 md:mt-0"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <Card className="overflow-hidden p-0 border-2 border-[--color-primary]/20 bg-[--color-bg-card]">
              <Image
                src={AboutImg}
                alt="Geoffrey working on development projects"
                className="rounded-xl object-cover w-full h-full"
                width={600}
                height={600}
              />
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

