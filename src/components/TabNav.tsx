"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const tabs = [
  { href: "/welcome", label: "Start" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/formula", label: "Core Formula" },
  { href: "/flow", label: "Sentence Flow" },
  { href: "/openings", label: "Opening Lines" },
  { href: "/fillers", label: "Kill the Fillers" },
  { href: "/close", label: "How to Close" },
  { href: "/drill", label: "Practice Drill" },
];

export function TabNav() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-[57px] z-[99] bg-bg border-b border-(--border) px-6 py-2.5 flex gap-2 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "font-body text-[13px] font-semibold px-4 py-1.5 rounded-full flex-none transition-colors duration-150",
              active
                ? "bg-c1 text-card"
                : "bg-transparent text-muted hover:bg-[rgba(232,67,10,0.08)] hover:text-c1",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
