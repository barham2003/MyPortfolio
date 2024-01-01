"use client";

import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { ModeToggle } from "./toggle-mode";
import { motion } from "framer-motion";
import { sections } from "@/lib/data";

export default function Sidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 100, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.4,
      }}
      className="fixed left-0 top-0 z-10 flex w-screen flex-wrap justify-around border border-b-secondary/80 backdrop-blur md:fixed md:-left-2 md:h-full md:w-1/5 md:flex-col md:flex-nowrap md:gap-4 md:border-r-secondary/80 md:py-10 dark:bg-[#09090b]/80"
    >
      <div className="hidden md:flex md:h-1/5 md:flex-col md:items-center md:justify-center">
        <span className="font-bold  md:text-xl">Barham Khalid</span>
        <span className="text-lg opacity-45">Web Developer</span>
        <div className="mt-4 flex gap-4">
          <BsGithub size={"30px"} className="transition-all hover:opacity-75" />
          <BsLinkedin
            size={"30px"}
            className="transition-all hover:opacity-75"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 p-2 md:h-3/5 md:flex-col md:items-center md:gap-4 md:p-0">
        {sections.map((section) => (
          <Link
            href="#"
            className=" flex items-center rounded-md bg-secondary/80 p-2 text-base font-semibold transition-all hover:bg-secondary/50 md:w-5/6 md:justify-center md:gap-2"
            key={section.name}
          >
            {section.icon}
            <span className="hidden md:block">{section.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex items-center md:relative md:h-1/5 md:flex-col md:justify-end">
        <ModeToggle />
      </div>
    </motion.div>
  );
}
