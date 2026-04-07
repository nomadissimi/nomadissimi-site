import { Resend } from "resend";

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

  const html = `
    <div style="font-family: Georgia, serif; background:#fbf8f2; padding:32px; color:#1f1f1f;">
      <div style="max-width:680px; margin:0 auto; background:white; border:1px solid rgba(0,0,0,0.08); border-radius:24px; padding:32px;">
        <p style="font-family: Arial, sans-serif; font-size:12px; letter-spacing:0.18em; text-transform:uppercase; color:rgba(0,0,0,0.45); margin:0 0 16px;">
          Nomadissimi admin
        </p>

        <h1 style="font-size:40px; line-height:1.1; margin:0 0 20px;">
          New ${intakeType} intake submission
        </h1>

        <p style="font-family: Arial, sans-serif; font-size:16px; line-height:1.8; color:rgba(0,0,0,0.72); margin:0 0 24px;">
          A new onboarding form has been submitted and is ready for review.
        </p>

        <div style="border:1px solid rgba(0,0,0,0.08); border-radius:18px; padding:18px 20px; background:#fbf8f2; margin-bottom:24px;">
          <p style="font-family: Arial, sans-serif; margin:0 0 8px; font-size:15px;"><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p style="font-family: Arial, sans-serif; margin:0 0 8px; font-size:15px;"><strong>Email:</strong> ${email}</p>
          <p style="font-family: Arial, sans-serif; margin:0 0 8px; font-size:15px;"><strong>City:</strong> ${city || "—"}</p>
          <p style="font-family: Arial, sans-serif; margin:0; font-size:15px;"><strong>Country:</strong> ${country || "—"}</p>
        </div>

        <div style="margin-bottom:20px;">
          <p style="font-family: Arial, sans-serif; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(0,0,0,0.4); margin:0 0 8px;">
            Top questions
          </p>
          <div style="border:1px solid rgba(0,0,0,0.08); border-radius:18px; padding:16px 18px; background:white;">
            <p style="font-family: Arial, sans-serif; font-size:15px; line-height:1.8; color:rgba(0,0,0,0.76); margin:0; white-space:pre-wrap;">${topQuestions || "—"}</p>
          </div>
        </div>

        <div style="margin-bottom:28px;">
          <p style="font-family: Arial, sans-serif; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(0,0,0,0.4); margin:0 0 8px;">
            Biggest stress
          </p>
          <div style="border:1px solid rgba(0,0,0,0.08); border-radius:18px; padding:16px 18px; background:white;">
            <p style="font-family: Arial, sans-serif; font-size:15px; line-height:1.8; color:rgba(0,0,0,0.76); margin:0; white-space:pre-wrap;">${biggestStress || "—"}</p>
          </div>
        </div>

        ${
          adminUrl
            ? `
          <a href="${adminUrl}" style="display:inline-block; background:#4B5D44; color:white; text-decoration:none; padding:14px 22px; border-radius:999px; font-family: Arial, sans-serif; font-size:15px;">
            Open admin dashboard
          </a>
        `
            : ""
        }
      </div>
    </div>
  `;

  await resend.emails.send({
    from,
    to,
    subject,
    html,
  });
}

