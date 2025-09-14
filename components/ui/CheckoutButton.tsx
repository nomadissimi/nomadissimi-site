"use client";
import { useState } from "react";

export default function CheckoutButton({
  priceId,
  plan,
  label = "Choose Guidance",
  className = "",
}: {
  priceId: string;
  plan: string;
  label?: string;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    try {
      setLoading(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" }, // important
        body: JSON.stringify({ priceId, plan }),
      });

      // Try to read JSON even on non-200
      const data = await res.json().catch(() => ({} as any));

      if (!res.ok || !data?.url) {
        // surface the real reason
        throw new Error(data?.error || `HTTP ${res.status}`);
      }

      window.location.href = data.url as string;
    } catch (err: any) {
      console.error("Checkout start failed:", err);
      alert(err?.message || "Could not start checkout.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`btn w-full bg-[#4B5D44] text-white ${className}`}
    >
      {loading ? "Redirecting…" : label}
    </button>
  );
}
