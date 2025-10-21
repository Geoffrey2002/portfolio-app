"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

export default function BlogPostPage() {
  // When implementing real blog posts, uncomment these lines:
  // const params = useParams();
  // const slug = params.slug as string;
  // Then fetch blog post data based on slug

  // In a real implementation, you would fetch the blog post data based on the slug
  const post = {
    title: "Building Modern Web Applications with Next.js 14",
    date: "2024-10-10",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
    content: `
      <p>This is a placeholder for the blog post content. In a real implementation, you would use MDX to write and render your blog posts.</p>
      
      <h2>Getting Started with Next.js 14</h2>
      <p>Next.js 14 introduces several exciting features that make building web applications even more efficient...</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Server Components by default</li>
        <li>Improved routing with App Router</li>
        <li>Server Actions for mutations</li>
        <li>Enhanced Image Optimization</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Next.js 14 continues to push the boundaries of what's possible in modern web development.</p>
    `,
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-[800px] mx-auto">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 gap-2 hover:bg-[--color-bg-hover]">
            <ArrowLeft size={18} />
            Back to Blog
          </Button>
        </Link>

        <motion.article
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="flex flex-wrap gap-2 mb-6">
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

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex items-center gap-4 text-[--color-text-light] mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>

          <Card className="bg-[--color-bg-card] border-[--color-border]">
            <CardContent className="p-8 md:p-12">
              <div
                className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-[--color-text] prose-p:text-[--color-text-light] prose-strong:text-[--color-text] prose-a:text-[--color-primary] hover:prose-a:text-[--color-primary-light]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-[--color-primary] to-[--color-primary-light] border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enjoyed this article?</h3>
                <p className="text-white/90 mb-6">
                  Let&apos;s discuss your next project or connect on social media!
                </p>
                <Link href="/#contact">
                  <Button variant="outline" className="bg-white text-[--color-primary] hover:bg-gray-100 font-bold">
                    Get In Touch
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

