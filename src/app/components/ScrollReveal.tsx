"use client"
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, MotionProps, motion } from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
} & MotionProps;

const ScrollReveal = ({ children, ...props }: ScrollRevealProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3, ease: "easeIn" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
