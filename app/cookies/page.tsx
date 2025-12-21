// app/cookies/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | Nomadissimi",
  description:
    "How Nomadissimi uses cookies and similar technologies, and how you can control them.",
};

export default function CookiesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <h1 className="serif text-3xl md:text-4xl font-semibold">
        Cookie Policy
      </h1>
      <p className="sans text-[#2B2B2B]/70 mt-2">
        Last updated: 21 December 2025
      </p>

      <div className="mt-8 space-y-10 leading-relaxed sans text-[17px] text-[#1E1E1E]">
        {/* Intro */}
        <section>
          <p>
            This Cookie Policy explains how Nomadissimi (“we”, “us”, or “our”)
            uses cookies and similar technologies when you visit our website at{" "}
            <a
              className="underline"
              href="https://www.nomadissimi.com"
              target="_blank"
              rel="noreferrer"
            >
              https://www.nomadissimi.com
            </a>{" "}
            (the “Website”).
          </p>
          <p className="mt-3">
            It explains what these technologies are, why we use them, and your
            rights to control their use, in accordance with applicable European
            Union and Italian data protection laws.
          </p>
          <p className="mt-3">
            In some cases, cookies may collect information that is considered
            personal data under the GDPR, particularly when combined with other
            information.
          </p>
        </section>

        {/* What are cookies */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            What are cookies?
          </h2>
          <p>
            Cookies are small text files that are placed on your device
            (computer, smartphone, or tablet) when you visit a website. Cookies
            are widely used to make websites work properly, operate more
            efficiently, and provide information to website owners.
          </p>

          <p className="mt-3">
            Cookies set directly by the website owner (Nomadissimi) are called{" "}
            <strong>first-party cookies</strong>.
            <br />
            Cookies set by third parties are called{" "}
            <strong>third-party cookies</strong> and may enable third-party
            features or functionality, such as analytics or embedded content.
          </p>
        </section>

        {/* Why we use cookies */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            Why do we use cookies?
          </h2>
          <p>We use cookies for the following purposes:</p>

          <div className="mt-4 space-y-4">
            <div>
              <p className="font-semibold">Strictly necessary cookies:</p>
              <p className="mt-1">
                These cookies are essential for the Website to function properly
                and cannot be disabled. They enable core functionalities such as
                security, network management, and accessibility.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Analytics and performance cookies (optional):
              </p>
              <p className="mt-1">
                These cookies help us understand how visitors interact with our
                Website (for example, which pages are visited most often), so we
                can improve performance and usability. These cookies are used
                only with your consent.
              </p>
            </div>

            <div>
              <p className="font-semibold">Functionality cookies (optional):</p>
              <p className="mt-1">
                These cookies allow the Website to remember choices you make
                (such as language preferences) to provide a more personalised
                experience.
              </p>
            </div>
          </div>

          <p className="mt-4">
            Nomadissimi does not use cookies for intrusive profiling or
            behavioural advertising without your explicit consent.
          </p>
        </section>

        {/* Control cookies */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            How can you control cookies?
          </h2>
          <p>
            You have the right to decide whether to accept or reject
            non-essential cookies.
          </p>

          <p className="mt-3">
            You can manage your cookie preferences at any time through:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>our cookie consent banner / Cookie Preferences tool, or</li>
            <li>
              your browser settings (where you can block or delete cookies).
            </li>
          </ul>

          <p className="mt-3">
            Please note that disabling certain cookies may affect the
            functionality of the Website.
          </p>
          <p className="mt-3">
            Strictly necessary cookies cannot be disabled, as they are required
            for the Website to operate.
          </p>
        </section>

        {/* Other tracking tech */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            Do you use other tracking technologies?
          </h2>
          <p>
            In addition to cookies, we may use similar technologies such as
            pixels or web beacons to understand how the Website is used or to
            measure the effectiveness of communications.
          </p>
          <p className="mt-3">
            These technologies are typically dependent on cookies to function
            properly. If you choose to reject cookies, some of these features
            may not work as intended.
          </p>
        </section>

        {/* Targeted/advertising */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            Do you serve targeted or advertising cookies?
          </h2>
          <p>
            Nomadissimi does not serve targeted or behavioural advertising
            cookies without your explicit consent.
          </p>
          <p className="mt-3">
            If third-party tools (such as analytics providers) are used, they
            are configured in accordance with EU and Italian data protection
            requirements and only activated where legally permitted.
          </p>
        </section>

        {/* Updates */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            How often will you update this Cookie Policy?
          </h2>
          <p>
            We may update this Cookie Policy from time to time to reflect
            changes in:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>the cookies we use,</li>
            <li>legal or regulatory requirements, or</li>
            <li>our Website functionality.</li>
          </ul>
          <p className="mt-3">
            Any changes will be published on this page, and the “Last updated”
            date will be revised accordingly. We encourage you to review this
            policy periodically.
          </p>
        </section>

        {/* Contact */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            Where can I get further information?
          </h2>
          <p>
            If you have questions about our use of cookies or similar
            technologies, please contact us at:{" "}
            <a className="underline" href="mailto:nomadissimi@gmail.com">
              nomadissimi@gmail.com
              <br />
            </a>
          </p>

          {/* blank space */}
          <div className="h-4" />

          {/* Privacy box */}

          <div className="mt-3 rounded-2xl border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)] p-5">
            <p className="mt-1 text-[#2B2B2B]/70">
              For more information about how we process personal data, please
              see our{" "}
              <Link className="underline" href="/privacy">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <p className="mt-8">
            <Link href="/" className="underline">
              ← Back to home
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
