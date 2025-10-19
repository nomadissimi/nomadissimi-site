// app/checkout/cancel/page.tsx
import Link from "next/link";

// NOTE: keep this as a simple Server Component with no async and no props.
export default function CancelPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
      <div className="card">
        <h1 className="serif text-3xl md:text-4xl font-semibold">
          Checkout canceled
        </h1>

        <p className="sans mt-4 text-[#2B2B2B]/80">
          No charge was made. If you changed your mind, you can return to our
          packages and try again anytime.
        </p>

        <div className="mt-8 flex gap-3">
          <Link href="/#packages" className="btn btn-primary">
            Back to packages
          </Link>
          <Link href="/#book" className="btn btn-outline">
            Book a call
          </Link>
        </div>
      </div>
    </section>
  );
}
