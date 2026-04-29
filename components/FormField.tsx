"use client";

import { useState } from "react";

type FormFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  type?: "text" | "email";
  rows?: number;
};

const FormField = ({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  rows,
}: FormFieldProps) => {
  const [focused, setFocused] = useState(false);
  const multiline = !!rows;
  const isFloated = focused || value.length > 0;
  const hasError = !!error;

  const borderClass = hasError
    ? "border border-danger-300 bg-[rgba(231,183,184,0.2)]"
    : focused
      ? "border-2 border-[rgba(255,156,122,0.5)] bg-[#f7f7f7]"
      : "border border-text-300 bg-[#f7f7f7]";

  const baseClass = `w-full rounded-lg text-base text-text-500 outline-none transition-colors ${borderClass}`;

  const labelClass = [
    "absolute left-3 pointer-events-none transition-all duration-150",
    isFloated
      ? `top-0 -translate-y-1/2 text-xs px-1 bg-background-300 ${hasError ? "text-danger-300" : "text-text-500"}`
      : multiline
        ? "top-3 text-base text-text-400"
        : "top-1/2 -translate-y-1/2 text-base text-text-400",
  ].join(" ");

  return (
    <div className="flex flex-col gap-1">
      <div className="relative">
        {multiline ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            rows={rows}
            className={`${baseClass} px-3 ${isFloated ? "pt-5 pb-3" : "py-3"} resize-none`}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`${baseClass} h-12 px-3 ${isFloated ? "pt-4 pb-2" : ""}`}
          />
        )}
        <label className={labelClass}>
          {label} <span className="text-danger-300">*</span>
        </label>
      </div>
      {hasError && (
        <div className="flex items-center gap-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="shrink-0"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.857 1.314a1.333 1.333 0 0 1 2.286 0l5.714 9.714A1.333 1.333 0 0 1 13.714 13H2.286a1.333 1.333 0 0 1-1.143-1.972L6.857 1.314ZM8 5.333a.667.667 0 0 0-.667.667v2.667a.667.667 0 1 0 1.334 0V6A.667.667 0 0 0 8 5.333Zm0 6a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333Z"
              fill="#cd2b31"
            />
          </svg>
          <p className="text-xs text-text-500">{error}</p>
        </div>
      )}
    </div>
  );
};

export default FormField;
