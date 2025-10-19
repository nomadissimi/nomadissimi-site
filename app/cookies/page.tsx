// app/cookies/page.tsx
import Link from "next/link";

// Tell Next this can be prerendered safely
export const dynamic = "force-static";

export default function CookiesPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
      <div className="card">
        <h1 className="serif text-3xl md:text-4xl font-semibold">Cookies</h1>

        <p className="sans mt-4 text-[#2B2B2B]/80">
          We use essential cookies to operate this site and optional analytics
          to improve your experience. We don’t sell or share personal
          information.
        </p>

        <p className="sans mt-4 text-[#2B2B2B]/80">
          You can adjust preferences in your browser settings. For details, see
          our{" "}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>

        <div className="mt-8">
          <Link href="/" className="btn btn-primary">
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}
