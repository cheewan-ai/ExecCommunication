import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  hedge?: boolean;
};

export function Pill({ children, hedge = false }: Props) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-[11px] px-3 py-1.5 rounded-full",
        hedge
          ? "bg-[rgba(190,24,93,0.08)] border border-[rgba(190,24,93,0.2)] text-c7"
          : "bg-bg border border-(--border) text-c7",
      )}
    >
      {children}
    </span>
  );
}
