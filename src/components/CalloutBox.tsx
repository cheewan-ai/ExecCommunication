import { cn } from "@/lib/cn";

type Variant = "good" | "bad" | "tip" | "info" | "template" | "formula";

type Props = {
  variant: Variant;
  label?: string;
  children: React.ReactNode;
  className?: string;
};

const config: Record<
  Variant,
  { bg: string; border: string; labelColor: string; defaultLabel: string }
> = {
  good: {
    bg: "bg-[rgba(22,163,74,0.07)]",
    border: "border-l-[3px] border-c3",
    labelColor: "text-c3",
    defaultLabel: "STRONGER",
  },
  bad: {
    bg: "bg-[rgba(232,67,10,0.07)]",
    border: "border-l-[3px] border-c1",
    labelColor: "text-c1",
    defaultLabel: "WEAKER",
  },
  tip: {
    bg: "bg-[rgba(217,119,6,0.08)]",
    border: "border-l-[3px] border-c5",
    labelColor: "text-c5",
    defaultLabel: "TIP",
  },
  info: {
    bg: "bg-[rgba(8,145,178,0.06)]",
    border: "border-l-[3px] border-c6",
    labelColor: "text-c6",
    defaultLabel: "INFO",
  },
  template: {
    bg: "bg-[rgba(8,145,178,0.06)]",
    border: "border-l-[3px] border-c6",
    labelColor: "text-c6",
    defaultLabel: "TEMPLATE",
  },
  formula: {
    bg: "bg-[rgba(147,51,234,0.07)]",
    border: "border-l-[4px] border-c4",
    labelColor: "text-c4",
    defaultLabel: "FORMULA",
  },
};

export function CalloutBox({ variant, label, children, className }: Props) {
  const c = config[variant];
  const finalLabel = label ?? c.defaultLabel;
  return (
    <div
      className={cn(
        c.bg,
        c.border,
        "rounded-lg px-4 py-3.5 my-2.5",
        className,
      )}
    >
      {finalLabel && (
        <span
          className={cn(
            "font-mono text-[10px] font-medium uppercase tracking-[0.08em] mb-1.5 block",
            c.labelColor,
          )}
        >
          {finalLabel}
        </span>
      )}
      <div className="text-[13.5px] leading-[1.65] text-ink2">{children}</div>
    </div>
  );
}
