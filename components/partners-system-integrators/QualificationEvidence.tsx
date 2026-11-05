import { Eyebrow, IMG, heading } from "./shared";

const items = [
  { title: "Contract", text: "Signed scope and duties" },
  { title: "Threat model", text: "Risks and mitigations for this integration" },
  { title: "Information security", text: "Current, reviewed control evidence" },
  { title: "Data map", text: "Which fields go where, and why" },
  { title: "Test record", text: "Results, including failures" },
  { title: "Named owner", text: "Accountable person for operation" },
  { title: "Change plan", text: "How updates are approved and released" },
];

export default function QualificationEvidence() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-12 lg:grid-cols-[500px_1fr] lg:gap-16">
        <div>
          <Eyebrow>Qualification &amp; evidence</Eyebrow>
          <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}>
            What an integrator would need to show.
          </h2>
          <p className="mb-8 text-base leading-7 text-[#5B6B8C]">
            The checklist is empty on purpose. No integrator has been assessed here, and there is no formal
            certification program.
          </p>
          <img
            src={`${IMG}/qualification.webp`}
            alt="Person pointing at a planning board linked with string"
            className="h-80 w-full object-cover"
          />
        </div>

        {/* Clipboard-style list; the tab at the top is decorative. */}
        <div className="relative mt-4 h-fit rounded-lg border border-[#243B73] px-7 py-4">
          <span aria-hidden="true" className="absolute -top-3 left-1/2 h-5 w-28 -translate-x-1/2 rounded bg-[#243B73]" />
          <ul>
            {items.map((it) => (
              <li
                key={it.title}
                className="flex items-start gap-4 border-b border-dashed border-[#E4E7F2] py-4 last:border-b-0"
              >
                <span aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 rounded border-2 border-[#C3CAE0]" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#16245A]">{it.title}</p>
                  <p className="text-sm text-[#5B6B8C]">{it.text}</p>
                </div>
                <span className="text-xs text-[#9AA3BD]">not assessed</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
