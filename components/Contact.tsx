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
    <div id="contact" className="w-full lg:min-h-screen py-16 md:py-24 px-4">
      <div ref={ref} className="max-w-[1240px] m-auto w-full">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <p className="text-xl tracking-widest uppercase text-[--color-primary] font-semibold">
            Contact
          </p>
          <h2 className="py-4">Get In Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Contact Info */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInLeft}
            className="col-span-3 lg:col-span-2 w-full h-full"
          >
            <Card className="h-full bg-[--color-bg-card] border-[--color-border]">
              <CardContent className="p-4 lg:p-6 flex flex-col h-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <Image
                    src={ContactImg}
                    alt="Contact Geoffrey Muthoni"
                    className="rounded-xl w-full object-cover"
                  />
                </motion.div>

                <div className="flex-1">
                  <h2 className="py-2 text-2xl font-bold">Geoffrey Muthoni</h2>
                  <p className="text-[--color-text-light]">
                    Frontend Developer | WordPress, Next.js & React
                  </p>
                  <p className="py-4 text-[--color-text-light] leading-relaxed">
                    Open to freelance and full-time opportunities. Let&apos;s
                    discuss how I can contribute to your projects.
                  </p>
                </div>

                <div className="mt-6">
                  <p className="uppercase pt-4 font-semibold text-sm tracking-wider">
                    Connect With Me
                  </p>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-4 gap-4 py-4"
                  >
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      const content = (
                        <motion.div
                          variants={staggerItem}
                          whileHover={{ scale: 1.1, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          className="rounded-full shadow-lg shadow-black/20 p-4 cursor-pointer bg-[--color-bg] hover:bg-gradient-to-r hover:from-[--color-primary] hover:to-[--color-primary-light] transition-all duration-300 group min-h-[56px] min-w-[56px] flex items-center justify-center border border-[--color-border]"
                        >
                          <Icon className="text-[--color-text] group-hover:text-white transition-colors" />
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
            <Card className="bg-[--color-bg-card] border-[--color-border]">
              <CardContent className="p-4 lg:p-6">
                <form
                  action="https://getform.io/f/fab4ff9f-c8b1-4076-a534-f5f98a069666"
                  method="POST"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <motion.div
                      variants={fadeInUp}
                      className="flex flex-col"
                    >
                      <label className="uppercase text-sm py-2 font-medium">
                        Name
                      </label>
                      <input
                        {...register("name", { required: true })}
                        className="border-2 rounded-lg p-3 flex border-[--color-border] bg-[--color-bg] text-[--color-text] focus:border-[--color-primary] focus:outline-none transition-colors min-h-[44px]"
                        type="text"
                        name="name"
                      />
                    </motion.div>

                    <motion.div
                      variants={fadeInUp}
                      className="flex flex-col"
                    >
                      <label className="uppercase text-sm py-2 font-medium">
                        Phone Number
                      </label>
                      <input
                        {...register("phone", { required: true })}
                        className="border-2 rounded-lg p-3 flex border-[--color-border] bg-[--color-bg] text-[--color-text] focus:border-[--color-primary] focus:outline-none transition-colors min-h-[44px]"
                        type="text"
                        name="phone"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={fadeInUp} className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 font-medium">
                      Email
                    </label>
                    <input
                      {...register("email", { required: true })}
                      className="border-2 rounded-lg p-3 flex border-[--color-border] bg-[--color-bg] text-[--color-text] focus:border-[--color-primary] focus:outline-none transition-colors min-h-[44px]"
                      type="email"
                      name="email"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 font-medium">
                      Subject
                    </label>
                    <input
                      {...register("subject", { required: true })}
                      className="border-2 rounded-lg p-3 flex border-[--color-border] bg-[--color-bg] text-[--color-text] focus:border-[--color-primary] focus:outline-none transition-colors min-h-[44px]"
                      type="text"
                      name="subject"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 font-medium">
                      Message
                    </label>
                    <textarea
                      {...register("message", { required: true })}
                      className="border-2 rounded-lg p-3 border-[--color-border] bg-[--color-bg] text-[--color-text] focus:border-[--color-primary] focus:outline-none transition-colors resize-none"
                      rows={8}
                      name="message"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Button
                      type="submit"
                      className="w-full mt-4 min-h-[48px] text-base"
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
          className="flex justify-center py-12"
        >
          <Link href="/#home" aria-label="Back to top">
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full shadow-lg shadow-black/20 p-4 cursor-pointer bg-[--color-bg-card] hover:bg-gradient-to-r hover:from-[--color-primary] hover:to-[--color-primary-light] transition-all duration-300 group min-h-[60px] min-w-[60px] flex items-center justify-center border border-[--color-border]"
            >
              <HiOutlineChevronDoubleUp
                className="text-[--color-primary] group-hover:text-white transition-colors"
                size={30}
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

