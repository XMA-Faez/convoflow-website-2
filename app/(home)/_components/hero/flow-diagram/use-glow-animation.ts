"use client";

import { useState, useEffect, useRef } from "react";

export function useGlowAnimation(beamDuration: number, lastBeamDelay: number) {
  const [isGlowing, setIsGlowing] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const glowTriggerTime = (lastBeamDelay + beamDuration * 0.75) * 1000;
    const cycleTime = beamDuration * 1000;
    const glowDuration = 800;

    const triggerGlow = () => {
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), glowDuration);
    };

    const timer = setTimeout(() => {
      triggerGlow();
      intervalRef.current = setInterval(triggerGlow, cycleTime);
    }, glowTriggerTime);

    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [beamDuration, lastBeamDelay]);

  return isGlowing;
}

export const GLOW_STYLE_ACTIVE = {
  boxShadow: "0 0 40px oklch(0.7 0.25 330 / 0.7)",
  borderColor: "oklch(0.7 0.2 330)",
  backgroundColor: "oklch(0.95 0.03 330)",
};

export const GLOW_STYLE_INACTIVE = {
  boxShadow: "0 0 0px oklch(0.7 0.25 330 / 0)",
  borderColor: "oklch(0.85 0.02 0)",
  backgroundColor: "oklch(0.98 0.005 0)",
};

export const GLOW_STYLE_ACTIVE_MOBILE = {
  ...GLOW_STYLE_ACTIVE,
  boxShadow: "0 0 30px oklch(0.7 0.25 330 / 0.7)",
};
