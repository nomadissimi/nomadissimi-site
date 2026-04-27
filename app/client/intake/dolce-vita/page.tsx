"use client";

import { useState } from "react";
import Link from "next/link";

export default function DolceVitaIntakePage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const lifestylePriorities = formData.getAll("lifestylePriorities");

    const payload = {
      intakeType: "dolce-vita",
      firstName: formData.get("firstName")?.toString() ?? "",
      lastName: formData.get("lastName")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      city: formData.get("city")?.toString() ?? "",
      country: formData.get("country")?.toString() ?? "",
      citizenships: formData.get("citizenships")?.toString() ?? "",
      occupation: "",
      workSetup: formData.get("movingWith")?.toString() ?? "",
      degreeTitle: "",
      workExperience: "",
      workSituation: formData.get("lifestyleVision")?.toString() ?? "",
      pathway: formData.get("italyExperience")?.toString() ?? "",
      moveDate: "",
      consulate: formData.get("citiesConsidering")?.toString() ?? "",
      contactedConsulate: "",
      documentsStarted: "",
      stage: lifestylePriorities.join(", "),
      topQuestions: formData.get("topQuestions")?.toString() ?? "",
      biggestStress: formData.get("biggestStress")?.toString() ?? "",
      notes: formData.get("notes")?.toString() ?? "",
    };

    try {
      const res = await fetch("/api/client-intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      alert(
        "Something went wrong while submitting the form. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-[28px] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)] md:p-10">
          <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
            Nomadissimi client onboarding
          </p>

          <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
            You’re all set
          </h1>

          <p className="mt-4 max-w-xl sans text-[16px] leading-[1.8] text-black/65">
            We’ve received your onboarding form. Our team will review your
            answers and send your private consultation booking link by email as
            soon as possible.
          </p>

          <div className="mt-7 rounded-2xl border border-black/10 bg-[#FBF8F2] px-5 py-4">
            <p className="sans text-[15px] leading-[1.75] text-black/70">
              Please keep an eye on your inbox and promotions/spam folder just
              in case.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] transition hover:bg-[#3E4E38]"
            >
              Return to homepage
            </Link>

            <Link
              href="/contact"
              className="sans text-sm text-black/55 transition hover:text-black/75"
            >
              Need help? Contact us →
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[28px] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)] md:p-10">
          <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
            Nomadissimi client onboarding
          </p>

          <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
            Before we prepare your consultation
          </h1>

          <p className="mt-4 max-w-2xl sans text-[16px] leading-[1.8] text-black/65">
            Please complete this short onboarding form before your call. It
            helps us understand the kind of life you are hoping to build in
            Italy so we can best tailor the consultation to your priorities,
            concerns, and lifestyle vision.
          </p>

          <div className="mt-7 rounded-2xl border border-black/10 bg-[#FBF8F2] px-5 py-4">
            <p className="sans text-[15px] leading-[1.75] text-black/70">
              This form should take around 5 minutes. Once reviewed, we’ll send
              your private scheduling link by email.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-8">
            <section className="rounded-[24px] border border-black/10 bg-[#FBF8F2] p-6">
              <h2 className="serif text-2xl text-black">Personal details</h2>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <Field label="First name" required>
                  <input
                    name="firstName"
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  />
                </Field>

                <Field label="Last name" required>
                  <input
                    name="lastName"
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  />
                </Field>

                <Field label="Email address" required>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  />
                </Field>

                <Field label="Current city of residence">
                  <input
                    name="city"
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  />
                </Field>

                <Field label="Current country of residence" required>
                  <input
                    name="country"
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  />
                </Field>

                <Field label="Citizenship(s)" required>
                  <input
                    name="citizenships"
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  />
                </Field>
              </div>
            </section>

            <section className="rounded-[24px] border border-black/10 bg-[#FBF8F2] p-6">
              <h2 className="serif text-2xl text-black">Lifestyle context</h2>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <Field label="Have you spent time in Italy before?" required>
                  <select
                    name="italyExperience"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </Field>
              </div>

              <Field
                label="Which regions or cities are you currently considering? If you've already moved, where are you based in?"
                className="mt-5"
              >
                <textarea
                  name="citiesConsidering"
                  rows={4}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                />
              </Field>
            </section>

            <section className="rounded-[24px] border border-black/10 bg-[#FBF8F2] p-6">
              <h2 className="serif text-2xl text-black">
                Quality of life priorities
              </h2>

              <div className="mt-5">
                <p className="mb-3 sans text-sm text-black/70">
                  What matters most to you in daily life?
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    "Walkability",
                    "Cost of living",
                    "Food culture",
                    "Beach/sea",
                    "Arts/culture",
                    "Slower pace of life",
                    "International community",
                    "Safety",
                    "Family-friendliness",
                    "LGBTQ+ friendliness",
                    "Climate",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 sans text-[15px] text-black/75"
                    >
                      <input
                        type="checkbox"
                        name="lifestylePriorities"
                        value={item}
                        className="h-4 w-4"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Field
                label="What kind of lifestyle are you hoping to create in Italy?"
                required
                className="mt-5"
              >
                <textarea
                  name="lifestyleVision"
                  rows={4}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                />
              </Field>

              <Field
                label="What concerns you most about daily life in Italy?"
                required
                className="mt-5"
              >
                <textarea
                  name="biggestStress"
                  rows={4}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                />
              </Field>

              <Field
                label="Which topics would you most like help with?"
                required
                className="mt-5"
              >
                <textarea
                  name="helpTopics"
                  placeholder="ex: where to live, renting, healthcare, cultural adaptation, regional differences, Italian vacation itineraries..."
                  rows={4}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                />
              </Field>
            </section>

            <section className="rounded-[24px] border border-black/10 bg-[#FBF8F2] p-6">
              <h2 className="serif text-2xl text-black">
                Consultation priorities
              </h2>

              <div className="mt-5 space-y-5">
                <Field
                  label="What are your top questions for this consultation?"
                  required
                >
                  <textarea
                    name="topQuestions"
                    required
                    rows={5}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  />
                </Field>

                <Field label="Is there anything we should know to make this process easier or more accessible for you?">
                  <p className="mt-2 max-w-2xl sans text-[13px] leading-[1.8] text-black/65">
                    🌻 This may include chronic illness, disability,
                    neurodivergence, caregiving responsibilities, family
                    logistics, scheduling needs, communication preferences, or
                    anything else that shapes how you move through relocation.
                  </p>
                  <p className="mt-2 max-w-2xl sans text-[12px] leading-[1.8] text-black/65">
                    Sharing is optional. We only use this information to adapt
                    our support to your needs and make the process smoother for
                    you.
                  </p>

                  <textarea
                    name="accessibility_needs"
                    rows={4}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  />
                </Field>
              </div>
            </section>

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] transition hover:bg-[#3E4E38] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit onboarding form"}
              </button>

              <p className="mt-4 sans text-sm leading-[1.7] text-black/45">
                We review each submission personally before sending your private
                scheduling link.
              </p>

              <p className="mt-4 sans text-sm leading-[1.7] text-black/45">
                {" "}
                We'll be in touch soon. Looking forward to our session together!
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  required,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block sans text-sm text-black/70">
        {label} {required ? <span className="text-black/40">*</span> : null}
      </label>
      {children}
    </div>
  );
}
