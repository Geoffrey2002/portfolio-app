"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Mail, Menu, Github, Linkedin, FileUser } from "lucide-react";
import { motion } from "framer-motion";
import navLogo from "@/public/assets/navlogo.png";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { staggerContainer, staggerItem } from "@/lib/animations";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    // Set active section based on current route
    if (pathname === "/resume") {
      setActiveSection("resume");
      return;
    } 
    // Blog section commented out
    // else if (pathname === "/blog" || pathname.startsWith("/blog/")) {
    //   setActiveSection("blog");
    //   return;
    // } 
    else if (pathname !== "/") {
      // For other routes, don't highlight any section
      setActiveSection("");
      return;
    }

    // Only track scroll position on home page
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home", section: "home" },
    { href: "/#about", label: "About", section: "about" },
    { href: "/#skills", label: "Skills", section: "skills" },
    { href: "/#projects", label: "Projects", section: "projects" },
    // { href: "/blog", label: "Blog", section: "blog" }, // Commented out - Blog section
    { href: "/resume", label: "Resume", section: "resume" },
    { href: "/#contact", label: "Contact", section: "contact" },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/geoffrey-muthoni/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/Geoffrey2002", icon: Github, label: "GitHub" },
    { href: "/#contact", icon: Mail, label: "Email", internal: true },
    { href: "/resume", icon: FileUser, label: "Resume", internal: true },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full h-20 z-50 transition-all duration-300 ${
        shadow 
          ? "bg-[--color-bg]/95 backdrop-blur-md shadow-xl border-b" 
          : "bg-[--color-bg]/90 backdrop-blur-md border-b"
      }`}
      style={{
        borderColor: 'var(--color-border)'
      }}
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-[--color-primary] rounded-lg">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={navLogo}
              alt="Geoffrey Muthoni - Portfolio Logo"
              width={125}
              height={80}
              className="cursor-pointer"
              priority
              sizes="125px"
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-sm uppercase font-medium"
              >
                <Link
                  href={link.href}
                  className="transition-all duration-300 focus:outline-none relative group px-1 py-1"
                  style={{
                    color: activeSection === link.section ? 'var(--color-primary)' : 'var(--color-text)'
                  }}
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Active background pill */}
                  <span 
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      activeSection === link.section ? "opacity-100 scale-100" : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                    }`}
                    style={{ 
                      backgroundColor: 'var(--color-primary)',
                      opacity: activeSection === link.section ? 0.15 : 0.1
                    }}
                  />
                  {/* Bottom indicator line */}
                  <span 
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${
                      activeSection === link.section ? "w-3/4 opacity-100" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100"
                    }`}
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <Sheet open={nav} onOpenChange={setNav}>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-lg hover:bg-[--color-bg-hover] transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                aria-label="Open navigation menu"
              >
                <Menu size={25} className="text-[--color-text]" />
              </button>
            </SheetTrigger>

          <SheetContent side="right" className="w-[85%] sm:w-[70%] p-0 bg-[--color-bg] border-[--color-border]">
            <div className="flex flex-col h-full">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Main navigation menu with links and social connections
              </SheetDescription>
              
              {/* Header Section */}
              <div className="border-b border-[--color-border] p-6 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Image src={navLogo} width={100} height={60} alt="Logo" sizes="100px" className="h-auto" />
                </div>
                <p className="text-xs text-[--color-text-light] mt-3">
                  Self-Taught Frontend Developer
                </p>
              </div>

              {/* Navigation Links */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex-1 overflow-y-auto py-6 px-4"
              >
                <nav aria-label="Mobile Navigation">
                  <ul className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <motion.li key={link.href} variants={staggerItem}>
                        <Link
                          href={link.href}
                          onClick={() => setNav(false)}
                          className={`text-sm font-medium transition-all duration-300 block py-4 px-5 rounded-lg relative group hover:bg-[--color-bg-hover] ${
                            activeSection === link.section ? 'bg-[--color-primary]/10' : ''
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span 
                              className="uppercase tracking-wide"
                              style={{
                                color: activeSection === link.section ? 'var(--color-primary)' : 'var(--color-text)',
                                fontWeight: activeSection === link.section ? '600' : '500'
                              }}
                            >
                              {link.label}
                            </span>
                            {activeSection === link.section && (
                              <motion.span 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: 'var(--color-primary)' }}
                              />
                            )}
                          </div>
                          {activeSection === link.section && (
                            <motion.span 
                              layoutId="activeIndicator"
                              className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
                              style={{ backgroundColor: 'var(--color-primary)' }}
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </motion.div>

              {/* Footer Social Section */}
              <div className="mt-auto border-t border-[--color-border] p-6">
                <p className="uppercase tracking-wider text-xs font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                  Let&apos;s Connect
                </p>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex gap-3"
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    const content = (
                      <motion.div
                        key={social.href}
                        variants={staggerItem}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-lg p-3.5 cursor-pointer bg-[--color-bg-card] hover:bg-[--color-bg-hover] transition-all duration-200 flex items-center justify-center border border-[--color-border] hover:border-[--color-primary]/30"
                        title={social.label}
                      >
                        <Icon className="text-[--color-text]" size={20} />
                      </motion.div>
                    );

                    return social.internal ? (
                      <Link
                        key={social.href}
                        href={social.href}
                        onClick={() => setNav(false)}
                        aria-label={social.label}
                      >
                        {content}
                      </Link>
                    ) : (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        {content}
                      </a>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

