"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function AnimateSection({
  id,
  children,
  className,
  delay = 1,
}: {
  id: string;
  className: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: -200 }}
      animate={{
        opacity: 100,
        y: 0,
        transition: { type: "tween", delay: 1 * delay },
      }}
      className={cn(className)}
      id={id}
    >
      {children}
    </motion.section>
  );
}
