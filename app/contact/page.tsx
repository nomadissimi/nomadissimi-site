"use client";

import { useState } from "react";
import { submitContactForm } from "./actions";

<span className="text-[#C9A86A] ml-1">*</span>;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [statusMsg, setStatusMsg] = useState("");

  

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      subject: String(form.get("subject") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      // Placeholder for now:
      // Later you can POST to /api/contact to send email (Resend, SendGrid, etc.)
      console.log("CONTACT FORM:", payload);

      setStatus("sent");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 2500);
    }
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const nameOk = name.trim().length > 0;
  const messageOk = message.trim().length > 0;

  const canSubmit = nameOk && emailOk && messageOk && !isSubmitting;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setTouched({ name: true, email: true, message: true });
    if (!nameOk || !emailOk || !messageOk) return;

    setIsSubmitting(true);
    setServerError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) throw new Error("Something went wrong. Please try again.");

      setSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTouched({ name: false, email: false, message: false });
    } catch (err: any) {
      setServerError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        {/* Title */}
        <h1 className="serif text-4xl md:text-5xl font-semibold text-center">
          Contact us
        </h1>

        {/* Couture rule */}
        <div className="mt-5 flex justify-center">
          <div className="h-px w-44 bg-gradient-to-r from-transparent via-[#C9A86A]/70 to-transparent" />
        </div>

        <p className="sans mt-6 text-center text-[#2B2B2B]/75">
          Tell us what questions you have, and we’ll point you to the right next
          step.
        </p>

        {/* Form */}
        <div className="mt-10 border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10">
            {success && (
              <div className="mb-6 border border-black/10 bg-[#5d7866] p-4 text-semibold text-[#ffffff]/75">
                Message received. We’ll get back to you soon.
              </div>
            )}

            {serverError && (
              <div className="mb-6 border border-black/10 bg-[#F9F5EE] p-4 text-sm text-black/75">
                {serverError}
              </div>
            )}

            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-5">
              {/* Field 1: Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name
                  <span className="text-[#C9A86A] ml-1">*</span>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  required
                  placeholder="Your name"
                  className="mt-2 w-full border border-black/10 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4B5D44]"
                />
                {touched.name && !nameOk && (
                  <p className="mt-2 text-sm text-black/60">
                    Please enter your name.
                  </p>
                )}
              </div>

              {/* Field 2: Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                  <span className="text-[#C9A86A] ml-1">*</span>
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full border border-black/10 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4B5D44]"
                />
                {touched.email && !emailOk && (
                  <p className="mt-2 text-sm text-black/60">
                    Please enter a valid email.
                  </p>
                )}
              </div>
            </div>

            {/* Field 3: Subject */}
            <div className="mt-5">
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="remote worker visa: what package do I need?"
                className="mt-2 w-full border border-black/10 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4B5D44]"
              />
            </div>

            {/* Field 4: Message */}
            <div className="mt-5">
              <label className="block text-sm font-medium mb-1">
                Message
                <span className="text-[#C9A86A] ml-1">*</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                required
                rows={7}
                placeholder="What doubt or question can we help with?"
                className="mt-2 w-full border border-black/10 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4B5D44] resize-y"
              />
              {touched.message && !messageOk && (
                <p className="mt-2 text-sm text-black/60">
                  Please write a message so we can receive your submission.
                </p>
              )}
            </div>

            <p className="text-xs text-black/50 mt-2">
              Fields marked with <span className="text-[#C9A86A]">*</span> are
              required
            </p>

            {/* Submit */}
            <div className="mt-7 flex items-center gap-4">
              <button
                type="submit"
                disabled={!canSubmit}
                className={[
                  "serif inline-flex items-center justify-center px-7 py-3.5",
                  "border border-[#4B5D44] bg-[#4B5D44] text-white",
                  "text-[18px] md:text-[19px] font-semibold tracking-[0.06em]",
                  "transition hover:bg-[#3E4E38]",
                  "disabled:opacity-60 disabled:cursor-not-allowed",
                ].join(" ")}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>

              {/* Status micro-copy */}
              <div className="sans text-sm text-black/60">
                {status === "sent" && "Sent. We’ll reply shortly."}
                {status === "error" && "Something went wrong. Try again."}
              </div>
            </div>

            <p className="sans mt-4 text-xs text-black/50">
              By submitting, you agree we may reply to your message by email.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
