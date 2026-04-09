import Stripe from "stripe";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { getProductByPriceId } from "@/lib/products";
import { sendPortalAccessEmail } from "@/lib/email/sendPortalAccessEmail";
import { sendPostPurchaseIntakeEmail } from "@/lib/email/sendPostPurchaseIntakeEmail";
import { INTAKE_LINKS } from "@/lib/intake-links";


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

  const customerName =
    session.customer_details?.name ||
    null;

  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
    limit: 1,
  });

  const priceId = lineItems.data[0]?.price?.id ?? null;
  const purchasedProduct = priceId ? getProductByPriceId(priceId) : null;

  if (!email || !purchasedProduct) {
    return NextResponse.json(
      { error: "Missing email or product in Stripe session" },
      { status: 400 }
    );
  }

  const expiresAt = new Date();
  expiresAt.setFullYear(expiresAt.getFullYear() + 1);

  const customerId =
    typeof session.customer === "string" ? session.customer : null;

  for (const portalKey of purchasedProduct.portalKeys) {
    const entitlementSessionId = `${session.id}:${portalKey}`;

    const { data: existingEntitlement } = await supabaseAdmin
      .from("entitlements")
      .select("id")
      .eq("stripe_checkout_session_id", entitlementSessionId)
      .maybeSingle();

    if (!existingEntitlement) {
      const { error: entitlementError } = await supabaseAdmin
        .from("entitlements")
        .insert({
          email: email.toLowerCase(),
          product: portalKey,
          expires_at: expiresAt.toISOString(),
          stripe_customer_id: customerId,
          stripe_checkout_session_id: entitlementSessionId,
        });

      if (entitlementError) {
        return NextResponse.json(
          {
            error:
              entitlementError.message || "Failed to create entitlement",
          },
          { status: 500 }
        );
      }
    }
  }

  if (purchasedProduct.portalKeys.length > 0) {
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
      "https://www.nomadissimi.com";

    const url = `${siteUrl}/create-account?email=${encodeURIComponent(email)}`;
    await sendPortalAccessEmail(email, url);
  }

  if (purchasedProduct.sendIntakeEmail && purchasedProduct.intakeType) {
  const intakeUrl =
  purchasedProduct.intakeType === "visa"
    ? INTAKE_LINKS.visa
    : purchasedProduct.intakeType === "tax"
      ? INTAKE_LINKS.tax
      : purchasedProduct.intakeType === "residence"
        ? INTAKE_LINKS.residence
        : purchasedProduct.intakeType === "dolce-vita"
          ? INTAKE_LINKS.dolceVita
          : purchasedProduct.intakeType === "bundle"
            ? INTAKE_LINKS.bundle
            : INTAKE_LINKS.general;

    await sendPostPurchaseIntakeEmail({
      customerEmail: email,
      customerName,
      intakeUrl,
      serviceLabel: purchasedProduct.label,
    });
  }
}

return NextResponse.json({ received: true });
}

