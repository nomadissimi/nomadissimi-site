// app/privacy/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Nomadissimi",
  description:
    "How Nomadissimi collects and uses personal data in compliance with GDPR.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <h1 className="serif text-3xl md:text-4xl font-semibold">
        Privacy Policy
      </h1>
      <p className="sans text-[#2B2B2B]/70 mt-2">
        Last updated: 14 September 2025
      </p>

      <div className="prose prose-neutral max-w-none mt-8 leading-relaxed sans text-[17px]">
        <p>
          This policy explains how <strong>Nomadissimi</strong> (“we”, “us”,
          “our”) collects and processes personal data in compliance with the EU
          General Data Protection Regulation (GDPR).
        </p>

        <h2>Who we are</h2>
        <p>
          Nomadissimi is an Italy-focused visa guidance service. You can reach
          us at <a href="mailto:hello@nomadissimi.com">hello@nomadissimi.com</a>
          .
        </p>

        <h2>What data we process</h2>
        <ul>
          <li>Contact details (name, email, phone) when you reach out.</li>
          <li>
            Application-relevant info you choose to share (e.g., nationality,
            job type).
          </li>
          <li>
            Website usage data (only if you consent to analytics cookies).
          </li>
        </ul>

        <h2>Why we process it (lawful bases)</h2>
        <ul>
          <li>
            <strong>Contract</strong>: to respond, advise, or deliver services
            you request.
          </li>
          <li>
            <strong>Legitimate interests</strong>: to keep our service secure
            and improve it.
          </li>
          <li>
            <strong>Consent</strong>: for optional analytics/marketing and
            newsletters.
          </li>
        </ul>

        <h2>Retention</h2>
        <p>
          We keep data no longer than necessary for the purpose collected or to
          meet legal obligations, after which we delete or anonymise it.
        </p>

        <h2>Sharing</h2>
        <p>
          We don’t sell your data. We may share limited data with trusted
          processors (e.g., cloud hosting, scheduling, analytics) under
          GDPR-compliant agreements and only as needed to provide our service.
        </p>

        <h2>Your rights</h2>
        <ul>
          <li>Access, rectification, erasure</li>
          <li>Restriction or objection to processing</li>
          <li>Data portability</li>
          <li>Withdraw consent at any time (for consent-based processing)</li>
        </ul>
        <p>
          To exercise rights, email{" "}
          <a href="mailto:privacy@nomadissimi.com">privacy@nomadissimi.com</a>.
          You can also lodge a complaint with your local supervisory authority.
        </p>

        <h2>Cookies</h2>
        <p>
          See our{" "}
          <Link className="underline" href="/cookies">
            Cookie Notice
          </Link>
          . You can change preferences via “Cookie Preferences” in the footer.
        </p>

        <h2>International transfers</h2>
        <p>
          If data is transferred outside the EEA/UK, we use appropriate
          safeguards (e.g., SCCs).
        </p>

        <h2>Updates</h2>
        <p>
          We may update this policy; changes will appear here with a new “Last
          updated” date.
        </p>

        <p className="mt-8">
          <Link href="/" className="underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
