"use server";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_CODE);

interface FormState {
  message: string;
}

export async function sendEmail(formState: FormState, formData: FormData) {
  const snderMessage = formData.get("message") as string;
  const senderEmail = formData.get("senderEmail") as string;

  if (!snderMessage || !senderEmail) return { message: "Validation Failed" };

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "barhamxak686@gmail.com",
      subject: "Email From Portfolio",
      reply_to: senderEmail,
      text: snderMessage,
    });

    return { message: "Email successfully sent!" };
  } catch (e) {
    console.log(e);
    return { message: "Something went wrong" };
  }
}
