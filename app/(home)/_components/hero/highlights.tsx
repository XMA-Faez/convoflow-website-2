"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
}

export function HighlightMarker({ children }: HighlightProps) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span
        className="absolute left-0 right-0 bottom-1 md:bottom-2 h-3 md:h-4 bg-primary-200/70 -z-0 -rotate-1 rounded-sm"
        aria-hidden="true"
      />
    </span>
  );
}

export function HighlightBox({ children }: HighlightProps) {
  return (
    <span className="bg-primary-100/80 px-2 -mx-1 py-1 rounded-md decoration-clone">
      {children}
    </span>
  );
}

export function HighlightGradient({ children }: HighlightProps) {
  return (
    <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export function HighlightSVG({ children }: HighlightProps) {
  return (
    <span className="relative inline-block">
      {children}
      <motion.svg
        className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 overflow-visible"
        viewBox="0 0 300 12"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M0,8 Q25,2 50,8 T100,8 T150,8 T200,8 T250,8 T300,8"
          fill="none"
          stroke="oklch(0.754 0.159 356.16)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />
      </motion.svg>
    </span>
  );
}
