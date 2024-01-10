import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className=" mb-28 flex w-full max-w-[1990px]">
      <div className=" mt-28 flex w-full flex-col justify-start gap-56 px-8 text-center md:ml-[23rem] md:gap-[22rem] md:px-20 ">
        <Intro />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}
