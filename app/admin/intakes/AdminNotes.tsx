"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminNotes({
  intakeId,
  initialNotes = "",
  updatedAt,
  updatedBy,
}: {
  intakeId: string;
  initialNotes?: string | null;
  updatedAt?: string | null;
  updatedBy?: string | null;
}) {
  const router = useRouter();
  const [notes, setNotes] = useState(initialNotes ?? "");
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    setSaving(true);

    try {
      const res = await fetch("/api/admin/intakes/admin-notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          intakeId,
          adminNotes: notes,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to save admin notes");
      }

      router.refresh();
    } catch (error: any) {
      alert(error?.message || "Could not save admin notes");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-[24px] border border-black/10 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="sans text-xs uppercase tracking-[0.16em] text-black/40">
            Internal admin notes
          </p>

          <p className="mt-1 sans text-[14px] leading-[1.7] text-black/55">
            Private workspace for reminders, research points, follow-ups, and
            internal client context.
          </p>
        </div>

        <div className="rounded-2xl border border-black/10 bg-[#FBF8F2] px-4 py-3">
          <p className="sans text-[11px] uppercase tracking-[0.14em] text-black/40">
            Internal use only
          </p>

          <p className="mt-1 sans text-[13px] leading-[1.7] text-black/55">
            {updatedAt
              ? `Last updated ${new Date(updatedAt).toLocaleString()}`
              : "No saved internal notes yet"}
          </p>

          {updatedBy ? (
            <p className="sans text-[13px] leading-[1.7] text-black/45">
              By {updatedBy}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4">
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Write internal reminders, research notes, follow-ups, or anything your team needs to remember about this client..."
          rows={7}
          className="w-full rounded-[20px] border border-black/10 bg-[#FBF8F2] px-4 py-4 sans text-[15px] leading-[1.8] text-black/75 outline-none transition focus:border-black/20"
        />
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="sans text-[13px] text-black/45">
          Visible only inside the admin dashboard.
        </p>

        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-5 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.18)] transition hover:bg-[#3E4E38] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save notes"}
        </button>
      </div>
    </div>
  );
}