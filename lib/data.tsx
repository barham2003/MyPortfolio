import { IoHomeOutline } from "react-icons/io5";
import { CgToolbox } from "react-icons/cg";
import { RiListSettingsFill } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export const sections = [
  { name: "Home", icon: <IoHomeOutline size="20px" /> },
  { name: "Skills", icon: <RiListSettingsFill size="20px" /> },
  { name: "Projects", icon: <CgToolbox size="20px" /> },
  { name: "About", icon: <IoPersonOutline size="20px" /> },
  { name: "Contact", icon: <MdOutlineEmail size="20px" /> },
] as const;
