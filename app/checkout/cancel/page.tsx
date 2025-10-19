// app/checkout/cancel/page.tsx
import Link from "next/link";

export default function CancelPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
      <div className="card">
        <h1 className="serif text-3xl md:text-4xl font-semibold">
          Your checkout was canceled.
        </h1>
        <p className="sans mt-4 text-[#2B2B2B]/80">
          No worries — your card was not charged. You can return to the options
          below and continue whenever you're ready.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/packages" className="btn btn-primary">
            Back to packages
          </Link>
          <Link href="/#book" className="btn btn-outline">
            Book a call instead
          </Link>
        </div>
      </div>
    </section>
  );
}
