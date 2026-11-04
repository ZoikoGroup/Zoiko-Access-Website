import { Eyebrow, IMG, heading } from "./shared";

const layers = [
  {
    n: 1,
    title: "Participant",
    text: "The person or organization starting a request, with a defined purpose.",
    className: "bg-[#EEEAFE] text-[#16245A]",
  },
  {
    n: 2,
    title: "Authorized partner interface",
    text: "Moves only contracted, permitted data. It does not own or change it.",
    className: "border-2 border-dashed border-[#7B5CF0] bg-white text-[#16245A]",
  },
  {
    n: 3,
    title: "Source system",
    text: "Holds the authoritative record and decides what may be shared.",
    className: "bg-[#16245A] text-white",
  },
];

export default function AuthorityMap() {
  return (
    <section
      id="authority"
      className="scroll-mt-24 bg-gradient-to-r from-[#B4A4FF] via-[#E0D9FF] to-white px-6 py-16 lg:px-16"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Source of record &amp; authority</Eyebrow>
        <h2 className={`${heading} mb-3 max-w-[560px] text-3xl text-[#16245A] md:text-4xl`}>
          Which organization owns which decision.
        </h2>
        <p className="mb-10 text-base leading-7 text-[#5B6B8C]">
          A federated map. Each layer passes only what it is permitted to, and clinical authority
          never moves.
        </p>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <ol className="space-y-4 rounded-3xl border-2 border-white/70 bg-white p-7 shadow-[0_10px_30px_rgba(22,36,90,0.08)]">
            {layers.map((l) => (
              <li key={l.n} className={`flex items-start justify-between gap-4 rounded-2xl px-6 py-5 ${l.className}`}>
                <div>
                  <h3 className={`${heading} text-lg`}>{l.title}</h3>
                  <p className="text-sm leading-6 opacity-80">{l.text}</p>
                </div>
                <span className="shrink-0 text-xs font-bold uppercase tracking-wide text-[#7B5CF0]">
                  Layer {l.n}
                </span>
              </li>
            ))}
          </ol>

          <div className="rounded-3xl bg-gradient-to-br from-[#253B8C] to-[#16245A] p-8 text-white">
            <img
              src={`${IMG}/clinical-authority.webp`}
              alt="Clinician in a white coat"
              className="mb-6 h-44 w-full rounded-2xl object-cover"
            />
            <h3 className={`${heading} mb-2 text-2xl`}>The clinic stays the clinical authority.</h3>
            <p className="text-base leading-7 text-white/80">
              No vendor, interface or platform makes clinical decisions. They stay with licensed
              clinicians at the responsible organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
