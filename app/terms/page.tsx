// app/terms/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions • Nomadissimi",
  description:
    "The legal bits for Nomadissimi services, including our no-guarantee visa clause.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-16 md:py-24">
      <h1 className="serif text-4xl md:text-5xl font-semibold">
        Terms & Conditions
      </h1>
      <p className="sans text-sm md:text-base text-[#2B2B2B]/70 mt-3">
        Last updated:{" "}
        {new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>

      <div className="mt-10 space-y-8">
        <p className="sans text-[16px] leading-relaxed text-[#2B2B2B]/90">
          Welcome to Nomadissimi. By booking, purchasing, or using our services
          you agree to these terms.
        </p>

        <section>
          <h2 className="serif text-2xl font-semibold mb-2">
            1) No guarantee of visa
          </h2>
          <p className="sans text-[16px] leading-relaxed text-[#2B2B2B]/90">
            <strong>
              We cannot guarantee a visa since final decision power is held by
              the Italian government.
            </strong>{" "}
            We provide guidance, document preparation, and support; outcomes are
            ultimately decided by consulates and other authorities.
          </p>
        </section>

        <section>
          <h2 className="serif text-2xl font-semibold mb-2">
            2) Not legal advice
          </h2>
          <p className="sans text-[16px] leading-relaxed text-[#2B2B2B]/90">
            Our services are consultancy and preparation assistance. We are not
            a law firm and do not provide legal representation. Nothing here
            creates an attorney–client relationship.
          </p>
        </section>

        <section>
          <h2 className="serif text-2xl font-semibold mb-2">
            3) Your responsibilities
          </h2>
          <p className="sans text-[16px] leading-relaxed text-[#2B2B2B]/90">
            You are responsible for the truthfulness and completeness of the
            information you submit, attending appointments, and meeting
            deadlines. Requirements can vary by consulate and may change at any
            time.
          </p>
        </section>

        <section>
          <h2 className="serif text-2xl font-semibold mb-2">
            4) Fees & refunds
          </h2>
          <p className="sans text-[16px] leading-relaxed text-[#2B2B2B]/90">
            Fees cover our time and expertise. Unless stated otherwise in
            writing, fees are non-refundable once work has started. Rescheduling
            or scope changes may incur additional fees.
          </p>
        </section>

        <section>
          <h2 className="serif text-2xl font-semibold mb-2">
            5) Scheduling & availability
          </h2>
          <p className="sans text-[16px] leading-relaxed text-[#2B2B2B]/90">
            Consulate appointment availability and processing times are outside
            our control. Timeframes mentioned are estimates.
          </p>
        </section>

        <section>
          <h2 className="serif text-2xl font-semibold mb-2">6) Privacy</h2>
          <p className="sans text-[16px] leading-relaxed text-[#2B2B2B]/90">
            We handle your information with care. See our{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </section>

        <section>
          <h2 className="serif text-2xl font-semibold mb-2">
            7) Intellectual property
          </h2>
          <p className="sans text-[16px] leading-relaxed text-[#2B2B2B]/90">
            Checklists, templates, and materials we provide are for your
            personal use only and may not be redistributed or resold.
          </p>
        </section>

        <section>
          <h2 className="serif text-2xl font-semibold mb-2">
            8) Limitation of liability
          </h2>
          <p className="sans text-[16px] leading-relaxed text-[#2B2B2B]/90">
            To the maximum extent permitted by law, Nomadissimi shall not be
            liable for indirect, incidental, or consequential damages. Our
            aggregate liability shall not exceed the amount you paid for the
            specific service.
          </p>
        </section>

        <section>
          <h2 className="serif text-2xl font-semibold mb-2">
            9) Governing law
          </h2>
          <p className="sans text-[16px] leading-relaxed text-[#2B2B2B]/90">
            These terms are governed by the laws of Italy (without regard to
            conflict-of-law rules). Any disputes will be handled in the courts
            of [City], Italy.
          </p>
        </section>

        <section>
          <h2 className="serif text-2xl font-semibold mb-2">
            10) Changes to these terms
          </h2>
          <p className="sans text-[16px] leading-relaxed text-[#2B2B2B]/90">
            We may update these terms from time to time. The revised version
            becomes effective upon posting.
          </p>
        </section>

        <section>
          <h2 className="serif text-2xl font-semibold mb-2">Contact</h2>
          <p className="sans text-[16px] leading-relaxed text-[#2B2B2B]/90">
            Questions?{" "}
            <Link href="/#contact" className="underline">
              Contact us
            </Link>
            .
          </p>
        </section>
      </div>

      <div className="mt-10">
        <Link href="/" className="underline text-sm">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
