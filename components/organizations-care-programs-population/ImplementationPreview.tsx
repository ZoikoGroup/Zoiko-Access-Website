import { Eyebrow, heading } from "./shared";

const stages = ["Discover", "Assess", "Governance", "Configure", "Validate", "Enable", "Review"];

export default function ImplementationPreview() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Implementation preview</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>From discovery to review.</h2>
        <p className="mb-10 text-base leading-7 text-[#5B6B8C]">No fixed timeline or go-live promise.</p>

        <ol className="relative grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-7 lg:gap-0">
          {/* Connecting line on wide screens */}
          <span
            aria-hidden="true"
            className="absolute left-[7.14%] right-[7.14%] top-8 hidden h-[3px] bg-gradient-to-r from-[#7B5CF0] to-[#3B5BDB] lg:block"
          />
          {stages.map((s, i) => (
            <li key={s} className="relative flex flex-col items-center gap-3 text-center">
              <span aria-hidden="true" className="h-16 w-16 rounded-full bg-[#7B5CF0]" />
              <span className={`${heading} text-base text-[#16245A]`}>
                <span className="sr-only">Stage {i + 1}: </span>
                {s}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
