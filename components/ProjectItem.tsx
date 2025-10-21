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
      className="group h-full"
    >
      <Card className="relative overflow-hidden border-2 border-[--color-border] bg-[--color-bg-card] h-full shadow-lg hover:shadow-2xl hover:shadow-[--color-primary]/10 transition-all duration-300 flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-[200px] md:h-[280px] lg:h-[320px] overflow-hidden">
          <Image
            src={backgroundImg}
            alt={`${title} project screenshot`}
            className="object-cover w-full h-full transition-all duration-500 md:group-hover:opacity-10 md:group-hover:scale-110"
          />

          {/* Gradient Overlay on Hover - Desktop Only */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 opacity-0 group-hover:opacity-95 transition-opacity duration-500" />
          
          {/* Dark overlay for better text contrast - Desktop Only */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Hover Content - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="hidden md:flex absolute inset-0 flex-col items-center justify-center opacity-0 group-hover:opacity-100 p-6 text-center z-10"
          >
            {/* Decorative top accent */}
            <div className="w-16 h-1 bg-white rounded-full mb-4 shadow-lg" />
            
            <h3 className="text-2xl lg:text-3xl text-white tracking-wide font-bold mb-3 drop-shadow-2xl">
              {title}
            </h3>

            {description && (
              <p className="text-white/95 text-sm mb-5 line-clamp-3 max-w-md drop-shadow-lg leading-relaxed px-2">
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
                    className="bg-white text-gray-900 hover:bg-white/90 border-2 border-white font-bold min-h-[48px] px-6 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    More Info
                  </Button>
                </Link>
              )}
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="bg-white text-gray-900 hover:bg-white/90 border-2 border-white font-bold min-h-[48px] px-6 rounded-xl gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
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
                    className="bg-white text-gray-900 hover:bg-white/90 border-2 border-white font-bold min-h-[48px] px-6 rounded-xl gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Mobile Content - Always Visible */}
        <div className="md:hidden p-4 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-[--color-text] mb-2">
            {title}
          </h3>

          {description && (
            <p className="text-[--color-text-light] text-sm mb-3 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}

          <div className="flex flex-wrap gap-1.5 mb-4">
            {tech.map((t) => (
              <TechBadge key={t} tech={t} />
            ))}
          </div>

          <div className="flex gap-2 flex-wrap mt-auto">
            {/* Show More Info only if projectUrl is different from liveUrl */}
            {projectUrl !== liveUrl && (
              <Link href={projectUrl} className="flex-1 min-w-[120px]">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-[--color-bg] text-[--color-text] hover:bg-[--color-primary] hover:text-white border-2 border-[--color-border] hover:border-[--color-primary] font-semibold rounded-lg transition-all"
                >
                  More Info
                </Button>
              </Link>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px]">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-[--color-primary] text-white hover:bg-[--color-primary-light] border-2 border-[--color-primary] font-semibold rounded-lg gap-1.5 transition-all"
                >
                  <FaExternalLinkAlt size={12} />
                  Live Demo
                </Button>
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px]">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-[--color-bg] text-[--color-text] hover:bg-[--color-primary] hover:text-white border-2 border-[--color-border] hover:border-[--color-primary] font-semibold rounded-lg gap-1.5 transition-all"
                >
                  <FaGithub size={14} />
                  GitHub
                </Button>
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectItem;

