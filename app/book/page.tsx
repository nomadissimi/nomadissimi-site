import Link from "next/link";
import CheckoutButton from "@/components/ui/CheckoutButton";
import { PRODUCTS } from "@/lib/products";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[28px] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)] md:p-10">
          <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
            Nomadissimi consultations
          </p>

          <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
            Standalone consultations &amp; Bonus Calls
          </h1>

          <p className="mt-4 max-w-2xl sans text-[16px] leading-[1.8] text-black/65">
            This page is for clients purchasing a Standalone Consultation or a
            Bonus Call as a separate paid service outside our standard packages.
            After purchase, you’ll receive a private onboarding form. Once we
            review it, we’ll send your private consultation booking link by
            email.
          </p>

          <div className="mt-8 rounded-2xl border border-black/10 bg-[#FBF8F2] px-5 py-5">
            <h2 className="serif text-2xl text-black">How it works</h2>

            <div className="mt-4 space-y-3 sans text-[15px] leading-[1.8] text-black/70">
              <p>Purchase your standalone consultation below.</p>
              <p>
                After checkout, we’ll email you a short intake form so we can
                understand your situation before the call.
              </p>
              <p>
                Once your form is reviewed, we’ll send your private booking link
                by email.
              </p>
              <p>
                Your Calendly link is not public and is only shared with paid
                clients after onboarding.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-black/10 bg-[#FBF8F2] px-5 py-5">
            <h2 className="serif text-2xl text-black">
              Cancellation and no-show policy
            </h2>

            <div className="mt-4 space-y-3 sans text-[15px] leading-[1.8] text-black/70">
              <p>
                Standalone consultations may be rescheduled at no additional
                cost if requested more than 24 hours before the scheduled start
                time.
              </p>

              <p>
                For standalone consultations, cancellations or rescheduling
                requests made between 12 and 24 hours before the scheduled start
                time are subject to a reduced fee of EUR 73.50.
              </p>

              <p>
                For standalone consultations, cancellations made less than 12
                hours before the scheduled start time, or missed appointments
                without notice, are subject to a fee of EUR 147.
              </p>

              <p>
                By purchasing, you agree to the consultation terms in our{" "}
                <Link href="/terms" className="underline underline-offset-4">
                  Terms
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-black/10 bg-white px-5 py-8 text-center shadow-[0_18px_50px_rgba(0,0,0,0.05)]">
            <p className="sans text-sm tracking-[0.18em] uppercase text-black/40">
              Private consultation access
            </p>

            <h2 className="serif mt-3 text-3xl text-black">
              Purchase your consultation
            </h2>

            <p className="mx-auto mt-3 max-w-xl sans text-[15px] leading-[1.8] text-black/60">
              Ideal for existing package clients who need focused paid guidance
              outside a package, including standalone consultations, bonus
              calls, extra support, or one-off strategy help. Subject to
              availability and approval.
            </p>

            <p className="mx-auto mt-4 max-w-xl rounded-2xl border border-black/10 bg-[#FBF8F2] px-4 py-3 sans text-[14px] leading-[1.75] text-black/65">
              Purchase only if you are already a Nomadissimi client. Purchases
              made by individuals who are not existing Nomadissimi package
              clients may be declined and refunded.
            </p>

            <div className="mt-8 flex justify-center">
              <CheckoutButton
                plan={PRODUCTS.generalConsultation.label}
                priceId={PRODUCTS.generalConsultation.priceId}
                className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-7 py-3.5 text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] transition hover:bg-[#3E4E38]"
                label={
                  <span className="flex flex-col items-center text-center">
                    <span className="serif text-[22px] font-medium tracking-[0.03em] leading-tight">
                      Purchase your consultation (only if you're already a
                      client). Purchases made by people who are not already
                      Nomadissimi package clients will be declined.
                    </span>
                  </span>
                }
              />
            </div>

            <p className="mt-5 sans text-sm text-black/45">
              You’ll receive your onboarding form immediately after purchase.
            </p>

            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-black/70 transition hover:bg-[#FBF8F2] hover:text-black"
              >
                Need help first?
              </Link>
            </div>
          </div>

          <p className="mt-8 sans text-sm text-black/45">
            Need help choosing the right consultation or package? Contact us
            before purchasing and we’ll point you in the right direction.
          </p>
        </div>
      </div>
    </main>
  );
}
