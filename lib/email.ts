import nodemailer from "nodemailer";

export async function sendPortalAccessEmail(to: string, url: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  });

const subject = "Create your Nomadissimi portal account";
const html = `
  <div style="margin:0; padding:0; background:#FBF8F2; font-family: Arial, sans-serif; color:#2B2B2B;">
    <div style="max-width:640px; margin:0 auto; padding:40px 20px;">
      <div style="background:#ffffff; border:1px solid rgba(0,0,0,0.08); border-radius:28px; padding:40px 32px; box-shadow:0 24px 80px rgba(0,0,0,0.08);">
        <div style="font-size:12px; letter-spacing:0.22em; text-transform:uppercase; color:rgba(0,0,0,0.45); margin-bottom:16px;">
          Nomadissimi portal
        </div>

        <h1 style="margin:0 0 16px; font-size:44px; line-height:1.08; font-family: Georgia, 'Times New Roman', serif; font-weight:600; color:#111111;">
          Your portal is ready
        </h1>

        <p style="margin:0 0 18px; font-size:17px; line-height:1.8; color:rgba(0,0,0,0.72);">
          Welcome in. Your purchase has been added to your Nomadissimi portal.
        </p>

        <p style="margin:0 0 28px; font-size:16px; line-height:1.8; color:rgba(0,0,0,0.68);">
          Click below to create your password and access your private library.
        </p>

        <a
          href="${url}"
          style="
            display:inline-block;
            padding:14px 22px;
            border-radius:999px;
            background:#4B5D44;
            color:#ffffff;
            text-decoration:none;
            font-weight:600;
            font-size:16px;
          "
        >
          Create your portal account
        </a>

        <div style="margin-top:32px; padding-top:24px; border-top:1px solid rgba(0,0,0,0.08);">
          <p style="margin:0; font-size:14px; line-height:1.7; color:rgba(0,0,0,0.48);">
            Use the same email address you used at checkout so your guides appear correctly in your private library.
          </p>
        </div>
      </div>
    </div>
  </div>
`;

  await transporter.sendMail({
    from: `Nomadissimi <${process.env.EMAIL_USER!}>`,
    to,
    subject,
    html,
  });
}


