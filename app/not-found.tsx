"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[--color-primary]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-[--color-primary]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-8"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative"
          >
            <h1 className="text-9xl md:text-[12rem] font-bold text-[--color-primary] opacity-20">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="text-6xl md:text-8xl text-[--color-primary] opacity-30" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-text]">
              Page Not Found
            </h2>
            <p className="text-lg text-[--color-text-light] max-w-md mx-auto leading-relaxed">
              Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or the URL might be incorrect.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link href="/">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 bg-[--color-primary] hover:bg-[--color-primary-light] text-white font-semibold px-8 py-6 rounded-full shadow-lg shadow-[--color-primary]/20 hover:shadow-xl hover:shadow-[--color-primary]/30 transition-all hover:scale-105"
              >
                <Home size={18} />
                Go Home
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
              className="w-full sm:w-auto gap-2 border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white font-semibold px-8 py-6 rounded-full transition-all hover:scale-105"
            >
              <ArrowLeft size={18} />
              Go Back
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="pt-8">
            <p className="text-sm text-[--color-text-light] mb-4">Or visit these pages:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/#about"
                className="px-4 py-2 rounded-lg bg-[--color-bg-card] border border-[--color-border] text-[--color-text] hover:border-[--color-primary] hover:text-[--color-primary] transition-all text-sm"
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="px-4 py-2 rounded-lg bg-[--color-bg-card] border border-[--color-border] text-[--color-text] hover:border-[--color-primary] hover:text-[--color-primary] transition-all text-sm"
              >
                Projects
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 rounded-lg bg-[--color-bg-card] border border-[--color-border] text-[--color-text] hover:border-[--color-primary] hover:text-[--color-primary] transition-all text-sm"
              >
                Contact
              </Link>
              <Link
                href="/resume"
                className="px-4 py-2 rounded-lg bg-[--color-bg-card] border border-[--color-border] text-[--color-text] hover:border-[--color-primary] hover:text-[--color-primary] transition-all text-sm"
              >
                Resume
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
