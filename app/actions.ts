"use server";

import nodemailer from "nodemailer";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

function getTransporter() {
  const { MAIL_HOST, MAIL_PORT, MAIL_USERNAME, MAIL_PASSWORD, MAIL_ENCRYPTION } = process.env;

  if (!MAIL_HOST || !MAIL_PORT || !MAIL_USERNAME || !MAIL_PASSWORD) {
    throw new Error(
      "SMTP is not configured. Set MAIL_HOST, MAIL_PORT, MAIL_USERNAME, MAIL_PASSWORD."
    );
  }

  return nodemailer.createTransport({
    host: MAIL_HOST,
    port: Number(MAIL_PORT),
    secure: MAIL_ENCRYPTION === "ssl" || Number(MAIL_PORT) === 465,
    auth: {
      user: MAIL_USERNAME,
      pass: MAIL_PASSWORD,
    },
  });
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const fullName = formData.get("fullName")?.toString().trim() ?? "";
  const company = formData.get("company")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";
  const agree = formData.get("agree");

  if (!fullName || !company || !email || !message || !agree) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    const transporter = getTransporter();
    const recipient = process.env.CONTACT_TO_EMAIL ?? process.env.MAIL_USERNAME;
    const fromAddress = process.env.MAIL_FROM_ADDRESS ?? process.env.MAIL_USERNAME;
    const fromName = process.env.MAIL_FROM_NAME;
    const from = fromName ? `"${fromName}" <${fromAddress}>` : fromAddress;

    await transporter.sendMail({
      from,
      to: recipient,
      replyTo: email,
      subject: `New contact form submission from ${fullName}`,
      text: [
        `Name: ${fullName}`,
        `Company: ${company}`,
        `Email: ${email}`,
        `Phone: ${phone || "N/A"}`,
        "",
        message,
      ].join("\n"),
    });

    await transporter.sendMail({
      from,
      to: email,
      subject: "We've received your message",
      text: [
        `Hi ${fullName},`,
        "",
        "Thanks for reaching out to 28 Dimensions. We've received your message and our team will be in touch soon.",
        "",
        "Your message:",
        message,
      ].join("\n"),
    });

    return { status: "success" };
  } catch (error) {
    console.error("Failed to send contact form email", error);
    return { status: "error", message: "Something went wrong. Please try again later." };
  }
}
