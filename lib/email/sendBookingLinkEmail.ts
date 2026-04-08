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

const subject = "Your private consultation link";

 
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
  title: "Your private consultation link",
  bodyHtml: `
    <p style="margin:0 0 16px;">Ciao ${clientName},</p>

    <p style="margin:0 0 16px;">
      ${intakeLine}
    </p>

    <p style="margin:0 0 16px;">
      ${
        normalizedType === "visa"
          ? "You can now choose a time for your visa consultation using the private link below."
          : normalizedType === "tax"
            ? "You can now choose a time for your tax consultation using the private link below."
            : normalizedType === "residence"
              ? "You can now choose a time for your residence consultation using the private link below."
              : normalizedType === "dolce-vita"
                ? "You can now choose a time for your La Dolce Vita consultation using the private link below."
                : "You can now choose a time for your consultation using the private link below."
      }
    </p>

    <p style="margin:0;">
      If you need to reschedule later, please refer to the consultation terms on our website.
    </p>
  `,
  ctaLabel: "Choose your consultation time",
  ctaUrl: bookingUrl,
  footerNote:
    "For the smoothest experience, please book using the same email address associated with your Nomadissimi purchase whenever possible.",
});

  await resend.emails.send({
    from,
    to: clientEmail,
    subject,
    html,
    replyTo: "info@nomadissimi.com",
  });
}

