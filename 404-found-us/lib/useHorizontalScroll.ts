import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export function useHorizontalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  return { targetRef, scrollYProgress };
}

export function useHorizontalScrollTransform(
  scrollYProgress: MotionValue<number>,
  maxTranslate: number = -50
) {
  const x = useTransform(scrollYProgress, [0, 1], [0, maxTranslate]);
  return x;
}

