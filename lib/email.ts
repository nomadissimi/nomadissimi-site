import nodemailer from "nodemailer";

export async function sendMagicLinkEmail(to: string, url: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  });

  const subject = "Access your Nomadissimi Guide";
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="margin-bottom: 12px;">Your guide is ready</h2>
      <p style="margin-bottom: 16px;">
        Click the button below to securely access your private guide.
      </p>
      <p style="margin-bottom: 20px;">
        <a
          href="${url}"
          style="
            display: inline-block;
            padding: 12px 18px;
            border-radius: 999px;
            background: #4B5D44;
            color: white;
            text-decoration: none;
            font-weight: 600;
          "
        >
          Access your guide
        </a>
      </p>
      <p style="color: #666; font-size: 14px;">
        This link expires soon and can only be used once.
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: `Nomadissimi <${process.env.EMAIL_USER!}>`,
    to,
    subject,
    html,
  });
}

