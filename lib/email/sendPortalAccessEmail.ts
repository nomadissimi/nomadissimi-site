import nodemailer from "nodemailer";
import { renderEmailShell } from "@/lib/email/renderEmailShell";

export async function sendPortalAccessEmail(to: string, url: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  });

  const subject = "Create your Nomadissimi portal account";

  const html = renderEmailShell({
    eyebrow: "Nomadissimi portal",
    title: "Your portal is ready",
    bodyHtml: `
      <p style="margin:0 0 18px;">
        Welcome in. Your purchase has been added to your Nomadissimi portal.
      </p>

      <p style="margin:0;">
        Click below to create your password and access your private library.
      </p>
    `,
    ctaLabel: "Create your portal account",
    ctaUrl: url,
    footerNote:
      "Use the same email address you used at checkout so your guides appear correctly in your private library.",
  });

  await transporter.sendMail({
    from: `Nomadissimi <${process.env.EMAIL_USER!}>`,
    to,
    subject,
    html,
  });
}