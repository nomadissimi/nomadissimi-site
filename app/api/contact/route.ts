import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    console.log("CONTACT ROUTE HIT ✅");

    const { name, email, subject, message } = await req.json();
    console.log("New contact message:", { name, email, subject, message });

    // Basic guard (server-side)
    if (!name || !email || !message) {
      return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Nomadissimi Contact" <${process.env.EMAIL_USER}>`,
      to: "nomadissimi@gmail.com",
      replyTo: email,
      subject: subject || "New message from Nomadissimi",
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "(none)"}\n\nMessage:\n${message}`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("CONTACT EMAIL ERROR ❌", err);
    return Response.json({ ok: false, error: "Email failed to send" }, { status: 500 });
  }
}