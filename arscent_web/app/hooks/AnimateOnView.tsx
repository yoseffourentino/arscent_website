"use client"

import { motion, useInView, cubicBezier } from "framer-motion";
import { useEffect, useState, useRef, ReactNode } from "react";

interface AnimateOnViewProps {
    children: ReactNode;
    direction: string;
    delay: number;
}

export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween" as const,
        duration: 1.2,
        delay: delay,
        ease: cubicBezier(0.25, 0.25, 0.25, 0.75),
      },
    },
  };
};

const AnimateOnView: React.FC<AnimateOnViewProps> = ({ children, direction, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={shouldAnimate ? "show" : "hidden"}
      variants={fadeIn(direction, delay)}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnView;