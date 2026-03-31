import { Suspense } from "react";
import CreateAccountForm from "./CreateAccountForm";

export default function CreateAccountPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl rounded-[28px] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
        <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
          Nomadissimi portal
        </p>

        <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
          Create your portal account
        </h1>

        <Suspense
          fallback={
            <div className="mt-8 rounded-2xl border border-black/10 bg-[#FBF8F2] px-4 py-3 text-sm text-black/60">
              Loading account setup...
            </div>
          }
        >
          <CreateAccountForm />
        </Suspense>
      </div>
    </main>
  );
}
