import { Eyebrow } from "@/components/Eyebrow";
import { Card } from "@/components/Card";
import { CalloutBox } from "@/components/CalloutBox";
import { Pill } from "@/components/Pill";
import { cn } from "@/lib/cn";

type OpenerType = {
  tag: string;
  tagColor: string;
  pattern: string;
  examples: string[];
};

const openerTypes: OpenerType[] = [
  {
    tag: "Number Open",
    tagColor: "bg-c1 text-card",
    pattern: "Open with the count. Signal the structure before you give it.",
    examples: [
      "\"Three shifts define where the threat landscape is heading...\"",
      "\"Two things converged that made this the right move for me...\"",
      "\"Four markets account for eighty percent of APAC enterprise security spend — and I've led SE teams in all four...\"",
      "\"One number tells the whole platform adoption story: thirty percent attach rate to sixty percent in six quarters...\"",
    ],
  },
  {
    tag: "Outcome Open",
    tagColor: "bg-c3 text-card",
    pattern: "Lead with the result. Let them ask how you got there.",
    examples: [
      "\"The result was a dashboard ranked top 3 of 3,000 global assets...\"",
      "\"We scaled regional revenue from $101M to $134M over three years...\"",
      "\"Eighty-six percent pipeline conversion. That's what the EBC program delivered — and here's how we built it...\"",
      "\"Ninety percent team retention across seven markets over three years. That number drives everything I'll tell you today...\"",
    ],
  },
  {
    tag: "Position Open",
    tagColor: "bg-c4 text-card",
    pattern:
      "State your view directly. Executives respect a clear point of view.",
    examples: [
      "\"My view is that the biggest threat to APAC enterprises right now is AI-accelerated social engineering, not malware...\"",
      "\"The distinction I'd draw is between threat evangelism and threat research — they're different roles requiring different profiles...\"",
      "\"The platform consolidation argument only works if CIOs and CISOs share a language — that's the gap I kept solving in every EBC session...\"",
      "\"Most SE leaders underestimate how much the post-sales motion affects the pre-sales narrative — I sit at that intersection deliberately...\"",
    ],
  },
  {
    tag: "Anchor Open",
    tagColor: "bg-c6 text-card",
    pattern: "Lead with a credential that earns you the right to speak.",
    examples: [
      "\"In 100+ CISO sessions across AMEA, the pattern I kept seeing was evaluations stalling at mid-management level...\"",
      "\"Fifteen years in the same market gives you a particular lens on what actually drives platform adoption decisions...\"",
      "\"Having spent two years at Deloitte doing GRC before moving into technical pre-sales, I think about cybersecurity investment differently than most SE leaders...\"",
      "\"Every quarter for three years I ran war rooms during active breaches — that experience changes how you talk to a CISO at 2am...\"",
    ],
  },
];

const neverStart = [
  "\"So um...\"",
  "\"Yeah so...\"",
  "\"To be very frank...\"",
  "\"I think...\"",
  "\"You know...\"",
  "\"Like...\"",
  "\"Honestly...\"",
  "\"I mean...\"",
  "\"I'm not sure but...\"",
  "\"Good question...\"",
  "\"That's a great point...\"",
  "\"Um basically...\"",
  "\"Kind of...\"",
  "\"Let me think...\"",
];

export default function OpeningsPage() {
  return (
    <div>
      <Eyebrow>Power Openers</Eyebrow>
      <h1 className="section-title">Opening Lines</h1>
      <p className="text-[14px] text-ink2 mb-5 leading-[1.75]">
        The first five words determine whether the executive leans in or
        checks their phone. Strong openers signal you already have the answer
        — you&rsquo;re delivering it, not searching for it.
      </p>

      <Card label="Use These Patterns">
        {openerTypes.map((o) => (
          <div key={o.tag} className="my-5 first:mt-0">
            <span
              className={cn(
                "inline-block font-mono text-[11px] font-medium px-2.5 py-1 rounded mb-2 tracking-[0.04em]",
                o.tagColor,
              )}
            >
              {o.tag}
            </span>
            <div className="text-[14px] text-ink2 leading-[1.7] mb-2.5">
              {o.pattern}
            </div>
            <ul className="space-y-2 list-none pl-0">
              {o.examples.map((ex, i) => (
                <li
                  key={i}
                  className="text-[13.5px] text-ink2 leading-[1.65] pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-muted"
                >
                  {ex}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Card>

      <Card label="Never Start With These">
        <div className="flex flex-wrap gap-2 mb-4">
          {neverStart.map((p, i) => (
            <Pill key={i} hedge>
              {p}
            </Pill>
          ))}
        </div>
        <CalloutBox variant="tip" label="TIP">
          Every one of these signals the brain is still searching for the
          answer. The fix is not different words — it&rsquo;s a one-second
          pause, then a power opener. Silence reads as confidence. Fillers
          read as uncertainty.
        </CalloutBox>
      </Card>
    </div>
  );
}
