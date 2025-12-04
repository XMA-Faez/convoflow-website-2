"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Button, Link } from "@/components/primitives";
import { FlowDiagram } from "./flow-diagram";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { whatsappUrl } from "@/data/navigation";

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
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary-50/50 to-background">
      <Container>
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
            You&apos;re Chasing Leads Instead of Closing Them.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            The BookedByAI Growth Engine builds and runs your entire acquisition
            system, engineered to double the number of qualified conversations
            you get from the leads you already generate — without increasing ad
            spend.
          </motion.p>

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
        </motion.div>
      </Container>
    </section>
  );
}
