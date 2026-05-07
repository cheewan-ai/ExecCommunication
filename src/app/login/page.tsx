"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { signIn, getCurrentUser } from "@/lib/auth";
import { cn } from "@/lib/cn";

type Mode = "signin" | "signup";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  useEffect(() => {
    if (getCurrentUser()) router.replace("/welcome");
  }, [router]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    signIn(email);
    router.replace("/welcome");
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-[440px] bg-card border border-(--border) rounded-[10px] px-7 py-9">
        <div className="flex justify-between items-center">
          <BrandMark size="lg" />
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
            v2.0
          </span>
        </div>

        <div className="mt-12">
          <div className="font-display text-[40px] tracking-[0.04em] leading-none text-ink mb-1.5">
            SPEAK LIKE
          </div>
          <div className="font-display text-[40px] tracking-[0.04em] leading-none text-ink mb-1.5">
            THE LEADER
          </div>
          <div className="font-display text-[40px] tracking-[0.04em] leading-none text-c1">
            YOU ALREADY ARE.
          </div>
          <p className="font-body text-[14px] text-ink2 leading-[1.6] mt-8 max-w-[320px]">
            Daily drills, sentence spines, and openers for high-stakes executive
            conversations. Built by Cheewan.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-9">
          <div className="flex gap-1 mb-4">
            {(["signin", "signup"] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={cn(
                  "font-body text-[13px] font-semibold px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer",
                  mode === m
                    ? "bg-c1 text-card"
                    : "bg-transparent text-muted hover:bg-[rgba(232,67,10,0.08)] hover:text-c1",
                )}
              >
                {m === "signin" ? "Sign in" : "Create account"}
              </button>
            ))}
          </div>

          <Input
            label="Work email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <Input
            label={mode === "signin" ? "Password" : "Choose a password"}
            type="password"
            placeholder="••••••••"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            autoComplete={mode === "signin" ? "current-password" : "new-password"}
          />

          {mode === "signin" && (
            <div className="text-right -mt-1.5 mb-3.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-c1 cursor-pointer">
                FORGOT PASSWORD?
              </span>
            </div>
          )}

          <Button type="submit" className="w-full mt-1">
            {mode === "signin" ? "Sign in" : "Create account"}
          </Button>
        </form>

        <div className="text-center mt-7 pt-5">
          <div className="w-8 h-0.5 bg-c1 mx-auto mb-2.5" />
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
            CHEEWAN.AI · WARM EDITORIAL
          </span>
        </div>

        <p className="text-center font-mono text-[10px] uppercase tracking-[0.08em] text-muted mt-3 leading-tight">
          Phase 1 build · Auth runs in browser. Real auth lands later.
        </p>
      </div>
    </div>
  );
}
