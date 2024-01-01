import { IoHomeOutline } from "react-icons/io5";
import { CgToolbox } from "react-icons/cg";
import { RiListSettingsFill } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export const sections = [
  { name: "Home", icon: <IoHomeOutline size="20px" />, ref: "#home" },
  { name: "Skills", icon: <RiListSettingsFill size="20px" />, ref: "#skills" },
  { name: "Projects", icon: <CgToolbox size="20px" />, ref: "#" },
  { name: "About", icon: <IoPersonOutline size="20px" />, ref: "#" },
  { name: "Contact", icon: <MdOutlineEmail size="20px" />, ref: "#" },
] as const;

import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { SiReactquery } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const skills = [
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "NextJs", icon: <SiNextdotjs /> },
  { name: "ExpressJS", icon: <SiExpress /> },
  { name: "MongoDB", icon: <BiLogoMongodb /> },
  { name: "MySql", icon: <DiMysql /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Framer", icon: <FiFramer /> },
  { name: "TS Query", icon: <SiReactquery /> },
  { name: "SokectIO", icon: <SiSocketdotio /> },
  { name: "Supabase", icon: <RiSupabaseFill /> },
  { name: "PostgreSql", icon: <DiPostgresql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
] as const;