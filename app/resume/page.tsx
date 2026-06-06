"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Phone,
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  MapPin,
  Lightbulb,
} from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import Link from "next/link";

const ResumePage = () => {
  const experience = [
    {
      id: 1,
      title: "IT Lead & Frontend Developer",
      company: "Mwango Capital",
      period: "Dec 2025 - Present",
      location: "Nairobi",
      description: [
        "Architect and maintain internal web apps and dashboards using Next.js (App Router), TypeScript, Tailwind CSS, and Supabase",
        "Built automated NSE (Nairobi Securities Exchange) data scraping pipelines that feed live market data into Google Sheets, powering real-time investment dashboards",
        "Integrate AI tools (Claude, Cursor) into development workflows, reducing build time and improving code quality across the team",
        "Lead IT infrastructure decisions, vendor management, and technology adoption across the organisation",
        "Design and implement automation workflows using n8n and Google Apps Script to streamline operational processes",
      ],
      achievements: [
        "Replaced manual market-data entry with automated pipelines feeding live dashboards",
        "Accelerated delivery by embedding AI-assisted development into the team's workflow",
      ],
    },
    {
      id: 2,
      title: "Frontend Developer & Customer Care Head",
      company: "Jendie Automobiles Ltd",
      period: "Jun 2022 - Nov 2025",
      location: "Nairobi",
      description: [
        "Designed and built dynamic, responsive websites using React, Next.js, and Tailwind CSS, improving page-load performance through better component architecture",
        "Developed interactive UI components and improved navigation flow, directly increasing user engagement and satisfaction",
        "Managed IoT platform accounts (activations/suspensions) and coordinated NTSA inspection-code issuance for nationwide compliance",
        "Administered agent accounts across IoT and NTSA platforms, ensuring regulatory compliance for all client operations",
      ],
      achievements: [
        "Launched new website features that measurably increased user engagement",
        "Streamlined client service processes to reduce turnaround time",
      ],
    },
    {
      id: 3,
      title: "Business Support Executive — Data & Technology",
      company: "Various Organisations",
      period: "2018 - 2021",
      location: "Nairobi & Nyeri",
      description: [
        "Delivered data management, administrative, and technology support across government offices, retail, and NGO sectors",
        "Implemented stock-management IT systems and trained staff, improving operational efficiency and reducing manual errors",
        "Captured, analysed, and managed organisational data to support strategic decision-making",
      ],
      achievements: [
        "Built automated reporting systems that improved accuracy and saved significant team hours each week",
      ],
    },
    {
      id: 4,
      title: "Asset Administrator & Office Support",
      company: "Alma Kilifi Properties & Nyali Capital Ltd",
      period: "2015 - 2018",
      location: "Kenyan Coast",
      description: [
        "Managed rental property and office administration including accounts payable/receivable, payroll, and contract preparation",
        "Prepared detailed business and financial reports for management review",
      ],
      achievements: [
        "Improved overdue-account recovery through systematic follow-up and reduced payroll processing time",
      ],
    },
  ];

  const projects = [
    {
      title: "NSE Financial Dashboard Automation",
      description:
        "Live data pipeline scraping Nairobi Securities Exchange market data into Google Sheets, powering automated investment dashboards for Mwango Capital.",
      tags: ["Next.js", "Apps Script", "Automation"],
    },
    {
      title: "Internal Investment Tools",
      description:
        "Internal dashboards and tools for financial data management, portfolio tracking, and reporting built with Next.js App Router, TypeScript, and Supabase.",
      tags: ["Next.js", "TypeScript", "Supabase"],
    },
    {
      title: "Workflow Automations",
      description:
        "Automated workflows with n8n and Google Apps Script that eliminate manual data entry and reduce operational overhead.",
      tags: ["n8n", "Apps Script"],
    },
    {
      title: "AI-Assisted Development",
      description:
        "Integrated Claude AI and Cursor into the daily development workflow, building AI-augmented features and speeding up code review.",
      tags: ["Claude AI", "Cursor"],
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Certificate in Life Skills, Business Management & Technology",
      institution: "KEPSA Youth Program",
      period: "2014 - 2018",
      description: "Business management and technology skills development program.",
    },
    {
      id: 2,
      degree: "Kenya Certificate of Secondary Education (KCSE)",
      institution: "Matuu High School",
      period: "2006 - 2011",
      description: "Secondary education, Kenya national curriculum.",
    },
  ];

  const skills = {
    frontend: ["Next.js (App Router)", "React", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "shadcn/ui", "HTML5", "CSS3"],
    backend: ["Supabase (PostgreSQL, Auth, RLS, Edge Functions)", "REST APIs", "Node.js", "Google Apps Script"],
    ai: ["Claude AI (Anthropic)", "Google Gemini", "Cursor IDE", "n8n", "Prompt Engineering", "AI-Assisted Coding"],
    data: ["Google Sheets API", "NSE Data Pipelines", "Dashboard Automation", "Data Reporting"],
    tools: ["Git", "GitHub", "Vercel", "VS Code", "Cursor"],
  };

  const certifications = [
    {
      title: "Google AI Professional Certificate",
      issuer: "Google / Coursera — 7 courses, 20+ AI artifacts built",
      year: "Apr 2026",
      link: "https://coursera.org/verify/professional-cert/ELAAW3EP9ZN7",
    },
    {
      title: "Anthropic Claude AI — Prompt Engineering & AI Integration",
      issuer: "Prompt engineering, AI-assisted development, responsible AI usage",
      year: "2025 - 2026",
    },
    {
      title: "Cursor AI-Powered IDE",
      issuer: "AI-assisted coding, generation, and refactoring in Next.js/TypeScript",
      year: "2025 - Present",
    },
    {
      title: "Certificate in Web Development",
      issuer: "Udemy — HTML, CSS, JavaScript, React fundamentals",
      year: "2021",
    },
  ];

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/Geoffrey_Mwangi_CV.pdf';
    link.download = 'Geoffrey_Mwangi_Muthoni_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[--color-primary]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-[--color-primary]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-12"
        >
          {/* Hero Section */}
          <Card className="relative overflow-hidden bg-[--color-bg-card] border-2 border-[--color-border] shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[--color-primary]/10 rounded-full blur-3xl" />
            <CardContent className="p-8 md:p-12 relative z-10">
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 border border-[--color-success]/30 bg-[--color-success]/10"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[--color-success] opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[--color-success]" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[--color-success]">
                  Available for Opportunities
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-4 text-[--color-text]">
                Geoffrey Mwangi Muthoni
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-[--color-text-light] mb-8 font-medium">
                Frontend Developer · IT Lead · AI &amp; Automation Specialist
              </motion.p>

              {/* Contact Info */}
              <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <a 
                  href="mailto:gmwangi3174@gmail.com" 
                  className="flex items-center gap-3 p-3 rounded-xl bg-[--color-bg] border border-[--color-border] hover:border-[--color-primary]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[--color-primary]/10 flex items-center justify-center group-hover:bg-[--color-primary]/20 transition-colors">
                    <Mail className="text-[--color-primary]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[--color-text-light]">Email</div>
                    <div className="text-sm font-medium text-[--color-text] truncate">gmwangi3174@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+254708760017" 
                  className="flex items-center gap-3 p-3 rounded-xl bg-[--color-bg] border border-[--color-border] hover:border-[--color-primary]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[--color-primary]/10 flex items-center justify-center group-hover:bg-[--color-primary]/20 transition-colors">
                    <Phone className="text-[--color-primary]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[--color-text-light]">Phone</div>
                    <div className="text-sm font-medium text-[--color-text]">+254 708 760017</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/geoffrey-muthoni/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 p-3 rounded-xl bg-[--color-bg] border border-[--color-border] hover:border-[--color-primary]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[--color-primary]/10 flex items-center justify-center group-hover:bg-[--color-primary]/20 transition-colors">
                    <Linkedin className="text-[--color-primary]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[--color-text-light]">LinkedIn</div>
                    <div className="text-sm font-medium text-[--color-text]">Connect</div>
                  </div>
                </a>

                <a 
                  href="https://github.com/Geoffrey2002" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 p-3 rounded-xl bg-[--color-bg] border border-[--color-border] hover:border-[--color-primary]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[--color-primary]/10 flex items-center justify-center group-hover:bg-[--color-primary]/20 transition-colors">
                    <Github className="text-[--color-primary]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[--color-text-light]">GitHub</div>
                    <div className="text-sm font-medium text-[--color-text]">@Geoffrey2002</div>
                  </div>
                </a>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleDownloadPDF} 
                  className="gap-2 bg-[--color-primary] hover:bg-[--color-primary-light] text-white font-semibold px-8 py-6 rounded-full shadow-lg shadow-[--color-primary]/20 hover:shadow-xl hover:shadow-[--color-primary]/30 transition-all hover:scale-105"
                  size="lg"
                >
                  <Download /> Download PDF Resume
                </Button>
                <Link href="/#contact">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto bg-transparent border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white font-semibold px-8 py-6 rounded-full transition-all hover:scale-105"
                    size="lg"
                  >
                    Contact Me
                  </Button>
                </Link>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Professional Summary */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          <Card className="bg-[--color-bg-card] border-2 border-[--color-border] shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[--color-primary]/10 flex items-center justify-center">
                  <Code2 className="text-2xl text-[--color-primary]" />
                </div>
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-[--color-text]">
                  Professional Summary
                </motion.h2>
              </div>
              <motion.p variants={fadeInUp} className="text-[--color-text-light] leading-relaxed text-lg">
                Results-driven <span className="text-[--color-text] font-semibold">Frontend Developer and IT Lead</span> with{" "}
                <span className="text-[--color-primary] font-semibold">4+ years</span> of experience building responsive,
                data-driven web applications using <span className="text-[--color-primary] font-semibold">Next.js, React, TypeScript,
                and Tailwind CSS (shadcn/ui)</span>. Currently spearheading digital infrastructure and internal tooling at{" "}
                <span className="text-[--color-text] font-semibold">Mwango Capital</span>, including automated NSE data pipelines
                powering real-time financial dashboards. Google AI Professional Certificate holder and Anthropic Claude AI
                practitioner with hands-on experience integrating AI into development workflows using{" "}
                <span className="text-[--color-primary] font-semibold">Cursor, n8n, and Google Apps Script</span> — delivering
                automation that reduces manual workload, improves data accuracy, and accelerates decision-making.
              </motion.p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[--color-primary]/10 flex items-center justify-center">
              <Briefcase className="text-2xl text-[--color-primary]" />
            </div>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-[--color-text]">
              Work Experience
            </motion.h2>
          </div>
          
          <div className="relative pl-8 border-l-2 border-[--color-border] space-y-8">
            {experience.map((job) => (
              <motion.div 
                key={job.id} 
                variants={staggerItem}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[37px] top-6 w-6 h-6 rounded-full bg-[--color-primary] border-4 border-[--color-bg] shadow-lg" />
                
                <Card className="bg-[--color-bg-card] border-2 border-[--color-border] hover:border-[--color-primary]/30 transition-all hover:shadow-xl group">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[--color-text] mb-2 group-hover:text-[--color-primary] transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[--color-text-light]">
                          <p className="text-[--color-primary] font-semibold">{job.company}</p>
                          <span className="hidden sm:inline">•</span>
                          <div className="flex items-center gap-2">
                            <MapPin className="text-sm" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 lg:mt-0 inline-flex items-center px-4 py-2 rounded-full bg-[--color-primary]/10 border border-[--color-primary]/20">
                        <span className="text-sm font-medium text-[--color-primary]">{job.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 text-[--color-text-light] mb-4">
                      {job.description.map((item, idx) => (
                        <li key={idx} className="flex gap-3 leading-relaxed">
                          <span className="text-[--color-primary] mt-1.5 text-xs">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {job.achievements && job.achievements.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-[--color-border]">
                        <h4 className="text-sm font-semibold text-[--color-text] mb-3 flex items-center gap-2">
                          <Award className="text-[--color-primary]" />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2 text-[--color-text-light]">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex gap-3 leading-relaxed">
                              <span className="text-[--color-success] mt-1.5 text-xs">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education & Certifications */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[--color-primary]/10 flex items-center justify-center">
              <GraduationCap className="text-2xl text-[--color-primary]" />
            </div>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-[--color-text]">
              Education & Training
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Education */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-[--color-bg-card] border-2 border-[--color-border] hover:border-[--color-primary]/30 transition-all hover:shadow-xl h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={edu.id} className={index > 0 ? "pt-6 border-t border-[--color-border]" : ""}>
                        <div className="mb-3">
                          <h3 className="text-xl font-bold text-[--color-text] mb-2">{edu.degree}</h3>
                          <p className="text-[--color-primary] font-semibold mb-2">{edu.institution}</p>
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[--color-primary]/10 border border-[--color-primary]/20">
                            <span className="text-sm font-medium text-[--color-primary]">{edu.period}</span>
                          </div>
                        </div>
                        <p className="text-[--color-text-light] leading-relaxed text-sm">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-[--color-bg-card] border-2 border-[--color-border] hover:border-[--color-primary]/30 transition-all hover:shadow-xl h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <Award className="text-xl text-[--color-primary]" />
                    <h3 className="text-xl font-bold text-[--color-text]">Certifications</h3>
                  </div>
                  <ul className="space-y-5">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <span className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-[--color-primary]/10 border border-[--color-primary]/20 flex items-center justify-center">
                          <Award className="text-sm text-[--color-primary]" />
                        </span>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-baseline gap-x-2">
                            <span className="font-semibold text-[--color-text] leading-snug">{cert.title}</span>
                            <span className="text-xs text-[--color-text-light] whitespace-nowrap">{cert.year}</span>
                          </div>
                          <p className="text-sm text-[--color-text-light] leading-relaxed mt-0.5">{cert.issuer}</p>
                          {cert.link && (
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-medium text-[--color-primary] hover:underline mt-1"
                            >
                              Verify certificate →
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
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
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[--color-primary]/10 flex items-center justify-center">
              <Code2 className="text-2xl text-[--color-primary]" />
            </div>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-[--color-text]">
              Technical Skills
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: "Frontend Development", items: skills.frontend },
              { label: "Backend & Database", items: skills.backend },
              { label: "AI & Automation", items: skills.ai },
              { label: "Data & Analytics", items: skills.data },
              { label: "Tools & Workflow", items: skills.tools },
            ].map((group) => (
              <motion.div key={group.label} variants={fadeInUp}>
                <Card className="bg-[--color-bg-card] border-2 border-[--color-border] hover:border-[--color-primary]/30 transition-all hover:shadow-xl h-full">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="font-bold text-xl mb-4 text-[--color-text] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[--color-primary]" />
                      {group.label}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3.5 py-1.5 bg-[--color-primary]/10 text-[--color-primary] rounded-lg text-sm font-medium border border-[--color-primary]/20 hover:bg-[--color-primary]/15 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Projects */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[--color-primary]/10 flex items-center justify-center">
              <Lightbulb className="text-2xl text-[--color-primary]" />
            </div>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-[--color-text]">
              Key Projects
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div key={project.title} variants={fadeInUp}>
                <Card className="bg-[--color-bg-card] border-2 border-[--color-border] hover:border-[--color-primary]/30 transition-all hover:shadow-xl h-full">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-lg font-bold text-[--color-text] mb-2">{project.title}</h3>
                    <p className="text-[--color-text-light] leading-relaxed text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-md bg-[--color-bg] border border-[--color-border] text-[--color-text-light]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
          <Card className="relative overflow-hidden bg-[--color-bg-card] border-2 border-[--color-border] shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-primary]/10 via-[--color-primary]/5 to-transparent" />
            <CardContent className="relative z-10 p-8 md:p-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-[--color-text] mb-4">
                  Let&apos;s Work Together
                </h3>
                <p className="text-[--color-text-light] text-lg mb-8 leading-relaxed">
                  I&apos;m always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/#contact">
                    <Button 
                      variant="default" 
                      size="lg"
                      className="w-full sm:w-auto bg-[--color-primary] hover:bg-[--color-primary-light] text-white font-bold px-8 py-6 rounded-full shadow-lg shadow-[--color-primary]/20 hover:shadow-xl hover:shadow-[--color-primary]/30 hover:scale-105 transition-all"
                    >
                      Get In Touch
                    </Button>
                  </Link>
                  <Button 
                    onClick={handleDownloadPDF}
                    variant="outline" 
                    size="lg"
                    className="w-full sm:w-auto bg-transparent border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white font-bold px-8 py-6 rounded-full hover:scale-105 transition-all gap-2"
                  >
                    <Download /> Download Resume
                  </Button>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;
