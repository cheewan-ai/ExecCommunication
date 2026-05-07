import { cn } from "@/lib/cn";

type Props = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: { dot: 6, text: "text-[15px]" },
  md: { dot: 6, text: "text-[18px]" },
  lg: { dot: 8, text: "text-[22px]" },
} as const;

export function BrandMark({ size = "md", className }: Props) {
  const s = sizes[size];
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className="block bg-c1"
        style={{ width: s.dot, height: s.dot }}
      />
      <span
        className={cn(
          "font-display tracking-[0.04em] text-ink",
          s.text,
        )}
      >
        EXECCOMMS
      </span>
    </span>
  );
}
