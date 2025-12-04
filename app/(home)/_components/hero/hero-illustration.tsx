import { useEffect, useRef, useState } from "react";
import { AnimatedBeam } from "./animated-beam";

function HeroIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [resizeKey, setResizeKey] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      setResizeKey((prev) => prev + 1);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return <div></div>;
}

export default HeroIllustration;
