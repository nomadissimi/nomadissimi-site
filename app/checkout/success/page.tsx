// app/checkout/success/page.tsx
import Link from "next/link";
import Stripe from "stripe";
type SearchParams = { session_id?: string };

export const runtime = "edge"; // safer & faster for static success page

export default function SuccessPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sessionId = searchParams?.session_id;

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
      <div className="card">
        <h1 className="serif text-3xl md:text-4xl font-semibold">
          Benvenuto! Your Italian chapter officially starts now.
        </h1>

        <p className="sans mt-4 text-[#2B2B2B]/80">
          {sessionId ? (
            <>
              Your payment was successful — check your email for confirmation.
            </>
          ) : (
            <>
              We’ve received your order and sent a confirmation to your email.
            </>
          )}
        </p>

        <div className="mt-6 rounded-lg bg-amber-50/60 border border-amber-200 px-4 py-4">
          <p className="sans text-sm text-amber-900/90">
            <strong>What happens next</strong>
          </p>
          <ul className="mt-2 ml-5 list-disc space-y-1 sans text-sm text-amber-900/80">
            <li>We’ll send you a short form tailored to your consulate.</li>
            <li>You’ll receive scheduling for your kickoff call.</li>
            <li>Questions already? Just reply — we’re fast.</li>
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/packages" className="btn btn-primary">
            Back to packages
          </Link>
          <Link href="/#book" className="btn btn-outline">
            Book your kickoff call
          </Link>
        </div>
      </div>
    </section>
  );
}
