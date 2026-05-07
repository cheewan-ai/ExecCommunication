import { Eyebrow } from "@/components/Eyebrow";
import { Card } from "@/components/Card";
import { CalloutBox } from "@/components/CalloutBox";
import { FormulaBox } from "@/components/FormulaBox";
import { StepNum } from "@/components/StepNum";

export default function FlowPage() {
  return (
    <div>
      <Eyebrow>Sentence Spines</Eyebrow>
      <h1 className="section-title">Sentence Flow</h1>
      <p className="text-[14px] text-ink2 mb-5 leading-[1.75]">
        Every strong executive answer runs on a spine. Learn these four spines
        and you can structure any answer in real time — no preparation
        required.
      </p>

      {/* Spine 1 */}
      <Card label="Spine 1 — Background & Storytelling Questions">
        <FormulaBox>Number → Point → Point → Point → Bridge</FormulaBox>
        <div className="space-y-3 my-4">
          <div className="flex gap-3 items-start">
            <StepNum>1</StepNum>
            <div className="text-[14px] text-ink2 leading-[1.7]">
              Signal the structure — &ldquo;Three things define my
              background.&rdquo; Their brain opens three slots and stops
              wondering when you&rsquo;ll finish.
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <StepNum>2</StepNum>
            <div className="text-[14px] text-ink2 leading-[1.7]">
              One sentence per point, metric-led — &ldquo;First, fifteen years
              building SE organizations — five promotions, seven markets,
              $134M revenue scale.&rdquo;
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <StepNum>3</StepNum>
            <div className="text-[14px] text-ink2 leading-[1.7]">
              Bridge close — &ldquo;That combination maps directly to what the
              Threat Research Platform evangelist role sits at.&rdquo; Never
              let your answer just stop. Land it.
            </div>
          </div>
        </div>
        <CalloutBox variant="template" label="TEMPLATE">
          <pre className="whitespace-pre-wrap font-body text-[14px] text-ink2 leading-[1.85] m-0">
{`[Number] things define my background.
First, [metric-led point — most relevant to this role].
Second, [metric-led point — your differentiator].
Third, [the thing that makes you unusual in this market].
That combination maps directly to [what this specific role needs].`}
          </pre>
        </CalloutBox>
      </Card>

      {/* Spine 2 */}
      <Card label="Spine 2 — Opinion & Landscape Questions">
        <FormulaBox>
          Shift 1 (past) → Shift 2 (change) → Shift 3 (now) → Implication
        </FormulaBox>
        <p className="text-[14px] text-ink2 leading-[1.75] mb-3">
          Always end with an implication, never a description. Executives
          already know what happened. They want your read on what it means and
          what should be done. Stopping at the description is the most common
          mistake senior candidates make in strategic conversations.
        </p>
        <CalloutBox variant="template" label="TEMPLATE">
          <pre className="whitespace-pre-wrap font-body text-[14px] text-ink2 leading-[1.85] m-0">
{`The landscape has moved through [phase 1], then [phase 2],
and we're now at [phase 3].
The implication for [audience / their customers] is [specific consequence].
That's the conversation I'd build [company/brand] around.`}
          </pre>
        </CalloutBox>
        <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted mt-4 mb-1.5">
          Worked Example A
        </div>
        <CalloutBox variant="good">
          &ldquo;In the early years, the game was detection — can you see the
          threat? Then the question became response — how fast can you contain
          it? Now, AI has eliminated the human-speed assumption entirely. The
          implication for APAC enterprises: their security posture was
          designed for a threat landscape that no longer exists.&rdquo;
        </CalloutBox>
        <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted mt-4 mb-1.5">
          Worked Example B
        </div>
        <CalloutBox variant="good">
          &ldquo;Three years ago, customers bought point solutions for each
          threat vector. Then platform fatigue set in — too many consoles, no
          unified visibility. Now the conversation is consolidation — one
          fabric, one risk view. The implication for Threat Research Platform:
          threat intelligence has to be the language that justifies that
          consolidation decision to the board.&rdquo;
        </CalloutBox>
      </Card>

      {/* Spine 3 */}
      <Card label="Spine 3 — Gap & Challenge Questions">
        <FormulaBox>
          Acknowledge → Reframe → Evidence → Forward action
        </FormulaBox>
        <p className="text-[14px] text-ink2 leading-[1.75] mb-3">
          Never apologize for a gap. Surface it yourself, reframe it on your
          terms, and move forward. Leaders who can see their own blind spots
          are far safer to promote than leaders who can&rsquo;t. Proactive
          honesty is itself a proof of senior-level self-awareness.
        </p>
        <CalloutBox variant="template" label="TEMPLATE">
          <pre className="whitespace-pre-wrap font-body text-[14px] text-ink2 leading-[1.85] m-0">
{`I want to be transparent — [honest gap in one sentence].
The way I think about it: [reframe on your terms].
Here's the evidence it doesn't disqualify me: [specific proof point].
In this role I'd address it by [concrete action in first 90 days].`}
          </pre>
        </CalloutBox>
        <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted mt-4 mb-1.5">
          Worked Example
        </div>
        <CalloutBox variant="good">
          &ldquo;I want to be transparent — my depth is in operationalizing
          threat intelligence for enterprise outcomes, not in malware lab
          research. The way I think about it: this is a Threat Research
          Platform evangelist role, not a threat researcher role. Here&rsquo;s
          the evidence: I&rsquo;ve delivered 100+ CISO briefings using threat
          narrative to drive platform consolidation decisions worth millions.
          In this role, I&rsquo;d partner closely with the Threat Research
          Platform research team to deepen technical fluency in the first 90
          days.&rdquo;
        </CalloutBox>
      </Card>

      {/* Spine 4 */}
      <Card label='Spine 4 — Motivation & "Why Leaving" Questions'>
        <FormulaBox>
          Context (1 sentence) → Forward rationale → Role alignment
        </FormulaBox>
        <CalloutBox variant="tip" label="TIP">
          Context explains the circumstance. Rationale explains the ambition.
          Role alignment closes the argument. Keep context to one sentence —
          it&rsquo;s the setup, not the answer. Never speak negatively about
          any employer.
        </CalloutBox>
        <CalloutBox variant="template" label="TEMPLATE">
          <pre className="whitespace-pre-wrap font-body text-[14px] text-ink2 leading-[1.85] m-0">
{`[One sentence context — reorg, transition, natural inflection point].
More fundamentally, [what genuinely energized you most in your work].
This role is where [that work] is the primary function —
not one component of a broader mandate.
That's not a lateral move — it's the role I've been building toward.`}
          </pre>
        </CalloutBox>
        <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted mt-4 mb-1.5">
          Worked Example
        </div>
        <CalloutBox variant="good">
          &ldquo;Trend Micro&rsquo;s restructuring as Trend AI created a
          natural inflection point. More fundamentally, the work that
          energized me most was the executive engagement — EBC content, threat
          narrative, CISO conversations that moved platform decisions. This
          role is where that work is the primary function. That&rsquo;s not a
          lateral move — that&rsquo;s the role I&rsquo;ve been building
          toward.&rdquo;
        </CalloutBox>
      </Card>
    </div>
  );
}
