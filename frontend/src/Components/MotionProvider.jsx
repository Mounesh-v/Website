import React from "react";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";

export default function MotionProvider({ children }) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig
        reducedMotion="user"
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}