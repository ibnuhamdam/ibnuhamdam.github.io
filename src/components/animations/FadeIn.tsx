"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { fadeIn } from "@/lib/framer";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const FadeIn = ({ children, delay = 0, className, ...props }: FadeInProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: fadeIn.hidden,
        visible: {
          ...(fadeIn.visible as any),
          transition: {
            ...(fadeIn.visible as any).transition,
            delay
          }
        }
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
