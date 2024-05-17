import { HackerTextEffect } from "@/lib/hooks";
import { BiPhone } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { socials } from "@/lib/data";
import AnimateSection from "./animate-section";

export default function Intro() {
  return (
    <AnimateSection
      className="flex scroll-mt-20 flex-col items-center justify-center md:gap-12"
      id="home"
    >
      <h1 className="text-7xl font-bold">
        <HackerTextEffect className="text-4xl md:text-7xl md:font-bold">
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
          <span className="font-normal underline">creativity</span> to deliver
          innovative digital solutions.{" "}
        </p>

        <div className=" flex flex-col items-start gap-2 py-10 md:hidden">
          <div className="mt-4 flex gap-4">
            <div className="my-2 flex gap-4">
              {socials.map((social) => (
                <a key={social.name} href={social.link} target="_blank">
                  {social.icon}
                </a>
              ))}
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
            Iraq - Sulaymaniah
          </span>
        </div>
      </div>
    </AnimateSection>
  );
}
