"use client";

import { motion } from "framer-motion";

interface AnimatedProps {
  children: React.ReactNode;
  index: number;
}

export default function AnimatedList({ children, index }: AnimatedProps) {
  const variants = {
    initial: { scaleY: 0 },
    animate: (index: number) => ({
      scaleY: 1,
      transition: { type: "tween", delay: 0.5 + 0.1 * index },
    }),
  };
  return (
    <motion.li
      variants={variants}
      className="flex w-32 items-center justify-center gap-2 rounded-md border-2 border-primary/20
       p-2 text-lg font-semibold text-primary transition-all hover:border-primary  hover:bg-[#f6f6f7]
        md:w-48 md:text-2xl dark:bg-[#09090b] dark:hover:bg-[#212123]"
      initial="initial"
      whileInView="animate"
      custom={index}
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.li>
  );
}
