"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/data/testimonials";
import { fadeInUp } from "@/lib/animations";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      transition={{ delay: index * 0.15 }}
      className="py-8"
    >
      <div
        className={`flex flex-col ${
          isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-8 lg:gap-12 items-center`}
      >
        <div className="w-full lg:w-3/5">
          <div className="aspect-video bg-neutral-900 rounded-2xl flex items-center justify-center relative group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
            <motion.div
              className="relative z-10 flex flex-col items-center gap-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-primary-500/80 group-hover:border-primary-400 transition-all duration-300">
                <svg
                  className="w-10 h-10 text-white ml-1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">
                Watch Testimonial
              </span>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-2/5 flex flex-col">
          <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
            {testimonial.title}
          </h3>
          <p className="text-neutral-600 leading-relaxed text-lg mb-6">
            &ldquo;{testimonial.description}&rdquo;
          </p>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-xl font-bold text-primary-600">
                {testimonial.customerName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div>
              <p className="font-semibold text-neutral-900 text-lg">
                {testimonial.customerName}
              </p>
              <p className="text-neutral-500">
                {testimonial.customerCompany}
                {testimonial.customerLocation &&
                  ` • ${testimonial.customerLocation}`}
              </p>
            </div>
          </div>

          {testimonial.whyChoseUs && (
            <p className="mt-6 text-primary-600 italic">
              &ldquo;{testimonial.whyChoseUs}&rdquo;
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
