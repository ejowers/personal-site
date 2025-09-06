"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue } from "motion/react";

const PongAnimation = () => {
  const mouseY = useMotionValue(0);

  useEffect(() => {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const updatePosition = (event: any) => {
      mouseY.set(event.clientY - 140);
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  });

  return (
    <div className="relative w-full h-[800px] bg-black">
      <motion.div
        className="absolute w-[20px] h-[100px] bg-white rounded-xs"
        style={{ x: 20, y: mouseY }}
      />
    </div>
  );
};

export default PongAnimation;
