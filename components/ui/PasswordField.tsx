"use client";

import { useId, useState } from "react";

type PasswordFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  minLength?: number;
};

export default function PasswordField({
  label,
  name,
  value,
  onChange,
  autoComplete = "current-password",
  placeholder,
  required,
  helperText,
  minLength,
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  const id = useId();

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="mb-2 block sans text-sm text-black/70">
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          name={name}
          type={visible ? "text" : "password"}
          autoComplete={autoComplete}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 pr-20 text-black outline-none transition focus:border-black/20"
        />

        <button
          type="button"
          onClick={() => setVisible((prev) => !prev)}
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-black/10 bg-[#FBF8F2] px-3 py-1.5 sans text-[12px] uppercase tracking-[0.12em] text-black/60 transition hover:bg-white hover:text-black/80"
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>

      {helperText ? (
        <p className="sans text-[13px] leading-[1.7] text-black/45">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
