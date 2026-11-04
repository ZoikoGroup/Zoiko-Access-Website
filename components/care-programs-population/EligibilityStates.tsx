import { Eyebrow, heading } from "./shared";

const states = [
  { tag: "Available", title: "Program available", text: "Offered in this place.", pill: "bg-[#EEF0F4] text-[#4B5568]", dot: "bg-[#4B5568]" },
  { tag: "Qualifies", title: "Meets criteria", text: "May qualify under the rules.", pill: "bg-[#E6EEFF] text-[#3B5BDB]", dot: "bg-[#3B5BDB]" },
  { tag: "Invited", title: "Invited", text: "Asked to consider joining.", pill: "bg-[#EEEAFE] text-[#5B3FD0]", dot: "bg-[#5B3FD0]" },
  { tag: "Submitted", title: "Request submitted", text: "Asked to join — not yet decided.", pill: "bg-[#FFF1DC] text-[#8A5A00]", dot: "bg-[#8A5A00]" },
  { tag: "Enrolled", title: "Enrollment accepted", text: "Explicitly accepted.", pill: "bg-[#E3F5EC] text-[#1E7A4C]", dot: "bg-[#1E7A4C]" },
];

export default function EligibilityStates() {
  return (
    <section
      id="eligibility-enrollment"
      className="scroll-mt-24 bg-[radial-gradient(ellipse_at_50%_100%,#A78BFA_56%,#2E1065_120%)] px-6 py-16 text-white lg:px-16"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow light>Eligibility versus enrollment</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl md:text-4xl`}>Five states. None implies the next.</h2>
        <p className="mb-8 text-base leading-7 text-white md:text-lg">
          Illustrative comparison — a person being eligible never means they&apos;re enrolled.
        </p>

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {states.map((s) => (
            <li key={s.tag} className="rounded-2xl bg-white p-5 text-[#16245A]">
              <span className={`mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${s.pill}`}>
                <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                {s.tag}
              </span>
              <h3 className={`${heading} text-base`}>{s.title}</h3>
              <p className="text-sm leading-6 text-[#5B6B8C]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
