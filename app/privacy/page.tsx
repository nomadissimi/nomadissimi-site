// app/privacy/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy • Nomadissimi",
  description:
    "How Nomadissimi collects and uses personal data in compliance with GDPR and Italian data protection laws.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      {/* Page title */}
      <h1 className="serif text-3xl md:text-4xl font-semibold">
        Privacy Policy
      </h1>
      <p className="sans text-[#2B2B2B]/70 mt-2">
        Last updated: 21 December 2025
      </p>

      {/* Content */}
      <div className="mt-10 space-y-10 sans text-[17px] leading-relaxed text-[#2B2B2B]/85">
        {/* Intro */}
        <p>
          At Nomadissimi, we respect your privacy and take the protection of
          your personal information seriously. This Privacy Policy explains what
          information we collect, why we collect it, and how we handle it, in
          accordance with the EU General Data Protection Regulation (GDPR) and
          applicable Italian data protection laws.
        </p>

        {/* Section */}
        <section className="section-divider">
          {" "}
          <h2 className="serif text-xl font-semibold mb-3">
            Information We Collect
          </h2>
          <p>
            We only collect information that is necessary to run our website and
            provide our services. You may voluntarily provide information when
            you contact us, book a call, purchase a service, or complete an
            onboarding form.
          </p>
          <p className="mt-3">
            Depending on the service selected, this information may include:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>Full name</li>
            <li>Residential address</li>
            <li>Nationality and country of residence</li>
            <li>Email address and phone number</li>
            <li>Occupation and professional activity</li>
            <li>Employment, freelance, business, or academic information</li>
            <li>
              Date of birth or gender, only where relevant to the selected
              service
            </li>
            <li>
              Other information you choose to share that is relevant to
              assessing general visa eligibility and service suitability
            </li>
          </ul>
          <p className="mt-3">
            We only request information that is necessary to deliver the service
            you have purchased.
          </p>
        </section>

        {/* Section */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            Information Collected Automatically
          </h2>
          <p>
            When you visit our website, limited technical information may be
            collected, such as:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>IP address</li>
            <li>Device and browser type</li>
            <li>Pages visited and general usage data</li>
          </ul>
          <p className="mt-3">
            This information is collected only where legally permitted and,
            where required, only with your consent.
          </p>
        </section>

        {/* Section */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            Why We Use Your Information
          </h2>
          <p>We use personal information to:</p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>Respond to enquiries and requests</li>
            <li>Provide visa guidance and Italy-focused relocation services</li>
            <li>
              Assess general eligibility and service suitability based on the
              information provided
            </li>
            <li>Deliver the services included in your selected package</li>
            <li>Schedule consultations and communicate with you</li>
            <li>Manage payments and issue invoices</li>
            <li>Improve our website and services</li>
            <li>
              Send updates or newsletters only if you have explicitly opted in
            </li>
          </ul>
          <p className="mt-3">
            Nomadissimi does <strong>not</strong> use personal data for
            automated decision-making or profiling.
          </p>
        </section>

        {/* Section */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            Legal Grounds for Processing
          </h2>

          <p className="mt-3">
            We process personal data based on one or more of the following legal
            grounds under GDPR:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Performance of a contract: </strong> to provide the
              services you have requested or purchased
            </li>
            <li>
              <strong>Consent:</strong> where you have explicitly given it
            </li>
            <li>
              <strong>Legal obligations:</strong> such as accounting or
              regulatory requirements
            </li>
            <li>
              <strong>Legitimate interests:</strong> including service
              improvement and website security, without overriding your rights
            </li>
          </ul>
        </section>

        {/* Section */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            Onboarding Forms and Terms Acceptance
          </h2>
          <p>
            When you purchase one of our services, you may be asked to complete
            an onboarding form. Information collected through this form is used
            solely to deliver the service you selected and to provide guidance.
          </p>
          <p className="mt-3">
            As part of the onboarding process, you are required to confirm that
            you have read and accepted our{" "}
            <Link
              href="/terms"
              className="underline hover:opacity-80 transition"
            >
              Terms & Conditions
            </Link>
            . This confirmation is recorded for contractual and legal purposes.
          </p>
          <p className="mt-3">
            Nomadissimi does <strong>not</strong> act as an immigration
            authority and does <strong>not</strong> guarantee visa outcomes.
          </p>
        </section>

        {/* Section */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            How Long We Keep Your Information
          </h2>
          <p>
            We retain personal information only for as long as necessary to
            fulfil the purposes for which it was collected, or as required by
            applicable law. When data is no longer needed, it is securely
            deleted or anonymized.
          </p>
        </section>

        {/* Section */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            Who We Share Information With
          </h2>
          <p>
            We do <strong>not</strong> sell personal data.
          </p>
          <p className="mt-3">
            We may share limited personal information with trusted third-party
            service providers who help us operate our website or deliver our
            services, including hosting, scheduling, payment processing, and
            analytics (where consent is required).
          </p>
        </section>

        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            Payments and Financial Information
          </h2>
          <p>
            Payments for Nomadissimi services are processed securely through
            trusted third-party payment providers.
          </p>
          <p className="mt-3">
            Nomadissimi does <strong>not</strong> collect, store, or have access
            to your payment card details (number, PIN, security code, expiry
            date) at any time.
          </p>
          <p className="mt-3">
            All payment transactions are handled directly by the payment
            provider in accordance with their own privacy and security policies.
          </p>
        </section>

        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            International Data Transfers
          </h2>
          <p>
            Where personal data is processed outside the European Economic Area
            or the United Kingdom, we ensure appropriate safeguards are in
            place, such as Standard Contractual Clauses approved by the European
            Commission.
          </p>
        </section>

        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            Cookies &amp; Tracking Technologies
          </h2>
          <p>
            We use cookies and similar technologies to ensure our website
            functions properly, to understand how visitors use our site, and to
            improve the overall user experience.
          </p>
          <p className="mt-3">
            Where required by law, cookies are used only with your consent. You
            can manage or withdraw your cookie preferences at any time through
            your browser settings or via the “Cookie Preferences” link available
            on our website.
          </p>
          <p className="mt-3">
            For more detailed information about the types of cookies we use and
            their purposes, please refer to our{" "}
            <Link href="/cookies" className="underline">
              Cookie Policy
            </Link>
            .
          </p>
        </section>

        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to
            protect personal data against unauthorized access, loss, misuse, or
            alteration.
          </p>
          <p className="mt-3">
            These measures are designed to ensure a level of security
            appropriate to the nature of the data and the risks involved. While
            no system can guarantee absolute security, we regularly review and
            update our practices to maintain a high standard of data protection.
          </p>
        </section>

        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            Children’s Privacy
          </h2>
          <p>
            Our services are not intended for individuals under the age of 16.
            We do not knowingly collect or process personal information from
            anyone under 16.
          </p>
          <p className="mt-3">
            If we become aware that personal data from a child has been
            collected inadvertently, we will take steps to delete such
            information as soon as possible.
          </p>
        </section>

        {/* your rights Section */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">Your Rights</h2>
          <p className="mt-3">Under GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access your personal data</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your data</li>
            <li>Restrict or object to processing</li>
            <li>Receive your data in a portable format</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="mt-3">
            If you are a California resident, you may have additional rights
            under the California Consumer Privacy Act (CCPA), including the
            right to request information about how your personal data is
            collected and used, and the right to opt out of the sale of personal
            information. Nomadissimi does <strong>not</strong> sell personal
            data.
          </p>
          <p className="mt-3">
            To exercise your rights, contact us at{" "}
            <a href="mailto:nomadissimi@gmail.com">nomadissimi@gmail.com</a>.
          </p>
        </section>

        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, legal requirements, or services.
          </p>
          <p className="mt-3">
            When we do, we will update the “Last updated” date at the top of
            this page. We encourage you to review this policy periodically to
            stay informed about how we protect your personal information.
          </p>
        </section>

        {/* Footer */}

        <p className="pt-6">
          <Link href="/" className="underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
