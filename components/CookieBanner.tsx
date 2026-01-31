
"use client";

import { useEffect, useMemo, useState } from "react";
import { getConsent, setConsent, type ConsentState } from "@/lib/cookieConsent";

declare global {
  interface Window {
    __openCookiePrefs?: () => void;
  }
}

const defaultState: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [draft, setDraft] = useState<ConsentState>(defaultState);

  // expose opener for your "Cookie Preferences" link anywhere
  useEffect(() => {
    window.__openCookiePrefs = () => {
      const existing = getConsent();
      setDraft(existing ?? defaultState);
      setOpen(true);
      setPrefsOpen(true);
    };
    return () => {
      window.__openCookiePrefs = undefined;
    };
  }, []);

  // on first load: show banner only if no saved consent
  useEffect(() => {
    const existing = getConsent();
    if (!existing) {
      setDraft(defaultState);
      setOpen(true);
      setPrefsOpen(false);
    }
  }, []);

  const acceptAll = () => {
    setConsent({ necessary: true, analytics: true, marketing: true });
    setOpen(false);
    setPrefsOpen(false);
    window.dispatchEvent(new Event("nm-consent-updated"));
  };

  const rejectAll = () => {
    setConsent({ necessary: true, analytics: false, marketing: false });
    setOpen(false);
    setPrefsOpen(false);
    window.dispatchEvent(new Event("nm-consent-updated"));
  };

  const saveChoices = () => {
    setConsent(draft);
    setOpen(false);
    setPrefsOpen(false);
    window.dispatchEvent(new Event("nm-consent-updated"));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6">
      <div
        className="
          mx-auto max-w-3xl overflow-hidden rounded-3xl
          border border-black/10 bg-[#FFFCF7]
          shadow-[0_28px_90px_rgba(0,0,0,0.18)]
        "
      >
        <div className="px-6 py-5 sm:px-7 sm:py-6">
          <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
            Cookies
          </p>

          <h2 className="serif mt-2 text-[22px] sm:text-[24px] leading-[1.15] text-[#4B5D44]">
            We use cookies to improve your experience.
          </h2>

          <p className="sans mt-2 text-[15px] leading-[1.6] text-black/65">
            Necessary cookies keep the site working. Analytics cookies help us
            understand what’s useful. You can accept, reject, or customize.
          </p>

          <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-[#C9A86A]/45 to-transparent" />

          {!prefsOpen ? (
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptAll}
                className="
                  inline-flex items-center justify-center rounded-full
                  px-7 py-3 sans text-sm tracking-wide
                  text-white bg-[#4B5D44]
                  shadow-[0_14px_40px_rgba(75,93,68,0.30)]
                  hover:bg-[#3E4E38] hover:-translate-y-[1px]
                  transition-all duration-300
                "
              >
                Accept all
              </button>

              <button
                onClick={rejectAll}
                className="
                  inline-flex items-center justify-center rounded-full
                  px-7 py-3 sans text-sm tracking-wide
                  text-[#4B5D44] bg-white/80
                  border border-black/10
                  shadow-[0_10px_28px_rgba(0,0,0,0.06)]
                  hover:bg-white transition-all duration-300
                "
              >
                Reject all
              </button>

              <button
                onClick={() => setPrefsOpen(true)}
                className="
                  inline-flex items-center justify-center rounded-full
                  px-7 py-3 sans text-sm tracking-wide
                  text-black/70 underline underline-offset-4
                  hover:text-black transition
                "
              >
                Customize
              </button>
            </div>
          ) : (
            <div className="mt-4">
              <div className="space-y-3">
                <PrefRow
                  label="Necessary"
                  desc="Required for the site to function."
                  checked
                  disabled
                  onChange={() => {}}
                />
                <PrefRow
                  label="Analytics"
                  desc="Helps us understand usage (loads only if enabled)."
                  checked={draft.analytics}
                  onChange={(v) => setDraft((d) => ({ ...d, analytics: v }))}
                />
                <PrefRow
                  label="Marketing"
                  desc="Used for ads/retargeting (optional)."
                  checked={draft.marketing}
                  onChange={(v) => setDraft((d) => ({ ...d, marketing: v }))}
                />
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={saveChoices}
                  className="
                    inline-flex items-center justify-center rounded-full
                    px-7 py-3 sans text-sm tracking-wide
                    text-white bg-[#4B5D44]
                    shadow-[0_14px_40px_rgba(75,93,68,0.30)]
                    hover:bg-[#3E4E38] hover:-translate-y-[1px]
                    transition-all duration-300
                  "
                >
                  Save choices
                </button>

                <button
                  onClick={rejectAll}
                  className="
                    inline-flex items-center justify-center rounded-full
                    px-7 py-3 sans text-sm tracking-wide
                    text-[#4B5D44] bg-white/80
                    border border-black/10
                    hover:bg-white transition-all duration-300
                  "
                >
                  Reject all
                </button>

                <button
                  onClick={() => {
                    setPrefsOpen(false);
                    setOpen(false);
                  }}
                  className="sans text-sm text-black/60 hover:text-black transition sm:ml-auto"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <p className="sans mt-4 text-[12px] text-black/55">
            You can change your choices anytime via{" "}
            <button
              className="underline underline-offset-4 hover:text-black transition"
              onClick={() => window.__openCookiePrefs?.()}
              type="button"
            >
              Cookie Preferences
            </button>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

function PrefRow({
  label,
  desc,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-black/10 bg-white/70 px-4 py-3">
      <div>
        <p className="serif text-[16px] text-[#4B5D44]">{label}</p>
        <p className="sans text-[13px] leading-[1.5] text-black/60">{desc}</p>
      </div>

      <label className="inline-flex items-center gap-2 select-none">
        <input
          type="checkbox"
          className="h-4 w-4 accent-[#4B5D44]"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
        />
      </label>
    </div>
  );
}

