// app/cookies/page.tsx
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Cookie Policy | Nomadissimi",
  description:
    "How Nomadissimi uses cookies and similar technologies, with options to manage your preferences in compliance with GDPR/ePrivacy.",
};

export default function CookiesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <h1 className="serif text-3xl md:text-4xl font-semibold">
        Cookie Policy
      </h1>
      <p className="sans text-[#2B2B2B]/70 mt-2">
        Last updated: 14 September 2025
      </p>

      <div className="prose prose-neutral max-w-none mt-8 leading-relaxed sans text-[17px]">
        <p>
          This Cookie Policy explains how <strong>Nomadissimi</strong> (“we”,
          “us”, “our”) uses cookies and similar technologies on this website. It
          complements our{" "}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>

        <h2>What are cookies?</h2>
        <p>
          Cookies are small text files stored on your device by your browser.
          They help websites function, remember preferences, improve
          performance, and—in some cases—measure or personalize content. Similar
          technologies include local storage, pixels, and tags. For simplicity
          we call them all “cookies” here.
        </p>

        <h2>How we use cookies</h2>
        <p>
          We use cookies only for purposes that are necessary or that you’ve
          consented to. Where required by the EU ePrivacy Directive and GDPR,
          non-essential cookies are used only after you give consent, which you
          can withdraw at any time.
        </p>

        <h3>Categories we use</h3>
        <ul>
          <li>
            <strong>Strictly necessary</strong> – Needed for core site features
            (e.g., page rendering, basic security). These do not require
            consent.
          </li>
          <li>
            <strong>Performance/analytics</strong> – Help us understand how the
            site is used so we can improve it (only with your consent).
          </li>
          <li>
            <strong>Functional</strong> – Remember choices (e.g., language).
            Used only if essential or if you consent.
          </li>
          <li>
            <strong>Marketing</strong> – Measure campaigns or personalize
            content (only with your consent).
          </li>
        </ul>

        <h2>Legal bases</h2>
        <p>
          For strictly necessary cookies, we rely on our legitimate interest in
          running a secure, functional website. For all other cookies we rely on
          your consent (GDPR Art. 6(1)(a)). You can update your preferences at
          any time.
        </p>

        <h2>Managing your preferences</h2>
        <p className="mb-3">You can control cookies by:</p>
        <ul>
          <li>
            Using our consent banner or the{" "}
            <button
              type="button"
              className="underline"
              onClick={() => {
                // If/when you add a Consent Management Platform, call it here:
                // @ts-ignore
                window?.cookieConsent?.showSettings?.();
                // Replace with your CMP's actual API (e.g., OneTrust, Cookiebot, ConsentManager, etc.)
              }}
            >
              Cookie preferences
            </button>{" "}
            link (when available).
          </li>
          <li>
            Adjusting your browser settings to block or delete cookies (note:
            this may affect site functionality).
          </li>
        </ul>

        <h2>Cookies we may use</h2>
        <p>
          Exact cookies depend on the features you use. Below is a typical
          example set. We keep this list up to date, but some integrations may
          change names or durations—especially third-party services.
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left">
                <th className="py-2 pr-4">Name</th>
                <th className="py-2 pr-4">Purpose / Category</th>
                <th className="py-2 pr-4">Provider</th>
                <th className="py-2 pr-4">Type</th>
                <th className="py-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-top">
                <td className="py-2 pr-4 font-medium">
                  __Host-next-auth.csrf-token (example)
                </td>
                <td className="py-2 pr-4">
                  Strictly necessary / security (anti-CSRF)
                </td>
                <td className="py-2 pr-4">Nomadissimi (first-party)</td>
                <td className="py-2 pr-4">HTTP cookie</td>
                <td className="py-2">Session</td>
              </tr>
              <tr className="align-top">
                <td className="py-2 pr-4 font-medium">_ga, _ga_*</td>
                <td className="py-2 pr-4">
                  Performance / analytics (Google Analytics 4)
                </td>
                <td className="py-2 pr-4">Google (third-party)</td>
                <td className="py-2 pr-4">HTTP cookie</td>
                <td className="py-2">Up to 24 months (if consented)</td>
              </tr>
              <tr className="align-top">
                <td className="py-2 pr-4 font-medium">_gid</td>
                <td className="py-2 pr-4">
                  Performance / analytics (Google Analytics)
                </td>
                <td className="py-2 pr-4">Google (third-party)</td>
                <td className="py-2 pr-4">HTTP cookie</td>
                <td className="py-2">24 hours (if consented)</td>
              </tr>
              <tr className="align-top">
                <td className="py-2 pr-4 font-medium">app_locale (example)</td>
                <td className="py-2 pr-4">Functional (remember language)</td>
                <td className="py-2 pr-4">Nomadissimi (first-party)</td>
                <td className="py-2 pr-4">Local storage</td>
                <td className="py-2">Until cleared</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Third-party services</h2>
        <p>
          If you interact with embedded tools (e.g., scheduling, survey, or
          payment services), those providers may set their own cookies. They act
          as independent controllers for those cookies. We recommend reviewing
          their policies.
        </p>

        <h2>International transfers</h2>
        <p>
          Where third-party providers are located outside the EEA/UK, we ensure
          appropriate safeguards (e.g., Standard Contractual Clauses) are in
          place.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this Cookie Policy? Email{" "}
          <a href="mailto:privacy@nomadissimi.com">privacy@nomadissimi.com</a>.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this notice from time to time. We’ll post the revised
          version here and update the “Last updated” date above.
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
