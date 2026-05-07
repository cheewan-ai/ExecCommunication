import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { Card } from "./Card";
import { CalloutBox } from "./CalloutBox";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: { label: string; body: string }[];
};

export function StubScreen({ eyebrow, title, description, highlights }: Props) {
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="section-title">{title}</h1>
      <p className="text-[14px] text-ink2 mb-5 leading-[1.75]">{description}</p>

      {highlights.map((h) => (
        <Card key={h.label} label={h.label}>
          <p className="text-[14px] text-ink2 leading-[1.75] mb-0">{h.body}</p>
        </Card>
      ))}

      <CalloutBox variant="info" label="PORT IN PROGRESS">
        <p className="m-0">
          The full content for this section is being ported from the original
          guide. In the meantime,{" "}
          <Link href="/formula" className="text-c1 underline underline-offset-2">
            return to Core Formula
          </Link>{" "}
          or{" "}
          <Link href="/drill" className="text-c1 underline underline-offset-2">
            jump to Practice Drill
          </Link>
          .
        </p>
      </CalloutBox>
    </div>
  );
}
