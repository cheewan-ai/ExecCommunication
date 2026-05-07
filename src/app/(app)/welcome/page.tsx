"use client";

import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { StepNum } from "@/components/StepNum";
import { CalloutBox } from "@/components/CalloutBox";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

const steps = [
  {
    n: 1,
    t: "Start with the formula",
    d: "Tap Core Formula. The O-P-E-B spine — Outcome · Proof · Explanation · Bridge — is the structure under every answer.",
  },
  {
    n: 2,
    t: "Memorize the spines",
    d: "Four sentence spines for four question types. Once they're reflexive, you can answer anything in real time.",
  },
  {
    n: 3,
    t: "Drill it daily",
    d: "Eight cards. One per common question. Speak each answer aloud, time yourself, target 60–90 seconds, zero fillers.",
  },
  {
    n: 4,
    t: "Replace fillers with pause",
    d: "The fastest single change: every “um / you know / so yeah” becomes a one-second pause. Do this and the room recalibrates how it perceives you.",
  },
];

export default function WelcomePage() {
  const router = useRouter();
  return (
    <div>
      <Eyebrow>How it works</Eyebrow>
      <h1 className="section-title">How to use this app</h1>
      <p className="text-[14px] text-ink2 mb-5 leading-[1.75]">
        Four steps. Twelve minutes a day. Every executive room gets easier.
      </p>

      <div className="mt-3.5">
        {steps.map((s) => (
          <div
            key={s.n}
            className="bg-card border border-(--border) rounded-[10px] px-4 py-3.5 mb-2.5 flex gap-3 items-start"
          >
            <StepNum>{s.n}</StepNum>
            <div className="flex-1">
              <div className="font-body text-[14px] font-bold text-ink mb-1">
                {s.t}
              </div>
              <div className="font-body text-[13px] text-ink2 leading-[1.6]">
                {s.d}
              </div>
            </div>
          </div>
        ))}
      </div>

      <CalloutBox variant="tip" label="ONE THING">
        Replace every filler with a one-second pause. Fastest ROI of any
        communication change.
      </CalloutBox>

      <Button onClick={() => router.push("/formula")} className="w-full mt-3.5">
        Start drilling
      </Button>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <Link
          href="/dashboard"
          className="block bg-card border border-(--border) rounded-[10px] px-4 py-3.5 hover:border-c1 transition-colors"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted mb-1">
            Dashboard
          </div>
          <div className="font-body text-[14px] text-ink">
            Your daily progress
          </div>
        </Link>
        <Link
          href="/drill"
          className="block bg-card border border-(--border) rounded-[10px] px-4 py-3.5 hover:border-c1 transition-colors"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted mb-1">
            Practice
          </div>
          <div className="font-body text-[14px] text-ink">
            Eight-card daily drill
          </div>
        </Link>
      </div>
    </div>
  );
}
