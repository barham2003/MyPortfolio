import HeaderSection from "@/lib/header-section";
import React from "react";

export default function Contact() {
  return (
    <section
      className="flex scroll-mt-24 flex-col justify-start gap-4 md:scroll-mt-12"
      id="contact"
    >
      <HeaderSection>Contact us</HeaderSection>
      <span className=""> let's get into touch</span>
    </section>
  );
}
