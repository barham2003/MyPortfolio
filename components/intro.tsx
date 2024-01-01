"use client";
import { HackerTextEffect } from "@/lib/hooks";
import { motion } from "framer-motion";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Intro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -200 }}
      animate={{
        opacity: 100,
        y: 0,
        transition: { type: "tween", delay: 1 },
      }}
      className="flex scroll-mt-20 flex-col gap-12"
      id="home"
    >
      <h1 className="text-7xl font-bold">
        <HackerTextEffect className="text-5xl md:text-7xl md:font-bold">
          Hello, Friend.
        </HackerTextEffect>
      </h1>
      <div className="mt-16 h-full md:mt-20">
        <p className=" text-pretty text-justify text-2xl font-semibold leading-10 md:text-5xl md:tracking-widest">
          I'm <span className="font-extrabold">Barham</span>, a web developer
          with a knack for crafting visually{" "}
          <HackerTextEffect className="text-2xl font-extrabold md:text-5xl">
            appealing
          </HackerTextEffect>{" "}
          and efficient websites. I merge technology and{" "}
          <span className="bg-secondary/20 font-normal underline">
            creativity
          </span>{" "}
          to deliver innovative digital solutions. I'm{" "}
        </p>

        <div className=" flex flex-col items-start gap-2 py-10 md:hidden">
          <div className="mt-4 flex gap-4">
            <div className="my-2 flex gap-2">
              <BsGithub
                size={"30px"}
                className="transition-all hover:opacity-75"
              />

              <BsLinkedin
                size={"30px"}
                className="transition-all hover:opacity-75"
              />
            </div>
          </div>
          <span className="flex items-center gap-2 font-sans text-lg opacity-45">
            <BiPhone />
            +964 750 833 06 77
          </span>
          <span className="flex items-center gap-2 font-sans text-lg opacity-45">
            <MdEmail />
            barhamxak686@gmail.com
          </span>
          <span className="flex items-center gap-2 text-lg opacity-45">
            <IoLocation />
            Iraq - Kirkuk
          </span>
        </div>
      </div>
    </motion.section>
  );
}
