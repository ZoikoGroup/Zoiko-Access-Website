import { Fragment } from "react";
import Copy from "./Copy";
import { SecHead, card, cardText, cardTitle, inner, lavender, note, sectionPad, sectionY } from "./ui";

const actors = [
  {
    label: "Actor · Provider",
    title: "Claim submission",
    text: "The provider organization submits a claim through its contracted channels.",
    d: ["The provider organization submits a claim", "through its contracted channels."],
  },
  {
    label: "Actor · Payer",
    title: "Adjudication",
    text: "The payer alone adjudicates the claim under plan terms and its contracts.",
    d: ["The payer alone adjudicates the claim under", "plan terms and its contracts."],
  },
  {
    label: "Actor · Payer",
    title: "Remittance",
    text: "The payer issues remittance and handles settlement. Claim status is not payment.",
    d: ["The payer issues remittance and handles", "settlement. Claim status is not payment."],
  },
];

export default function Claims() {
  return (
    <section id="claims" className={`w-full ${lavender} ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[18px]`}>
        <SecHead
          eyebrow="Claims & remittance"
          title={<Copy text="Status coordination. Not settlement." d={["Status coordination.", "Not settlement."]} />}
          lead={
            <Copy
              text="Claim submission, adjudication and remittance involve separate actors and separate states. Zoiko Access is designed only to help coordinate administrative status information."
              d={[
                "Claim submission, adjudication and remittance involve separate actors and separate states.",
                "Zoiko Access is designed only to help coordinate administrative status information.",
              ]}
            />
          }
        />
        <ol className="flex w-full flex-col items-stretch gap-4 pt-[26px] lg:flex-row lg:items-center">
          {actors.map((actor, index) => (
            <Fragment key={actor.title}>
              {index > 0 && (
                <li
                  aria-hidden="true"
                  className="flex shrink-0 justify-center text-[26px] font-bold leading-[41.6px] text-[#7657e8] max-lg:rotate-90 lg:w-[26px]"
                >
                  →
                </li>
              )}
              <li className={`${card} flex flex-1 flex-col items-start gap-2 p-[26px]`}>
                <p className="text-[12px] font-semibold uppercase leading-[19.2px] tracking-[0.72px] text-[#7657e8]">
                  {actor.label}
                </p>
                <h3 className={cardTitle}>{actor.title}</h3>
                <p className={cardText}>
                  <Copy text={actor.text} d={actor.d} />
                </p>
              </li>
            </Fragment>
          ))}
        </ol>
        <p className={`${note} w-full max-w-[860px] min-[1400px]:max-w-none min-[1400px]:w-auto`}>
          <Copy
            text="Zoiko Access does not adjudicate claims, guarantee payment, hold or transfer funds, or operate as a clearinghouse. No rates, amounts or turnaround times are stated."
            d={[
              "Zoiko Access does not adjudicate claims, guarantee payment, hold or transfer funds, or operate as a clearinghouse. No rates, amounts",
              "or turnaround times are stated.",
            ]}
          />
        </p>
      </div>
    </section>
  );
}
