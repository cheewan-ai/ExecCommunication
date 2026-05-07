"use client";

import { cn } from "@/lib/cn";
import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, className, id, ...rest }: Props) {
  const inputId = id || (label ? `inp-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return (
    <label className="block mb-3.5" htmlFor={inputId}>
      {label && (
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-muted mb-1.5 block">
          {label}
        </span>
      )}
      <input
        id={inputId}
        className={cn(
          "w-full box-border font-body text-[14px] text-ink bg-card border border-(--border) rounded-md px-3 py-2.5 outline-none focus:border-c1 transition-colors",
          className,
        )}
        {...rest}
      />
    </label>
  );
}
