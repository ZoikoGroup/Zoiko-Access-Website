import Copy from "./Copy";
import { Eyebrow, Lead, Title, inner, sectionPad } from "./ui";

const questions = [
  "Which geography do we operate in?",
  "Is there a supported partner?",
  "Who is the named owner?",
  "Which use case do we need?",
  "Which standard applies?",
  "Has clinical safety and rights review happened?",
];

export default function ReadinessChecklist() {
  return (
    <section
      id="readiness"
      className={`w-full scroll-mt-[40px] bg-white py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[13px]`}>
        <Eyebrow>READINESS CHECKLIST</Eyebrow>
        <Title>Six questions for IT and procurement</Title>
        <Lead>
          <Copy
            text="Nothing is collected or sent. Ticks stay in your browser tab and are never transmitted."
            d={[
              "Nothing is collected or sent. Ticks stay in your browser tab and are never",
              "transmitted.",
            ]}
          />
        </Lead>

        <ul className="grid w-full gap-[10px] pb-[9px] pt-[12.99px] sm:grid-cols-2 lg:grid-cols-3">
          {questions.map((question) => (
            <li key={question} className="lg:nth-[n+4]:pb-[18.78px]">
              <label className="flex min-h-[56px] w-full cursor-pointer items-center gap-[12px] rounded-[14px] border border-solid border-[#d9d3f5] bg-white px-[16px] py-[10px] text-[16px] font-normal leading-[26.4px] text-[#273444]">
                <input
                  type="checkbox"
                  className="size-[19px] shrink-0 accent-[#7b3ff2]"
                />
                <span>{question}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
