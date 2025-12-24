"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Button, Link } from "@/components/primitives";
import { FlowDiagram } from "./flow-diagram";
import {
  HighlightMarker,
  HighlightBox,
  HighlightGradient,
  HighlightSVG,
} from "./highlights";
import { fadeInUp, staggerContainer } from "@/lib/animations";

import { whatsappUrl } from "@/data/navigation";

const Highlight = HighlightSVG;

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-transparent">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
              linear-gradient(to right, #f0f0f0 1px, transparent 1px),
              linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
              radial-gradient(circle 600px at 0% 200px, oklch(0.816 0.112 356.06 / 0.3), transparent),
              radial-gradient(circle 600px at 100% 200px, oklch(0.816 0.112 356.06 / 0.3), transparent)
`,
          backgroundSize: `
              96px 64px,    
              96px 64px,    
              100% 100%,    
              100% 100%  
`,
        }}
      />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight"
          >
            Turn Leads Into Booked Calls{" "}
            <Highlight>Without Lifting a Finger</Highlight>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            We build and run your entire acquisition system to double qualified
            conversations from leads you already generate without increasing
            ad spend.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <Button size="lg" onClick={scrollToContact}>
              Book a 30 Min Audit Call
            </Button>
            {whatsappUrl !== "#" && (
              <p className="text-sm text-neutral-500">
                Prefer WhatsApp?{" "}
                <Link href={whatsappUrl} variant="underline" size="sm">
                  We can start there
                </Link>
                .
              </p>
            )}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12">
            <FlowDiagram />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 text-base text-neutral-500 italic"
          >
            Perfect for real estate, automotive, private aviation, plastic
            surgery clinics, spas, and any business that runs on leads.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
