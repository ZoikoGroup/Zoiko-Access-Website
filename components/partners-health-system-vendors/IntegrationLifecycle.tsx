import { Eyebrow, heading } from "./shared";

const steps = [
  { title: "Discover", text: "Use case and accountable organization" },
  { title: "Scope", text: "Data, purpose and systems involved" },
  { title: "Legal & security review", text: "Contracts, lawful basis, controls" },
  { title: "Interface qualification", text: "Defined, versioned interfaces" },
  { title: "Validation", text: "Testing, including failure cases", operation: true },
  { title: "Limited enablement", text: "Small, approved scope first", operation: true },
  { title: "Monitoring", text: "Ongoing checks, suspend if needed", operation: true },
];

// Arrow-shaped segments on wide screens; the first has a flat, rounded left edge.
const chevron = "lg:[clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%,12%_50%)]";
const chevronFirst = "lg:[clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)]";

export default function IntegrationLifecycle() {
  return (
    <section id="lifecycle" className="scroll-mt-24 bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="mb-10 text-center">
          <Eyebrow center>Integration evaluation lifecycle</Eyebrow>
          <h2 className={`${heading} mx-auto mb-3 max-w-[640px] text-3xl text-[#16245A] md:text-[44px] md:leading-[1.2]`}>
            Seven steps from discovery to permitted operation.
          </h2>
          <p className="text-base leading-7 text-[#5B6B8C]">
            Any step can stop the evaluation. Reaching the end is not guaranteed.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-7 lg:gap-1.5">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className={`rounded-xl px-5 py-6 lg:min-h-[170px] ${i === 0 ? `${chevronFirst} lg:rounded-l-2xl lg:rounded-r-none` : `${chevron} lg:rounded-none lg:pl-[18%]`} ${
                s.operation ? "bg-[#16245A] text-white" : "bg-[#EEEAFE] text-[#16245A]"
              }`}
            >
              <p className={`text-xs font-bold ${s.operation ? "text-[#B9A8FD]" : "text-[#7B5CF0]"}`}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className={`${heading} my-1 text-base leading-6`}>{s.title}</h3>
              <p className={`text-sm leading-5 ${s.operation ? "text-white/75" : "text-[#5B6B8C]"}`}>{s.text}</p>
            </li>
          ))}
        </ol>

        <ul className="mt-5 flex flex-wrap gap-6 text-sm text-[#5B6B8C]">
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="h-4 w-4 rounded bg-[#EEEAFE]" /> Evaluation
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="h-4 w-4 rounded bg-[#16245A]" /> Controlled operation, only
            after approval
          </li>
        </ul>
      </div>
    </section>
  );
}
