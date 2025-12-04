"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { TestimonialCard } from "./testimonial-card";
import { testimonials } from "@/data/testimonials";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function TestimonialsSection() {
  return (
    <Section id="testimonials" background="muted">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3"
          >
            Testimonials
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Real results from businesses that transformed their lead conversion
            with BookedByAI.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
