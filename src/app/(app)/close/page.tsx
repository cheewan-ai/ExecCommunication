import { Eyebrow } from "@/components/Eyebrow";
import { Card } from "@/components/Card";
import { CalloutBox } from "@/components/CalloutBox";
import { FormulaBox } from "@/components/FormulaBox";

const type1Examples = [
  {
    label: "A — Platform adoption",
    text: '"...doubling the platform attach rate from 30% to 60% across 2,000 customers maps directly to Threat Research Platform\'s \'grow strategic services\' objective — the motion is identical: change how customers see the value of what they already own."',
  },
  {
    label: "B — EBC and executive engagement",
    text: '"...delivering 100+ CISO briefings that converted to platform consolidation decisions maps directly to the customer evangelism pillar of this role — I\'ve been doing the job without the title."',
  },
  {
    label: "C — AI tool building",
    text: '"...building multi-agent content pipelines that cut production cycles by 80% maps directly to Rash\'s AI-augmented threat intelligence agenda — I\'m not theorizing about AI adoption, I\'ve deployed it in a live enterprise environment and measured the outcome."',
  },
  {
    label: "D — Team leadership",
    text: '"...maintaining 90% retention across seven markets over three years maps directly to what a new Threat Research Platform regional team needs — a leader who knows how to build capability in the APAC talent market without the revolving door that plagues most cybersecurity SE organizations."',
  },
];

const type2Examples = [
  {
    label: "Example A",
    text: '"...AI has reduced attack cycle times from months to days — and 80% of that activity now runs without human direction. The implication for a CISO managing a 5-person SOC in Jakarta is that their current playbook is obsolete. That\'s the Threat Research Platform narrative I\'d build the APAC content engine around."',
  },
  {
    label: "Example B",
    text: '"...OT environments that were never designed for connectivity are now exposed because digital transformation mandates override security readiness timelines. The implication for manufacturers in Malaysia and Thailand is that they have a critical infrastructure exposure problem that most haven\'t named yet."',
  },
];

const hardestSkill = [
  {
    label: "Example 1 — Dashboard achievement",
    weaker:
      "\"...so that's where my value is. Right, I may not be the very shining speaker that does all the flash stuff, I think I'm good enough to do that, but just that, my true value is from from that end, and you know, I've also built some other things too, yeah so that's basically it...\"",
    stronger:
      "\"...my true value is the ability to resonate with APAC CISO pain points and translate them into narratives that move commercial decisions. That's what I bring.\" [STOP.]",
  },
  {
    label: "Example 2 — Award recognition",
    weaker:
      "\"...so the dashboard was quite successful and it went global and I got the award and my VP was very happy with it and it got featured in the investor report and yeah, you know, it was a good initiative overall and I'm quite proud of it I suppose...\"",
    stronger:
      "\"...the dashboard became the top-3 most-used asset globally across 3,000 reports, recognized with the Global Unsung Hero Award, and featured in investor reports as a strategic differentiator. That's the scale of impact I build toward.\" [STOP.]",
  },
];

export default function ClosePage() {
  return (
    <div>
      <Eyebrow>The Landing</Eyebrow>
      <h1 className="section-title">How to Close</h1>
      <p className="text-[14px] text-ink2 mb-5 leading-[1.75]">
        Most people let answers drift to a natural stop. Strong communicators
        land every answer on a deliberate point — and then stop talking. The
        last sentence is the one that gets remembered.
      </p>

      <Card label="Close Type 1 — For Achievement & Experience Answers">
        <FormulaBox>
          Story or proof → &ldquo;That maps directly to...&rdquo; → Specific
          role element
        </FormulaBox>
        <CalloutBox variant="template" label="TEMPLATE">
          <pre className="whitespace-pre-wrap font-body text-[14px] text-ink2 leading-[1.85] m-0">
{`...and that experience of [your achievement] maps directly to
what [role / company] needs because [specific connection to their priority].`}
          </pre>
        </CalloutBox>
        {type1Examples.map((ex) => (
          <div key={ex.label}>
            <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted mt-4 mb-1.5">
              {ex.label}
            </div>
            <CalloutBox variant="good">{ex.text}</CalloutBox>
          </div>
        ))}
      </Card>

      <Card label="Close Type 2 — For Landscape & Opinion Answers">
        <FormulaBox>
          Analysis → &ldquo;The implication is...&rdquo; → Actionable point
        </FormulaBox>
        <CalloutBox variant="template" label="TEMPLATE">
          <pre className="whitespace-pre-wrap font-body text-[14px] text-ink2 leading-[1.85] m-0">
{`...so the implication for [customer / audience] is [specific risk or action].
That's the conversation I'd want [company / Threat Research Platform] to be leading
in this market.`}
          </pre>
        </CalloutBox>
        {type2Examples.map((ex) => (
          <div key={ex.label}>
            <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted mt-4 mb-1.5">
              {ex.label}
            </div>
            <CalloutBox variant="good">{ex.text}</CalloutBox>
          </div>
        ))}
      </Card>

      <Card label="The Hardest Skill">
        <FormulaBox>
          Land your strongest sentence → Stop. Do not add more.
        </FormulaBox>
        <p className="text-[14px] text-ink2 leading-[1.75] mb-3">
          The urge to keep talking after you&rsquo;ve made your point is the
          enemy of executive communication. Every sentence you add after your
          landing point dilutes the one before it. Practice ending on your
          best sentence and going completely silent. Silence after a strong
          point reads as confidence. Extra sentences after a strong point read
          as insecurity.
        </p>

        {hardestSkill.map((ex) => (
          <div key={ex.label}>
            <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted mt-4 mb-1.5">
              {ex.label}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
              <CalloutBox variant="bad">{ex.weaker}</CalloutBox>
              <CalloutBox variant="good">{ex.stronger}</CalloutBox>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
