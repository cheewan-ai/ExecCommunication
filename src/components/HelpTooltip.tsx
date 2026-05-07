"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export function HelpTooltip({ title, children }: Props) {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pinned) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setPinned(false);
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPinned(false);
        setOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [pinned]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          const next = !pinned;
          setPinned(next);
          setOpen(next);
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => !pinned && setOpen(false)}
        aria-label="Help"
        aria-expanded={open}
        className={`w-7 h-7 rounded-full border border-(--border) bg-card font-mono text-[13px] font-medium flex items-center justify-center cursor-pointer transition-colors duration-150 mt-1.5 ${
          open ? "border-c1 text-c1 bg-[rgba(232,67,10,0.08)]" : "text-muted"
        } hover:border-c1 hover:text-c1 hover:bg-[rgba(232,67,10,0.08)]`}
      >
        ?
      </button>
      {open && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => !pinned && setOpen(false)}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-label={title}
          className="absolute top-[42px] right-0 w-[min(380px,calc(100vw-40px))] bg-card border border-(--border) rounded-[10px] px-5 py-[18px] z-50 font-body text-[13px] leading-[1.7] text-ink2"
        >
          <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted mb-3">
            {title}
          </h4>
          {children}
        </div>
      )}
    </div>
  );
}
