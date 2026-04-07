import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import StatusSelect from "./StatusSelect";
import SendBookingLink from "./SendBookingLink";
import AdminNotes from "./AdminNotes";
import AdminOpsPanel from "./AdminOpsPanel";

const ADMIN_EMAILS = [
  "sylviasanchez1506@gmail.com",
  "marco.bellomo1997@gmail.com",
];

export default async function AdminIntakesPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isAdmin =
    !!user?.email &&
    ADMIN_EMAILS.map((email) => email.toLowerCase()).includes(
      user.email.toLowerCase(),
    );

  if (!isAdmin) {
    redirect("/login?next=/admin/intakes");
  }

  const { type } = await searchParams;

  const allowedTypes = ["visa", "tax", "residence", "dolce-vita", "general"];

  const selectedType = type && allowedTypes.includes(type) ? type : "all";

  let query = supabaseAdmin
    .from("client_intakes")
    .select("*")
    .order("created_at", { ascending: false });

  if (selectedType !== "all") {
    query = query.eq("intake_type", selectedType);
  }

  const { data: intakes, error } = await query;

  if (error) {
    throw new Error("Failed to load intake submissions.");
  }

  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[28px] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)] md:p-10">
          <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
            Nomadissimi admin
          </p>

          <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
            Client intake submissions
          </h1>

          <p className="mt-4 max-w-2xl sans text-[16px] leading-[1.8] text-black/65">
            Review new onboarding submissions here before sending private
            booking links.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <FilterChip href="/admin/intakes" active={selectedType === "all"}>
              All
            </FilterChip>

            <FilterChip
              href="/admin/intakes?type=visa"
              active={selectedType === "visa"}
            >
              Visa
            </FilterChip>

            <FilterChip
              href="/admin/intakes?type=tax"
              active={selectedType === "tax"}
            >
              Tax
            </FilterChip>

            <FilterChip
              href="/admin/intakes?type=residence"
              active={selectedType === "residence"}
            >
              Residence
            </FilterChip>

            <FilterChip
              href="/admin/intakes?type=dolce-vita"
              active={selectedType === "dolce-vita"}
            >
              Dolce Vita
            </FilterChip>

            <FilterChip
              href="/admin/intakes?type=general"
              active={selectedType === "general"}
            >
              General
            </FilterChip>
          </div>

          <p className="mt-4 sans text-sm text-black/45">
            Showing {intakes?.length ?? 0}{" "}
            {selectedType === "all" ? "total" : selectedType} submission
            {(intakes?.length ?? 0) === 1 ? "" : "s"}.
          </p>

          <div className="mt-8 space-y-5">
            {intakes && intakes.length > 0 ? (
              intakes.map((intake) => (
                <article
                  key={intake.id}
                  className="rounded-[24px] border border-black/10 bg-[#FBF8F2] p-6"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="sans text-xs uppercase tracking-[0.18em] text-black/40">
                          {intake.intake_type} intake
                        </p>

                        <StatusBadge status={intake.status} />

                        {intake.admin_priority ? (
                          <MetaBadge variant="priority">
                            {intake.admin_priority}
                          </MetaBadge>
                        ) : null}

                        {intake.admin_owner ? (
                          <MetaBadge variant="owner">
                            {intake.admin_owner}
                          </MetaBadge>
                        ) : null}

                        {intake.admin_next_action ? (
                          <MetaBadge variant="action">
                            {intake.admin_next_action}
                          </MetaBadge>
                        ) : null}

                        {intake.consultation_completed ? (
                          <MetaBadge variant="completed">
                            Consultation done
                          </MetaBadge>
                        ) : null}

                        {getFollowUpState(intake.admin_follow_up_date) ===
                        "today" ? (
                          <MetaBadge variant="dueToday">
                            Follow-up today
                          </MetaBadge>
                        ) : null}

                        {getFollowUpState(intake.admin_follow_up_date) ===
                        "overdue" ? (
                          <MetaBadge variant="overdue">
                            Follow-up overdue
                          </MetaBadge>
                        ) : null}
                      </div>

                      <h2 className="serif mt-2 text-2xl text-black">
                        {intake.first_name} {intake.last_name}
                      </h2>

                      <p className="mt-1 sans text-[15px] text-black/60">
                        {intake.email}
                      </p>

                      <div className="mt-3">
                        <StatusSelect
                          intakeId={intake.id}
                          currentStatus={intake.status}
                        />
                      </div>
                    </div>

                    <div className="sans text-sm text-black/45">
                      {new Date(intake.created_at).toLocaleString()}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <Info label="City">{intake.city}</Info>
                    <Info label="Country">{intake.country}</Info>
                    <Info label="Citizenship(s)">{intake.citizenships}</Info>
                    <Info label="Occupation">{intake.occupation}</Info>
                    <Info label="Work setup">{intake.work_setup}</Info>
                    <Info label="Degree title">{intake.degree_title}</Info>
                    <Info label="Work experience">
                      {intake.work_experience}
                    </Info>
                    <Info label="Visa pathway">{intake.pathway}</Info>
                    <Info label="Target move date">{intake.move_date}</Info>
                    <Info label="Consulate">{intake.consulate}</Info>
                    <Info label="Contacted consulate">
                      {intake.contacted_consulate}
                    </Info>
                    <Info label="Documents started">
                      {intake.documents_started}
                    </Info>
                    <Info label="Stage">{intake.stage}</Info>
                  </div>

                  <div className="mt-6 space-y-4">
                    <LongInfo label="Work situation">
                      {intake.work_situation}
                    </LongInfo>

                    <LongInfo label="Top questions">
                      {intake.top_questions}
                    </LongInfo>

                    <LongInfo label="Biggest stress">
                      {intake.biggest_stress}
                    </LongInfo>

                    <LongInfo label="Additional notes">{intake.notes}</LongInfo>

                    {intake.booking_link_url ? (
                      <div className="rounded-2xl border border-black/10 bg-white px-4 py-4">
                        <p className="mb-2 sans text-xs uppercase tracking-[0.16em] text-black/40">
                          Booking link sent
                        </p>

                        <a
                          href={intake.booking_link_url}
                          target="_blank"
                          rel="noreferrer"
                          className="block break-all sans text-[15px] leading-[1.7] text-[#4B5D44] underline underline-offset-4"
                        >
                          {intake.booking_link_url}
                        </a>

                        <p className="mt-3 sans text-sm text-black/45">
                          {intake.booking_link_sent_at
                            ? `Sent on ${new Date(intake.booking_link_sent_at).toLocaleString()}`
                            : "Sent time unavailable"}
                        </p>
                      </div>
                    ) : null}

                    <SendBookingLink
                      intakeId={intake.id}
                      clientEmail={intake.email}
                      initialBookingUrl={intake.booking_link_url}
                    />

                    <AdminOpsPanel
                      intakeId={intake.id}
                      initialNextAction={intake.admin_next_action}
                      initialPriority={intake.admin_priority}
                      initialOwner={intake.admin_owner}
                      initialFollowUpDate={intake.admin_follow_up_date}
                      initialConsultationCompleted={
                        intake.consultation_completed
                      }
                    />

                    <AdminNotes
                      intakeId={intake.id}
                      initialNotes={intake.admin_notes}
                      updatedAt={intake.admin_notes_updated_at}
                      updatedBy={intake.admin_notes_updated_by}
                    />
                  </div>
                </article>
              ))
            ) : (
              <div className="rounded-[24px] border border-black/10 bg-[#FBF8F2] p-6">
                <p className="sans text-[15px] text-black/60">
                  No intake submissions yet. New client onboarding forms will
                  appear here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function Info({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-1 sans text-xs uppercase tracking-[0.16em] text-black/40">
        {label}
      </p>
      <p className="sans text-[15px] leading-[1.7] text-black/75">
        {children || "—"}
      </p>
    </div>
  );
}

function LongInfo({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white px-4 py-4">
      <p className="mb-2 sans text-xs uppercase tracking-[0.16em] text-black/40">
        {label}
      </p>
      <p className="sans whitespace-pre-wrap text-[15px] leading-[1.75] text-black/75">
        {children || "—"}
      </p>
    </div>
  );
}

function StatusBadge({ status }: { status?: string | null }) {
  const normalized = (status ?? "new").toLowerCase();

  const styles =
    normalized === "completed"
      ? "bg-[#E8F3E6] text-[#355B32] border-[#CFE3CB]"
      : normalized === "booking link sent"
        ? "bg-[#EEF3FB] text-[#35506B] border-[#D7E4F3]"
        : normalized === "reviewed"
          ? "bg-[#F6EFE3] text-[#7A5A22] border-[#E9D9B6]"
          : "bg-[#F3ECE7] text-[#7A4B3A] border-[#E7D2C8]";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 sans text-[11px] uppercase tracking-[0.14em] ${styles}`}
    >
      {normalized}
    </span>
  );
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-full px-4 py-2 sans text-[13px] uppercase tracking-[0.14em] transition ${
        active
          ? "bg-[#4B5D44] text-white shadow-[0_10px_24px_rgba(75,93,68,0.18)]"
          : "border border-black/10 bg-[#FBF8F2] text-black/55 hover:bg-white hover:text-black/75"
      }`}
    >
      {children}
    </Link>
  );
}

function MetaBadge({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant:
    | "priority"
    | "owner"
    | "action"
    | "completed"
    | "dueToday"
    | "overdue";
}) {
  const styles =
    variant === "priority"
      ? "bg-[#F6EFE3] text-[#7A5A22] border-[#E9D9B6]"
      : variant === "owner"
        ? "bg-[#EEF3FB] text-[#35506B] border-[#D7E4F3]"
        : variant === "completed"
          ? "bg-[#E8F3E6] text-[#355B32] border-[#CFE3CB]"
          : variant === "dueToday"
            ? "bg-[#FFF4D9] text-[#7A5A22] border-[#F1DFA8]"
            : variant === "overdue"
              ? "bg-[#FBE7E3] text-[#8A3D2E] border-[#EBC6BD]"
              : "bg-[#F3ECE7] text-[#7A4B3A] border-[#E7D2C8]";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 sans text-[11px] uppercase tracking-[0.14em] ${styles}`}
    >
      {children}
    </span>
  );
}

function getFollowUpState(dateValue?: string | null) {
  if (!dateValue) return null;

  const today = new Date();
  const todayOnly = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const followUp = new Date(`${dateValue}T00:00:00`);

  if (followUp.getTime() < todayOnly.getTime()) {
    return "overdue";
  }

  if (followUp.getTime() === todayOnly.getTime()) {
    return "today";
  }

  return null;
}