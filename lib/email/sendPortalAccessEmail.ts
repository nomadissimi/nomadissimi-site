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

const subject = "Your Nomadissimi Portal Access";

const html = renderEmailShell({
  eyebrow: "Nomadissimi portal",
  title: "Your portal is ready",
  bodyHtml: `
    <p style="margin:0 0 18px;">
      Your purchase has been added to your Nomadissimi portal.
    </p>

    <p style="margin:0 0 18px;">
      To access your private library, create your password using the secure link below.
    </p>

    <p style="margin:0;">
      Once your account is set up, your available materials will appear automatically inside your portal.
    </p>
  `,
  ctaLabel: "Create your portal account",
  ctaUrl: url,
  footerNote:
    "For the smoothest setup, use the same email address you used at checkout.",
});

  await transporter.sendMail({
    from: `Nomadissimi <${process.env.EMAIL_USER!}>`,
    to,
    subject,
    html,
  });
}