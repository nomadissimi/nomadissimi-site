type RenderEmailShellInput = {
  eyebrow?: string;
  title: string;
  bodyHtml: string;
  ctaLabel?: string;
  ctaUrl?: string;
  footerNote?: string;
};

export function renderEmailShell({
  eyebrow = "Nomadissimi",
  title,
  bodyHtml,
  ctaLabel,
  ctaUrl,
  footerNote,
}: RenderEmailShellInput) {
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; background:#fbf8f2; padding:32px; color:#1f1f1f;">
      <div style="max-width:680px; margin:0 auto; background:white; border:1px solid rgba(0,0,0,0.08); border-radius:28px; padding:40px 32px;">
        <p style="font-size:12px; letter-spacing:0.22em; text-transform:uppercase; color:rgba(0,0,0,0.42); margin:0 0 18px;">
          ${eyebrow}
        </p>

        <h1 style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif; font-size:42px; line-height:1.06; margin:0 0 24px; font-weight:500; letter-spacing:-0.03em; color:#1f1f1f;">
          ${title}
        </h1>

        <div style="font-size:16px; line-height:1.85; color:rgba(0,0,0,0.74);">
          ${bodyHtml}
        </div>

        ${
          ctaLabel && ctaUrl
            ? `
          <div style="margin:28px 0 0;">
            <a href="${ctaUrl}" style="display:inline-block; background:#4B5D44; color:white; text-decoration:none; padding:15px 24px; border-radius:999px; font-size:15px; box-shadow:0 14px 40px rgba(75,93,68,0.18);">
              ${ctaLabel}
            </a>
          </div>
        `
            : ""
        }

        ${
          footerNote
            ? `
          <div style="border-top:1px solid rgba(0,0,0,0.08); margin-top:28px; padding-top:28px;">
            <p style="font-size:15px; line-height:1.8; color:rgba(0,0,0,0.60); margin:0;">
              ${footerNote}
            </p>
          </div>
        `
            : ""
        }
      </div>
    </div>
  `;
}