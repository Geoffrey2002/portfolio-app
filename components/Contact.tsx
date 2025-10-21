"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "@/public/assets/contact.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from "@/lib/animations";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Form will submit to getform.io via native form action
    console.log("Form data:", data);
    reset();
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/geoffrey-muthoni/",
      icon: FaLinkedinIn,
      label: "LinkedIn",
      external: true,
    },
    {
      href: "https://github.com/Geoffrey2002",
      icon: FaGithub,
      label: "GitHub",
      external: true,
    },
    {
      href: "/#contact",
      icon: AiOutlineMail,
      label: "Email",
      external: false,
    },
    {
      href: "/resume",
      icon: BsFillPersonLinesFill,
      label: "Resume",
      external: false,
    },
  ];

  return (
    <div id="contact" className="relative w-full lg:min-h-screen py-16 md:py-24 px-4 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[--color-primary]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-[--color-primary]/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-[1240px] m-auto w-full">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          {/* Section badge */}
          <motion.div 
            variants={fadeInUp} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 relative overflow-hidden border-2 border-[--color-border]"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-20 dark:opacity-30 animate-gradient-rotate" />
            <div className="absolute inset-[2px] bg-[--color-bg] rounded-full" />
            
            {/* Content */}
            <span className="relative z-10 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse shadow-lg shadow-blue-500/50" />
            <span className="relative z-10 text-sm font-semibold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent uppercase tracking-wider">
              Contact
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[--color-text]">Get In Touch</h2>
          <p className="text-[--color-text-light] text-lg max-w-2xl mx-auto">
            Have a question or want to work together? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Contact Info */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInLeft}
            className="col-span-3 lg:col-span-2 w-full h-full"
          >
            <Card className="relative overflow-hidden h-full bg-[--color-bg-card] border-2 border-[--color-border] shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[--color-primary]/10 to-transparent rounded-full blur-3xl" />
              
              <CardContent className="p-6 lg:p-8 flex flex-col h-full relative z-10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 relative group"
                >
                  {/* Decorative border effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[--color-primary] to-[--color-primary-light] rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity" />
                  
                  <Image
                    src={ContactImg}
                    alt="Contact Geoffrey Muthoni"
                    className="relative rounded-2xl w-full object-cover shadow-xl border-2 border-[--color-border]"
                  />
                </motion.div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[--color-text] mb-2">
                      Geoffrey Muthoni
                    </h2>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-6 bg-gradient-to-b from-[--color-primary] to-[--color-primary-light] rounded-full"></div>
                      <p className="text-[--color-text-light] font-medium">
                        Frontend Developer | WordPress, Next.js & React
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-[--color-bg] border border-[--color-border]">
                    <p className="text-[--color-text-light] leading-relaxed">
                      Open to freelance and full-time opportunities. Let&apos;s
                      discuss how I can contribute to your projects.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t-2 border-[--color-border]">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[--color-primary]"></div>
                    <p className="uppercase font-bold text-sm tracking-wider text-[--color-text]">
                      Connect With Me
                    </p>
                  </div>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-4 gap-3"
                  >
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      const content = (
                        <motion.div
                          variants={staggerItem}
                          whileHover={{ scale: 1.1, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          className="rounded-xl shadow-lg shadow-[--color-primary]/10 p-4 cursor-pointer bg-[--color-bg] group-hover:bg-gradient-to-br group-hover:from-[--color-primary] group-hover:to-[--color-primary-light] transition-all duration-300 group min-h-[56px] min-w-[56px] flex items-center justify-center border-2 border-[--color-border] group-hover:border-[--color-primary]/50"
                        >
                          <Icon className="text-[--color-text] group-hover:text-white transition-colors" size={20} />
                        </motion.div>
                      );

                      return social.external ? (
                        <a
                          key={social.href}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                        >
                          {content}
                        </a>
                      ) : (
                        <Link
                          key={social.href}
                          href={social.href}
                          aria-label={social.label}
                        >
                          {content}
                        </Link>
                      );
                    })}
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInRight}
            className="col-span-3 w-full h-auto"
          >
            <Card className="relative overflow-hidden bg-[--color-bg-card] border-2 border-[--color-border] shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Decorative gradient overlay */}
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[--color-primary]/10 to-transparent rounded-full blur-3xl" />
              
              <CardContent className="p-6 lg:p-8 relative z-10">
                <form
                  action="https://getform.io/f/fab4ff9f-c8b1-4076-a534-f5f98a069666"
                  method="POST"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      variants={fadeInUp}
                      className="flex flex-col space-y-2"
                    >
                      <label className="uppercase text-xs font-bold tracking-wider text-[--color-text] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[--color-primary]"></span>
                        Name
                      </label>
                      <input
                        {...register("name", { required: true })}
                        className="border-2 rounded-xl p-4 border-[--color-border] bg-[--color-bg] text-[--color-text] placeholder:text-[--color-text-light]/50 focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/20 focus:outline-none transition-all min-h-[52px] shadow-sm hover:shadow-md"
                        type="text"
                        name="name"
                        placeholder="Your full name"
                      />
                    </motion.div>

                    <motion.div
                      variants={fadeInUp}
                      className="flex flex-col space-y-2"
                    >
                      <label className="uppercase text-xs font-bold tracking-wider text-[--color-text] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[--color-primary]"></span>
                        Phone Number
                      </label>
                      <input
                        {...register("phone", { required: true })}
                        className="border-2 rounded-xl p-4 border-[--color-border] bg-[--color-bg] text-[--color-text] placeholder:text-[--color-text-light]/50 focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/20 focus:outline-none transition-all min-h-[52px] shadow-sm hover:shadow-md"
                        type="text"
                        name="phone"
                        placeholder="+254 XXX XXX XXX"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={fadeInUp} className="flex flex-col space-y-2">
                    <label className="uppercase text-xs font-bold tracking-wider text-[--color-text] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[--color-primary]"></span>
                      Email
                    </label>
                    <input
                      {...register("email", { required: true })}
                      className="border-2 rounded-xl p-4 border-[--color-border] bg-[--color-bg] text-[--color-text] placeholder:text-[--color-text-light]/50 focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/20 focus:outline-none transition-all min-h-[52px] shadow-sm hover:shadow-md"
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex flex-col space-y-2">
                    <label className="uppercase text-xs font-bold tracking-wider text-[--color-text] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[--color-primary]"></span>
                      Subject
                    </label>
                    <input
                      {...register("subject", { required: true })}
                      className="border-2 rounded-xl p-4 border-[--color-border] bg-[--color-bg] text-[--color-text] placeholder:text-[--color-text-light]/50 focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/20 focus:outline-none transition-all min-h-[52px] shadow-sm hover:shadow-md"
                      type="text"
                      name="subject"
                      placeholder="How can I help you?"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex flex-col space-y-2">
                    <label className="uppercase text-xs font-bold tracking-wider text-[--color-text] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[--color-primary]"></span>
                      Message
                    </label>
                    <textarea
                      {...register("message", { required: true })}
                      className="border-2 rounded-xl p-4 border-[--color-border] bg-[--color-bg] text-[--color-text] placeholder:text-[--color-text-light]/50 focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/20 focus:outline-none transition-all resize-none shadow-sm hover:shadow-md"
                      rows={8}
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Button
                      type="submit"
                      className="w-full mt-4 min-h-[56px] text-base font-bold bg-[--color-primary] hover:bg-[--color-primary-light] text-white rounded-xl shadow-lg shadow-[--color-primary]/20 hover:shadow-xl hover:shadow-[--color-primary]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center py-16 gap-4"
        >
          <div className="text-center mb-4">
            <p className="text-[--color-text-light] text-sm">
              Thank you for visiting!
            </p>
          </div>
          <Link href="/#home" aria-label="Back to top">
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[--color-primary] via-[--color-primary-light] to-[--color-primary] rounded-full opacity-70 blur-sm group-hover:opacity-100 transition-opacity animate-gradient-rotate" />
              
              <div className="relative rounded-full shadow-xl p-5 cursor-pointer bg-[--color-bg-card] group-hover:bg-gradient-to-br group-hover:from-[--color-primary] group-hover:to-[--color-primary-light] transition-all duration-300 min-h-[68px] min-w-[68px] flex flex-col items-center justify-center border-2 border-[--color-border] group-hover:border-transparent">
                <HiOutlineChevronDoubleUp
                  className="text-[--color-primary] group-hover:text-white transition-colors mb-1"
                  size={28}
                />
                <span className="text-xs font-bold text-[--color-text] group-hover:text-white transition-colors uppercase tracking-wider">
                  Top
                </span>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

