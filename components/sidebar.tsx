"use client";

import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { ModeToggle } from "./toggle-mode";
import { motion } from "framer-motion";
import { sections } from "@/lib/data";
import { clsx } from "clsx";
export default function Sidebar() {
  return (
    <motion.div
      initial={{ x: -400 }}
      animate={{ x: 0 }}
      transition={{
        type: "tween",
        duration: 0.5,
      }}
      className="flex h-full w-1/5 flex-col gap-4 border border-r-secondary/80 py-10 "
    >
      <div className="flex h-1/5 flex-col items-center justify-center">
        <span className="text-xl font-bold">Barham Khalid</span>
        <span className="text-lg opacity-45">Web Developer</span>
        <div className="mt-4 flex gap-4">
          <BsGithub size={"30px"} className="transition-all hover:opacity-75" />
          <BsLinkedin
            size={"30px"}
            className="transition-all hover:opacity-75"
          />
        </div>
      </div>
      <div className="flex h-3/5 flex-col items-center justify-center gap-4">
        {sections.map((section) => (
          <Link
            href="#"
            className="flex w-5/6 items-center justify-center gap-2 rounded-full bg-secondary/80 p-2 font-semibold transition-all hover:bg-secondary/50"
            key={section.name}
          >
            {section.icon}
            {section.name}
          </Link>
        ))}
      </div>
      <div className="flex h-1/5 flex-col items-center justify-end">
        <ModeToggle />
      </div>
    </motion.div>
  );
}
