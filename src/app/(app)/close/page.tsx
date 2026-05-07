import { StubScreen } from "@/components/StubScreen";

export default function ClosePage() {
  return (
    <StubScreen
      eyebrow="The Landing"
      title="How to Close"
      description="Most people let answers drift to a natural stop. Strong communicators land every answer on a deliberate point — and then stop talking. The last sentence is the one that gets remembered."
      highlights={[
        {
          label: "Close Type 1 — Bridge Close",
          body: 'For achievement & experience answers. Story or proof → "That maps directly to..." → Specific role element. "...maps directly to the customer evangelism pillar of this role — I\'ve been doing the job without the title."',
        },
        {
          label: "Close Type 2 — Implication Close",
          body: 'For landscape & opinion answers. Analysis → "The implication is..." → Actionable point. "...so the implication for [audience] is [specific consequence]. That\'s the conversation I\'d build around."',
        },
        {
          label: "The Hardest Skill",
          body: "Land your strongest sentence → Stop. Do not add more. The urge to keep talking after you've made your point is the enemy of executive communication. Silence after a strong point reads as confidence.",
        },
      ]}
    />
  );
}
