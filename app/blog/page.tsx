"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern Web Applications with Next.js 14",
    excerpt: "Explore the latest features of Next.js 14 and how they can improve your web development workflow.",
    date: "2024-10-10",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
    slug: "building-modern-web-apps-nextjs-14",
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS: Tips and Tricks",
    excerpt: "Learn advanced Tailwind CSS techniques to build beautiful, responsive interfaces faster.",
    date: "2024-09-25",
    readTime: "7 min read",
    tags: ["CSS", "Tailwind", "Design"],
    slug: "mastering-tailwind-css-tips-tricks",
  },
  {
    id: "3",
    title: "WordPress Development in 2024: Best Practices",
    excerpt: "Discover modern WordPress development practices and how to build performant, scalable sites.",
    date: "2024-09-10",
    readTime: "6 min read",
    tags: ["WordPress", "PHP", "CMS"],
    slug: "wordpress-development-2024-best-practices",
  },
  {
    id: "4",
    title: "State Management in React: A Comprehensive Guide",
    excerpt: "Compare different state management solutions for React applications and when to use each one.",
    date: "2024-08-28",
    readTime: "10 min read",
    tags: ["React", "JavaScript", "State Management"],
    slug: "state-management-react-guide",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-xl tracking-widest uppercase text-[--color-primary] font-semibold">
            Blog
          </motion.p>
          <motion.h1 variants={fadeInUp} className="py-4 text-4xl md:text-5xl font-bold">
            Articles & Insights
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-[--color-text-light] max-w-2xl mx-auto">
            Sharing my knowledge and experiences in web development, from frontend frameworks to best practices.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={staggerItem}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full border-[--color-border] bg-[--color-bg-card] hover:shadow-2xl hover:shadow-[--color-primary]/20 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-[--color-primary]/20 text-[--color-primary] border border-[--color-primary]/30"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h2 className="text-2xl font-bold text-[--color-text] mb-3 group-hover:text-[--color-primary] transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-[--color-text-light] mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-[--color-text-light] mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[--color-primary] font-semibold group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Card className="bg-[--color-bg-card] border-[--color-border]">
            <CardContent className="p-8">
              <p className="text-[--color-text-light]">
                📝 More articles coming soon! Subscribe to my newsletter to get notified.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}




