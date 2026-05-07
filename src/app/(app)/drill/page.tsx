"use client";

import { useState, useEffect, useRef } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { CalloutBox } from "@/components/CalloutBox";
import { FormulaBox } from "@/components/FormulaBox";
import { Button } from "@/components/Button";
import { drillCards } from "@/lib/drillCards";
import { cn } from "@/lib/cn";

export default function DrillPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [secondsLeft, setSecondsLeft] = useState(90);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [copied, setCopied] = useState(false);
  const [fading, setFading] = useState(false);

  const card = drillCards[currentIdx];

  // Reset timer when card changes
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSecondsLeft(90);
    setRunning(false);
  }, [currentIdx]);

  // Tick
  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setRunning(false);
          if (intervalRef.current) clearInterval(intervalRef.current);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  const transition = (target: number) => {
    if (target < 0 || target >= drillCards.length) return;
    setFading(true);
    setCompleted((prev) => new Set(prev).add(currentIdx));
    setTimeout(() => {
      setCurrentIdx(target);
      setFading(false);
    }, 280);
  };

  const onTimerClick = () => {
    if (running) {
      setRunning(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else if (secondsLeft <= 0) {
      setSecondsLeft(90);
      setRunning(true);
    } else {
      setRunning(true);
    }
  };

  const onCopy = async () => {
    await navigator.clipboard.writeText(card.template);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");
  const timerColor =
    secondsLeft <= 10 ? "text-c1" : secondsLeft <= 30 ? "text-c5" : "text-ink";

  return (
    <div>
      <Eyebrow>Daily Reps</Eyebrow>
      <h1 className="section-title">Practice Drill</h1>
      <p className="text-[14px] text-ink2 mb-5 leading-[1.75]">
        Eight cards. One question at a time. Use the spine, run the timer,
        repeat tomorrow.
      </p>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-6">
        {drillCards.map((_, i) => {
          const isCompleted = completed.has(i);
          const isActive = i === currentIdx;
          return (
            <div
              key={i}
              className={cn(
                "rounded-full relative transition-all duration-200",
                isActive
                  ? "w-3 h-3 bg-c1 ring-2 ring-bg ring-offset-1 ring-offset-c1"
                  : isCompleted
                    ? "w-2.5 h-2.5 bg-c1"
                    : "w-2.5 h-2.5 bg-(--border)",
              )}
            >
              {isCompleted && !isActive && (
                <span className="absolute inset-0 flex items-center justify-center text-card text-[7px] font-bold">
                  ✓
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div
        className={cn(
          "bg-card border border-(--border) rounded-[10px] px-[26px] py-[22px] mb-4 transition-opacity duration-280",
          fading ? "opacity-0" : "opacity-100",
        )}
      >
        <span className="inline-block font-mono text-[11px] font-medium bg-c1 text-card px-2.5 py-1 rounded mb-3 tracking-[0.04em]">
          Question {currentIdx + 1}
        </span>
        <h2 className="font-display text-[22px] text-ink tracking-[0.04em] leading-[1.3] mb-3.5">
          {card.question}
        </h2>

        <FormulaBox>{card.spine}</FormulaBox>

        <CalloutBox variant="tip" label="TIP">
          {card.tip}
        </CalloutBox>

        <div className="bg-[rgba(8,145,178,0.06)] border-l-[3px] border-c6 rounded-lg px-[18px] py-4 mb-3">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-c6 mb-1.5 block">
            TEMPLATE
          </span>
          <pre className="whitespace-pre-wrap font-body text-[14px] text-ink2 leading-[1.85] m-0">
            {card.template}
          </pre>
          <button
            onClick={onCopy}
            className="font-mono text-[11px] text-muted hover:text-c1 transition-colors mt-3 cursor-pointer"
          >
            {copied ? "Copied ✓" : "Copy Template"}
          </button>
        </div>

        <div className="flex gap-3 items-center mt-4 flex-wrap">
          <span className="font-mono text-[11px] text-muted bg-bg border border-(--border) px-2.5 py-1.5 rounded-full">
            Target: 60–90 sec
          </span>
          <Button variant="outline" onClick={onTimerClick}>
            {running ? "Stop" : secondsLeft <= 0 ? "Reset" : "Start Timer"}
          </Button>
          <span
            className={cn(
              "font-display text-[20px] tracking-[0.04em] min-w-[60px] inline-block",
              timerColor,
            )}
          >
            {mm}:{ss}
          </span>
          {secondsLeft <= 0 && (
            <span className="font-mono text-[11px] text-c1">Time&rsquo;s up</span>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center mt-3.5">
        <button
          onClick={() => transition(currentIdx - 1)}
          disabled={currentIdx === 0}
          className="font-body text-[13px] font-semibold text-c1 disabled:text-muted disabled:cursor-not-allowed py-2 px-3 cursor-pointer hover:opacity-70 transition-opacity min-h-[44px]"
        >
          ← Prev
        </button>
        <span className="font-mono text-[11px] text-muted">
          Card {currentIdx + 1} of {drillCards.length}
        </span>
        <button
          onClick={() => transition(currentIdx + 1)}
          disabled={currentIdx === drillCards.length - 1}
          className="font-body text-[13px] font-semibold text-c1 disabled:text-muted disabled:cursor-not-allowed py-2 px-3 cursor-pointer hover:opacity-70 transition-opacity min-h-[44px]"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
