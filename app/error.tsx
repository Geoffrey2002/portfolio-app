"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw, AlertCircle } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console for debugging
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-8"
        >
          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-2xl" />
              <AlertCircle className="relative text-6xl md:text-8xl text-red-500" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-text]">
              Something Went Wrong
            </h2>
            <p className="text-lg text-[--color-text-light] max-w-md mx-auto leading-relaxed">
              An unexpected error occurred. Don&apos;t worry, this has been logged and I&apos;ll look into it.
            </p>
            {process.env.NODE_ENV === "development" && error.message && (
              <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-left">
                <p className="text-sm font-mono text-red-500 break-all">
                  {error.message}
                </p>
              </div>
            )}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button
              size="lg"
              onClick={reset}
              className="w-full sm:w-auto gap-2 bg-[--color-primary] hover:bg-[--color-primary-light] text-white font-semibold px-8 py-6 rounded-full shadow-lg shadow-[--color-primary]/20 hover:shadow-xl hover:shadow-[--color-primary]/30 transition-all hover:scale-105"
            >
              <RefreshCw size={18} />
              Try Again
            </Button>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2 border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white font-semibold px-8 py-6 rounded-full transition-all hover:scale-105"
              >
                <Home size={18} />
                Go Home
              </Button>
            </Link>
          </motion.div>

          {/* Help Text */}
          <motion.div variants={fadeInUp} className="pt-8">
            <p className="text-sm text-[--color-text-light]">
              If this problem persists, please{" "}
              <Link
                href="/#contact"
                className="text-[--color-primary] hover:underline font-semibold"
              >
                contact me
              </Link>{" "}
              and I&apos;ll fix it as soon as possible.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
