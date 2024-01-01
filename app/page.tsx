import Intro from "@/components/intro";
export default function Home() {
  return (
    <main className=" flex h-screen w-full">
      <div className="mt-20 flex w-full flex-col justify-start gap-44 text-center md:ml-[370px]">
        <Intro />
      </div>
    </main>
  );
}
