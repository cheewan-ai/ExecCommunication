type Col = {
  letter: string;
  name: string;
  desc: string;
  color: string; // text color class e.g. "text-c1"
};

const cols: Col[] = [
  {
    letter: "O",
    name: "Outcome",
    desc:
      "Start with the result. What happened? What was the business impact? Lead with the destination — let them ask how you got there.",
    color: "text-c1",
  },
  {
    letter: "P",
    name: "Proof — one metric",
    desc:
      '$7.6M influenced. 86% conversion. 90% retention. The number does the credibility work for you. One specific, verifiable fact.',
    color: "text-c2",
  },
  {
    letter: "E",
    name: "Explanation — 2 sentences max",
    desc:
      "How did you achieve it? Maximum two sentences. If it needs more, you're still telling the journey, not the outcome.",
    color: "text-c4",
  },
  {
    letter: "B",
    name: "Bridge to the role",
    desc:
      'Connect to what they need. "That experience maps directly to..." Close every answer with a bridge or it just floats.',
    color: "text-c3",
  },
];

export function OpebGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-4 mb-3 border border-(--border) rounded-[10px] bg-card overflow-hidden">
      {cols.map((c, i) => (
        <div
          key={c.letter}
          className={`px-[18px] pt-[22px] pb-5 ${
            i < cols.length - 1
              ? "md:border-r md:border-(--border) border-b md:border-b-0 border-(--border)"
              : ""
          }`}
        >
          <div
            className={`font-display ${c.color} text-[72px] sm:text-[64px] md:text-[72px] tracking-[0.04em] leading-[0.9] mb-1`}
          >
            {c.letter}
          </div>
          <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted mb-3">
            {c.name}
          </div>
          <p className="text-[13px] leading-[1.6] text-ink2 m-0">{c.desc}</p>
        </div>
      ))}
    </div>
  );
}
