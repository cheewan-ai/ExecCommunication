import { StubScreen } from "@/components/StubScreen";

export default function FillersPage() {
  return (
    <StubScreen
      eyebrow="Verbal Hygiene"
      title="Kill the Fillers"
      description='Filler words are not a speech habit — they are a credibility signal. Every "um", "you know", and "so yeah" tells the listener your brain has not found the answer yet. Replace them all with silence.'
      highlights={[
        {
          label: "The Core Technique",
          body: "Filler word → Replace with silence (1–2 seconds). A 2-second pause after a question signals you're considering. A 2-second stream of fillers signals you don't have one. Same duration. Opposite impression.",
        },
        {
          label: "Audit From the Transcript",
          body: "From a real interview transcript: 40+ fillers in one session, 8× appearances of \"you know\", target under 3 per answer. Most people reach under 5 within a week of daily practice.",
        },
        {
          label: "Hedge Words — The Confidence Killers",
          body: "\"I think\", \"probably\", \"sort of\", \"maybe\", \"I'm not sure but...\" — the patterns that tell the listener you're not sure of your own answer, which makes them not sure either.",
        },
        {
          label: "How to Practice",
          body: "Record. Count. Benchmark (week 1: under 8, week 2: under 5, week 3: under 3). Repeat. One question per day using the Practice Drill cards.",
        },
      ]}
    />
  );
}
