"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const placeholderLogos = [
  "Vera Clinic",
  "Engel & Volkers",
  "Luxury",
  "Mahley",
  "Layla",
  "Premium Auto",
  "Elite Aviation",
  "Spark Med Spa",
];

export function LogoMarquee() {
  const allLogos = [...placeholderLogos, ...placeholderLogos];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="w-full overflow-hidden bg-neutral-50 py-8"
    >
      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
        {allLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex-shrink-0 px-6 py-3 text-neutral-400 font-semibold text-lg tracking-wide grayscale hover:grayscale-0 hover:text-neutral-600 transition-all duration-300"
          >
            {logo}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
