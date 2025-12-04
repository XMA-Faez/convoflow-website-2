"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { AnimatedBeam } from "./animated-beam";
import { slideInLeft, slideInRight, scaleIn, fadeInUp } from "@/lib/animations";

function GoogleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"
        fill="#000000"
      />
    </svg>
  );
}

function MetaIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.93 1.29 5.56 3.33 7.36v3.62l3.47-1.9c.98.27 2.02.42 3.11.42 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z"
        fill="#0084FF"
      />
      <path
        d="M13.17 14.87l-2.54-2.71-4.95 2.71 5.44-5.78 2.6 2.71 4.89-2.71-5.44 5.78z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

const inputSources = [
  { name: "Google Ads", icon: GoogleIcon },
  { name: "TikTok Ads", icon: TikTokIcon },
  { name: "Meta Ads", icon: MetaIcon },
];

const outputCategories = [
  { name: "Hot Leads", subtitle: "Ready to Buy", dotColor: "bg-red-600" },
  { name: "Warm Leads", subtitle: "Nurturing", dotColor: "bg-yellow-600" },
  { name: "Long-term", subtitle: "Future Pipeline", dotColor: "bg-neutral-400" },
];

function FlowDiagramDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const inputRef1 = useRef<HTMLDivElement>(null);
  const inputRef2 = useRef<HTMLDivElement>(null);
  const inputRef3 = useRef<HTMLDivElement>(null);
  const outputRef1 = useRef<HTMLDivElement>(null);
  const outputRef2 = useRef<HTMLDivElement>(null);
  const outputRef3 = useRef<HTMLDivElement>(null);

  const inputRefs = [inputRef1, inputRef2, inputRef3];
  const outputRefs = [outputRef1, outputRef2, outputRef3];

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full max-w-4xl mx-auto py-8"
    >
      <div className="relative z-10 flex flex-row items-center justify-between gap-8">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
          className="flex flex-col gap-3"
        >
          {inputSources.map((source, index) => {
            const Icon = source.icon;
            return (
              <motion.div
                key={source.name}
                ref={inputRefs[index]}
                variants={slideInLeft}
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-md border border-neutral-100"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-neutral-50">
                  <Icon />
                </div>
                <span className="text-sm font-medium text-neutral-700">
                  {source.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          ref={centerRef}
          variants={scaleIn}
          className="relative flex flex-col items-center bg-primary-100 rounded-2xl px-6 py-5 border-2 border-primary-300"
        >
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3 -right-3 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center"
          >
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </motion.div>
          <span className="text-lg font-bold text-primary-800">BookedByAI</span>
          <span className="text-xs text-primary-600 mt-1">
            Multi-touch AI Nurturing
          </span>
          <div className="flex gap-2 mt-3">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-4 h-4 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <span className="text-[10px] text-primary-700 mt-1">Phone</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-4 h-4 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <span className="text-[10px] text-primary-700 mt-1">Email</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-4 h-4 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </div>
              <span className="text-[10px] text-primary-700 mt-1">WhatsApp</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.6 },
            },
          }}
          className="flex flex-col gap-3"
        >
          {outputCategories.map((category, index) => (
            <motion.div
              key={category.name}
              ref={outputRefs[index]}
              variants={slideInRight}
              className="flex items-center justify-between gap-4 bg-white rounded-xl px-4 py-3 shadow-md border border-neutral-100 min-w-[160px]"
            >
              <div>
                <span className="text-sm font-semibold text-neutral-800 block">
                  {category.name}
                </span>
                <span className="text-xs text-neutral-500">
                  {category.subtitle}
                </span>
              </div>
              <div className="flex gap-1">
                <span className={`w-2 h-2 rounded-full ${category.dotColor}`} />
                <span className={`w-2 h-2 rounded-full ${category.dotColor} opacity-60`} />
                <span className={`w-2 h-2 rounded-full ${category.dotColor} opacity-30`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div>
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={inputRef1}
          toRef={centerRef}
          curvature={-70}
          pathColor="oklch(0.75 0.25 350)"
          pathWidth={2}
          gradientStartColor="oklch(0.7 0.3 350)"
          gradientStopColor="oklch(0.55 0.35 320)"
          duration={4}
          delay={0}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={inputRef2}
          toRef={centerRef}
          pathColor="oklch(0.75 0.25 350)"
          pathWidth={2}
          gradientStartColor="oklch(0.7 0.3 350)"
          gradientStopColor="oklch(0.55 0.35 320)"
          duration={4}
          delay={0.5}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={inputRef3}
          toRef={centerRef}
          pathColor="oklch(0.75 0.25 350)"
          pathWidth={2}
          curvature={70}
          gradientStartColor="oklch(0.7 0.3 350)"
          gradientStopColor="oklch(0.55 0.35 320)"
          duration={4}
          delay={1}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={outputRef1}
          curvature={-70}
          pathColor="oklch(0.75 0.25 350)"
          pathWidth={2}
          gradientStartColor="oklch(0.7 0.3 350)"
          gradientStopColor="oklch(0.55 0.35 320)"
          duration={4}
          delay={1.5}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={outputRef2}
          curvature={0}
          pathColor="oklch(0.75 0.25 350)"
          pathWidth={2}
          gradientStartColor="oklch(0.7 0.3 350)"
          gradientStopColor="oklch(0.55 0.35 320)"
          duration={4}
          delay={2}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={outputRef3}
          curvature={70}
          pathColor="oklch(0.75 0.25 350)"
          pathWidth={2}
          gradientStartColor="oklch(0.7 0.3 350)"
          gradientStopColor="oklch(0.55 0.35 320)"
          duration={4}
          delay={2.5}
        />
      </div>
    </motion.div>
  );
}

function FlowDiagramMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const inputRef1 = useRef<HTMLDivElement>(null);
  const inputRef2 = useRef<HTMLDivElement>(null);
  const inputRef3 = useRef<HTMLDivElement>(null);
  const outputRef1 = useRef<HTMLDivElement>(null);
  const outputRef2 = useRef<HTMLDivElement>(null);
  const outputRef3 = useRef<HTMLDivElement>(null);

  const inputRefs = [inputRef1, inputRef2, inputRef3];
  const outputRefs = [outputRef1, outputRef2, outputRef3];

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full max-w-sm mx-auto py-6"
    >
      <div className="relative z-10 flex flex-col items-center gap-8">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
          className="flex flex-row justify-center gap-3"
        >
          {inputSources.map((source, index) => {
            const Icon = source.icon;
            return (
              <motion.div
                key={source.name}
                ref={inputRefs[index]}
                variants={fadeInUp}
                className="flex flex-col items-center gap-1.5 bg-white rounded-xl px-3 py-2.5 shadow-md border border-neutral-100"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-neutral-50">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-medium text-neutral-600 text-center leading-tight">
                  {source.name.split(" ")[0]}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          ref={centerRef}
          variants={scaleIn}
          className="relative flex flex-col items-center bg-primary-100 rounded-2xl px-5 py-4 border-2 border-primary-300"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-2.5 -right-2.5 w-7 h-7 bg-primary-500 rounded-full flex items-center justify-center"
          >
            <svg
              className="w-3.5 h-3.5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </motion.div>
          <span className="text-sm font-bold text-primary-800">BookedByAI</span>
          <span className="text-[9px] text-primary-600 mt-0.5">
            Multi-touch AI Nurturing
          </span>
          <div className="flex gap-2 mt-2.5">
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-3.5 h-3.5 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-3.5 h-3.5 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-3.5 h-3.5 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.4 },
            },
          }}
          className="flex flex-row justify-center gap-3"
        >
          {outputCategories.map((category, index) => (
            <motion.div
              key={category.name}
              ref={outputRefs[index]}
              variants={fadeInUp}
              className="flex flex-col items-center gap-1.5 bg-white rounded-xl px-3 py-2.5 shadow-md border border-neutral-100"
            >
              <span className="text-[9px] font-semibold text-neutral-800 text-center leading-tight">
                {category.name}
              </span>
              <div className="flex gap-0.5">
                <span className={`w-1.5 h-1.5 rounded-full ${category.dotColor}`} />
                <span className={`w-1.5 h-1.5 rounded-full ${category.dotColor} opacity-60`} />
                <span className={`w-1.5 h-1.5 rounded-full ${category.dotColor} opacity-30`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div>
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={inputRef1}
          toRef={centerRef}
          curvature={30}
          pathColor="oklch(0.75 0.25 350)"
          pathWidth={2}
          gradientStartColor="oklch(0.7 0.3 350)"
          gradientStopColor="oklch(0.55 0.35 320)"
          duration={3}
          delay={0}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={inputRef2}
          toRef={centerRef}
          curvature={0}
          pathColor="oklch(0.75 0.25 350)"
          pathWidth={2}
          gradientStartColor="oklch(0.7 0.3 350)"
          gradientStopColor="oklch(0.55 0.35 320)"
          duration={3}
          delay={0.3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={inputRef3}
          toRef={centerRef}
          curvature={-30}
          pathColor="oklch(0.75 0.25 350)"
          pathWidth={2}
          gradientStartColor="oklch(0.7 0.3 350)"
          gradientStopColor="oklch(0.55 0.35 320)"
          duration={3}
          delay={0.6}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={outputRef1}
          curvature={-30}
          pathColor="oklch(0.75 0.25 350)"
          pathWidth={2}
          gradientStartColor="oklch(0.7 0.3 350)"
          gradientStopColor="oklch(0.55 0.35 320)"
          duration={3}
          delay={1}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={outputRef2}
          curvature={0}
          pathColor="oklch(0.75 0.25 350)"
          pathWidth={2}
          gradientStartColor="oklch(0.7 0.3 350)"
          gradientStopColor="oklch(0.55 0.35 320)"
          duration={3}
          delay={1.3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={outputRef3}
          curvature={30}
          pathColor="oklch(0.75 0.25 350)"
          pathWidth={2}
          gradientStartColor="oklch(0.7 0.3 350)"
          gradientStopColor="oklch(0.55 0.35 320)"
          duration={3}
          delay={1.6}
        />
      </div>
    </motion.div>
  );
}

export function FlowDiagram() {
  return (
    <>
      <div className="hidden lg:block">
        <FlowDiagramDesktop />
      </div>
      <div className="block lg:hidden">
        <FlowDiagramMobile />
      </div>
    </>
  );
}
