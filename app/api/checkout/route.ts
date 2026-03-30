

// app/api/checkout/route.ts
import Stripe from "stripe";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

type Body = {
  priceId: string;
  plan?: string;
};

export async function POST(req: Request) {
  try {
    const { priceId, plan } = (await req.json()) as Body;

    if (!priceId) {
      return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
      "https://www.nomadissimi.com";

    const session = await stripe.checkout.sessions.create({
metadata: plan ? { plan } : {},
      mode: "payment",
      allow_promotion_codes: true,
      automatic_tax: { enabled: true },
tax_id_collection: { enabled: true }, // optional but recommended for B2B EU buyers
      line_items: [{ price: priceId, quantity: 1 }],

      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout/cancel`,

      consent_collection: {
    terms_of_service: "required",
  },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe session missing url" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Checkout failed" },
      { status: 500 }
    );
  }
}

