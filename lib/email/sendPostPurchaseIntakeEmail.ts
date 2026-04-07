import { Resend } from "resend";
import { renderEmailShell } from "@/lib/email/renderEmailShell";


const resend = new Resend(process.env.RESEND_API_KEY);

type SendPostPurchaseIntakeEmailInput = {
  customerEmail: string;
  customerName?: string | null;
  intakeUrl: string;
  serviceLabel: string;
};

export async function sendPostPurchaseIntakeEmail({
  customerEmail,
  customerName,
  intakeUrl,
  serviceLabel,
}: SendPostPurchaseIntakeEmailInput) {
  const from = process.env.INTAKE_NOTIFY_FROM;

  if (!from || !process.env.RESEND_API_KEY) {
    throw new Error("Missing Resend configuration.");
  }

  const firstName =
    customerName?.trim()?.split(" ")[0] || "there";

  const subject = `Your next step for ${serviceLabel}`;

    const html = renderEmailShell({
    eyebrow: "Nomadissimi",
    title: "Your next step",
    bodyHtml: `
      <p style="margin:0 0 16px;">Hi ${firstName},</p>

      <p style="margin:0 0 16px;">
        Thank you for your Nomadissimi purchase.
      </p>

      <p style="margin:0 0 16px;">
        To prepare your <strong>${serviceLabel}</strong> experience properly, please complete your private onboarding form using the link below.
      </p>

      <p style="margin:0;">
        Once we review your answers, we’ll send your next steps by email.
      </p>
    `,
    ctaLabel: "Complete your onboarding form",
    ctaUrl: intakeUrl,
    footerNote:
      "Please complete the form using the same email address associated with your purchase whenever possible.",
  });


  await resend.emails.send({
    from,
    to: customerEmail,
    subject,
    html,
    replyTo: "info@nomadissimi.com",
  });
}