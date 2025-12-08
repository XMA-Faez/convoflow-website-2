"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { scaleIn, fadeInUp } from "@/lib/animations";
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
import { GLOW_STYLE_ACTIVE_MOBILE, GLOW_STYLE_INACTIVE } from "./glow-styles";

const BEAM_DURATION = 4;
const INPUT_DELAYS = [0, 0.5, 1];
const OUTPUT_DELAYS = [1.5, 2, 2.5];
const GLOW_DURATION = 800;

export function FlowDiagramMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const input1Ref = useRef<HTMLDivElement>(null);
  const input2Ref = useRef<HTMLDivElement>(null);
  const input3Ref = useRef<HTMLDivElement>(null);
  const output1Ref = useRef<HTMLDivElement>(null);
  const output2Ref = useRef<HTMLDivElement>(null);
  const output3Ref = useRef<HTMLDivElement>(null);

  const [isGlowing, setIsGlowing] = useState(false);
  const glowStyle = isGlowing ? GLOW_STYLE_ACTIVE_MOBILE : GLOW_STYLE_INACTIVE;

  const handleMetaBeamReachEnd = useCallback(() => {
    setIsGlowing(true);
    setTimeout(() => setIsGlowing(false), GLOW_DURATION);
  }, []);

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
      className="relative w-full max-w-sm mx-auto py-6"
    >
      <div className="relative z-10 flex flex-col items-center gap-20">
        {/* INPUT SOURCES */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
            },
          }}
          className="flex flex-row justify-evenly gap-3 w-full"
        >
          {inputNodes.map((node, index) => (
            <motion.div
              key={node.name}
              ref={node.reference}
              variants={fadeInUp}
              className="flex flex-col items-center gap-1.5 bg-white rounded-xl px-4 py-2.5 shadow-md border border-neutral-100"
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
          className="relative flex flex-col items-center bg-white rounded-2xl px-5 py-4 border-2 border-neutral-200"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-2.5 -right-2.5 w-7 h-7 bg-primary-500 rounded-full flex items-center justify-center"
          >
            <LightningIcon className="w-3.5 h-3.5 text-white" />
          </motion.div>
          <span className="text-sm font-bold text-neutral-800">BookedByAI</span>
          <span className="text-[9px] text-neutral-500 mt-0.5">
            Multi-touch AI Nurturing
          </span>
          <div className="flex gap-2 mt-2.5">
            <div className="w-7 h-7 bg-neutral-50 rounded-lg flex items-center justify-center shadow-sm border border-neutral-100">
              <PhoneIcon className="w-3.5 h-3.5 text-neutral-600" />
            </div>
            <div className="w-7 h-7 bg-neutral-50 rounded-lg flex items-center justify-center shadow-sm border border-neutral-100">
              <EmailIcon className="w-3.5 h-3.5 text-neutral-600" />
            </div>
            <div className="w-7 h-7 bg-neutral-50 rounded-lg flex items-center justify-center shadow-sm border border-neutral-100">
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </div>
          </div>
        </motion.div>

        {/* OUTPUT CATEGORIES - HORIZONTAL */}  
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.4 },
            },
          }}
          className="flex flex-row justify-center gap-3 w-full"
        >
          {outputNodes.map((node, index) => (
            <motion.div
              key={node.name}
              ref={node.reference}
              variants={fadeInUp}
              className="flex flex-col items-center gap-1.5 bg-white rounded-xl px-4 py-2.5 shadow-md border border-neutral-100"
            >
              <span className="text-sm text-neutral-800">
                {node.name}
              </span>
              <div className="flex gap-0.5">
                <span className={`w-1.5 h-1.5 rounded-full ${node.bgColor}`} />
                <span className={`w-1.5 h-1.5 rounded-full ${node.bgColor} opacity-60`} />
                <span className={`w-1.5 h-1.5 rounded-full ${node.bgColor} opacity-30`} />
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
        curvature={0}
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
        curvature={0}
        duration={BEAM_DURATION}
        delay={INPUT_DELAYS[2]}
        onReachEnd={handleMetaBeamReachEnd}
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
