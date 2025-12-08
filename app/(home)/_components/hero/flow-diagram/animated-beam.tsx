"use client";

import { useEffect, useId, useState, RefObject } from "react";
import { motion } from "framer-motion";

interface AnimatedBeamProps {
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  duration?: number;
  delay?: number;
  pathColor?: string;
  pathWidth?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
}

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  duration = 4,
  delay = 0,
  pathColor = "oklch(0.75 0.25 350)",
  pathWidth = 2,
  gradientStartColor = "oklch(0.7 0.3 350)",
  gradientStopColor = "oklch(0.55 0.35 320)",
}: AnimatedBeamProps) {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const [isVertical, setIsVertical] = useState(false);
  const [shouldReverse, setShouldReverse] = useState(false);

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();

      setSvgDimensions({ width: containerRect.width, height: containerRect.height });

      const startX = fromRect.left - containerRect.left + fromRect.width / 2;
      const startY = fromRect.top - containerRect.top + fromRect.height / 2;
      const endX = toRect.left - containerRect.left + toRect.width / 2;
      const endY = toRect.top - containerRect.top + toRect.height / 2;
      const controlY = startY - curvature;

      setPathD(`M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`);

      const deltaX = Math.abs(endX - startX);
      const deltaY = Math.abs(endY - startY);
      setIsVertical(deltaY > deltaX);

      const flowsRight = endX > startX;
      const flowsDown = endY > startY;
      setShouldReverse(isVertical ? !flowsDown : !flowsRight);
    };

    const resizeObserver = new ResizeObserver(updatePath);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    updatePath();

    return () => resizeObserver.disconnect();
  }, [containerRef, fromRef, toRef, curvature, isVertical]);

  const getGradientAnimation = () => {
    if (isVertical) {
      return shouldReverse
        ? { y1: ["110%", "10%"], y2: ["100%", "0%"], x1: ["0%", "0%"], x2: ["0%", "0%"] }
        : { y1: ["10%", "110%"], y2: ["0%", "100%"], x1: ["0%", "0%"], x2: ["0%", "0%"] };
    }
    return shouldReverse
      ? { x1: ["110%", "10%"], x2: ["100%", "0%"], y1: ["0%", "0%"], y2: ["0%", "0%"] }
      : { x1: ["10%", "110%"], x2: ["0%", "100%"], y1: ["0%", "0%"], y2: ["0%", "0%"] };
  };

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      className="pointer-events-none absolute top-0 left-0"
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path d={pathD} stroke={pathColor} strokeWidth={pathWidth} strokeOpacity={0.2} strokeLinecap="round" />
      <path d={pathD} strokeWidth={pathWidth} stroke={`url(#${id})`} strokeLinecap="round" />
      <defs>
        <motion.linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
          animate={getGradientAnimation()}
          transition={{ delay, duration, ease: [0.16, 1, 0.3, 1], repeat: Infinity }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
}
