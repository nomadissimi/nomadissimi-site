import { Suspense } from "react";
import ResetPasswordForm from "app/reset-password/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl rounded-[28px] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <div className="mt-8 rounded-2xl border border-black/10 bg-[#FBF8F2] px-4 py-3 text-sm text-black/60">
              Loading reset page...
            </div>
          </div>
        </main>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  );
}
