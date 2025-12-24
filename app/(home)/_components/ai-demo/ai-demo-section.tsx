"use client";

import { motion } from "framer-motion";
import { usePresentationQuery } from "next-sanity/hooks";
import { AIAssistantDemo } from "./ai-assistant-demo";
import { aiDemoPresentationQuery } from "@/lib/sanity/queries";
import type { AIDemoContent } from "@/lib/sanity/types";

interface AIDemoSectionProps {
  content: AIDemoContent | null;
}

function DotGridBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, oklch(0.7 0.01 0 / 0.4) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 100%, oklch(0.85 0.05 330 / 0.12), transparent),
            radial-gradient(ellipse 60% 40% at 50% 0%, oklch(0.85 0.05 60 / 0.08), transparent)
          `,
        }}
      />
    </div>
  );
}

export function AIDemoSection({ content }: AIDemoSectionProps) {
  if (!content) return null;

  return (
    <section className="relative py-20 md:py-28 px-4">
      <DotGridBackground />
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            {content.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-neutral-900">
            {content.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {content.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className=""
        >
          <AIAssistantDemo />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-sm text-neutral-500 mt-6"
        >
          {content.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}
