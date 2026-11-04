import { Eyebrow, heading } from "./shared";

const steps = [
  { title: "Define purpose", text: "A specific research question and scope." },
  { title: "Assess authority", text: "Lawful basis and institutional authority." },
  { title: "Govern access", text: "Who may access what, and why." },
  { title: "Evaluate feasibility", text: "Technical and operational fit." },
  { title: "Authorize", text: "An explicit, recorded decision by accountable parties." },
  { title: "Review", text: "Ongoing oversight and the ability to stop." },
];

export default function CollaborationLifecycle() {
  return (
    <section id="lifecycle" className="scroll-mt-24 bg-[#F1F1F1] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1220px]">
        <Eyebrow>Research collaboration lifecycle</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>
          Six steps. None of them is automatic.
        </h2>
        <p className="mb-10 text-base leading-7 text-[#5B6B8C]">
          A conceptual sequence — no step is shown as approved.
        </p>

        {/* Timeline: a line down the left on small screens, down the middle on wide ones */}
        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[21px] top-0 w-0.5 bg-gradient-to-b from-[#7B5CF0] to-[#3B5BDB] lg:left-1/2 lg:-translate-x-1/2"
          />
          {steps.map((s, i) => {
            const right = i % 2 === 1;
            return (
              <li
                key={s.title}
                className={`relative pb-9 pl-16 lg:w-1/2 ${right ? "lg:ml-auto lg:pl-12" : "lg:pl-0 lg:pr-12"}`}
              >
                <span
                  className={`${heading} absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#7B5CF0] bg-white text-base text-[#7B5CF0] ${right ? "lg:-left-[22px]" : "lg:left-auto lg:-right-[22px]"}`}
                >
                  {i + 1}
                </span>
                <div className="rounded-2xl border border-[#E4E7F2] bg-white p-5">
                  <h3 className={`${heading} mb-1 text-lg text-[#16245A]`}>{s.title}</h3>
                  <p className="pb-1.5 text-sm leading-6 text-[#5B6B8C]">{s.text}</p>
                  <span className="inline-block rounded-md bg-[#FFF1DC] px-2 py-0.5 text-xs font-semibold text-[#8A5A00]">
                    Conceptual
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
