import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className=" flex max-h-screen w-full xl:overflow-auto">
      <div className="mx-auto mt-28 flex w-full max-w-[1990px] flex-col justify-start gap-[22rem] px-8 text-center">
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
