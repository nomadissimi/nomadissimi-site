import Link from "next/link";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[28px] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)] md:p-10">
          <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
            Nomadissimi consultations
          </p>

          <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
            Book your consultation
          </h1>

          <p className="mt-4 max-w-2xl sans text-[16px] leading-[1.8] text-black/65">
            If your package includes a consultation, or if you are booking a
            standalone call, this is where you reserve your time with us.
          </p>

          <div className="mt-8 rounded-2xl border border-black/10 bg-[#FBF8F2] px-5 py-5">
            <h2 className="serif text-2xl text-black">Before you book</h2>

            <div className="mt-4 space-y-3 sans text-[15px] leading-[1.8] text-black/70">
              <p>
                Please book using the same email address associated with your
                Nomadissimi purchase whenever possible.
              </p>
              <p>
                If your consultation is included in a package, your booking must
                correspond to the consultation type included with that package.
              </p>
              <p>
                If you are unsure which consultation applies to you, contact us
                before booking.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-black/10 bg-[#FBF8F2] px-5 py-5">
            <h2 className="serif text-2xl text-black">
              Cancellation and no-show policy
            </h2>

            <div className="mt-4 space-y-3 sans text-[15px] leading-[1.8] text-black/70">
              <p>
                Standalone consultations may be rescheduled at no additional
                cost if requested more than 24 hours before the scheduled start
                time.
              </p>

              <p>
                For standalone consultations, cancellations or rescheduling
                requests made between 12 and 24 hours before the scheduled start
                time are subject to a reduced fee of EUR 73.50.
              </p>

              <p>
                For standalone consultations, cancellations made less than 12
                hours before the scheduled start time, or missed appointments
                without notice, are subject to a fee of EUR 147.
              </p>

              <p>
                For package-included consultations, rescheduling is permitted at
                no additional cost when requested more than 24 hours before the
                scheduled start time.
              </p>

              <p>
                If a package-included consultation is cancelled less than 24
                hours before the scheduled time, or missed without notice, it
                may be treated as redeemed and counted as used.
              </p>

              <p>
                By booking, you agree to the consultation terms in our{" "}
                <Link href="/terms" className="underline underline-offset-4">
                  Terms
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-black/15 bg-white px-5 py-8 text-center">
            <p className="sans text-sm tracking-[0.18em] uppercase text-black/40">
              Calendly embed goes here
            </p>

            <p className="mt-3 sans text-[15px] leading-[1.8] text-black/60">
              This section will hold your Calendly embed or scheduling button.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] transition hover:bg-[#3E4E38]"
              >
                Open booking calendar
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-black/70 transition hover:bg-[#FBF8F2] hover:text-black"
              >
                Need help first?
              </Link>
            </div>
          </div>

          <p className="mt-8 sans text-sm text-black/45">
            Need help choosing the right consultation or package? Contact us
            before booking and we’ll point you in the right direction.
          </p>
        </div>
      </div>
    </main>
  );
}
