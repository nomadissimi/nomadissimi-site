import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import StatusSelect from "./StatusSelect";
import SendBookingLink from "./SendBookingLink";
import AdminNotes from "./AdminNotes";
import AdminOpsPanel from "./AdminOpsPanel";
import IntakeCardShell from "./IntakeCardShell";

const ADMIN_EMAILS = [
  "sylviasanchez1506@gmail.com",
  "marco.bellomo1997@gmail.com",
];

export default async function AdminIntakesPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; sort?: string; q?: string }>;
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

const { type, sort, q } = await searchParams;

  const allowedTypes = ["visa", "tax", "residence", "dolce-vita", "general"];
  const allowedSorts = ["newest", "oldest", "urgency", "follow-up"];

const selectedType = type && allowedTypes.includes(type) ? type : "all";
const selectedSort = sort && allowedSorts.includes(sort) ? sort : "newest";
const searchQuery = (q ?? "").trim().toLowerCase();

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

 
const filteredIntakes = (intakes ?? []).filter((intake) => {
  if (!searchQuery) return true;

  const haystack = [
    intake.first_name,
    intake.last_name,
    intake.email,
    intake.city,
    intake.country,
    intake.consulate,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(searchQuery);
});

const sortedIntakes = [...filteredIntakes].sort((a, b) => {
  if (selectedSort === "oldest") {
    return (
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    );
  }

  if (selectedSort === "urgency") {
    const scoreA = getUrgencyScore(a);
    const scoreB = getUrgencyScore(b);
    if (scoreA !== scoreB) return scoreB - scoreA;

    return (
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }

  if (selectedSort === "follow-up") {
    const timeA = getFollowUpSortValue(a.admin_follow_up_date);
    const timeB = getFollowUpSortValue(b.admin_follow_up_date);
    if (timeA !== timeB) return timeA - timeB;

    return (
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }

  return (
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
});
  

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

          <div className="mt-4 flex flex-wrap gap-3">
  <SortChip
    href={
      selectedType === "all"
        ? "/admin/intakes?sort=newest"
        : `/admin/intakes?type=${selectedType}&sort=newest`
    }
    active={selectedSort === "newest"}
  >
    Newest
  </SortChip>

  <SortChip
    href={
      selectedType === "all"
        ? "/admin/intakes?sort=oldest"
        : `/admin/intakes?type=${selectedType}&sort=oldest`
    }
    active={selectedSort === "oldest"}
  >
    Oldest
  </SortChip>

  <SortChip
    href={
      selectedType === "all"
        ? "/admin/intakes?sort=urgency"
        : `/admin/intakes?type=${selectedType}&sort=urgency`
    }
    active={selectedSort === "urgency"}
  >
    Urgency
  </SortChip>

  <SortChip
    href={
      selectedType === "all"
        ? "/admin/intakes?sort=follow-up"
        : `/admin/intakes?type=${selectedType}&sort=follow-up`
    }
    active={selectedSort === "follow-up"}
  >
    Follow-up
  </SortChip>
</div>

         <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
  <form method="GET" className="w-full max-w-xl">
    <div className="flex flex-col gap-3 sm:flex-row">
      <input type="hidden" name="type" value={selectedType} />
      <input type="hidden" name="sort" value={selectedSort} />

      <input
        type="text"
        name="q"
        defaultValue={q ?? ""}
        placeholder="Search by name, email, city, country, or consulate..."
        className="w-full rounded-full border border-black/10 bg-white px-5 py-3 sans text-[15px] text-black/75 outline-none transition placeholder:text-black/35 focus:border-black/20"
      />

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-5 py-3 text-white shadow-[0_10px_24px_rgba(75,93,68,0.16)] transition hover:bg-[#3E4E38]"
      >
        Search
      </button>
    </div>
  </form>

  <p className="sans text-sm text-black/45">
    Showing {sortedIntakes.length}{" "}
    {selectedType === "all" ? "total" : selectedType} submission
    {sortedIntakes.length === 1 ? "" : "s"}.
  </p>
</div>

{searchQuery ? (
  <div className="mt-3">
    <Link
      href={
        selectedType === "all"
          ? `/admin/intakes?sort=${selectedSort}`
          : `/admin/intakes?type=${selectedType}&sort=${selectedSort}`
      }
      className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 sans text-[12px] uppercase tracking-[0.14em] text-black/55 transition hover:bg-[#FBF8F2] hover:text-black/75"
    >
      Clear search
    </Link>
  </div>
) : null}


          <div className="mt-8 space-y-5">
          {sortedIntakes.length > 0 ? (
             sortedIntakes.map((intake) => (
                <IntakeCardShell
                  key={intake.id}
                  header={
                    <>
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

                      <div className="mt-6 rounded-[22px] border border-black/10 bg-white px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
                        <p className="mb-3 sans text-xs uppercase tracking-[0.16em] text-black/40">
                          At a glance
                        </p>

                        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                          <SummaryPill
                            label="Location"
                            value={[intake.city, intake.country]
                              .filter(Boolean)
                              .join(", ")}
                          />
                          <SummaryPill
                            label="Consulate"
                            value={intake.consulate}
                          />
                          <SummaryPill
                            label="Move date"
                            value={intake.move_date}
                          />
                          <SummaryPill
                            label="Work setup"
                            value={intake.work_setup}
                          />
                        </div>
                      </div>
                    </>
                  }
                >
                  <div className="grid gap-5 md:grid-cols-2">
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
                </IntakeCardShell>
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
    today.getDate(),
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

function SummaryPill({
  label,
  value,
}: {
  label: string;
  value?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-[#FBF8F2] px-4 py-3">
      <p className="mb-1 sans text-[11px] uppercase tracking-[0.14em] text-black/40">
        {label}
      </p>
      <p className="sans text-[14px] leading-[1.7] text-black/70">
        {value || "—"}
      </p>
    </div>
  );
}

function SortChip({
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
      className={`inline-flex items-center rounded-full px-4 py-2 sans text-[12px] uppercase tracking-[0.14em] transition ${
        active
          ? "bg-[#1F1F1F] text-white shadow-[0_10px_24px_rgba(0,0,0,0.14)]"
          : "border border-black/10 bg-white text-black/55 hover:bg-[#FBF8F2] hover:text-black/75"
      }`}
    >
      {children}
    </Link>
  );
}

function getUrgencyScore(intake: any) {
  let score = 0;

  const followUpState = getFollowUpState(intake.admin_follow_up_date);

  if (followUpState === "overdue") score += 100;
  else if (followUpState === "today") score += 80;

  if (intake.admin_priority === "Urgent") score += 60;
  else if (intake.admin_priority === "High") score += 40;
  else if (intake.admin_priority === "Normal") score += 20;
  else if (intake.admin_priority === "Low") score += 10;

  if (!intake.consultation_completed && intake.admin_next_action === "Send booking link") {
    score += 25;
  }

  if (intake.status === "new") score += 15;

  return score;
}

function getFollowUpSortValue(dateValue?: string | null) {
  if (!dateValue) return Number.MAX_SAFE_INTEGER;
  return new Date(`${dateValue}T00:00:00`).getTime();
}