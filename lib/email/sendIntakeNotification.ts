import { Resend } from "resend";
import { renderEmailShell } from "@/lib/email/renderEmailShell";


const resend = new Resend(process.env.RESEND_API_KEY);

type IntakeNotificationInput = {
  intakeType: string;
  firstName: string;
  lastName: string;
  email: string;
  country?: string;
  city?: string;
  topQuestions?: string;
  biggestStress?: string;
  adminUrl?: string;
};

export async function sendIntakeNotification({
  intakeType,
  firstName,
  lastName,
  email,
  country,
  city,
  topQuestions,
  biggestStress,
  adminUrl,
}: IntakeNotificationInput) {
  const to = process.env.INTAKE_NOTIFY_TO
    ?.split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  const from = process.env.INTAKE_NOTIFY_FROM;

  if (!to?.length || !from || !process.env.RESEND_API_KEY) {
    console.warn("Intake notification email skipped: missing email env vars.");
    return;
  }

  const subject = `New ${intakeType} intake — ${firstName} ${lastName}`;

    const html = renderEmailShell({
    eyebrow: "Nomadissimi admin",
    title: `New ${intakeType} intake submission`,
    bodyHtml: `
      <p style="margin:0 0 24px;">
        A new onboarding form has been submitted and is ready for review.
      </p>

      <div style="border:1px solid rgba(0,0,0,0.08); border-radius:20px; padding:18px 20px; background:#fbf8f2; margin:0 0 24px;">
        <p style="margin:0 0 8px; font-size:15px;"><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p style="margin:0 0 8px; font-size:15px;"><strong>Email:</strong> ${email}</p>
        <p style="margin:0 0 8px; font-size:15px;"><strong>City:</strong> ${city || "—"}</p>
        <p style="margin:0; font-size:15px;"><strong>Country:</strong> ${country || "—"}</p>
      </div>

      <div style="margin:0 0 20px;">
        <p style="font-size:12px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(0,0,0,0.4); margin:0 0 8px;">
          Top questions
        </p>
        <div style="border:1px solid rgba(0,0,0,0.08); border-radius:18px; padding:16px 18px; background:white;">
          <p style="font-size:15px; line-height:1.8; color:rgba(0,0,0,0.76); margin:0; white-space:pre-wrap;">${topQuestions || "—"}</p>
        </div>
      </div>

      <div style="margin:0;">
        <p style="font-size:12px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(0,0,0,0.4); margin:0 0 8px;">
          Biggest stress
        </p>
        <div style="border:1px solid rgba(0,0,0,0.08); border-radius:18px; padding:16px 18px; background:white;">
          <p style="font-size:15px; line-height:1.8; color:rgba(0,0,0,0.76); margin:0; white-space:pre-wrap;">${biggestStress || "—"}</p>
        </div>
      </div>
    `,
    ctaLabel: adminUrl ? "Open admin dashboard" : undefined,
    ctaUrl: adminUrl,
  });

  await resend.emails.send({
    from,
    to,
    subject,
    html,
  });
}

