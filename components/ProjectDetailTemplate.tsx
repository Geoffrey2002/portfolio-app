"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/TechBadge";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import { Check } from "lucide-react";

interface ProjectDetailProps {
  title: string;
  description: string;
  longDescription: string;
  image: StaticImageData;
  tech: string[];
  features: string[];
  challenges?: string[];
  solutions?: string[];
  githubUrl?: string;
  liveUrl?: string;
  gallery?: StaticImageData[];
}

export default function ProjectDetailTemplate({
  title,
  description,
  longDescription,
  image,
  tech,
  features,
  challenges,
  solutions,
  githubUrl,
  liveUrl,
  gallery,
}: ProjectDetailProps) {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        {/* Back Button */}
        <Link href="/#projects">
          <Button variant="ghost" className="mb-8 gap-2 hover:bg-[--color-bg-hover]">
            <ArrowLeft size={18} />
            Back to Projects
          </Button>
        </Link>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-[--color-text-light] mb-6 max-w-3xl mx-auto">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {tech.map((t) => (
                <TechBadge key={t} tech={t} />
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2">
                    <FaExternalLinkAlt />
                    View Live Demo
                  </Button>
                </a>
              )}
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2 bg-transparent border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white">
                    <FaGithub size={20} />
                    View Code
                  </Button>
                </a>
              )}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div variants={fadeInUp} className="mb-16">
            <Card className="overflow-hidden border-[--color-border] bg-[--color-bg-card]">
              <Image
                src={image}
                alt={`${title} screenshot`}
                className="w-full h-auto"
                priority
              />
            </Card>
          </motion.div>

          {/* Project Overview */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[--color-primary]">Project Overview</h2>
            <Card className="bg-[--color-bg-card] border-[--color-border]">
              <CardContent className="p-8">
                <p className="text-[--color-text-light] text-lg leading-relaxed">
                  {longDescription}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Features */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[--color-primary]">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-[--color-bg-card] border-[--color-border] h-full">
                    <CardContent className="p-6">
                      <div className="flex gap-3 items-start">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-[--color-primary]/20 flex items-center justify-center">
                            <Check size={14} className="text-[--color-primary]" />
                          </div>
                        </div>
                        <p className="text-[--color-text-light]">{feature}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          {challenges && solutions && (
            <motion.div variants={fadeInUp} className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[--color-primary]">Challenges & Solutions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-[--color-bg-card] border-[--color-border]">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-[--color-text]">Challenges</h3>
                    <ul className="space-y-3">
                      {challenges.map((challenge, index) => (
                        <li key={index} className="text-[--color-text-light] flex gap-2">
                          <span className="text-[--color-primary] mt-1">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-[--color-bg-card] border-[--color-border]">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-[--color-text]">Solutions</h3>
                    <ul className="space-y-3">
                      {solutions.map((solution, index) => (
                        <li key={index} className="text-[--color-text-light] flex gap-2">
                          <span className="text-[--color-success] mt-1">✓</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {/* Gallery */}
          {gallery && gallery.length > 0 && (
            <motion.div variants={fadeInUp} className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[--color-primary]">Project Gallery</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {gallery.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden border-[--color-border] bg-[--color-bg-card]">
                      <Image
                        src={img}
                        alt={`${title} screenshot ${index + 1}`}
                        className="w-full h-auto"
                      />
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center">
            <Card className="bg-gradient-to-r from-[--color-primary] to-[--color-primary-light] border-none">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-white mb-4">Interested in similar work?</h3>
                <p className="text-white/90 mb-6 text-lg">
                  Let&apos;s discuss how I can help bring your project to life.
                </p>
                <Link href="/#contact">
                  <Button variant="outline" size="lg" className="bg-white text-[--color-primary] hover:bg-gray-100 font-bold">
                    Start a Conversation
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

