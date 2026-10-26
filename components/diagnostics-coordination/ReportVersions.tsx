import Copy from "./Copy";
import { Eyebrow, Lede, Title, card, cardText, cardTitle, head, inner, sectionPad } from "./ui";

const versions = [
  {
    title: "Preliminary",
    text: "An early report that may change.",
    d: ["An early report that may", "change."],
  },
  {
    title: "Final",
    text: "The report the source marks as complete.",
    d: ["The report the source marks", "as complete."],
  },
  {
    title: "Amended",
    text: "A later version that adds or changes content.",
    d: ["A later version that adds or", "changes content."],
  },
  {
    title: "Corrected",
    text: "A replacement version, with the earlier one kept in history.",
    d: ["A replacement version, with", "the earlier one kept in history."],
  },
];

export default function ReportVersions() {
  return (
    <section
      id="reports"
      className={`w-full bg-[radial-gradient(ellipse_520px_420px_at_1240px_146px,#ac96ff_0%,#e0d8ff_100%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[40px]`}>
        <div className={head}>
          <Eyebrow>Report production and correction</Eyebrow>
          <Title className="lg:pt-[2.3px]">
            <Copy
              text="The source controls the authoritative report."
              d={["The source controls the ", "authoritative report."]}
            />
          </Title>
          <Lede className="lg:max-w-none lg:whitespace-nowrap lg:pb-[0.56px]">
            Zoiko Access does not interpret findings, validate clinical quality
            or store report content.
          </Lede>
        </div>

        <ul className="grid w-full gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {versions.map((version) => (
            <li key={version.title} className={card}>
              <h3 className={cardTitle}>{version.title}</h3>
              <p className={cardText}>
                <Copy text={version.text} d={version.d} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
