import { Eyebrow, IMG, heading } from "./shared";

const items = [
  { letter: "E", title: "Ethics committee review", text: "Independent, where applicable." },
  { letter: "P", title: "Participant protections", text: "Rights, safety and withdrawal." },
  { letter: "S", title: "Safeguarding", text: "Escalation for vulnerable people." },
  { letter: "C", title: "Clinical separation", text: "Care decisions stay with clinicians." },
];

export default function EthicsSafeguarding() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_50%_50%,#A78BFA_55%,#2E1065_130%)] px-6 py-16 text-white lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-24">
        <div>
          <Eyebrow light>Ethics &amp; safeguarding</Eyebrow>
          <h2 className={`${heading} mb-3 text-3xl md:text-4xl md:leading-[48px]`}>
            Independent scrutiny, not implied approval.
          </h2>
          <p className="mb-6 text-base text-white">Nothing on this page means a study has ethics approval.</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map((it) => (
              <div key={it.title} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-[#16245A]">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#7B5CF0] text-xs font-bold text-[#5B3FD0]"
                >
                  {it.letter}
                </span>
                <div className="flex flex-1 flex-col gap-1 rounded-2xl border border-[#E4E7F2] px-4 py-3 sm:flex-row sm:gap-4">
                  <h3 className="shrink-0 text-base font-bold sm:w-[45%]">{it.title}</h3>
                  <p className="text-sm leading-6 text-[#5B6B8C]">{it.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img
          src={`${IMG}/ethics.webp`}
          alt="Clinician in a white coat holding a phone"
          className="mx-auto h-96 w-full max-w-[452px] rounded-b-[20px] rounded-t-full object-cover lg:h-[520px]"
        />
      </div>
    </section>
  );
}
