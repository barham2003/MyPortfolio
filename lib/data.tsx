import { IoHomeOutline } from "react-icons/io5";
import { CgToolbox } from "react-icons/cg";
import { TbTools } from "react-icons/tb";

import { MdOutlineEmail } from "react-icons/md";

export const sections = [
  { name: "Home", icon: <IoHomeOutline size="20px" />, ref: "#home" },
  { name: "Skills", icon: <TbTools size="20px" />, ref: "#skills" },
  { name: "Projects", icon: <CgToolbox size="20px" />, ref: "#projects" },
  { name: "Contact", icon: <MdOutlineEmail size="20px" />, ref: "#contact" },
] as const;

import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiSvelte, SiTypescript } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiFfmpeg } from "react-icons/si";
import { SiDeno } from "react-icons/si";
import { FaPython } from "react-icons/fa";

export const skills = [
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "Deno", icon: <SiDeno /> },
  { name: "SvelteKit", icon: <SiSvelte /> },
  { name: "Nuxt", icon: <FaVuejs /> },
  { name: "NextJs", icon: <SiNextdotjs /> },
  { name: "Nest", icon: <SiNestjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <BiLogoMongodb /> },
  { name: "MySql", icon: <DiMysql /> },
  { name: "PostgreSql", icon: <DiPostgresql /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "FFMPEG", icon: <SiFfmpeg /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
] as const;

import MathCenter from "@/public/math.jpg";
import SVGImage from "@/public/ssvg.jpg";
import BreakingB from "@/public/breakingb.jpg";
import SpaceImg from "@/public/space.jpg";
import type { StaticImageData } from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Sako from "@/public/sako.jpg";

const lorem: any =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore explicabo quo illum? Temporibus eius eligendi consequuntur? Modi sunt at nostrum, commodi ratione voluptatibus eum molestiae libero assumenda nobis, aperiam officiis!";

interface eachSkill {
  name: string;
  description: typeof lorem;
  image: StaticImageData;
  link: string;
}

export const myProjects: eachSkill[] = [
  {
    name: "Sakoi Culture",
    description:
      "A web application and API which generates 'Pendi Peshinan' and Kurdish Poetries, Tooks used are: Next.JS, ReactJS, DrizzleORM, TursoDB, LibSql, ShadCN, Tailwind....",
    image: Sako,
    link: "https://www.sakoi-culture.com",
  },
  {
    name: "Smart Volunteers Group",
    description:
      "A website where the members of Smart Volunteers Group, can directly see their points, activities, and details that are saved in the database in both languages Kurdish and English. and also the system to manage the database is provided as well. tools that are used in both are: NEXT.JS, ExpressJs, ReactJs, ShadCN, MongoDB, Zod, Tailwind, etc....",
    image: SVGImage,
    link: "https://smartvolunteersgroup.com",
  },
  {
    name: "Space",
    description:
      "A software company which offers software development courses, tools, and services. and I have developed their website. tools used: Next.JS, ReactJs, ShadCN, DrizzleORM, PostgreSQL, Zod, Tailwind, etc....",
    image: SpaceImg,
    link: "https://www.space.krd",
  },
  {
    name: "Math Center",

    description:
      "A web application which the students of AUIS, can see who is currently available in the Math & Natural Science Center. the webiste is role based and includes three types of role: Admin, Tutor, and User(Student). tools used to make the web app are: React, Redux, Node.JS, Express, Tailwind, RippleUI, MongoDB, etc...",
    image: MathCenter,
    link: "https://mathcenter.netlify.app",
  },
  {
    name: "Breaking Bad Page",
    description:
      "A simple blog and quote generator from Breaking Bad web app, which I built in the beggining of my journey in Web Development. Tools that used are: Node.JS, ExpressJs, MongoDB, ReactJS, Bootstrap, etc.....",
    image: BreakingB,
    link: "https://breakingb.pages.dev",
  },
];

export const about: string[] = [
  "Abilities: Driven by a passion for dynamic web solutions, I specialize in fast learning and creative problem-solving. Adapting swiftly to emerging technologies, I push the boundaries to deliver innovative solutions that redefine web development.",
  "Education: Currently advancing my knowledge at 'American University of Iraq, Sulaymaniah', I'm committed to staying at the forefront of web development.",
  "Location: I mostly live in Sulaymaniyah, I thrive in a dynamic tech community.",
  "Beyond Coding: Beyond the realm of coding, I delve into the realm of storytelling through movies and novels, exploring the artistry and narrative intricacies that captivate my imagination.",
];

import { MdSimCardDownload } from "react-icons/md";

export const socials = [
  {
    name: "github",
    link: "https://github.com/barham2003",

    icon: (
      <BsGithub
        size={"30px"}
        className="transition-all hover:opacity-75"
      />
    ),
  },
  {
    name: "linkedin",
    link: "https://linkedin.com/in/barham-khalid-khorshed-7abab8267/",
    icon: (
      <BsLinkedin size={"30px"} className="transition-all hover:opacity-75" />
    ),
  },
  {
    name: "CV",
    link: "/barham.pdf",
    icon: (
      <MdSimCardDownload
        size={"30px"}
        className="transition-all hover:opacity-75"
      />
    ),
  },
] as const;
