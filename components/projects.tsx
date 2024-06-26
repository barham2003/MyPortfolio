"use client";

import { myProjects as projects } from "@/lib/data";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeaderSection from "@/lib/header-section";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className=" flex scroll-mt-24 flex-col items-center justify-between gap-8 xl:scroll-mt-12 xl:gap-20"
    >
      <HeaderSection>My Projects</HeaderSection>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 100,
          transition: { delay: 0.7, duration: 0.6 },
        }}
        viewport={{
          once: true,
        }}
        className="w-5/6 xl:w-3/4 "
      >
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-start gap-4 p-4 xl:flex-col xl:justify-start xl:gap-16 xl:p-8">
                      <h3 className="font-bold xl:text-2xl">{project.name}</h3>
                      <Image
                        className="rounded-lg border-2 grayscale transition-all hover:border-white hover:grayscale-0 xl:h-[17rem] xl:w-[34rem]"
                        src={project.image}
                        alt=""
                        quality={60}
                      />
                      <p className=" text-justify text-sm xl:text-base">
                        {project.description}
                      </p>
                      <a target="_blank" href={project.link}>
                        Go to it
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </section>
  );
}
