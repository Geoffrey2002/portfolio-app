"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Mail, Menu, Github, Linkedin, FileUser, Search } from "lucide-react";
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
    else if (pathname === "/blog" || pathname.startsWith("/blog/")) {
      setActiveSection("blog");
      return;
    } else if (pathname !== "/") {
      // For other routes, don't highlight any section
      setActiveSection("");
      return;
    }

    // Only track scroll position on home page
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
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
    { href: "/#experience", label: "Experience", section: "experience" },
    { href: "/#projects", label: "Projects", section: "projects" },
    // Blog hidden until real content is published:
    // { href: "/blog", label: "Blog", section: "blog" },
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
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-4 md:pt-4"
    >
      <div
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border px-4 md:px-6 transition-all duration-300 ${shadow
          ? "bg-[--color-bg]/85 backdrop-blur-md shadow-xl"
          : "bg-[--color-bg]/70 backdrop-blur-md shadow-lg"
          }`}
        style={{
          borderColor: 'var(--color-border)'
        }}
      >
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
              className="cursor-pointer h-9 w-auto md:h-10"
              priority
              sizes="125px"
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">
          <ul className="flex items-center gap-0.5 rounded-full border border-[--color-border] bg-[--color-bg-card]/60 px-1.5 py-1.5 backdrop-blur-md shadow-sm">
            {navLinks.map((link, index) => {
              const active = activeSection === link.section;
              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`relative block rounded-full px-4 py-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary] ${
                      active ? "" : "hover:bg-[--color-bg-hover]"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-[--color-primary]/12"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span
                      className={`relative z-10 text-xs font-semibold uppercase tracking-wider transition-colors ${
                        active ? "text-[--color-primary]" : "text-[--color-text-light] hover:text-[--color-text]"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
            aria-label="Open command menu"
            className="hidden items-center gap-2 rounded-full border border-[--color-border] bg-[--color-bg-card]/60 px-3 py-2 text-xs text-[--color-text-light] backdrop-blur-md transition-colors hover:border-[--color-primary]/30 hover:text-[--color-text] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary] lg:flex"
          >
            <Search size={14} />
            <span>Search</span>
            <kbd className="rounded border border-[--color-border] px-1.5 py-0.5 text-[10px] font-medium">
              ⌘K
            </kbd>
          </button>
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

            <SheetContent side="right" className="w-[85%] sm:w-[70%] p-0 bg-white dark:bg-slate-950 border-l border-[--color-border] z-[100] shadow-2xl">
              <div className="flex flex-col h-full bg-white dark:bg-slate-950">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation menu with links and social connections
                </SheetDescription>

                {/* Header Section */}
                <div className="border-b border-[--color-border] p-6 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Image src={navLogo} width={100} height={60} alt="Logo" sizes="100px" className="h-auto" />
                  </div>
                  <p className="text-xs text-[--color-text-light] mt-3 font-medium">
                    Frontend Developer &amp; IT Lead
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
                    <ul className="flex flex-col gap-2">
                      {navLinks.map((link) => (
                        <motion.li key={link.href} variants={staggerItem}>
                          <Link
                            href={link.href}
                            onClick={() => setNav(false)}
                            className={`text-sm font-bold transition-all duration-300 block py-4 px-5 rounded-xl relative group ${activeSection === link.section ? 'bg-indigo-50 dark:bg-indigo-500/20 text-[--color-primary] dark:text-indigo-300' : 'text-slate-800 dark:text-slate-100 hover:bg-gray-50 hover:text-slate-900 dark:hover:bg-gray-800/50 dark:hover:text-white'
                              }`}
                          >
                            <div className="flex items-center justify-between">
                              <span
                                className="uppercase tracking-wider"
                              >
                                {link.label}
                              </span>
                              {activeSection === link.section && (
                                <motion.span
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-2 h-2 rounded-full bg-[--color-primary]"
                                />
                              )}
                            </div>
                            {activeSection === link.section && (
                              <motion.span
                                layoutId="activeIndicator"
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 rounded-r-lg bg-[--color-primary]"
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
                <div className="mt-auto border-t border-[--color-border] p-6 bg-gray-50/50 dark:bg-gray-900/50">
                  <p className="uppercase tracking-wider text-xs font-bold mb-4 text-[--color-primary]">
                    Let&apos;s Connect
                  </p>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex gap-4"
                  >
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      const content = (
                        <motion.div
                          key={social.href}
                          variants={staggerItem}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="rounded-xl p-4 cursor-pointer bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center border border-[--color-border] hover:border-[--color-primary]/50 text-[--color-text] hover:text-[--color-primary]"
                          title={social.label}
                        >
                          <Icon size={22} />
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

