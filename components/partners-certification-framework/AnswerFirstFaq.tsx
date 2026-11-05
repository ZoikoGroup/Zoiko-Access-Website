import { SectionHeader, container, heading, section } from "./shared";

const faqs = [
  {
    answer: "No.",
    q: "Has Zoiko Access certified any vendor?",
    a: "No vendor has been certified and no assessment has been completed.",
  },
  {
    answer: "No.",
    q: "Is a review the same as regulatory approval?",
    a: "No. A review result is scoped and separate from any regulation.",
  },
  {
    answer: "Not yet.",
    q: "Can my company apply?",
    a: "Intake opens only once a staffed, approved process exists.",
  },
  {
    answer: "No.",
    q: "Does a demo count as conformance?",
    a: "A demo shows behavior once. It is not a conformance result.",
  },
  {
    answer: "Never.",
    q: "Are patient records used in review?",
    a: "No patient records are part of public intake or review materials.",
  },
  {
    answer: "Yes.",
    q: "Can a result be withdrawn?",
    a: "Results can expire or be withdrawn after material changes or incidents.",
  },
];

export default function AnswerFirstFaq() {
  return (
    <section className={`bg-[#F5F8FC] ${section}`}>
      <div className={container}>
        <SectionHeader eyebrow="Answer-first FAQs" title="The answer comes first." />

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <li
              key={f.q}
              className="grid grid-cols-[110px_1fr] gap-5 rounded-xl border border-[#E4E7F2] bg-white px-6 py-6 sm:grid-cols-[130px_1fr]"
            >
              <p className={`${heading} text-2xl font-bold text-[#7B5CF0]`}>{f.answer}</p>
              <div className="border-l border-[#E4E7F2] pl-5">
                <h3 className={`${heading} text-base text-[#16245A]`}>{f.q}</h3>
                <p className="mt-1 text-sm leading-6 text-[#5B6B8C]">{f.a}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
