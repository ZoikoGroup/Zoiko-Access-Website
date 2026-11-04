import { Eyebrow, heading } from "./shared";

const stages = [
  { title: "Discovery", text: "Goals, population and mandate." },
  { title: "Legal / DPIA review", text: "Legal basis and data protection impact." },
  { title: "Technical feasibility", text: "Systems, mapping and exchange." },
  { title: "Security & clinical governance", text: "Controls and clinical oversight." },
  { title: "Pilot decision", text: "An explicit go / no-go." },
  { title: "Measured review", text: "Evidence-based review of the pilot." },
];

export default function EvaluationPathway() {
  return (
    <section className="relative overflow-hidden bg-[#3A23A8] px-6 py-16 text-white lg:px-16">
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#A88BFF_0%,#8B6CF5_45%,#3A23A8_100%)]"
      />

      <div className="relative mx-auto w-full max-w-[1300px]">
        <Eyebrow light>Implementation evaluation pathway</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl md:text-4xl`}>
          How a public program would be evaluated.
        </h2>
        <p className="mb-10 text-base leading-7 text-white/75">
          Six stages, each a separate decision. No timeline or outcome is promised.
        </p>

        <ol className="relative grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-0">
          <span
            aria-hidden="true"
            className="absolute left-[8.33%] right-[8.33%] top-7 hidden h-[3px] bg-gradient-to-r from-[#7B5CF0] to-[#3B5BDB] lg:block"
          />
          {stages.map((s, i) => (
            <li key={s.title} className="relative flex flex-col items-center gap-1 px-2.5 text-center">
              <span
                className={`${heading} mb-2 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[#7B5CF0] bg-white text-2xl text-[#7B5CF0]`}
              >
                {i + 1}
              </span>
              <h3 className={`${heading} text-base text-[#16245A]`}>{s.title}</h3>
              <p className="text-sm leading-5 text-[#2A3550]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
