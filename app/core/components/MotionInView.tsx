"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";

type MotionInViewProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const MotionInView: React.FC<MotionInViewProps> = ({
  children,
  variants,
  className,
  threshold = 0.1,
  triggerOnce = true,
  ...rest
}) => {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default MotionInView;