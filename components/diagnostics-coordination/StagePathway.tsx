import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lede, Title, head, inner, sectionPad } from "./ui";

const stages = [
  ["Ordered by authorized professional", "Owner: ordering clinician", "Proof: order record at source"],
  ["Service prepared or arranged", "Owner: diagnostic provider", "Proof: service record at source"],
  ["Specimen or examination completed", "Owner: diagnostic provider", "Proof: completion event"],
  ["Report issued by source", "Owner: source organization", "Proof: versioned report"],
  ["Received and reviewed by authorized team", "Owner: receiving clinician", "Proof: review recorded in clinical system"],
];

export default function StagePathway() {
  return (
    <section
      id="pathway"
      className={`w-full scroll-mt-[40px] bg-white py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[40px]`}>
        <div className={`${head} lg:pt-[2px]`}>
          <Eyebrow>Five-stage pathway</Eyebrow>
          <Title large className="lg:pt-[2.3px]">
            Five stages. Five owners. A proof for every change.
          </Title>
          <Lede className="lg:pb-[0.56px]">
            <Copy
              text="Each transition names who is responsible and what evidence moves the stage forward. Received is not reviewed."
              d={[
                "Each transition names who is responsible and what evidence moves the stage",
                "forward. Received is not reviewed.",
              ]}
            />
          </Lede>
        </div>

        <ol className="flex w-full flex-col gap-[26px] px-px py-[2px] lg:py-[21.7px]">
          {stages.map(([title, owner, proof], index) => (
            <li
              key={title}
              className="grid min-h-[75px] grid-cols-[30px_1fr] items-center gap-x-[20px] gap-y-[4px] rounded-[10px] border border-solid border-[#a7adc4] bg-white px-[18px] py-[12px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)] lg:h-[75px] lg:grid-cols-[30px_407px_325px_minmax(0,1fr)] lg:gap-x-[51px] lg:py-0"
            >
              <span className="flex size-[30px] items-center justify-center rounded-full bg-[#7657e8] text-[12.5px] font-bold leading-[20.59px] text-white">
                {index + 1}
              </span>
              <h3
                className={`${fontPoppins} pt-[5.45px] text-[16px] font-semibold leading-[17.92px] tracking-[-0.16px] text-[#243b73]`}
              >
                {title}
              </h3>
              <em className="pt-[3px] text-[12.2px] font-semibold not-italic leading-[20px] text-[#4267d5] max-lg:col-start-2">
                {owner}
              </em>
              <span className="pt-[6px] text-[12.5px] font-normal leading-[20.59px] text-[#273444] max-lg:col-start-2 max-lg:pt-0">
                {proof}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
