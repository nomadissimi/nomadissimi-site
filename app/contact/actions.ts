"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    throw new Error("Missing required fields");
  }

  // For now, we just log it (safe + works)
  console.log("New contact message:");
  console.log({ name, email, message });

  // Later we can:
  // - send email
  // - save to database
  // - send to Notion / Slack / Airtable
}
