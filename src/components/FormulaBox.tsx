type Props = { children: React.ReactNode };

export function FormulaBox({ children }: Props) {
  return (
    <div className="bg-[rgba(147,51,234,0.07)] border-l-[4px] border-c4 px-[18px] py-3.5 rounded-lg my-3 font-body text-[16px] font-bold text-ink leading-snug">
      {children}
    </div>
  );
}
