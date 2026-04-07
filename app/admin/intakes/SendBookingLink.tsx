"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SendBookingLink({
  intakeId,
  clientEmail,
}: {
  intakeId: string;
  clientEmail: string;
}) {
  const router = useRouter();
  const [bookingUrl, setBookingUrl] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSend() {
    if (!bookingUrl.trim()) {
      alert("Please paste the booking link first.");
      return;
    }

    setSending(true);

    try {
      const res = await fetch("/api/admin/intakes/send-booking-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          intakeId,
          bookingUrl: bookingUrl.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send booking link");
      }

      alert(`Booking link sent to ${clientEmail}`);
      setBookingUrl("");
      router.refresh();
    } catch (error) {
      alert("Could not send the booking email. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="rounded-2xl border border-black/10 bg-white px-4 py-4">
      <p className="mb-2 sans text-xs uppercase tracking-[0.16em] text-black/40">
        Send booking link
      </p>

      <div className="flex flex-col gap-3 md:flex-row">
        <input
          type="url"
          value={bookingUrl}
          onChange={(e) => setBookingUrl(e.target.value)}
          placeholder="Paste the private Calendly link here"
          className="w-full rounded-full border border-black/10 bg-[#FBF8F2] px-4 py-3 sans text-[14px] text-black/75 outline-none transition focus:border-black/20"
        />

        <button
          type="button"
          disabled={sending}
          onClick={handleSend}
          className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-5 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.18)] transition hover:bg-[#3E4E38] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? "Sending..." : "Send booking link"}
        </button>
      </div>
    </div>
  );
}