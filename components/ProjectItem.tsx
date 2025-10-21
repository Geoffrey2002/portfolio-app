"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/TechBadge";

interface ProjectItemProps {
  title: string;
  backgroundImg: StaticImageData;
  tech: string[];
  projectUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  description?: string;
}

const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
  githubUrl,
  liveUrl,
  description,
}: ProjectItemProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="relative overflow-hidden cursor-pointer border-[--color-border] bg-[--color-bg-card] h-full">
        <div className="relative w-full h-[280px] md:h-[320px]">
          <Image
            src={backgroundImg}
            alt={`${title} project screenshot`}
            className="object-cover w-full h-full transition-all duration-500 group-hover:opacity-20 group-hover:scale-110"
          />

          {/* Gradient Overlay on Hover - adapts to theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-[--color-primary] via-[--color-primary-light] to-[--color-primary] opacity-0 group-hover:opacity-95 transition-opacity duration-500" />
          
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 p-6 text-center z-10"
          >
            <h3 className="text-2xl md:text-3xl text-white tracking-wider font-bold mb-3 drop-shadow-lg">
              {title}
            </h3>

            {description && (
              <p className="text-white text-sm mb-4 line-clamp-2 max-w-md drop-shadow-md">
                {description}
              </p>
            )}

            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {tech.map((t) => (
                <TechBadge key={t} tech={t} variant="light" />
              ))}
            </div>

            <div className="flex gap-3 flex-wrap justify-center">
              {/* Show More Info only if projectUrl is different from liveUrl */}
              {projectUrl !== liveUrl && (
                <Link href={projectUrl}>
                  <Button
                    variant="outline"
                    className="bg-white/95 text-gray-900 hover:bg-white border-2 border-white font-bold min-h-[44px] shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  >
                    More Info
                  </Button>
                </Link>
              )}
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="bg-white/95 text-gray-900 hover:bg-white border-2 border-white font-bold min-h-[44px] gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </Button>
                </a>
              )}
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="bg-white/95 text-gray-900 hover:bg-white border-2 border-white font-bold min-h-[44px] gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectItem;

