"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface TechBadgeProps {
  tech: string;
  variant?: "default" | "secondary" | "outline" | "light";
}

export function TechBadge({ tech, variant = "default" }: TechBadgeProps) {
  const getTechColor = (technology: string, isLight: boolean = false) => {
    // Light variant - for use on dark overlays (better contrast in both light and dark modes)
    if (isLight) {
      const lightColors: { [key: string]: string } = {
        "React": "bg-white/90 text-[#61dafb] border-white shadow-md",
        "Next.js": "bg-white/90 text-gray-900 border-white shadow-md",
        "TypeScript": "bg-white/90 text-[#3178c6] border-white shadow-md",
        "JavaScript": "bg-white/90 text-[#f0db4f] border-white shadow-md",
        "Tailwind": "bg-white/90 text-[#38bdf8] border-white shadow-md",
        "Supabase": "bg-white/90 text-[#3ecf8e] border-white shadow-md",
        "Firebase": "bg-white/90 text-[#ffa000] border-white shadow-md",
        "WordPress": "bg-white/90 text-[#21759b] border-white shadow-md",
        "Node.js": "bg-white/90 text-[#339933] border-white shadow-md",
        "MongoDB": "bg-white/90 text-[#47a248] border-white shadow-md",
        "API": "bg-white/90 text-purple-600 border-white shadow-md",
        "CSS": "bg-white/90 text-[#264de4] border-white shadow-md",
        "Custom Theme": "bg-white/90 text-indigo-600 border-white shadow-md",
        "SEO": "bg-white/90 text-green-600 border-white shadow-md",
        "Responsive Design": "bg-white/90 text-blue-600 border-white shadow-md",
        "Contact Forms": "bg-white/90 text-teal-600 border-white shadow-md",
        "Custom Development": "bg-white/90 text-purple-600 border-white shadow-md",
        "Business Tools": "bg-white/90 text-orange-600 border-white shadow-md",
      };
      return lightColors[technology] || "bg-white/90 text-gray-900 border-white shadow-md";
    }

    // Default variant - for normal use
    const techColors: { [key: string]: string } = {
      "React": "bg-[#61dafb]/20 text-[#61dafb] border-[#61dafb]/30",
      "Next.js": "bg-slate-200/20 text-slate-100 border-slate-200/30",
      "TypeScript": "bg-[#3178c6]/20 text-[#3178c6] border-[#3178c6]/30",
      "JavaScript": "bg-[#f7df1e]/20 text-[#f7df1e] border-[#f7df1e]/30",
      "Tailwind": "bg-[#38bdf8]/20 text-[#38bdf8] border-[#38bdf8]/30",
      "Supabase": "bg-[#3ecf8e]/20 text-[#3ecf8e] border-[#3ecf8e]/30",
      "Firebase": "bg-[#ffca28]/20 text-[#ffca28] border-[#ffca28]/30",
      "WordPress": "bg-[#21759b]/20 text-[#21759b] border-[#21759b]/30",
      "Node.js": "bg-[#339933]/20 text-[#339933] border-[#339933]/30",
      "MongoDB": "bg-[#47a248]/20 text-[#47a248] border-[#47a248]/30",
      "API": "bg-purple-500/20 text-purple-400 border-purple-400/30",
      "CSS": "bg-[#264de4]/20 text-[#264de4] border-[#264de4]/30",
    };

    return techColors[technology] || "bg-[--color-primary]/20 text-[--color-primary] border-[--color-primary]/30";
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Badge 
        variant={variant === "light" ? "outline" : variant} 
        className={`${getTechColor(tech, variant === "light")} border text-xs font-semibold px-3 py-1`}
      >
        {tech}
      </Badge>
    </motion.div>
  );
}




