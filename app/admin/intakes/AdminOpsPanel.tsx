"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminOpsPanel({
  intakeId,
  initialNextAction = "",
  initialPriority = "",
  initialOwner = "",
  initialFollowUpDate = "",
  initialConsultationCompleted = false,
}: {
  intakeId: string;
  initialNextAction?: string | null;
  initialPriority?: string | null;
  initialOwner?: string | null;
  initialFollowUpDate?: string | null;
  initialConsultationCompleted?: boolean | null;
}) {
  const router = useRouter();

  const [nextAction, setNextAction] = useState(initialNextAction ?? "");
  const [priority, setPriority] = useState(initialPriority ?? "");
  const [owner, setOwner] = useState(initialOwner ?? "");
  const [followUpDate, setFollowUpDate] = useState(
    initialFollowUpDate ? initialFollowUpDate.slice(0, 10) : ""
  );
  const [consultationCompleted, setConsultationCompleted] = useState(
    !!initialConsultationCompleted
  );
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    setSaving(true);

    try {
      const res = await fetch("/api/admin/intakes/admin-ops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          intakeId,
          adminNextAction: nextAction,
          adminPriority: priority,
          adminOwner: owner,
          adminFollowUpDate: followUpDate || null,
          consultationCompleted,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to save admin ops");
      }

      router.refresh();
    } catch (error: any) {
      alert(error?.message || "Could not save admin ops");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-[24px] border border-black/10 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="sans text-xs uppercase tracking-[0.16em] text-black/40">
            Internal workflow
          </p>
          <p className="mt-1 sans text-[14px] leading-[1.7] text-black/55">
            Quick internal tracking for action items, ownership, and follow-up.
          </p>
        </div>

        <div className="rounded-2xl border border-black/10 bg-[#FBF8F2] px-4 py-3">
          <p className="sans text-[11px] uppercase tracking-[0.14em] text-black/40">
            Ops view
          </p>
          <p className="mt-1 sans text-[13px] leading-[1.7] text-black/50">
            Structured client handling for you, Marco, and future staff.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block sans text-xs uppercase tracking-[0.14em] text-black/40">
            Next action
          </label>
          <select
            value={nextAction}
            onChange={(e) => setNextAction(e.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-[#FBF8F2] px-4 py-3 sans text-[15px] text-black/75 outline-none transition focus:border-black/20"
          >
            <option value="">Select next action</option>
            <option value="Review intake">Review intake</option>
            <option value="Research client case">Research client case</option>
            <option value="Research consulate">Research consulate</option>
            <option value="Waiting on client">Waiting on client</option>
            <option value="Send booking link">Send booking link</option>
            <option value="Consultation scheduled">Consultation scheduled</option>
            <option value="Consultation completed">Consultation completed</option>
            <option value="Send follow-up">Send follow-up</option>
            <option value="Ready to close">Ready to close</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block sans text-xs uppercase tracking-[0.14em] text-black/40">
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-[#FBF8F2] px-4 py-3 sans text-[15px] text-black/75 outline-none transition focus:border-black/20"
          >
            <option value="">Select priority</option>
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block sans text-xs uppercase tracking-[0.14em] text-black/40">
            Internal owner
          </label>
          <input
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            placeholder="Sylvia, Marco, Assistant..."
            className="w-full rounded-2xl border border-black/10 bg-[#FBF8F2] px-4 py-3 sans text-[15px] text-black/75 outline-none transition focus:border-black/20"
          />
        </div>

        <div>
          <label className="mb-2 block sans text-xs uppercase tracking-[0.14em] text-black/40">
            Follow-up date
          </label>
          <input
            type="date"
            value={followUpDate}
            onChange={(e) => setFollowUpDate(e.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-[#FBF8F2] px-4 py-3 sans text-[15px] text-black/75 outline-none transition focus:border-black/20"
          />
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-black/10 bg-[#FBF8F2] px-4 py-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={consultationCompleted}
            onChange={(e) => setConsultationCompleted(e.target.checked)}
            className="mt-1 h-4 w-4"
          />
          <span>
            <span className="block sans text-xs uppercase tracking-[0.14em] text-black/40">
              Consultation completed
            </span>
            <span className="mt-1 block sans text-[14px] leading-[1.7] text-black/55">
              Mark this once the client’s consultation has actually taken place.
            </span>
          </span>
        </label>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="sans text-[13px] text-black/45">
          Structured internal tracking only. Clients never see this.
        </p>

        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-5 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.18)] transition hover:bg-[#3E4E38] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save workflow"}
        </button>
      </div>
    </div>
  );
}


