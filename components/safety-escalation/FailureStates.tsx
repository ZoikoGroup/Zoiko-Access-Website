import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Lede, Title, card, cardText, cardTitle, inner, photoBg, sectionPad } from "./ui";

type Item = {
  title: string;
  text: string;
  d?: string[];
  src: string;
  alt: string;
};

const top: Item[] = [
  {
    title: "Recipient unknown",
    text: "Sender confirms the right recipient through an approved route.",
    d: ["Sender confirms the right recipient ", "through an approved route."],
    src: "exception-recipient-unknown",
    alt: "A person in a tan jacket and beanie seen from behind",
  },
  {
    title: "Message undeliverable",
    text: "Sender uses an approved alternative route.",
    d: ["Sender uses an approved", "alternative route."],
    src: "exception-undeliverable",
    alt: "Sunlight over a golden field",
  },
  {
    title: "Acknowledgment overdue",
    text: "Escalate to the named receiving owner.",
    d: ["Escalate to the named receiving ", "owner."],
    src: "exception-ack-overdue",
    alt: "A dessert on a dark table",
  },
  {
    title: "Corrected report",
    text: "The source issues a new version. The earlier one stays in history.",
    d: ["The source issues a new version. ", "The earlier one stays in history."],
    src: "exception-corrected-report",
    alt: "Tall pine trees above green moss",
  },
];

const bottom: Item[] = [
  {
    title: "Conflicting identifiers",
    text: "The source resolves identity before anything proceeds.",
    d: ["The source resolves identity before anything ", "proceeds."],
    src: "exception-conflicting-identifiers",
    alt: "A passenger plane parked at an airport gate",
  },
  {
    title: "Network unavailable",
    text: "Shown as unknown. Use an approved alternative.",
    src: "exception-network-unavailable",
    alt: "Purple petunia flowers",
  },
  {
    title: "Service suspended",
    text: "The responsible organization states what applies.",
    src: "exception-service-suspended",
    alt: "A swimmer seen from above in dark blue water",
  },
];

function ExceptionCard({ item, tall }: { item: Item; tall: boolean }) {
  return (
    <li
      className={`${card} p-[22px] ${tall ? "lg:h-[377px]" : "lg:h-[359px]"}`}
    >
      <div
        className={`relative aspect-[215.5/134.69] w-full overflow-hidden rounded-[10px] ${photoBg}`}
        role="img"
        aria-label={item.alt}
      >
        <FigmaImage
          src={`/safety-escalation/${item.src}.webp`}
          box={{ top: -12.22, height: 124.44 }}
          sizes="(min-width: 1024px) 380px, 90vw"
        />
      </div>
      <h3 className={`${cardTitle} pb-[8px] pt-[18px]`}>{item.title}</h3>
      <p className={cardText}>
        <Copy text={item.text} d={item.d} />
      </p>
    </li>
  );
}

export default function FailureStates() {
  return (
    <section
      className={`w-full bg-white py-12 lg:min-h-[1142px] lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[39.99px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[12.8px]">
          <Eyebrow>Failure and exception states</Eyebrow>
          <Title className="lg:whitespace-nowrap lg:pt-[2.3px]">
            No green label on unknown or stale status.
          </Title>
          <Lede className="lg:pb-[0.56px]">
            <Copy
              text="Each pattern names a responsible organization and a safe next step. A technical retry is never clinical closure."
              d={[
                "Each pattern names a responsible organization and a safe next step. A technical retry",
                "is never clinical closure.",
              ]}
            />
          </Lede>
        </div>

        <div className="flex w-full flex-col gap-[22px]">
          <ul className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
            {top.map((item) => (
              <ExceptionCard key={item.title} item={item} tall={false} />
            ))}
          </ul>
          <ul className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
            {bottom.map((item) => (
              <ExceptionCard key={item.title} item={item} tall />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
