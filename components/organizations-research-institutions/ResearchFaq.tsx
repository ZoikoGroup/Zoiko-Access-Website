import { Eyebrow, heading } from "./shared";

const faqs = [
  {
    q: "Does this provide direct patient records?",
    a: "No. There is no public or automatic access to patient records.",
  },
  {
    q: "What is available today?",
    a: "Informational guidance only. No datasets, participant recruitment or research portal is available from this page.",
  },
  {
    q: "Does affiliation with a university grant access?",
    a: "No. Purpose, lawful authority, ethics review, participant rights and security are evaluated separately for every study.",
  },
  {
    q: "Does this page mean a study is ethics-approved?",
    a: "No. Ethics approval comes only from an independent ethics committee, where applicable.",
  },
  {
    q: "Who owns decisions about data?",
    a: "The data custodian, within law and policy. Researchers, sponsors and clinicians cannot approve access on the custodian's behalf.",
  },
  {
    q: "Can we discuss a research program?",
    a: "A contact route appears only once a staffed, approved route exists. Start by reviewing the governance process on this page.",
  },
];

export default function ResearchFaq() {
  return (
    <section className="bg-[#F8F8FD] px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,9fr)] lg:gap-28">
        <div>
          <Eyebrow>Questions, answered</Eyebrow>
          <h2 className={`${heading} text-3xl text-[#16245A] md:text-[40px] md:leading-[1.2]`}>
            What&apos;s available, what approval means, who decides.
          </h2>
        </div>

        <div className="divide-y divide-[#E4E7F2] border-y border-[#E4E7F2]">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group py-6 lg:pl-14">
              <summary
                className={`${heading} flex cursor-pointer list-none items-center justify-between gap-6 pr-3 text-lg text-[#16245A] [&::-webkit-details-marker]:hidden`}
              >
                {f.q}
                <span aria-hidden="true" className="shrink-0 text-lg text-[#7B5CF0]">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-[#5B6B8C] lg:pl-3.5">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
