"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card, Link } from "@/components/primitives";
import { ContactForm } from "./contact-form";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { whatsappUrl } from "@/data/navigation";

export function ContactSection() {
  return (
    <Section id="contact" background="primary" className="relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
              linear-gradient(to right, #f0f0f0 1px, transparent 1px),
              linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
              radial-gradient(circle 600px at 0% 200px, oklch(0.816 0.112 356.06 / 0.2), transparent),
              radial-gradient(circle 600px at 100% 200px, oklch(0.816 0.112 356.06 / 0.2), transparent)
`,
          backgroundSize: `
              96px 64px,    
              96px 64px,    
              100% 100%,    
              100% 100%  
`,
        }}
      />

      <Container size="narrow" className="z-10 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900"
          >
            Stop Losing Leads. Start Today.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-neutral-600 max-w-xl mx-auto"
          >
            Book your free 30-minute audit call and discover how much revenue
            you&apos;re leaving on the table.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card variant="elevated" padding="lg" className="max-w-2xl mx-auto">
            <ContactForm />
          </Card>
        </motion.div>

        {whatsappUrl !== "#" && (
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-8 text-neutral-600"
          >
            Prefer WhatsApp?{" "}
            <Link href={whatsappUrl} variant="underline">
              We can start there
            </Link>
            .
          </motion.p>
        )}
      </Container>
    </Section>
  );
}
