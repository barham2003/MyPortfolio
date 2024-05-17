import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="mx-auto flex max-h-screen w-full max-w-[1990px] xl:overflow-auto">
      <div className="mt-28 flex  w-full flex-col justify-start gap-[22rem] px-8 text-center">
        <Intro />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}
