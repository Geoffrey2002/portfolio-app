"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";

const ResumePage = () => {
  const experience = [
    {
      id: 1,
      title: "Freelance Frontend Developer",
      company: "Self-Employed",
      period: "2021 - Present",
      description: [
        "Built responsive web applications using React, Next.js, and TypeScript",
        "Developed custom WordPress themes and plugins for various clients",
        "Implemented modern UI/UX designs with Tailwind CSS and Framer Motion",
        "Integrated backend services using Supabase and Firebase",
      ],
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Various Clients",
      period: "2019 - 2021",
      description: [
        "Created and maintained WordPress websites for small businesses",
        "Optimized website performance and SEO",
        "Provided ongoing technical support and maintenance",
        "Collaborated with designers to implement modern web designs",
      ],
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Self-Taught Developer",
      institution: "Online Learning Platforms",
      period: "2019 - Present",
      description: "Completed various courses and certifications in web development, focusing on modern JavaScript frameworks and best practices.",
    },
  ];

  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Supabase", "Firebase", "REST APIs"],
    cms: ["WordPress", "Custom Themes", "Plugin Development"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "NPM"],
  };

  const handleDownloadPDF = () => {
    // In a real implementation, this would generate and download a PDF
    alert("PDF download functionality will be implemented with a PDF generation library");
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
            Geoffrey Mwangi Muthoni
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-[--color-text-light] mb-6">
            Self-Taught Frontend Developer
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:geoffrey@example.com" className="flex items-center gap-2 text-[--color-text-light] hover:text-[--color-primary] transition-colors">
              <FaEnvelope /> geoffrey@example.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 text-[--color-text-light] hover:text-[--color-primary] transition-colors">
              <FaPhone /> +123 456 7890
            </a>
            <a href="https://linkedin.com/in/geoffrey-muthoni" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[--color-text-light] hover:text-[--color-primary] transition-colors">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/Geoffrey2002" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[--color-text-light] hover:text-[--color-primary] transition-colors">
              <FaGithub /> GitHub
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4 justify-center">
            <Button onClick={handleDownloadPDF} className="gap-2">
              <FaDownload /> Download PDF
            </Button>
            <Link href="/#contact">
              <Button variant="outline" className="bg-transparent border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <Separator className="mb-12" />

        {/* Professional Summary */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-bold mb-4 text-[--color-primary]">
            Professional Summary
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[--color-text-light] leading-relaxed">
            Self-taught Frontend Developer with 4+ years of experience building modern, responsive web applications. 
            Specializing in React, Next.js, and WordPress development. Proven track record of delivering high-quality 
            projects that enhance user experience and drive business growth. Passionate about clean code, performance 
            optimization, and staying current with the latest web technologies.
          </motion.p>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-bold mb-6 text-[--color-primary]">
            Work Experience
          </motion.h2>
          <div className="space-y-6">
            {experience.map((job) => (
              <motion.div key={job.id} variants={fadeInUp}>
                <Card className="bg-[--color-bg-card] border-[--color-border]">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-[--color-text]">{job.title}</h3>
                        <p className="text-[--color-primary]">{job.company}</p>
                      </div>
                      <span className="text-[--color-text-light] text-sm mt-1 md:mt-0">{job.period}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-[--color-text-light]">
                      {job.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-bold mb-6 text-[--color-primary]">
            Education & Training
          </motion.h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <motion.div key={edu.id} variants={fadeInUp}>
                <Card className="bg-[--color-bg-card] border-[--color-border]">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-[--color-text]">{edu.degree}</h3>
                        <p className="text-[--color-primary]">{edu.institution}</p>
                      </div>
                      <span className="text-[--color-text-light] text-sm mt-1 md:mt-0">{edu.period}</span>
                    </div>
                    <p className="text-[--color-text-light]">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-bold mb-6 text-[--color-primary]">
            Technical Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp}>
              <Card className="bg-[--color-bg-card] border-[--color-border]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-[--color-text]">Frontend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-[--color-primary]/20 text-[--color-primary] rounded-full text-sm border border-[--color-primary]/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-[--color-bg-card] border-[--color-border]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-[--color-text]">Backend & Database</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-[--color-primary]/20 text-[--color-primary] rounded-full text-sm border border-[--color-primary]/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-[--color-bg-card] border-[--color-border]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-[--color-text]">CMS & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.cms.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-[--color-primary]/20 text-[--color-primary] rounded-full text-sm border border-[--color-primary]/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-[--color-bg-card] border-[--color-border]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-[--color-text]">Tools & Workflow</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-[--color-primary]/20 text-[--color-primary] rounded-full text-sm border border-[--color-primary]/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-[--color-primary] to-[--color-primary-light] border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Work Together</h3>
              <p className="text-white/90 mb-6">
                I&apos;m always interested in hearing about new projects and opportunities.
              </p>
              <Link href="/#contact">
                <Button variant="outline" className="bg-white text-[--color-primary] hover:bg-gray-100 font-bold">
                  Get In Touch
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;
