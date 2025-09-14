// app/checkout/success/page.tsx
import Stripe from "stripe";
import Link from "next/link";

export const runtime = "nodejs"; // Stripe needs Node runtime

type SearchParams = { session_id?: string };

function formatCurrency(amount: number | null | undefined, currency = "EUR") {
  if (!amount && amount !== 0) return "";
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount / 100);
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sessionId = searchParams?.session_id;

  let plan: string | undefined;
  let email: string | undefined;
  let total: number | undefined;
  let currency: string | undefined;
  let receiptUrl: string | undefined;

  if (sessionId && process.env.STRIPE_SECRET_KEY) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
      apiVersion: "2024-06-20" as any,
    });

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "payment_intent"],
    });

    plan = (session.metadata?.plan as string) || undefined;
    email = session.customer_details?.email || undefined;
    total = session.amount_total || undefined;
    currency = session.currency || "eur";

    const piId =
      typeof session.payment_intent === "string"
        ? session.payment_intent
        : session.payment_intent?.id;

    if (piId) {
      const pi = (await stripe.paymentIntents.retrieve(piId, {
        expand: ["latest_charge"],
      })) as any;
      receiptUrl = pi?.latest_charge?.receipt_url;
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
      <div className="card">
        <h1 className="serif text-3xl md:text-4xl font-semibold">
          Benvenuto! Your Italian chapter officially starts now.
        </h1>

        <p className="sans mt-4 text-[#2B2B2B]/80">
          {plan ? (
            <>
              Thanks for choosing the <strong>{plan}</strong> package. We’ve
              sent a confirmation to{" "}
              {email ? <strong>{email}</strong> : "your email"}.
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
            <li>We’ll send a short intake form tailored to your consulate.</li>
            <li>
              We’ll schedule your kickoff call and unlock your checklists.
            </li>
            <li>Questions already? Reply to the email—we’re fast.</li>
          </ul>
        </div>

        <div className="mt-6 grid gap-3 sm:flex sm:items-center">
          {typeof total === "number" && (
            <div className="text-sm text-[#2B2B2B]/70">
              <span className="mr-2">Total:</span>
              <strong>
                {formatCurrency(total, (currency || "eur").toUpperCase())}
              </strong>
            </div>
          )}

          {receiptUrl ? (
            <Link
              href={receiptUrl}
              target="_blank"
              className="btn btn-champagne w-fit"
            >
              View receipt
            </Link>
          ) : (
            <span className="text-xs text-[#2B2B2B]/60">
              Receipt has been emailed to you.
            </span>
          )}
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
