"use client";

import { useState } from "react";
import Link from "next/link";

export default function BundleIntakePage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const lifestylePriorities = formData
      .getAll("lifestylePriorities")
      .map((item) => item.toString());

    const payload = {
      intakeType: "bundle",
      firstName: formData.get("firstName")?.toString() ?? "",
      lastName: formData.get("lastName")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      city: formData.get("city")?.toString() ?? "",
      country: formData.get("country")?.toString() ?? "",
      citizenships: formData.get("citizenships")?.toString() ?? "",
      occupation: formData.get("occupation")?.toString() ?? "",
      workSetup: formData.get("workSetup")?.toString() ?? "",
      degreeTitle: "",
      workExperience: "",
      workSituation:
        [
          `Visa approved: ${formData.get("visaApproved")?.toString() ?? ""}`,
          `Currently in Italy: ${formData.get("currentlyInItaly")?.toString() ?? ""}`,
          `Main income context: ${formData.get("incomeContext")?.toString() ?? ""}`,
          `Lifestyle vision: ${formData.get("lifestyleVision")?.toString() ?? ""}`,
        ]
          .filter(Boolean)
          .join("\n\n") ?? "",
      pathway: formData.get("entryStatus")?.toString() ?? "",
      moveDate: formData.get("arrivalDate")?.toString() ?? "",
      consulate: formData.get("citiesConsidering")?.toString() ?? "",
      contactedConsulate: "",
      documentsStarted:
        [
          `Codice Fiscale status: ${formData.get("codiceFiscale")?.toString() ?? ""}`,
          `Housing status: ${formData.get("housingStatus")?.toString() ?? ""}`,
          `Permesso/residence process: ${formData.get("permessoStatus")?.toString() ?? ""}`,
          `Italian tax resident: ${formData.get("taxResident")?.toString() ?? ""}`,
          `Partita IVA status: ${formData.get("partitaStatus")?.toString() ?? ""}`,
          `Crypto income: ${formData.get("cryptoIncome")?.toString() ?? ""}`,
        ]
          .filter(Boolean)
          .join("\n\n") ?? "",
      stage:
        [
          formData.get("mainNeed")?.toString() ?? "",
          lifestylePriorities.length
            ? `Lifestyle priorities: ${lifestylePriorities.join(", ")}`
            : "",
        ]
          .filter(Boolean)
          .join("\n\n") ?? "",
      topQuestions: formData.get("topQuestions")?.toString() ?? "",
      biggestStress: formData.get("biggestStress")?.toString() ?? "",
      notes:
        [
          `Occupation: ${formData.get("occupation")?.toString() ?? ""}`,
          `Income range: ${formData.get("incomeRange")?.toString() ?? ""}`,
          `Payment method/currency: ${formData.get("paymentCurrency")?.toString() ?? ""}`,
          `Italy experience: ${formData.get("italyExperience")?.toString() ?? ""}`,
          `Help topics: ${formData.get("helpTopics")?.toString() ?? ""}`,
          formData.get("notes")?.toString() ?? "",
        ]
          .filter(Boolean)
          .join("\n\n") ?? "",
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
            answers and send your private Welcome to Italy consultation booking
            link by email as soon as possible.
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
            Please complete this onboarding form before your private "Welcome to
            Italy" session. It helps us understand your residence setup, tax
            context, and settling-in priorities so we can make the call focused,
            strategic, and genuinely useful.
          </p>

          <div className="mt-7 rounded-2xl border border-black/10 bg-[#FBF8F2] px-5 py-4">
            <p className="sans text-[15px] leading-[1.75] text-black/70">
              This form should take around 7–10 minutes. Once reviewed, we’ll
              send your private scheduling link by email.
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
              <h2 className="serif text-2xl text-black">Italy setup status</h2>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <Field label="Was your visa already approved?" required>
                  <select
                    name="visaApproved"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>I don't know</option>
                  </select>
                </Field>

                <Field
                  label="What type of visa or entry status are you using?"
                  required
                >
                  <input
                    name="entryStatus"
                    required
                    placeholder="ex: Digital Nomad Visa"
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  />
                </Field>

                <Field label="Are you currently in Italy?" required>
                  <select
                    name="currentlyInItaly"
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

                <Field
                  label="When did you arrive in Italy? Or when do you plan to arrive?"
                  required
                >
                  <input
                    name="arrivalDate"
                    required
                    placeholder="ex: April 2026"
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  />
                </Field>

                <Field
                  label="What city/region are you living in or considering?"
                  required
                >
                  <input
                    name="citiesConsidering"
                    required
                    placeholder="ex: Florence, Catania, Milan..."
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  />
                </Field>

                <Field label="Do you already have a Codice Fiscale?" required>
                  <select
                    name="codiceFiscale"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Yes</option>
                    <option>Not yet</option>
                    <option>I don't know</option>
                  </select>
                </Field>

                <Field
                  label="Do you already have a rental contract or declared place of residence?"
                  required
                >
                  <select
                    name="housingStatus"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>In the process</option>
                  </select>
                </Field>
              </div>
            </section>

            <section className="rounded-[24px] border border-black/10 bg-[#FBF8F2] p-6">
              <h2 className="serif text-2xl text-black">
                Work and tax context
              </h2>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <Field
                  label="Which best describes your current work setup?"
                  required
                >
                  <select
                    name="workSetup"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Freelancer/self-employed</option>
                    <option>Remote employee</option>
                    <option>Business owner</option>
                    <option>Mixed income</option>
                    <option>Not sure</option>
                  </select>
                </Field>

                <Field label="Current occupation - professional title" required>
                  <input
                    name="occupation"
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  />
                </Field>

                <Field label="Estimated annual income range">
                  <select
                    name="incomeRange"
                    defaultValue=""
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Under €30,000</option>
                    <option>€30,000–€50,000</option>
                    <option>€50,000–€85,000</option>
                    <option>Over €85,000</option>
                    <option>Prefer not to say</option>
                  </select>
                </Field>

                <Field label="How are you usually paid?">
                  <select
                    name="paymentCurrency"
                    defaultValue=""
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>GBP</option>
                    <option>Other fiat currencies</option>
                    <option>Crypto (including stablecoins)</option>
                    <option>More than one payment method</option>
                  </select>
                </Field>

                <Field label="Are you already an Italian tax resident?">
                  <select
                    name="taxResident"
                    defaultValue=""
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not sure</option>
                  </select>
                </Field>

                <Field label="Are you receiving or planning to receive income in crypto?">
                  <select
                    name="cryptoIncome"
                    defaultValue=""
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Possibly</option>
                  </select>
                </Field>

                <Field label="What is your current Partita IVA situation?">
                  <select
                    name="partitaStatus"
                    defaultValue=""
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>I do not need one</option>
                    <option>I will likely need one</option>
                    <option>I already have one</option>
                    <option>I’m not sure yet</option>
                  </select>
                </Field>

                <Field
                  label="What is the main thing you want clarity on?"
                  required
                >
                  <select
                    name="mainNeed"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Residence setup</option>
                    <option>Opening Partita IVA</option>
                    <option>Choosing a tax regime</option>
                    <option>Tax residency</option>
                    <option>Settling in Italy</option>
                    <option>All of the above</option>
                  </select>
                </Field>
              </div>

              <Field
                label="What is your main source of income?"
                className="mt-5"
              >
                <textarea
                  name="incomeContext"
                  rows={4}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                />
              </Field>
            </section>

            <section className="rounded-[24px] border border-black/10 bg-[#FBF8F2] p-6">
              <h2 className="serif text-2xl text-black">
                Settling-in priorities
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
                  required
                  rows={4}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                />
              </Field>

              <Field
                label="Which topics would you most like help with in daily life?"
                className="mt-5"
              >
                <textarea
                  name="helpTopics"
                  rows={4}
                  placeholder="ex: where to live, renting, healthcare, cultural adaptation, regional differences..."
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                />
              </Field>
            </section>

            <section className="rounded-[24px] border border-black/10 bg-[#FBF8F2] p-6">
              <h2 className="serif text-2xl text-black">
                Consultation priorities
              </h2>

              <p className="mt-4 max-w-2xl sans text-[16px] leading-[1.8] text-black/65">
                You can share as much or as little context as feels relevant.
              </p>

              <div className="mt-5 space-y-5">
                <Field
                  label="What are your top questions for this Welcome to Italy consultation?"
                  required
                >
                  <textarea
                    name="topQuestions"
                    required
                    rows={5}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  />
                </Field>

                <Field
                  label="What feels most confusing, stressful, or urgent right now?"
                  required
                >
                  <textarea
                    name="biggestStress"
                    required
                    rows={4}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  />
                </Field>

                <Field label="Is there anything else you'd like us to know before the call?">
                  <textarea
                    name="notes"
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
                We’ll be in touch soon. Looking forward to our session together!
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
