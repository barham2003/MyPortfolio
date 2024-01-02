"use client";

import { sendEmail } from "@/actions";
import HeaderSection from "@/lib/header-section";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
const initialState = { message: "" };

export default function Contact() {
  const [{ message }, formAction] = useFormState(sendEmail, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (message) {
      toast({ description: message });
    }
  }, [message, toast]);

  return (
    <section
      className="flex scroll-mt-24 flex-col justify-start gap-4 md:scroll-mt-12"
      id="contact"
    >
      <HeaderSection>Contact Me</HeaderSection>
      <motion.form
        action={formAction}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="flex flex-col justify-start gap-4"
      >
        <p>
          Contact me directly at{" "}
          <a href="barhamxak686@gmail.com">barhamxak686@gmail.com</a> or through
          this form.
        </p>
        <Input
          className="font-bold"
          placeholder="Your Email"
          type="email"
          name="senderEmail"
          required
        />
        <Textarea
          className="h-[20rem] font-bold"
          required
          name="message"
          placeholder="Your Content"
        ></Textarea>
        <span className="flex">
          <Button>Submit</Button>
        </span>
      </motion.form>
    </section>
  );
}
