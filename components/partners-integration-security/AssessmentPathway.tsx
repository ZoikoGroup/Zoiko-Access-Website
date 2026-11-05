import { IMG, SectionHeader, container, heading, section } from "./shared";

const files = [
  { title: "Contract", text: "Signed scope, duties and data roles." },
  { title: "Threat model", text: "Risks and mitigations for this integration." },
  { title: "Penetration evidence", text: "Recent, independent test results." },
  { title: "Regional restrictions", text: "Where data may and may not go." },
];

export default function AssessmentPathway() {
  return (
    <section className={`bg-white ${section}`}>
      <div className={container}>
        <SectionHeader
          split
          eyebrow="Security assessment pathway"
          title="Four files every review would need."
          intro="None has been submitted. Review opens only through an approved process."
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {files.map((f, i) => (
            <li
              key={f.title}
              className="relative overflow-hidden rounded-md border border-[#E4E7F2] bg-white px-6 pb-8 pt-10 shadow-[0_10px_24px_rgba(36,59,115,0.12)]"
            >
              {/* Folded corner */}
              <span aria-hidden="true" className="absolute right-0 top-0 h-7 w-7 rounded-bl-md bg-[#EEEAFE]" />
              <p className="text-xs text-[#7B5CF0]">FILE {String(i + 1).padStart(2, "0")}</p>
              <h3 className={`${heading} mt-1 text-lg text-[#16245A]`}>{f.title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#5B6B8C]">{f.text}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#9AA3BD]">Not submitted</p>
            </li>
          ))}
        </ul>

        <img
          src={`${IMG}/assessment.webp`}
          alt="Reviewer taking notes at a desk beside document binders"
          className="mt-11 h-64 w-full object-cover md:h-[551px]"
        />
      </div>
    </section>
  );
}
