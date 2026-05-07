export type DrillCard = {
  question: string;
  spine: string;
  tip: string;
  template: string;
};

export const drillCards: DrillCard[] = [
  {
    question: "Tell me about yourself.",
    spine: "Number → 3 metric-led points → Bridge close",
    tip: "Lead with your most recent, most relevant metric. Never start from the beginning of your career. They want to know if you're worth the next hour of their time.",
    template:
      "[Number] things define my background.\nFirst, [metric-led point — most relevant to this role].\nSecond, [metric-led point — your differentiator].\nThird, [what makes you unusual in this market].\nThat combination maps directly to [what this role specifically needs].",
  },
  {
    question: "What is your view on the current threat landscape?",
    spine: "Three shifts → Present implication → APAC-specific angle",
    tip: "End with an implication, never a description. The interviewer knows what happened — they want your strategic read on what it means for their customers in this region.",
    template:
      "Three shifts define it.\n[Shift 1 — where it started].\nThen [Shift 2 — what changed].\nNow [Shift 3 — current state].\nThe implication for APAC enterprises is [specific consequence].\nThat's the [company] narrative I'd build around.",
  },
  {
    question: "What is your biggest gap or weakness for this role?",
    spine: "Acknowledge → Reframe → Evidence → Forward plan",
    tip: "Surface the gap yourself before they find it. Proactive honesty reads as self-awareness. Defensive silence reads as hiding something.",
    template:
      "I want to be transparent — [gap in one clear sentence].\nThe way I think about it: [reframe on your terms].\nHere's the evidence it doesn't disqualify me: [specific proof point].\nIn this role I'd address it by [concrete action in first 90 days].",
  },
  {
    question: "Why are you looking to leave / why are you moving on?",
    spine: "Context (1 sentence) → Forward rationale → Role alignment",
    tip: "Context explains the circumstance. Rationale explains the ambition. Role alignment closes the argument. Never speak negatively about any employer.",
    template:
      "[One-sentence context — reorg, transition, inflection point].\nMore fundamentally, [what genuinely energized you most].\nThis role is where [that work] is the primary function — not one component of a broader mandate.\nThat's not a lateral move — it's the role I've been building toward.",
  },
  {
    question: "Give me a specific example of a difficult challenge you solved.",
    spine: "Outcome first → Proof metric → How (2 sentences) → Bridge",
    tip: "Start with the result. 80% of candidates start with the problem — flip it. Lead with evidence that builds the case for you.",
    template:
      "The outcome was [metric or verifiable result].\nWe were facing [challenge in one sentence].\nI [what you did — two sentences maximum].\nThat same approach — [the transferable principle] — maps directly to [specific challenge in the new role].",
  },
  {
    question: "What would your manager say your superpower is?",
    spine: "Two clear claims → Evidence for each → Land with role relevance",
    tip: "Never hedge when asked about your strengths. Deliver with full conviction — you know what you're good at. So does your manager. Own it.",
    template:
      "[Manager name] would say two things.\nFirst — [superpower 1 in a memorable phrase].\n[One sentence of evidence].\nSecond — [superpower 2].\n[One sentence of evidence].\nBoth show up in what this role needs most.",
  },
  {
    question: "Do you have any questions for me?",
    spine: "3 strategic questions — never zero",
    tip: "Zero questions is a disqualifying signal at VP level. The quality of your questions is often more memorable than the quality of your answers. Prepare three. Use all three.",
    template:
      "Q1 — Role mandate: '[Role] has [X] and [Y] components. How do you see the balance between thought leadership and commercial accountability in practice?'\n\nQ2 — Strategic agenda: 'What's the brand gap you're most focused on closing in APAC over the next twelve months?'\n\nQ3 — Their experience: 'You came from [company]. What did you learn about this region that someone in this role should internalize in the first ninety days?'",
  },
  {
    question: "How do you handle rejection, setbacks, or negative feedback?",
    spine: "Real example → Honest reaction → What you did → What changed",
    tip: "Don't use a manufactured weakness dressed as a strength. Pick a real moment. Show genuine reflection. Senior leaders hire people who can process failure.",
    template:
      "The clearest example: [real situation in one sentence].\nMy initial response was [honest reaction].\nWhat I actually did: [specific action you took].\nWhat I learned: [genuine insight].\nThe way that shows up now: [how it changed your approach] — and that's relevant to this role because [connection].",
  },
];
