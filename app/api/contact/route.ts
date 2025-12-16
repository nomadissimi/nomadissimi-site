import nodemailer from "nodemailer";
export async function POST(req: Request) {
  try {
    console.log("CONTACT ROUTE HIT ✅");

    const { name, email, subject, message } = await req.json();
    console.log("New contact message:", { name, email, subject, message });

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
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject || "(no subject)"}

${message}
      `,
    });

    console.log("EMAIL SENT ✅");

    return Response.json({ ok: true });
  } catch (error) {
    console.error("EMAIL ERROR ❌", error);
    return new Response(
      JSON.stringify({ error: "Failed to send message" }),
      { status: 500 }
    );
  }
}
