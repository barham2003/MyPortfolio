import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className=" flex h-[6000px] w-full">
      <div className=" mt-44 flex w-full flex-col justify-start gap-56 px-8 text-center md:ml-[370px] md:gap-[22rem] md:px-20 ">
        <Intro />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
