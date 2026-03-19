"use client";

import { useState } from "react";

type Props = {
  priceId: string;
  plan?: string;
  className?: string;
  label: React.ReactNode;
};

export default function CheckoutButton({
  priceId,
  plan,
  className,
  label,
}: Props) {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ priceId, plan }),
      });

      const data: { url?: string; error?: string } = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data?.error || "Checkout failed");
      }

      // ✅ Stripe-approved redirect in 2026
      window.location.href = data.url;
    } catch (e: any) {
      alert(e?.message || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className={className}
    >
      {loading ? (
        <span className="serif text-[18px] md:text-[24px] font-medium tracking-[0.04em]">
          Redirecting…
        </span>
      ) : (
        label
      )}
    </button>
  );
}
