"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { MarqueeLogoCard } from "./client-logo-card";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-velocity";
import type { ClientsContent } from "@/lib/sanity/types";

const defaultSection = {
  sectionLabel: "Trusted By",
  title: "Industry Leaders",
  description:
    "From healthcare to aviation, real estate to fintech — we help businesses across industries transform their customer conversations.",
};

interface ClientLogoWallProps {
  content: ClientsContent;
}

export function ClientLogoWall({ content }: ClientLogoWallProps) {
  const section = content.section ?? defaultSection;
  const items = content.items ?? [];
  const firstRowClients = items.slice(0, Math.ceil(items.length / 2));
  const secondRowClients = items.slice(Math.ceil(items.length / 2));

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
            {section.sectionLabel}
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900"
          >
            {section.title}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            {section.description}
          </motion.p>
        </motion.div>
      </Container>

      <ScrollVelocityContainer className="flex flex-col gap-4">
        <ScrollVelocityRow baseVelocity={3} direction={1}>
          {firstRowClients.map((client) => (
            <MarqueeLogoCard key={client.id} client={client} />
          ))}
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={3} direction={-1}>
          {secondRowClients.map((client) => (
            <MarqueeLogoCard key={client.id} client={client} />
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </Section>
  );
}
