"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const STATUS_OPTIONS = ["new", "reviewed", "booking link sent", "completed"];

export default function StatusSelect({
  intakeId,
  currentStatus,
}: {
  intakeId: string;
  currentStatus?: string | null;
}) {
  const router = useRouter();
  const [value, setValue] = useState(currentStatus ?? "new");
  const [saving, setSaving] = useState(false);

  async function handleChange(nextValue: string) {
    setValue(nextValue);
    setSaving(true);

    try {
      const res = await fetch("/api/admin/intakes/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: intakeId,
          status: nextValue,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update");
      }

      router.refresh();
    } catch (error) {
      alert("Could not update status. Please try again.");
      setValue(currentStatus ?? "new");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="flex items-center gap-3">
      <label className="sans text-xs uppercase tracking-[0.14em] text-black/40">
        Status
      </label>

      <select
        value={value}
        disabled={saving}
        onChange={(e) => handleChange(e.target.value)}
        className="rounded-full border border-black/10 bg-white px-3 py-2 sans text-[13px] text-black/75 outline-none transition focus:border-black/20 disabled:opacity-60"
      >
        {STATUS_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
