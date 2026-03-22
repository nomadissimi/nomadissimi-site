import Stripe from "stripe";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { randomToken, sha256 } from "@/lib/crypto";
import { sendMagicLinkEmail } from "@/lib/email";

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

    const product = session.metadata?.product || null;

    if (!email || !product) {
      return NextResponse.json(
        { error: "Missing email or product in Stripe session" },
        { status: 400 }
      );
    }

    const expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);

    const { data: entitlement, error: entitlementError } = await supabaseAdmin
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

    if (entitlementError || !entitlement) {
      return NextResponse.json(
        { error: entitlementError?.message || "Failed to create entitlement" },
        { status: 500 }
      );
    }

    const rawToken = randomToken(32);
    const tokenHash = sha256(rawToken + process.env.MAGICLINK_SECRET!);

    const magicLinkExpires = new Date(Date.now() + 15 * 60 * 1000);

    const { error: magicLinkError } = await supabaseAdmin
      .from("magic_links")
      .insert({
        entitlement_id: entitlement.id,
        token_hash: tokenHash,
        expires_at: magicLinkExpires.toISOString(),
      });

    if (magicLinkError) {
      return NextResponse.json(
        { error: magicLinkError.message },
        { status: 500 }
      );
    }

    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/premium/access?token=${rawToken}`;

    await sendMagicLinkEmail(email, url);
  }

  return NextResponse.json({ received: true });
}

