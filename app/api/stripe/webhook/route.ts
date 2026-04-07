import Stripe from "stripe";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { getProductFromPriceId } from "@/lib/portalAccess";
import { sendPortalAccessEmail } from "@/lib/email/sendPortalAccessEmail";


export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  const body = await req.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: `Webhook signature verification failed: ${error.message}` },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const email =
      session.customer_details?.email ||
      session.customer_email ||
      null;

const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
  limit: 1,
});

const priceId = lineItems.data[0]?.price?.id ?? null;
const product = getProductFromPriceId(priceId);

    if (!email || !product) {
      return NextResponse.json(
        { error: "Missing email or product in Stripe session" },
        { status: 400 }
      );
    }

    const expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);

  const { data: existingEntitlement } = await supabaseAdmin
  .from("entitlements")
  .select("id")
  .eq("stripe_checkout_session_id", session.id)
  .maybeSingle();

let entitlement = existingEntitlement;
let entitlementError = null;

if (!existingEntitlement) {
  const inserted = await supabaseAdmin
    .from("entitlements")
    .insert({
      email: email.toLowerCase(),
      product,
      expires_at: expiresAt.toISOString(),
      stripe_customer_id:
        typeof session.customer === "string" ? session.customer : null,
      stripe_checkout_session_id: session.id,
    })
    .select()
    .single();

  entitlement = inserted.data;
  entitlementError = inserted.error;
}

    if (entitlementError || !entitlement) {
      return NextResponse.json(
        { error: entitlementError?.message || "Failed to create entitlement" },
        { status: 500 }
      );
    }

const url = `${process.env.NEXT_PUBLIC_SITE_URL}/create-account?email=${encodeURIComponent(email)}`;
await sendPortalAccessEmail(email, url);  }

  return NextResponse.json({ received: true });
}

