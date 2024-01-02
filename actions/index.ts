"use server";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_CODE);

export async function sendEmail(formData: FormData) {
  const message = formData.get("message") as string;
  const senderEmail = formData.get("senderEmail") as string;

  if (!message || !senderEmail) return;
  console.log(message, senderEmail);
  const result = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "barhamxak686@gmail.com",
    subject: "Email From Portfolio",
    reply_to: senderEmail,
    text: message,
  });

  console.log(result);
}
