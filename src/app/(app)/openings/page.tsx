import { StubScreen } from "@/components/StubScreen";

export default function OpeningsPage() {
  return (
    <StubScreen
      eyebrow="Power Openers"
      title="Opening Lines"
      description="The first five words determine whether the executive leans in or checks their phone. Strong openers signal you already have the answer — you're delivering it, not searching for it."
      highlights={[
        {
          label: "Number Open",
          body: "Open with the count. Signal the structure before you give it. \"Three shifts define where the threat landscape is heading...\"",
        },
        {
          label: "Outcome Open",
          body: "Lead with the result. Let them ask how you got there. \"The result was a dashboard ranked top 3 of 3,000 global assets...\"",
        },
        {
          label: "Position Open",
          body: "State your view directly. Executives respect a clear point of view. \"My view is that the biggest threat to APAC enterprises right now is AI-accelerated social engineering, not malware...\"",
        },
        {
          label: "Anchor Open",
          body: "Lead with a credential that earns you the right to speak. \"In 100+ CISO sessions across AMEA, the pattern I kept seeing was evaluations stalling at mid-management level...\"",
        },
      ]}
    />
  );
}
