// app/terms/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Nomadissimi",
  description:
    "Terms and conditions governing the use of the Nomadissimi website and services.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      {/* Title */}
      <h1 className="serif text-3xl md:text-4xl font-semibold">
        Terms &amp; Conditions
      </h1>
      <p className="sans text-[#2B2B2B]/70 mt-2">
        Last updated: 21 December 2025
      </p>

      {/* Content */}
      <div className="mt-10 space-y-10 sans text-[17px] leading-relaxed text-[#2B2B2B]/85">
        {/* Intro */}
        <p>
          These Terms &amp; Conditions (“Terms”) govern access to and use of the
          Nomadissimi website and the purchase or use of any services offered by
          Nomadissimi (“Nomadissimi”, “we”, “us”, or “our”).
        </p>
        <p>
          By accessing our website, purchasing a service, scheduling a
          consultation, or completing an onboarding form, you confirm that you
          have read, understood, and agree to be bound by these Terms. If you do
          not agree, please do not use our services.
        </p>

        {/* 1 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            1. Nature of Our Services
          </h2>
          <p>
            Nomadissimi provides consultancy, preparation assistance, and
            advisory services related to Italian visas, residency options, and
            relocation to Italy.
          </p>
          <p className="mt-3">
            Our services are based on publicly available information,
            professional experience, and the information provided by the client.
            Nomadissimi does <strong>not</strong> act as a government authority,
            police office, or law firm.
          </p>
          <p className="mt-3">
            All services are provided on a best-efforts, advisory basis only.
          </p>
        </section>

        {/* 2 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            2. Not Legal Advice
          </h2>
          <p>
            Nomadissimi is not a law firm and does <strong>not</strong> provide
            legal representation.
          </p>
          <p className="mt-3">
            Nothing provided through our website, consultations, written
            materials, or communications constitutes legal advice, and nothing
            creates an attorney–client relationship. Where legal advice is
            required, clients should consult a qualified and licensed
            professional.
          </p>
        </section>

        {/* 3 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            3. No Guarantee of Outcomes
          </h2>
          <p>
            Visa, residency, and immigration decisions are made exclusively by
            Italian consulates, embassies, and immigration authorities.
          </p>
          <p className="mt-3">
            Nomadissimi does <strong>not</strong> guarantee approvals, permits,
            processing times, or outcomes, and cannot influence or override
            decisions made by third-party authorities.
          </p>
          <p className="mt-3">
            By using our services, you acknowledge that outcomes are outside our
            control.
          </p>
        </section>

        {/* 4 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            4. Client Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Providing accurate, complete, and truthful information</li>
            <li>Attending scheduled appointments and consultations</li>
            <li>Meeting deadlines related to applications or documentation</li>
            <li>Promptly informing us of any changes to your circumstances</li>
          </ul>
          <p className="mt-3">
            Requirements, documentation, appointment availability, and
            processing times may vary by consulate and may change at any time
            without notice. Any timeframes mentioned by Nomadissimi are
            estimates only and are not guaranteed.
          </p>
          <p className="mt-3">
            Nomadissimi is <strong>not</strong> responsible for delays or
            negative outcomes resulting from incomplete, inaccurate, late, or
            misleading information provided by the client.
          </p>
        </section>

        {/* 5 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            5. Eligibility Assessments
          </h2>
          <p>
            Any eligibility assessment, recommendation, or guidance provided by
            Nomadissimi is informational only and does not constitute an
            official determination.
          </p>
          <p className="mt-3">
            Final eligibility is determined exclusively by the relevant
            authorities.
          </p>
        </section>

        {/* 6 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            6. Scope of Services
          </h2>
          <p>
            Each service or package includes only what is expressly described at
            the time of purchase.
          </p>
          <p className="mt-3">
            Unless explicitly agreed in writing, services do{" "}
            <strong>not</strong> include:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Legal representation</li>
            <li>Submission of applications</li>
            <li>Direct communication with authorities on your behalf</li>
            <li>Appeals, objections, or dispute handling</li>
          </ul>
          <p className="mt-3">
            Requests outside the agreed scope may require a separate agreement
            and additional fees.
          </p>
        </section>

        {/* 7 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            7. Fees and Payments
          </h2>
          <p>
            All prices are displayed at checkout and must be paid in full before
            services are delivered, unless otherwise agreed in writing.
          </p>
          <p className="mt-3">
            Payments are processed through third-party payment providers.
            Nomadissimi does <strong>not</strong> store or process payment card
            details.
          </p>
        </section>

        {/* 8 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">8. Refund Policy</h2>
          <p>
            Due to the custom and advisory nature of our services, all sales are
            final.
          </p>
          <p className="mt-3">
            Once a service has been purchased, scheduled, or started, it is
            non-refundable, including where outcomes depend on third-party
            authorities or external factors beyond our control.
          </p>
          <p className="mt-3">
            Any exceptions may be considered only in exceptional circumstances
            and must be agreed in writing at our sole discretion.
          </p>
        </section>

        {/* 9 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            9. Consultation Scheduling, Cancellations &amp; No-Shows
          </h2>
          <p>
            Certain packages include a personalized consultation call scheduled
            in advance. By booking a consultation, you acknowledge that this
            time is reserved exclusively for you.
          </p>

          <p className="mt-3 font-medium">Client cancellations or no-shows</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>More than 24 hours before: reschedule at no additional cost</li>
            <li>Between 12 and 24 hours: reduced fee of EUR 73.50</li>
            <li>Less than 12 hours or no-show: fee of EUR 147</li>
          </ul>

          <p className="mt-3">
            These fees reflect the reserved time and the inability to reallocate
            the appointment on short notice.
          </p>

          <p className="mt-3 font-medium">Nomadissimi rescheduling</p>
          <p className="mt-1">
            If Nomadissimi needs to reschedule a consultation, we will notify
            you as soon as reasonably possible and offer alternative dates. No
            rescheduling fees will be charged to the client in such cases.
          </p>
        </section>

        {/* 10 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            10. Intellectual Property, Digital Content &amp; Use Restrictions
          </h2>

          <p>
            All content and materials provided by Nomadissimi — including access
            to digital content, downloadable files, written materials,
            consultations, and multimedia — are protected under European Union
            and international intellectual property laws and remain the
            exclusive property of Nomadissimi, unless expressly stated otherwise
            in writing.
          </p>

          <p className="mt-3">This includes, without limitation:</p>

          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>Written content, guides, templates, checklists, and reports</li>
            <li>Electronic files and documents delivered upon purchase</li>
            <li>Consultation notes, summaries, and transcripts</li>
            <li>
              Photographs, images, videos, audio recordings, and other
              multimedia
            </li>
            <li>
              Website content, layout, branding, logos, and visual identity
            </li>
          </ul>

          <p className="mt-4 font-medium">Permitted use</p>
          <p className="mt-1">
            The materials you purchase are licensed to you only, on a limited,
            non-transferable, and non-exclusive basis, for your personal,
            non-commercial use.
          </p>

          <p className="mt-4 font-medium">Strictly prohibited conduct</p>
          <p className="mt-1">
            Unless Nomadissimi has given you explicit prior written consent, you
            may <strong>not</strong>, whether directly or indirectly
          </p>

          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>
              Copy, reproduce, download, store, distribute, publish, or transmit
              any materials
            </li>
            <li>
              Take screenshots or screen recordings of any content, files, or
              consultations
            </li>
            <li>
              Record, capture, transcribe, or reproduce consultations or calls
              in any format
            </li>
            <li>
              Share materials, recordings, screenshots, or transcripts with
              third parties, whether for free or for a fee
              <li>
                Share, upload, copy+paste, or make available any materials or
                content to friends, colleagues, clients, or other third parties,
                including (but not limited to) via private or restricted
                channels such as private groups, Slack, Discord, Microsoft
                Teams, Signal, WhatsApp, Telegram, email, Instagram DMs, TikTok
                messages, Facebook Messenger, LinkedIn messages, cloud storage
                services (including Google Drive, Dropbox, iCloud), or similar
                platforms.
              </li>
            </li>
            <li>
              Resell, sublicense, license, or commercially exploit any materials
            </li>
            <li>
              Upload materials to websites, platforms, cloud storage, forums, or
              social media
            </li>
            <li>
              Extract, scrape, harvest, or mirror content or images by automated
              or manual means
            </li>
            <li>
              Remove, obscure, or alter copyright notices or ownership
              identifiers
            </li>
          </ul>

          <p className="mt-3">
            Any unauthorized copying, recording, reproduction, use, screen
            capture, distribution, or sharing of Nomadissimi materials
            constitutes a material breach of these Terms and an infringement of
            intellectual property rights under applicable European Union and
            international law, and may result in immediate termination of
            services, forfeiture of fees paid, injunctive relief, and legal
            action.
          </p>

          <p className="mt-4 font-medium">
            Recording, Screen Capture &amp; Confidentiality of Consultations
          </p>

          <p className="mt-1">
            All consultations, calls, meetings, and communications with
            Nomadissimi are confidential and intended solely for the individual
            client who purchased the service.
          </p>

          <p className="mt-3">You are expressly prohibited from:</p>

          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>Audio or video recording consultations</li>
            <li>
              Taking screenshots or screen recordings of consultations or shared
              materials
            </li>
            <li>
              Transcribing, reproducing, or distributing consultation content in
              any form
            </li>
          </ul>

          <p className="mt-3">
            Unauthorized recording or screen capture may be unlawful under
            privacy, data protection, and intellectual property laws.
            Nomadissimi expressly reserves all rights in the content of
            consultations.
          </p>
        </section>

        {/* 11 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            11. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Nomadissimi shall{" "}
            <strong>not</strong> be liable for indirect, incidental,
            consequential, or special damages, including loss of opportunity,
            income, or business.
          </p>
          <p className="mt-3">
            Any liability, if established, shall be strictly limited to the
            amount paid by you for the specific service giving rise to the
            claim.
          </p>
        </section>

        {/* 12 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            12. Professional Conduct &amp; Termination
          </h2>
          <p>
            We reserve the right to refuse or terminate services if false
            information is provided, these Terms are violated, a client engages
            in abusive or disrespectful behaviour, or continued engagement would
            be unlawful or unethical.
          </p>
          <p className="mt-3">
            In such cases, any fees already paid remain non-refundable.
          </p>
        </section>

        {/* 13 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            13. Indemnification
          </h2>
          <p>
            You agree to indemnify and hold harmless Nomadissimi from any
            claims, damages, losses, liabilities, or expenses arising from your
            misuse of our services, violation of these Terms, or reliance on
            information provided.
          </p>
        </section>

        {/* 14 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            14. Force Majeure
          </h2>
          <p>
            Nomadissimi shall <strong>not</strong> be liable for delays or
            failures caused by events beyond reasonable control, including
            government actions, consular closures, strikes, pandemics, power
            outages, natural disasters, or technical failures.
          </p>
        </section>

        {/* 15 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">15. Privacy</h2>
          <p>
            We handle personal information with care and in accordance with
            applicable data protection laws. Please refer to our{" "}
            <Link className="underline" href="/privacy">
              Privacy Policy
            </Link>{" "}
            for full details.
          </p>
        </section>

        {/* 16 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            16. Changes to These Terms
          </h2>
          <p>
            We may update these Terms from time to time. The revised version
            becomes effective upon posting on our website. Continued use of our
            services constitutes acceptance of the updated Terms.
          </p>
        </section>

        {/* 17 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            17. Governing Law and Jurisdiction
          </h2>
          <p>
            These Terms are governed by the laws of Italy, without regard to
            conflict-of-law rules.
          </p>
          <p className="mt-3">
            Any disputes shall be subject to the jurisdiction of the courts of
            Catania, Italy, unless mandatory consumer protection laws provide
            otherwise.
          </p>
        </section>

        {/* 18 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">
            18. Entire Agreement and Severability
          </h2>

          <p>
            These Terms, together with our{" "}
            <Link className="underline" href="/privacy">
              Privacy Policy
            </Link>{" "}
            and any package-specific agreements, service descriptions, written
            scopes, or addenda expressly agreed between you and Nomadissimi,
            constitute the agreement governing your use of our services.
          </p>

          <p className="mt-3">
            Where a specific package agreement or written addendum applies, it
            shall supplement and, where applicable, prevail over these Terms
            with respect to that specific service.
          </p>

          <p className="mt-3">
            If any provision of these Terms is held to be invalid or
            unenforceable, the remaining provisions shall remain in full force
            and effect.
          </p>
        </section>

        {/* 19 */}
        <section className="section-divider">
          <h2 className="serif text-xl font-semibold mb-3">19. Contact</h2>
          <p>
            Nomadissimi
            <br />
            Email:{" "}
            <a href="mailto:nomadissimi@gmail.com" className="underline">
              nomadissimi@gmail.com
            </a>
            <br />
            Website:{" "}
            <a
              href="https://www.nomadissimi.com"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.nomadissimi.com
            </a>
          </p>
        </section>

        {/* Back */}
        <p className="pt-6">
          <Link href="/" className="underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
