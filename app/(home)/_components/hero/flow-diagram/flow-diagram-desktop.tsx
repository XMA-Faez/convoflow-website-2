"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight, scaleIn } from "@/lib/animations";
import { AnimatedBeam } from "./animated-beam";
import {
  GoogleIcon,
  TikTokIcon,
  MetaIcon,
  PhoneIcon,
  EmailIcon,
  WhatsAppIcon,
  LightningIcon,
} from "./icons";
import {
  useGlowAnimation,
  GLOW_STYLE_ACTIVE,
  GLOW_STYLE_INACTIVE,
} from "./use-glow-animation";

const BEAM_DURATION = 4;
const INPUT_DELAYS = [0, 0.5, 1];
const OUTPUT_DELAYS = [1.5, 2, 2.5];

export function FlowDiagramDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const input1Ref = useRef<HTMLDivElement>(null);
  const input2Ref = useRef<HTMLDivElement>(null);
  const input3Ref = useRef<HTMLDivElement>(null);
  const output1Ref = useRef<HTMLDivElement>(null);
  const output2Ref = useRef<HTMLDivElement>(null);
  const output3Ref = useRef<HTMLDivElement>(null);

  const isGlowing = useGlowAnimation(BEAM_DURATION, INPUT_DELAYS[2]);
  const glowStyle = isGlowing ? GLOW_STYLE_ACTIVE : GLOW_STYLE_INACTIVE;

  const inputNodes = [
    {
      name: "Google Ads",
      icon: GoogleIcon,
      reference: input1Ref,
    },
    {
      name: "TikTok Ads",
      icon: TikTokIcon,
      reference: input2Ref,
    },
    {
      name: "Meta Ads",
      icon: MetaIcon,
      reference: input3Ref,
    },
  ];

  const outputNodes = [
    {
      name: "Hot Leads",
      icon: LightningIcon,
      reference: output1Ref,
      bgColor: "bg-red-600",
    },
    {
      name: "Warm Leads",
      icon: LightningIcon,
      reference: output2Ref,
      bgColor: "bg-yellow-600",
    },
    {
      name: "Long-term",
      icon: LightningIcon,
      reference: output3Ref,
      bgColor: "bg-neutral-400",
    },
  ];

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full max-w-4xl mx-auto py-8"
    >
      <div className="relative z-10 flex flex-row items-center justify-between gap-8">
        {/* INPUT SOURCES */}
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
          {inputNodes.map((node, index) => (
            <motion.div
              key={node.name}
              ref={node.reference}
              variants={slideInLeft}
              className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-md border border-neutral-100"
            >
              <div className="size-8 rounded-lg flex items-center justify-center bg-neutral-50">
                <node.icon className="w-full h-full" />
              </div>
              <span className="text-xs font-medium text-neutral-600">
                {node.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CENTER - BookedByAI */}
        <motion.div
          ref={centerRef}
          variants={scaleIn}
          animate={glowStyle}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="relative flex flex-col items-center bg-white rounded-2xl px-6 py-5 border-2 border-neutral-200"
        >
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3 -right-3 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center"
          >
            <LightningIcon className="w-4 h-4 text-white" />
          </motion.div>
          <span className="text-lg font-bold text-neutral-800">BookedByAI</span>
          <span className="text-xs text-neutral-500 mt-1">
            Multi-touch AI Nurturing
          </span>
          <div className="flex gap-2 mt-3">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-neutral-50 rounded-lg flex items-center justify-center shadow-sm border border-neutral-100">
                <PhoneIcon className="w-4 h-4 text-neutral-600" />
              </div>
              <span className="text-[10px] text-neutral-600 mt-1">Phone</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-neutral-50 rounded-lg flex items-center justify-center shadow-sm border border-neutral-100">
                <EmailIcon className="w-4 h-4 text-neutral-600" />
              </div>
              <span className="text-[10px] text-neutral-600 mt-1">Email</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-neutral-50 rounded-lg flex items-center justify-center shadow-sm border border-neutral-100">
                <WhatsAppIcon className="w-4 h-4" />
              </div>
              <span className="text-[10px] text-neutral-600 mt-1">
                WhatsApp
              </span>
            </div>
          </div>
        </motion.div>

        {/* OUTPUT CATEGORIES */}
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
          {outputNodes.map((node, index) => (
            <motion.div
              key={node.name}
              ref={node.reference}
              variants={slideInRight}
              className="flex items-center justify-between gap-4 bg-white rounded-xl px-4 py-3 shadow-md border border-neutral-100 min-w-[160px]"
            >
              <div>
                <span className="text-sm font-semibold text-neutral-800 block">
                  {node.name}
                </span>
                <span className="text-xs text-neutral-500">Ready to Buy</span>
              </div>
              <div className="flex gap-1">
                <span className={`w-2 h-2 rounded-full ${node.bgColor}`} />
                <span
                  className={`w-2 h-2 rounded-full ${node.bgColor} opacity-60`}
                />
                <span
                  className={`w-2 h-2 rounded-full ${node.bgColor} opacity-30`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* BEAMS - Input to Center */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={input1Ref}
        toRef={centerRef}
        curvature={-70}
        duration={BEAM_DURATION}
        delay={INPUT_DELAYS[0]}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={input2Ref}
        toRef={centerRef}
        curvature={0}
        duration={BEAM_DURATION}
        delay={INPUT_DELAYS[1]}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={input3Ref}
        toRef={centerRef}
        curvature={70}
        duration={BEAM_DURATION}
        delay={INPUT_DELAYS[2]}
      />

      {/* BEAMS - Center to Output */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={output1Ref}
        curvature={0}
        duration={BEAM_DURATION}
        delay={OUTPUT_DELAYS[0]}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={output2Ref}
        curvature={0}
        duration={BEAM_DURATION}
        delay={OUTPUT_DELAYS[1]}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={output3Ref}
        curvature={0}
        duration={BEAM_DURATION}
        delay={OUTPUT_DELAYS[2]}
      />
    </motion.div>
  );
}
