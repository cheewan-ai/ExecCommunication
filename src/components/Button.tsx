"use client";

import { cn } from "@/lib/cn";
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost" | "dark";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const variants: Record<Variant, string> = {
  primary: "bg-c1 text-card border-c1 hover:bg-accent-hover hover:border-accent-hover",
  outline:
    "bg-transparent text-c1 border-c1 hover:bg-[rgba(232,67,10,0.08)]",
  ghost: "bg-transparent text-c1 border-transparent hover:opacity-70",
  dark: "bg-ink text-card border-ink hover:opacity-90",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: Props) {
  return (
    <button
      className={cn(
        "font-body text-[14px] font-semibold rounded-md px-[18px] py-2.5 cursor-pointer border min-h-[40px] leading-tight transition-colors duration-150",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
