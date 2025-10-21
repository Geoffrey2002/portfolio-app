"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaHeart, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/#contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/geoffrey-muthoni/",
      icon: FaLinkedinIn,
    },
    {
      name: "GitHub",
      href: "https://github.com/Geoffrey2002",
      icon: FaGithub,
    },
    {
      name: "Email",
      href: "mailto:gmwangi3174@gmail.com",
      icon: AiOutlineMail,
    },
  ];

  return (
    <footer className="relative w-full bg-[--color-bg-card] border-t-2 border-[--color-border] overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[--color-primary]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[--color-primary]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Geoffrey Muthoni
              </h3>
              <p className="text-[--color-text-light] mt-2">
                Frontend Developer
              </p>
            </div>
            <p className="text-[--color-text-light] text-sm leading-relaxed">
              Crafting beautiful and functional web experiences with modern
              technologies. Let&apos;s build something amazing together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-[--color-text] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[--color-primary]"></span>
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[--color-text-light] hover:text-[--color-primary] transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[--color-text-light] group-hover:bg-[--color-primary] transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-[--color-text] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[--color-primary]"></span>
              Connect
            </h4>
            <p className="text-[--color-text-light] text-sm">
              Follow me on social media for updates and insights.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-[--color-bg] border-2 border-[--color-border] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[--color-primary] group-hover:to-[--color-primary-light] group-hover:border-transparent transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-[--color-primary]/20"
                    >
                      <Icon className="text-[--color-text] group-hover:text-white transition-colors" size={18} />
                    </motion.div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[--color-border] to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[--color-text-light]"
        >
          <p className="flex items-center gap-2 flex-wrap justify-center">
            <span>© {currentYear} Geoffrey Muthoni.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <FaHeart className="text-red-500 animate-pulse" size={14} /> and lots of coffee
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/50"></span>
            <span className="font-medium">Available for opportunities</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

