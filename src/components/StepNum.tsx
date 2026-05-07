type Props = { children: React.ReactNode };

export function StepNum({ children }: Props) {
  return (
    <span className="w-7 h-7 bg-c1 text-card rounded-full inline-flex items-center justify-center font-body font-bold text-[14px] flex-shrink-0">
      {children}
    </span>
  );
}
