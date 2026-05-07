import { StubScreen } from "@/components/StubScreen";

export default function FlowPage() {
  return (
    <StubScreen
      eyebrow="Sentence Spines"
      title="Sentence Flow"
      description="Every strong executive answer runs on a spine. Learn these four spines and you can structure any answer in real time — no preparation required."
      highlights={[
        {
          label: "Spine 1 — Background & Storytelling",
          body: "Number → Point → Point → Point → Bridge. Signal the structure with a count, deliver one metric-led sentence per point, then bridge close.",
        },
        {
          label: "Spine 2 — Opinion & Landscape",
          body: "Shift 1 (past) → Shift 2 (change) → Shift 3 (now) → Implication. Always end with an implication, never a description.",
        },
        {
          label: "Spine 3 — Gap & Challenge",
          body: "Acknowledge → Reframe → Evidence → Forward action. Surface gaps yourself; proactive honesty reads as senior-level self-awareness.",
        },
        {
          label: "Spine 4 — Motivation & 'Why Leaving'",
          body: "Context (1 sentence) → Forward rationale → Role alignment. Never speak negatively about any employer.",
        },
      ]}
    />
  );
}
