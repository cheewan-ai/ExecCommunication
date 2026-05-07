"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";

/**
 * Client-side guard. If no auth user in localStorage, redirect to /login.
 * Renders children only after auth is confirmed (avoids flash of protected content).
 */
export function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      router.replace("/login");
      return;
    }
    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <div className="flex-1 flex items-center justify-center bg-bg">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
          Loading…
        </span>
      </div>
    );
  }

  return <>{children}</>;
}
