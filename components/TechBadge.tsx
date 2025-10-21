"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface TechBadgeProps {
  tech: string;
  variant?: "default" | "secondary" | "outline";
}

export function TechBadge({ tech, variant = "default" }: TechBadgeProps) {
  const getTechColor = (technology: string) => {
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
    };

    return techColors[technology] || "bg-[--color-primary]/20 text-[--color-primary] border-[--color-primary]/30";
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Badge 
        variant={variant} 
        className={`${getTechColor(tech)} border text-xs font-medium px-3 py-1`}
      >
        {tech}
      </Badge>
    </motion.div>
  );
}




