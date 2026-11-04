import { Eyebrow, IMG, heading } from "./shared";

const handoffs = [
  { title: "Referral", source: "referring clinician", receiver: "accepting team", image: `${IMG}/handoff-referral.webp`, alt: "Doctor in a white coat with arms folded" },
  { title: "Discharge", source: "hospital team", receiver: "community provider", image: `${IMG}/handoff-discharge.webp`, alt: "Exterior of a hospital building" },
  { title: "Diagnostics", source: "lab", receiver: "ordering clinician", image: `${IMG}/handoff-diagnostics.webp`, alt: "Pipette filling a tray of laboratory sample wells" },
  { title: "Follow-up", source: "treating team", receiver: "named follow-up owner", image: `${IMG}/handoff-follow-up.webp`, alt: "Clinician giving an older woman a vaccination" },
];

export default function CoordinationHandoffs() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Coordination opportunities</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl text-[#16245A] md:text-4xl`}>
          Four handoffs, each with two owners.
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {handoffs.map((h) => (
            <article
              key={h.title}
              className="overflow-hidden rounded-[20px] border border-[#E4E7F2] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.10)]"
            >
              <img src={h.image} alt={h.alt} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className={`${heading} mb-1.5 text-lg text-[#16245A]`}>{h.title}</h3>
                <p className="text-sm leading-6 text-[#5B6B8C]">
                  <strong>Source:</strong> {h.source}
                  <br />
                  <strong>Receiver:</strong> {h.receiver}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
