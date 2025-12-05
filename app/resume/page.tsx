"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FaDownload, 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaPhone, 
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaAward,
  FaMapMarkerAlt
} from "react-icons/fa";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import Link from "next/link";

const ResumePage = () => {
  const experience = [
    {
      id: 1,
      title: "Front-End Developer & Customer Care Head",
      company: "Jendie Automobiles Ltd",
      period: "Jun 2022 - October 2025",
      location: "Nairobi",
      description: [
        "Designed and implemented responsive websites using HTML, CSS (Tailwind), and React",
        "Developed dynamic UI components, conducted testing and performance tuning",
        "Provided customer support for IoT systems and coordinated NTSA-related services",
        "Created accounts, issued inspection codes, and monitored platform usage",
      ],
      achievements: [
        "Launched web apps that improved customer engagement and satisfaction",
        "Improved load speed and streamlined technical support processes",
      ],
    },
    {
      id: 2,
      title: "Business Support Executive - Data and Technology",
      company: "Various Organizations",
      period: "2018 - 2021",
      location: "Nairobi & Nyeri",
      description: [
        "Supported tech operations in various organizations (ministries, NGOs, supermarkets)",
        "Implemented stock systems, managed tech data, and trained users",
      ],
      achievements: [
        "Built data management systems and automated reporting tools",
      ],
    },
    {
      id: 3,
      title: "Asset Administrator",
      company: "Alma Kilifi Properties & Nyali Capital Ltd",
      period: "2015 - 2018",
      location: "Nairobi",
      description: [
        "Handled payroll, reporting, account management, and admin functions",
      ],
      achievements: [
        "Reduced errors and enhanced financial tracking systems",
      ],
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Certificate in Web Development",
      institution: "Udemy.com",
      period: "Jan 2021 - Nov 2021",
      description: "Comprehensive web development training covering modern frameworks and best practices.",
    },
    {
      id: 2,
      degree: "Certificate in Life Skills, Business Management & Technology",
      institution: "KEPSA",
      period: "Oct 2014 - Aug 2018",
      description: "Business management and technology skills development program.",
    },
    {
      id: 3,
      degree: "KCSE",
      institution: "Matuu High School",
      period: "2006 - 2011",
      description: "Kenya Certificate of Secondary Education.",
    },
  ];

  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Supabase", "Firebase", "REST APIs", "Authentication"],
    cms: ["WordPress", "Custom Themes", "Plugin Development", "WooCommerce"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "NPM", "Webpack"],
  };

  const certifications = [
    { icon: "🎓", text: "Certificate in Web Development - Udemy.com" },
    { icon: "💼", text: "Certificate in Life Skills, Business Management & Technology - KEPSA" },
    { icon: "🎨", text: "Adobe Photoshop (basic), UX Design" },
    { icon: "⚙️", text: "Website Testing, Optimization & SEO" },
  ];

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/assets/projects/Geoffrey CV.pdf';
    link.download = 'Geoffrey_Muthoni_CV.pdf';
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 relative overflow-hidden border-2 border-[--color-border]"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-20 dark:opacity-30 animate-gradient-rotate" />
                <div className="absolute inset-[2px] bg-[--color-bg-card] rounded-full" />
                
                {/* Content */}
                <span className="relative z-10 w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 animate-pulse shadow-lg shadow-emerald-500/50" />
                <span className="relative z-10 text-sm font-semibold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent uppercase tracking-wider">
                  Available for Opportunities
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-4 text-[--color-text]">
                Geoffrey Mwangi Muthoni
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-[--color-text-light] mb-8 font-medium">
                Self-Taught Frontend Developer
              </motion.p>

              {/* Contact Info */}
              <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <a 
                  href="mailto:gmwangi3174@gmail.com" 
                  className="flex items-center gap-3 p-3 rounded-xl bg-[--color-bg] border border-[--color-border] hover:border-[--color-primary]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[--color-primary]/10 flex items-center justify-center group-hover:bg-[--color-primary]/20 transition-colors">
                    <FaEnvelope className="text-[--color-primary]" />
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
                    <FaPhone className="text-[--color-primary]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[--color-text-light]">Phone</div>
                    <div className="text-sm font-medium text-[--color-text]">+254 708 760017</div>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/geoffrey-muthoni" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 p-3 rounded-xl bg-[--color-bg] border border-[--color-border] hover:border-[--color-primary]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[--color-primary]/10 flex items-center justify-center group-hover:bg-[--color-primary]/20 transition-colors">
                    <FaLinkedin className="text-[--color-primary]" />
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
                    <FaGithub className="text-[--color-primary]" />
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
                  <FaDownload /> Download PDF Resume
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
                  <FaCode className="text-2xl text-[--color-primary]" />
                </div>
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-[--color-text]">
                  Professional Summary
                </motion.h2>
              </div>
              <motion.p variants={fadeInUp} className="text-[--color-text-light] leading-relaxed text-lg">
                I am a <span className="text-[--color-text] font-semibold">WordPress and front-end developer</span> with a strong background in building responsive, 
                user-friendly websites and dashboards. Proficient in <span className="text-[--color-primary] font-semibold">HTML5, CSS3, JavaScript, WordPress</span>, 
                and frameworks like <span className="text-[--color-primary] font-semibold">React and Next.js</span>. I&apos;ve worked with wordpress themes such as 
                Harmony Care, Shopkeeper, Transpi, E-mart and have a deep understanding of website architecture, UX, and SEO. 
                My experience spans both technical development and administrative support, making me a versatile asset to any team.
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
              <FaBriefcase className="text-2xl text-[--color-primary]" />
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
                            <FaMapMarkerAlt className="text-sm" />
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
                          <FaAward className="text-[--color-primary]" />
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
              <FaGraduationCap className="text-2xl text-[--color-primary]" />
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
                    <FaAward className="text-xl text-[--color-primary]" />
                    <h3 className="text-xl font-bold text-[--color-text]">Certifications & Skills</h3>
                  </div>
                  <ul className="space-y-4">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <span className="text-2xl flex-shrink-0">{cert.icon}</span>
                        <span className="text-[--color-text-light] leading-relaxed pt-1">{cert.text}</span>
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
              <FaCode className="text-2xl text-[--color-primary]" />
            </div>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-[--color-text]">
              Technical Skills
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp}>
              <Card className="bg-[--color-bg-card] border-2 border-[--color-border] hover:border-[--color-primary]/30 transition-all hover:shadow-xl h-full">
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-bold text-xl mb-4 text-[--color-text] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[--color-primary]" />
                    Frontend Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <motion.span 
                        key={skill} 
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-[--color-primary]/10 text-[--color-primary] rounded-xl text-sm font-semibold border border-[--color-primary]/30 hover:bg-[--color-primary]/20 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-[--color-bg-card] border-2 border-[--color-border] hover:border-[--color-primary]/30 transition-all hover:shadow-xl h-full">
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-bold text-xl mb-4 text-[--color-text] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[--color-primary]" />
                    Backend & Database
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <motion.span 
                        key={skill} 
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-[--color-primary]/10 text-[--color-primary] rounded-xl text-sm font-semibold border border-[--color-primary]/30 hover:bg-[--color-primary]/20 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-[--color-bg-card] border-2 border-[--color-border] hover:border-[--color-primary]/30 transition-all hover:shadow-xl h-full">
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-bold text-xl mb-4 text-[--color-text] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[--color-primary]" />
                    CMS & Platforms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.cms.map((skill) => (
                      <motion.span 
                        key={skill} 
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-[--color-primary]/10 text-[--color-primary] rounded-xl text-sm font-semibold border border-[--color-primary]/30 hover:bg-[--color-primary]/20 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-[--color-bg-card] border-2 border-[--color-border] hover:border-[--color-primary]/30 transition-all hover:shadow-xl h-full">
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-bold text-xl mb-4 text-[--color-text] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[--color-primary]" />
                    Tools & Workflow
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <motion.span 
                        key={skill} 
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-[--color-primary]/10 text-[--color-primary] rounded-xl text-sm font-semibold border border-[--color-primary]/30 hover:bg-[--color-primary]/20 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
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
                    <FaDownload /> Download Resume
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
