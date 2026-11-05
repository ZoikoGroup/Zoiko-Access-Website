import { Eyebrow, Pill, heading } from "./shared";

const steps = [
  { title: "Define purpose", text: "What the program is for.", owner: "Public sponsor" },
  { title: "Verify authority", text: "Confirm the legal powers.", owner: "Statutory authority" },
  { title: "Agree minimum data", text: "Only what the purpose needs.", owner: "Data steward" },
  { title: "Validate safeguards", text: "Privacy, security, clinical.", owner: "Reviewers" },
  { title: "Approve activation", text: "An explicit decision.", owner: "Accountable owner" },
];

export default function OperatingModel() {
  return (
    <section id="operating-model" className="scroll-mt-24 bg-[#F5F8FC] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Mandate-first operating model</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>
          Five steps, in this order.
        </h2>
        <p className="mb-10 text-base leading-7 text-[#5B6B8C]">
          Illustrative workflow — no step is marked complete for any real agency.
        </p>

        <ol className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {/* Connecting line on wide screens */}
          <span
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-8 hidden h-[3px] bg-gradient-to-r from-[#7B5CF0] to-[#3B5BDB] lg:block"
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex flex-col items-center gap-1 px-2.5 text-center">
              <span
                className={`${heading} mb-2 flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-[#7B5CF0] bg-[#7B5CF0] text-2xl font-bold text-white`}
              >
                {i + 1}
              </span>
              <h3 className={`${heading} text-base text-[#16245A]`}>{s.title}</h3>
              <p className="pb-1.5 text-sm leading-5 text-[#5B6B8C]">{s.text}</p>
              <Pill>{s.owner}</Pill>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
