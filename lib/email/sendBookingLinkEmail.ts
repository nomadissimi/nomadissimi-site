import { Resend } from "resend";
import { renderEmailShell } from "@/lib/email/renderEmailShell";

const resend = new Resend(process.env.RESEND_API_KEY);

type SendBookingLinkEmailInput = {
  clientName: string;
  clientEmail: string;
  bookingUrl: string;
  intakeType?: string;
};

export async function sendBookingLinkEmail({
  clientName,
  clientEmail,
  bookingUrl,
  intakeType,
}: SendBookingLinkEmailInput) {
  const from = process.env.INTAKE_NOTIFY_FROM;

  if (!from || !process.env.RESEND_API_KEY) {
    throw new Error("Missing Resend configuration.");
  }

const subject = "Your private Nomadissimi booking link";

 
  const normalizedType = (intakeType ?? "").toLowerCase();

  const intakeLine =
    normalizedType === "visa"
      ? "We’ve reviewed your visa onboarding form and your next step is ready."
      : normalizedType === "tax"
        ? "We’ve reviewed your tax onboarding form and your consultation step is ready."
        : normalizedType === "residence"
          ? "We’ve reviewed your residence onboarding form and your next step in Italy is ready."
          : normalizedType === "dolce-vita"
            ? "We’ve reviewed your La Dolce Vita onboarding form and your private consultation step is ready."
            : normalizedType === "general"
              ? "We’ve reviewed your onboarding form and your consultation step is ready."
              : "We’ve reviewed your onboarding form and your next step is ready.";

   const html = renderEmailShell({
    eyebrow: "Nomadissimi",
    title: "Your private consultation booking link",
    bodyHtml: `
      <p style="margin:0 0 16px;">Ciao ${clientName},</p>

      <p style="margin:0 0 16px;">
        ${intakeLine}
      </p>

      <p style="margin:0;">
        ${
          normalizedType === "visa"
            ? "When you’re ready, you can use the private link below to choose your visa consultation time."
            : normalizedType === "tax"
              ? "When you’re ready, you can use the private link below to choose your tax consultation time."
              : normalizedType === "residence"
                ? "When you’re ready, you can use the private link below to choose your residence consultation time."
                : normalizedType === "dolce-vita"
                  ? "When you’re ready, you can use the private link below to choose your private lifestyle consultation time."
                  : "When you’re ready, you can use the private link below to choose a time that feels right for you."
        }
      </p>
    `,
    ctaLabel: "Book your consultation",
    ctaUrl: bookingUrl,
    footerNote:
      "Please book using the same email address associated with your Nomadissimi purchase whenever possible.",
  });


  await resend.emails.send({
    from,
    to: clientEmail,
    subject,
    html,
    replyTo: "info@nomadissimi.com",
  });
}

