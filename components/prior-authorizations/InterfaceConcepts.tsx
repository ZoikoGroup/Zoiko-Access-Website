import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Ribbon, Title, inner, sectionPad, sectionY } from "./ui";

const steps = [
  { title: "Technical exchange", td: ["Technical", "exchange"], text: "Request sent through an approved channel", d: ["Request sent through", "an approved channel"] },
  { title: "Versioned policy data", td: ["Versioned policy", "data"], text: "Which rule version applied", d: ["Which rule version", "applied"] },
  { title: "Provenance", text: "Who authored each record", d: ["Who authored each", "record"] },
  { title: "Acknowledgment", text: "Delivery confirmed, nothing more", d: ["Delivery confirmed,", "nothing more"] },
  { title: "Audit trail", text: "Every access and change recorded", d: ["Every access and", "change recorded"] },
  { title: "Authorization statuses", text: "Specific, sourced labels", d: ["Specific, sourced", "labels"] },
];

export default function InterfaceConcepts() {
  return (
    <section id="interface" className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-3`}>
        <Eyebrow>Approved interface concepts</Eyebrow>
        <div className="w-full pb-1">
          <Title>How an exchange is designed to be traceable.</Title>
        </div>
        <Ribbon>CONCEPTUAL ARCHITECTURE — no installed integration or certification claimed</Ribbon>
        <ol className="grid w-full gap-y-8 pb-[6px] pt-3 sm:grid-cols-3 lg:flex lg:justify-between lg:gap-0">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col items-center gap-[3.6px] pb-[1.6px] pr-[14px] pt-14 text-center lg:flex-1">
              <span
                className="absolute left-1/2 top-0 flex size-[36px] -translate-x-1/2 items-center justify-center rounded-[10px] bg-[#243b73] text-[12px] font-semibold uppercase leading-[19.2px] text-white"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              {index < steps.length - 1 && (
                <span
                  className="absolute left-[calc(50%+18px)] top-[16.81px] hidden h-[2px] w-[calc(100%-36px)] bg-[repeating-linear-gradient(90deg,#7657e8_0,#7657e8_5.4%,transparent_5.4%,transparent_10.8%)] lg:block"
                  aria-hidden="true"
                />
              )}
              <h3 className={`${fontPoppins} w-full pb-[2.4px] text-[15px] font-semibold leading-[24px] text-[#16245a]`}>
                <Copy text={step.title} d={step.td} />
              </h3>
              <p className="text-[13.5px] leading-[21.6px] text-[#5b6678]">
                <Copy text={step.text} d={step.d} />
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
