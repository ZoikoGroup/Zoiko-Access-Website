import Copy from "./Copy";
import { Eyebrow, Lede, Title, card, cardText, cardTitle, head, sectionPad } from "./ui";

const exceptions = [
  { title: "Failed delivery", text: "Use an approved alternative route.", d: ["Use an approved alternative", "route."] },
  { title: "Wrong destination", text: "The source organization redirects and records it.", d: ["The source organization", "redirects and records it."] },
  { title: "Unmatched identity", text: "The source resolves identity before release.", d: ["The source resolves identity", "before release."] },
  { title: "Missing order", text: "The ordering party confirms or reissues.", d: ["The ordering party confirms or", "reissues."] },
  { title: "Delayed report", text: "The provider reports its own status.", d: ["The provider reports its own", "status."] },
  { title: "Corrected report", text: "A new version replaces the older one.", d: ["A new version replaces the", "older one."] },
  { title: "Source unavailable", text: "Shown as unknown, never as zero or complete.", d: ["Shown as unknown, never as", "zero or complete."] },
];

export default function ExceptionCards() {
  return (
    <section
      id="exceptions"
      className={`w-full bg-[radial-gradient(ellipse_520px_420px_at_1240px_200px,#ac96ff_0%,#e0d8ff_100%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start gap-[16px] lg:px-6">
        <div className={head}>
          <Eyebrow>Exceptions and escalation</Eyebrow>
          <Title className="lg:pt-[2.3px]">
            <Copy
              text="When something goes wrong, a named human owns it."
              d={["When something goes wrong, a named", "human owns it."]}
            />
          </Title>
          <Lede className="lg:pb-[0.56px]">
            <Copy
              text="Urgent and critical findings follow locally governed clinical protocols, not this public website. Escalation belongs to authorized service parties."
              d={[
                "Urgent and critical findings follow locally governed clinical protocols, not this public",
                "website. Escalation belongs to authorized service parties.",
              ]}
            />
          </Lede>
        </div>

        <ul className="grid w-full gap-[22px] pt-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {exceptions.map((item) => (
            <li key={item.title} className={`${card} self-start`}>
              <h3 className={cardTitle}>{item.title}</h3>
              <p className={cardText}>
                <Copy text={item.text} d={item.d} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
