import { cn } from "@/lib/cn";

type Props = {
  num: string;
  label: string;
  color?: "c1" | "c3" | "c5";
};

const colorMap = {
  c1: "text-c1",
  c3: "text-c3",
  c5: "text-c5",
} as const;

export function StatCard({ num, label, color = "c1" }: Props) {
  return (
    <div className="bg-card border border-(--border) rounded-lg px-3.5 py-[18px] text-center">
      <div
        className={cn(
          "font-display text-[36px] tracking-[0.04em] leading-none mb-1.5",
          colorMap[color],
        )}
      >
        {num}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted leading-tight">
        {label}
      </div>
    </div>
  );
}
