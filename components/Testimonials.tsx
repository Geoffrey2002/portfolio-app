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
import { FaQuoteLeft } from "react-icons/fa";
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
    <div id="testimonials" className="w-full py-16 md:py-24 px-4 bg-[--color-bg-card]/30">
      <div ref={ref} className="max-w-[1240px] mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <p className="text-xl tracking-widest uppercase text-[--color-primary] font-semibold">
            Testimonials
          </p>
          <h2 className="py-4">What Clients Say</h2>
          <p className="text-[--color-text-light] max-w-2xl mx-auto">
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
                    <Card className="border-[--color-border] bg-[--color-bg-card]">
                      <CardContent className="p-8 md:p-12">
                        <FaQuoteLeft className="text-4xl text-[--color-primary] mb-6 opacity-50" />
                        <p className="text-[--color-text-light] text-lg md:text-xl leading-relaxed mb-8 italic">
                          &quot;{testimonial.content}&quot;
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[--color-primary] to-[--color-primary-light] flex items-center justify-center text-white font-bold text-xl">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-[--color-text] text-lg">
                              {testimonial.name}
                            </h4>
                            <p className="text-[--color-text-light] text-sm">
                              {testimonial.role} at {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-16 bg-[--color-bg-card] border-[--color-border] hover:bg-[--color-primary] hover:text-white" />
            <CarouselNext className="hidden md:flex -right-16 bg-[--color-bg-card] border-[--color-border] hover:bg-[--color-primary] hover:text-white" />
          </Carousel>
        </motion.div>

        {/* Dots indicator for mobile */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-[--color-border]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

