import { Eyebrow } from "@/components/Eyebrow";
import { Card } from "@/components/Card";
import { CalloutBox } from "@/components/CalloutBox";
import { FormulaBox } from "@/components/FormulaBox";
import { OpebGrid } from "@/components/OpebGrid";
import { HelpTooltip } from "@/components/HelpTooltip";

const examples = [
  {
    n: 1,
    weaker:
      "So what we did is I worked with my solution architect to pull out all this critical information, and then I designed the playbook, and then we look at adoption, and we also built this CX thing, and I won an award for that...",
    stronger:
      "The outcome: a dashboard ranked top 3 of 3,000+ global assets. I identified a visibility gap, partnered with architects to build predictive signals across 2,000 customers. That's the same analytical problem Threat Research Platform faces with regional threat intelligence operationalization.",
  },
  {
    n: 2,
    weaker:
      "In the past, you know, detection was the main thing, and then there was this alert fatigue issue, and then AI came along, and like, you know, things have changed a lot, so yeah...",
    stronger:
      "Three shifts define the threat landscape. Detection became response. Alert fatigue became the operational crisis. AI eliminated the human-speed assumption entirely. The implication: your customers' security posture was designed for a world that no longer exists.",
  },
  {
    n: 3,
    weaker:
      "I've done quite a few EBC sessions, I think around maybe fifty or so over two years, and they've gone pretty well from what I can tell, so yeah, I'm sort of comfortable with that kind of thing...",
    stronger:
      "Over two years I delivered 50+ EBC sessions to 200+ C-suite stakeholders across AMEA. The content framework I built became the global standard for high-stakes EBC pursuits and contributed to $7.6M in influenced revenue at 86% pipeline conversion.",
  },
  {
    n: 4,
    weaker:
      "So I've managed teams, a decent size team across Southeast Asia, and there were various people in pre-sales and post-sales and customer success, and we did pretty well retention-wise I think...",
    stronger:
      "I built and led a 40-person technical organization across seven SEA markets — 29 SEs, 12 CSMs, 3 managers — sustaining 90% retention over three years while scaling regional revenue from $101M to $134M.",
  },
];

export default function CoreFormulaPage() {
  return (
    <div>
      <div className="flex justify-between items-start gap-3 relative">
        <div>
          <Eyebrow>The Foundation</Eyebrow>
          <h1 className="section-title">Core Formula</h1>
        </div>
        <HelpTooltip title="How to Use It as a Daily Habit">
          <p className="mb-3">
            Start with the <strong className="text-ink font-bold">Core Formula</strong> tab — the
            O-P-E-B structure is the spine of everything. Once that feels natural,
            move to <strong className="text-ink font-bold">Sentence Flow</strong>.
          </p>
          <p className="mb-3">
            The <strong className="text-ink font-bold">Practice Drill</strong> is your daily drill.
            Eight cards, one per common question type. Answer aloud, time yourself,
            target 60–90 seconds, zero fillers, clean bridge close.
          </p>
          <span className="block bg-[rgba(232,67,10,0.07)] border-l-[3px] border-c1 px-3 py-2.5 rounded-md my-3">
            The fastest move: replace every &ldquo;um / you know / so yeah&rdquo;
            with a one-second pause. Fastest ROI of any communication change.
          </span>
          <p className="mb-3">
            Use <strong className="text-ink font-bold">Opening Lines</strong> as a warmup before any
            interview or executive session. Read the power openers aloud three
            times.
          </p>
          <p className="mb-0">
            Same spine, every room — interviews, EBC sessions, CISO briefings,
            board presentations.{" "}
            <strong className="text-ink font-bold">
              Outcome first, proof second, explanation third, bridge to close.
            </strong>
          </p>
        </HelpTooltip>
      </div>

      <p className="text-[14px] text-ink2 mb-5 leading-[1.75]">
        One formula that works in any executive conversation — interviews, EBC
        sessions, board briefings, or media appearances. Executives think in
        outcomes first, not stories first. Match their mental model.
      </p>

      <Card label="The Master Formula">
        <FormulaBox>
          O — Outcome first &nbsp;·&nbsp; P — Proof &nbsp;·&nbsp; E —
          Explanation &nbsp;·&nbsp; B — Bridge
        </FormulaBox>
        <OpebGrid />
      </Card>

      <Card label="Principle">
        <FormulaBox>Headline first. Article only if asked.</FormulaBox>
        <p className="text-[14px] text-ink2 leading-[1.75] mb-0">
          Think like a newspaper editor. Your answer is the headline. The full
          story is the article — available on request. Executives read
          headlines first and ask for the article if they need it. Most
          candidates give the full article unprompted and never land the
          headline. They lose the room before they get to the point.
        </p>
      </Card>

      <Card label="See it in Action">
        {examples.map((ex) => (
          <div key={ex.n} className="my-4 first:mt-0">
            <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted mb-2">
              Example {ex.n}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <CalloutBox variant="bad">{ex.weaker}</CalloutBox>
              <CalloutBox variant="good">{ex.stronger}</CalloutBox>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
