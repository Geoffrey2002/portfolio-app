"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fadeInUp } from "@/lib/animations";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    company: "Tech Solutions Inc",
    content:
      "Geoffrey's expertise in React and Next.js helped us build a modern, performant web application. His attention to detail and commitment to quality is outstanding.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Digital Ventures",
    content:
      "Working with Geoffrey was a pleasure. He delivered our project on time and exceeded our expectations. His technical skills and communication are top-notch.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CTO",
    company: "Innovate Labs",
    content:
      "Geoffrey is a talented developer who brings creative solutions to complex problems. His work on our WordPress site was exceptional and the results speak for themselves.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Growth Co",
    content:
      "The website Geoffrey built for us has increased our conversion rates significantly. His understanding of both design and development made the process seamless.",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div id="testimonials" className="relative w-full py-16 md:py-24 px-4 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-[--color-bg-card]/30">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-[--color-primary]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[--color-primary]/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-[1240px] mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-10 md:mb-16"
        >
          {/* Section badge */}
          <motion.div 
            variants={fadeInUp} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 relative overflow-hidden border-2 border-[--color-border]"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 opacity-20 dark:opacity-30 animate-gradient-rotate" />
            <div className="absolute inset-[2px] bg-[--color-bg] rounded-full" />
            
            {/* Content */}
            <span className="relative z-10 w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 animate-pulse shadow-lg shadow-amber-500/50" />
            <span className="relative z-10 text-sm font-semibold bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent uppercase tracking-wider">
              Testimonials
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[--color-text]">What Clients Say</h2>
          <p className="text-[--color-text-light] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take my word for it - hear from some of the clients I&apos;ve worked with
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="relative overflow-hidden border-2 border-[--color-border] bg-[--color-bg-card] shadow-xl hover:shadow-2xl transition-all duration-300">
                      {/* Decorative gradient corner */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[--color-primary]/10 to-transparent rounded-full blur-2xl" />
                      
                      <CardContent className="p-6 md:p-8 lg:p-12 relative z-10">
                        {/* Quote icon with enhanced styling */}
                        <div className="mb-4 md:mb-6 inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/20">
                          <Quote className="text-lg md:text-2xl text-white" />
                        </div>
                        
                        {/* Testimonial text */}
                        <p className="text-[--color-text] text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 font-medium">
                          &quot;{testimonial.content}&quot;
                        </p>
                        
                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-transparent via-[--color-border] to-transparent mb-6" />
                        
                        {/* Author info */}
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className="relative group">
                            {/* Gradient ring */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition-opacity" />
                            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-amber-500 to-rose-500 flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-lg">
                              {testimonial.name.charAt(0)}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-[--color-text] text-base md:text-lg mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="text-[--color-text-light] text-xs md:text-sm font-medium">
                              {testimonial.role}
                            </p>
                            <p className="text-[--color-primary] text-xs font-semibold mt-0.5 md:mt-1">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-16 bg-[--color-bg-card] border-2 border-[--color-border] hover:bg-gradient-to-br hover:from-[--color-primary] hover:to-[--color-primary-light] hover:text-white hover:border-transparent transition-all duration-300 shadow-lg" />
            <CarouselNext className="hidden md:flex -right-16 bg-[--color-bg-card] border-2 border-[--color-border] hover:bg-gradient-to-br hover:from-[--color-primary] hover:to-[--color-primary-light] hover:text-white hover:border-transparent transition-all duration-300 shadow-lg" />
          </Carousel>
        </motion.div>

        {/* Enhanced dots indicator */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              className="relative group cursor-pointer"
            >
              <div className="w-3 h-3 rounded-full bg-[--color-border] group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-500 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12"
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-1 md:mb-2">
              100%
            </div>
            <div className="text-xs md:text-sm text-[--color-text-light] font-medium">
              Client Satisfaction
            </div>
          </div>
          <div className="h-10 md:h-12 w-px bg-[--color-border]" />
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent mb-1 md:mb-2">
              50+
            </div>
            <div className="text-xs md:text-sm text-[--color-text-light] font-medium">
              Projects Delivered
            </div>
          </div>
          <div className="h-10 md:h-12 w-px bg-[--color-border] hidden sm:block" />
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-1 md:mb-2">
              4+
            </div>
            <div className="text-xs md:text-sm text-[--color-text-light] font-medium">
              Years Experience
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;

