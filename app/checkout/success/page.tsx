// app/checkout/success/page.tsx
import Link from "next/link";

export default function SuccessPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
      <div className="card">
        <h1 className="serif text-3xl md:text-4xl font-semibold">
          Benvenuto! Your Italian chapter officially starts now.
        </h1>

        <p className="sans mt-4 text-[#2B2B2B]/80">
          We’ve received your order and emailed your receipt and next steps. If
          you don’t see it in a few minutes, please check your spam folder.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/#book" className="btn btn-outline">
            Book your kickoff call
          </Link>
          <Link href="/packages" className="btn btn-primary">
            Back to packages
          </Link>
        </div>
      </div>
    </section>
  );
}
