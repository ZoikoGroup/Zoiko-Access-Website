import Link from "next/link";
import Copy from "./Copy";
import { Eyebrow, Tag, Title, card, cardText, cardTitle, inner, sectionPad, sectionY } from "./ui";

type Item = {
  title: string;
  td?: string[];
  text: string;
  d: string[];
  route: string;
  rd: string[];
};

const items: Item[] = [
  {
    title: "Prior authorizations",
    text: "Staged request states with a named decision owner.",
    d: ["Staged request states with a", "named decision owner."],
    route: "/payers-insurers/authorizations",
    rd: ["/payers-", "insurers/authorizations"],
  },
  {
    title: "Member access experience",
    td: ["Member access", "experience"],
    text: "How plan entitlements are shown responsibly to members.",
    d: ["How plan entitlements are shown", "responsibly to members."],
    route: "/payers-insurers/member-access",
    rd: ["/payers-insurers/member-", "access"],
  },
  {
    title: "Payer integrations & governance",
    td: ["Payer integrations &", "governance"],
    text: "Source-controlled exchange, role governance and audit.",
    d: ["Source-controlled exchange, role", "governance and audit."],
    route: "/payers-insurers/integrations",
    rd: ["/payers-", "insurers/integrations"],
  },
  {
    title: "Implementation approach",
    td: ["Implementation", "approach"],
    text: "Legal, security and operational prerequisites.",
    d: ["Legal, security and operational", "prerequisites."],
    route: "/payers-insurers/implementation",
    rd: ["/payers-", "insurers/implementation"],
  },
];

export default function Related() {
  return (
    <section id="related" className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-11`}>
        <div className="flex w-full flex-col items-start gap-[13.68px] pt-[6.91px]">
          <Eyebrow>Institutional pathways</Eyebrow>
          <Title>Continue exploring.</Title>
        </div>
        <ul className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.route} className="flex">
              <Link
                href={item.route}
                className={`${card} flex w-full flex-col items-start gap-2 p-[26px] lg:min-h-[180px]`}
              >
                <h3 className={`${cardTitle} pb-2`}>
                  <Copy text={item.title} d={item.td} />
                </h3>
                <p className={cardText}>
                  <Copy text={item.text} d={item.d} />
                </p>
                <span className="mt-auto flex w-full items-end justify-between gap-[10px]">
                  <span className="text-[13px] leading-[20.8px] text-[#4267d5]">
                    <Copy text={item.route} d={item.rd} />
                  </span>
                  <Tag tone="violet">INFO</Tag>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
