import { Resend } from "resend";

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

  const subject = "Your Nomadissimi consultation booking link";

  const intakeLine =
    intakeType && intakeType.trim().length > 0
      ? `We’ve reviewed your ${intakeType} onboarding form and you’re ready to schedule your consultation.`
      : `We’ve reviewed your onboarding form and you’re ready to schedule your consultation.`;

  const html = `
    <div style="font-family: Georgia, serif; background:#fbf8f2; padding:32px; color:#1f1f1f;">
      <div style="max-width:680px; margin:0 auto; background:white; border:1px solid rgba(0,0,0,0.08); border-radius:24px; padding:32px;">
        <p style="font-family: Arial, sans-serif; font-size:12px; letter-spacing:0.18em; text-transform:uppercase; color:rgba(0,0,0,0.45); margin:0 0 16px;">
          Nomadissimi
        </p>

        <h1 style="font-size:40px; line-height:1.1; margin:0 0 20px;">
          Your consultation booking link
        </h1>

        <p style="font-family: Arial, sans-serif; font-size:16px; line-height:1.8; color:rgba(0,0,0,0.72); margin:0 0 16px;">
          Hi ${clientName},
        </p>

        <p style="font-family: Arial, sans-serif; font-size:16px; line-height:1.8; color:rgba(0,0,0,0.72); margin:0 0 16px;">
          ${intakeLine}
        </p>

        <p style="font-family: Arial, sans-serif; font-size:16px; line-height:1.8; color:rgba(0,0,0,0.72); margin:0 0 24px;">
          Please use the private link below to choose a time that works for you.
        </p>

        <a href="${bookingUrl}" style="display:inline-block; background:#4B5D44; color:white; text-decoration:none; padding:14px 22px; border-radius:999px; font-family: Arial, sans-serif; font-size:15px; margin-bottom:24px;">
          Book your consultation
        </a>

        <div style="border:1px solid rgba(0,0,0,0.08); border-radius:18px; padding:18px 20px; background:#fbf8f2; margin-top:8px;">
          <p style="font-family: Arial, sans-serif; font-size:15px; line-height:1.8; color:rgba(0,0,0,0.72); margin:0;">
            Please book using the same email address associated with your Nomadissimi purchase whenever possible.
          </p>
        </div>

        <p style="font-family: Arial, sans-serif; font-size:15px; line-height:1.8; color:rgba(0,0,0,0.68); margin:24px 0 0;">
          Warmly,<br />
          Nomadissimi
        </p>
      </div>
    </div>
  `;

  await resend.emails.send({
    from,
    to: clientEmail,
    subject,
    html,
    replyTo: "info@nomadissimi.com",
  });
}

