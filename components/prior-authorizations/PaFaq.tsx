import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, sectionPad, sectionY } from "./ui";

const faqs: { q: string; lead: string; rest: string; d?: string[] }[] = [
  { q: "Does submission mean approval?", lead: "No.", rest: " A submission or acknowledgment is not a decision." },
  { q: "Does eligibility mean authorization?", lead: "No.", rest: " Eligibility and authorization are separate payer processes." },
  { q: "Who decides?", lead: "The payer", rest: " or its authorized administrator." },
  {
    q: "Does approval guarantee payment?",
    lead: "Not necessarily.",
    rest: " Claim processing and plan terms remain separate.",
    d: [" Claim processing and plan terms remain", "separate."],
  },
  {
    q: "Can Zoiko Access review my case?",
    lead: "No.",
    rest: " This informational page does not retrieve personal cases. Contact your plan or provider.",
    d: [" This informational page does not retrieve personal cases.", "Contact your plan or provider."],
  },
];

export default function PaFaq() {
  return (
    <section id="faq" className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-3`}>
        <Eyebrow>FAQ &amp; direct answers</Eyebrow>
        <Title>Short answers.</Title>
        <div className="grid w-full items-start gap-x-10 gap-y-7 pt-1 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.q} className="flex flex-col gap-2 border-t-2 border-solid border-[#16245a] pt-4">
              <h3 className={`${fontPoppins} text-[17px] font-semibold leading-[22.95px] text-[#16245a]`}>{faq.q}</h3>
              <p className="text-[15px] leading-[24px] text-[#5b6678]">
                <strong className="font-bold text-[#7657e8]">{faq.lead}</strong>
                <Copy text={faq.rest} d={faq.d} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
