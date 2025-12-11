"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ClientLogoCard } from "./client-logo-card";
import { clients } from "@/data/clients";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const bentoGridStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export function ClientLogoWall() {
  return (
    <Section id="clients" background="muted">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3"
          >
            Trusted By
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900"
          >
            Industry Leaders Choose Us
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            From healthcare to aviation, real estate to fintech — we help
            businesses across industries transform their customer conversations.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={bentoGridStagger}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          {clients.map((client, index) => (
            <ClientLogoCard key={client.id} client={client} index={index} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
