import { Eyebrow, heading } from "./shared";

const faqs = [
  {
    q: "Who can take part in a program?",
    a: "The eligible audience the sponsor defines, in approved locations.",
  },
  {
    q: "Does being eligible mean I'm enrolled?",
    a: "No. Eligibility, invitation, request and enrollment are separate states. Enrollment happens only when it is explicitly accepted.",
  },
  {
    q: "Can a sponsor see participants' health data?",
    a: "No. Participant-level health data stays unavailable to sponsors, except with specific lawful authority, purpose, governance and contract.",
  },
  {
    q: "Which providers take part?",
    a: "Only verified, licensed providers named for the program. They keep clinical decisions and the clinical record.",
  },
  {
    q: "Can I book appointments through a program?",
    a: "Only where an approved program and provider offer it in your location. Availability is shown only from a verified listing.",
  },
  {
    q: "Is there accessible and offline support?",
    a: "Programs aim to offer plain-language, accessible pages and non-digital routes for people offline, where approved.",
  },
];

export default function ProgramFaq() {
  return (
    <section className="bg-[#F6F5FF] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Questions, answered</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl text-[#16245A] md:text-5xl`}>Program questions, answered.</h2>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group rounded-2xl border border-[#E4E7F2] bg-white px-6 py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-[#16245A] [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 rounded-md border border-[#DCD3FB] px-2.5 py-1 text-xs font-bold text-[#7B5CF0]"
                >
                  <span className="group-open:hidden">Show</span>
                  <span className="hidden group-open:inline">Hide</span>
                </span>
              </summary>
              <p className="mt-4 text-base leading-6 text-[#5B6B8C]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
