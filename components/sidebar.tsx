"use client";

import Link from "next/link";
import { ModeToggle } from "./toggle-mode";
import { motion } from "framer-motion";
import { sections, socials } from "@/lib/data";
import { BiPhone } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";

export default function Sidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 100, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.4,
      }}
      className="xlw-1/5 xlflex-col xlflex-nowrap xlgap-4 xlborder-r xlborder-r-primary/20 xlpy-10 flex w-screen flex-wrap border-b-2 border-b-secondary bg-white dark:bg-[#09090b]"
    >
      <div className="xlflex xlh-1/5 xlflex-col xlitems-center hidden ">
        <span className="xltext-xl  font-bold">Barham Khalid</span>
        <span className="text-lg opacity-45">Web Developer</span>
        <span className="flex items-center gap-2 text-lg opacity-45">
          Sulaymaniah
          <IoLocation />
        </span>
        <span className="flex items-center gap-2 font-sans text-lg opacity-45">
          +964 750 833 06 77
          <BiPhone />
        </span>
        <div className="mt-4 flex gap-4">
          {socials.map((social) => (
            <a key={social.name} href={social.link} target="_blank">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="xlh-3/5 xlflex-col xlflex-nowrap xlitems-center xlgap-4 xlp-0 flex flex-wrap items-center gap-2 p-2">
        {sections.map((section) => (
          <Link
            href={section.ref}
            className=" xlw-5/6 xljustify-center xlgap-2 flex items-center rounded-md bg-secondary/80 p-2 text-xl font-bold transition-all hover:bg-secondary/50  "
            key={section.name}
          >
            {section.icon}
            <span className="xlblock hidden">{section.name}</span>
          </Link>
        ))}
      </div>
      <div className="xlrelative xlh-1/5 xlflex-col xljustify-end flex items-center">
        <ModeToggle />
      </div>
    </motion.div>
  );
}
