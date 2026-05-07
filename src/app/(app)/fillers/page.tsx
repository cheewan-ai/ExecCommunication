import { Eyebrow } from "@/components/Eyebrow";
import { Card } from "@/components/Card";
import { CalloutBox } from "@/components/CalloutBox";
import { FormulaBox } from "@/components/FormulaBox";
import { StatCard } from "@/components/StatCard";
import { StepNum } from "@/components/StepNum";
import { Pill } from "@/components/Pill";

const hedgeWords = [
  "\"I think...\"",
  "\"I guess...\"",
  "\"Probably...\"",
  "\"Kind of...\"",
  "\"Sort of...\"",
  "\"Maybe...\"",
  "\"I'm not sure but...\"",
  "\"I believe...\"",
  "\"Might be...\"",
  "\"Could be...\"",
  "\"I suppose...\"",
  "\"Roughly...\"",
];

export default function FillersPage() {
  return (
    <div>
      <Eyebrow>Verbal Hygiene</Eyebrow>
      <h1 className="section-title">Kill the Fillers</h1>
      <p className="text-[14px] text-ink2 mb-5 leading-[1.75]">
        Filler words are not a speech habit — they are a credibility signal.
        Every &ldquo;um&rdquo;, &ldquo;you know&rdquo;, and &ldquo;so
        yeah&rdquo; tells the listener your brain has not found the answer
        yet. Replace them all with silence.
      </p>

      <Card label="The Core Technique">
        <FormulaBox>Filler word → Replace with silence (1–2 seconds)</FormulaBox>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
          <CalloutBox variant="bad">
            &ldquo;So um, yeah, in terms of the, you know, the threat
            landscape, I think, like, what I see is that, um, AI has kind of,
            you know, changed things quite a lot for customers...&rdquo;
          </CalloutBox>
          <CalloutBox variant="good">
            &ldquo;Three shifts define the threat landscape. [pause] First,
            detection evolved into response. Second, alert fatigue became the
            core operational problem. Third — AI eliminated the human-speed
            assumption entirely.&rdquo;
          </CalloutBox>
        </div>
        <CalloutBox variant="info" label="">
          A 2-second pause after a question signals you are considering your
          answer. A 2-second stream of fillers signals you don&rsquo;t have
          one. Same duration. Opposite impression.
        </CalloutBox>
      </Card>

      <Card label="Audit From the Interview Transcript">
        <div className="grid grid-cols-3 gap-3 my-2">
          <StatCard num="40+" label="filler words in one interview" color="c1" />
          <StatCard num="8×" label='times "you know" appeared' color="c5" />
          <StatCard num="<3" label="your target per answer" color="c3" />
        </div>
        <CalloutBox variant="tip" label="TIP">
          Record yourself answering for 90 seconds. Count every filler. Replay
          and wince. Repeat until under 3 per answer. Most people reach under
          5 within one week of daily practice. Under 3 takes about two weeks.
          Under 1 is mastery.
        </CalloutBox>
      </Card>

      <Card label="Hedge Words — The Confidence Killers">
        <p className="text-[14px] text-ink2 leading-[1.75] mb-3">
          Filler words are a speech pattern. Hedge words are a confidence
          pattern. They tell the listener you&rsquo;re not sure of your own
          answer — which makes them not sure either. Use direct language. If
          you&rsquo;re uncertain, say &ldquo;my read is&rdquo; or &ldquo;my
          view is&rdquo; — not &ldquo;I think maybe...&rdquo;
        </p>

        <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted mt-4 mb-1.5">
          Superpower question
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <CalloutBox variant="bad">
            &ldquo;I think my superpower is probably storytelling. I guess Bob
            might say that I&rsquo;m kind of good at messaging and you know,
            sort of building content that resonates...&rdquo;
          </CalloutBox>
          <CalloutBox variant="good">
            &ldquo;Bob would say two things: I make the complex simple, and I
            build things that scale. Both show up in the data — the EBC
            framework went global, the CX dashboard became a top-3 asset
            across 3,000 reports.&rdquo;
          </CalloutBox>
        </div>

        <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted mt-4 mb-1.5">
          Example 5 — EBC Sessions
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <CalloutBox variant="bad">
            &ldquo;I mean, I&rsquo;ve done quite a few EBC sessions, I think
            around maybe fifty or so over two years, and they&rsquo;ve gone
            pretty well from what I can tell, so yeah, I&rsquo;m sort of
            comfortable with that kind of thing...&rdquo;
          </CalloutBox>
          <CalloutBox variant="good">
            &ldquo;Over two years I delivered 50+ EBC sessions to 200+ C-suite
            stakeholders across AMEA. The content framework I built for those
            sessions was adopted globally by my VP&rsquo;s team across both
            APAC and the US.&rdquo;
          </CalloutBox>
        </div>

        <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted mt-4 mb-1.5">
          Example 6 — Threat Actors
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <CalloutBox variant="bad">
            &ldquo;So for the threat actor question, yeah, I kind of see
            different types of actors, you know, some are state-sponsored,
            some are kind of more criminal, and at this point I kind of you
            know... it&rsquo;s complicated...&rdquo;
          </CalloutBox>
          <CalloutBox variant="good">
            &ldquo;Three actor categories dominate APAC threat briefings.
            Nation-state actors targeting FSI and critical infrastructure.
            Organized ransomware groups — the SEA manufacturing sector is
            increasingly in their crosshairs. And AI-enabled opportunists who
            previously lacked the sophistication to execute complex
            attacks.&rdquo;
          </CalloutBox>
        </div>

        <div className="flex flex-wrap gap-2">
          {hedgeWords.map((w, i) => (
            <Pill key={i} hedge>
              {w}
            </Pill>
          ))}
        </div>
      </Card>

      <Card label="How to Practice">
        <div className="space-y-3 my-2">
          <div className="flex gap-3 items-start">
            <StepNum>1</StepNum>
            <div className="text-[14px] text-ink2 leading-[1.7]">
              <strong className="text-ink font-bold">Record</strong> — Answer
              a question aloud for 90 seconds on your phone
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <StepNum>2</StepNum>
            <div className="text-[14px] text-ink2 leading-[1.7]">
              <strong className="text-ink font-bold">Count</strong> — Replay
              and tally fillers + hedge words separately
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <StepNum>3</StepNum>
            <div className="text-[14px] text-ink2 leading-[1.7]">
              <strong className="text-ink font-bold">Benchmark</strong> — Week
              1: under 8. Week 2: under 5. Week 3: under 3
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <StepNum>4</StepNum>
            <div className="text-[14px] text-ink2 leading-[1.7]">
              <strong className="text-ink font-bold">Repeat</strong> — One
              question per day using the Practice Drill cards
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
