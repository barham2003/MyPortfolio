"use client";
import { HackerTextEffect } from "@/lib/hooks";
import { motion } from "framer-motion";

import React, { useState, useEffect } from "react";

export default function Intro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -200 }}
      animate={{
        opacity: 100,
        y: 0,
        transition: { type: "tween", delay: 1 },
      }}
      className="flex scroll-mt-20 flex-col gap-4"
      id="home"
    >
      <h1 className=" text-7xl font-bold">
        <HackerTextEffect className="text-4xl md:text-7xl md:font-bold">
          Hello, Friend.
        </HackerTextEffect>
      </h1>
      <div className="mt-5 h-full md:mt-20">
        <p className=" text-pretty text-justify text-xl font-semibold leading-10 tracking-wide md:text-4xl">
          I'm <span className="font-extrabold"> Barham</span>, a passionate and{" "}
          <span className="font-bold underline underline-offset-4">
            creative web developer
          </span>{" "}
          with a love for crafting clean, efficient, and visually appealing
          websites. With a keen eye for detail and a commitment to excellence, I
          take pride in{" "}
          <span className="bg-secondary/60 font-normal">
            {"    "}
            delivering innovative digital solutions
          </span>{" "}
          Embarking on the exciting journey of web development, I've become more
          than just a coder; I'm a creator, a problem solver, and a{" "}
          <span className="">
            <HackerTextEffect className="text-xl font-extrabold md:text-4xl">
              relentless
            </HackerTextEffect>
          </span>{" "}
          pursuer of digital excellence. As a web developer, my goal is to merge
          the realms of{" "}
          <span className="font-extrabold">technology and creativity</span>,
          crafting online experiences that leave a lasting impact.
        </p>
      </div>
    </motion.section>
  );
}
