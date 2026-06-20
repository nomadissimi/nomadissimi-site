import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    console.log("CONTACT ROUTE HIT ✅");

    const { name, email, subject, message } = await req.json();
    console.log("New contact message:", { name, email, subject, message });

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    console.log("EMAIL_USER:", process.env.EMAIL_USER ? "SET" : "MISSING");
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "SET" : "MISSING");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Nomadissimi Contact" <${process.env.EMAIL_USER}>`,
      to: "info@nomadissimi.com",
      replyTo: email,
      subject: subject || "New message from Nomadissimi",
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Subject: ${subject || "(none)"}\n\n` +
        `Message:\n${message}`,
    });

    await transporter.sendMail({
      from: `"Nomadissimi" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message — Nomadissimi",
      text:
        `Ciao ${name || "there"},\n\n` +
        `Thanks for reaching out. We have received your message, and we’ll reply soon.\n\n` +
        `In the meantime, here is a copy of what you sent:\n` +
        `Subject: ${subject || "(no subject)"}\n` +
        `Message:\n${message}\n\n` +
        `We take the stress, you take the plane.\n` +
        `— Nomadissimi\n` +
        `nomadissimi.com`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("CONTACT EMAIL ERROR ❌", err);
    return Response.json(
      { ok: false, error: "Email failed to send" },
      { status: 500 },
    );
  }
}