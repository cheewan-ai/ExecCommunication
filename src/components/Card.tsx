import { cn } from "@/lib/cn";

type Props = {
  label?: string;
  children: React.ReactNode;
  className?: string;
};

export function Card({ label, children, className }: Props) {
  return (
    <div
      className={cn(
        "bg-card border border-(--border) rounded-[10px] px-[26px] py-[22px] mb-4",
        className,
      )}
    >
      {label && <div className="card-label">{label}</div>}
      {children}
    </div>
  );
}
