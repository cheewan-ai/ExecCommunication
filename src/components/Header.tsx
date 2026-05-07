"use client";

import { useRouter } from "next/navigation";
import { BrandMark } from "./BrandMark";
import { signOut } from "@/lib/auth";

export function Header() {
  const router = useRouter();
  const handleSignOut = () => {
    signOut();
    router.replace("/login");
  };
  return (
    <header className="sticky top-0 z-[100] bg-card border-b border-(--border) px-6 py-3.5 flex justify-between items-center">
      <BrandMark size="md" />
      <button
        onClick={handleSignOut}
        className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted hover:text-c1 transition-colors cursor-pointer"
      >
        SIGN OUT
      </button>
    </header>
  );
}
