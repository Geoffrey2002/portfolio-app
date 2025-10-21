"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiRadioButtonFill } from "react-icons/ri";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface Technology {
  name: string;
}

interface ProjectDetailProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
  overview: string;
  codeUrl: string;
  demoUrl: string;
  technologies: Technology[];
}

const ProjectDetail = ({
  title,
  subtitle,
  image,
  overview,
  codeUrl,
  demoUrl,
  technologies,
}: ProjectDetailProps) => {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-[50vh] md:h-[60vh] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <Image
          src={image}
          alt={`${title} project`}
          fill
          className="object-cover"
          priority
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute bottom-16 md:bottom-20 max-w-[1240px] w-full left-1/2 -translate-x-1/2 text-white z-10 px-4"
        >
          <h1 className="py-2 text-4xl md:text-5xl font-bold">{title}</h1>
          <h2 className="text-xl md:text-2xl font-medium opacity-90">{subtitle}</h2>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1240px] mx-auto p-4 md:p-8 grid md:grid-cols-5 gap-8 py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="col-span-4"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="mb-4" variant="secondary">
              Project
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-[--color-text-light] leading-relaxed text-lg mb-6">
              {overview}
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 mt-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="min-h-[48px] px-8">View Code</Button>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="min-h-[48px] px-8">
                Live Demo
              </Button>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Technologies Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-4 md:col-span-1"
        >
          <Card>
            <CardContent className="p-6">
              <p className="font-bold text-center mb-4 text-lg">Technologies</p>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                {technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ x: 4 }}
                    className="flex items-center py-2 text-[--color-text-light]"
                  >
                    <RiRadioButtonFill className="mr-2 text-[--color-primary]" />
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="col-span-4 md:col-span-5"
        >
          <Link href="/#projects">
            <motion.p
              whileHover={{ x: -4 }}
              className="underline cursor-pointer text-[--color-primary] hover:text-[--color-primary-light] transition-colors inline-flex items-center gap-2 text-lg"
            >
              ← Back to Projects
            </motion.p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;

