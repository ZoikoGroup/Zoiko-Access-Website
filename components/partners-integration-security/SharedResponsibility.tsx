import { Heart } from "lucide-react";
import { SectionHeader, container, heading, section } from "./shared";

const parties = [
  {
    letter: "P",
    title: "Partner",
    color: "bg-[#7B5CF0]",
    duties: ["Secures its own systems and credentials", "Requests only scoped access", "Reports incidents promptly"],
  },
  {
    letter: "H",
    title: "Healthcare provider",
    color: "bg-[#4A68D8]",
    duties: ["Authorizes purpose and access", "Owns patient relationships and records", "Makes every clinical decision"],
  },
  {
    letter: "Z",
    title: "Zoiko Access",
    color: "bg-[#243B73]",
    duties: ["Enforces approved scopes", "Keeps audit evidence", "Can suspend or revoke access"],
  },
];

export default function SharedResponsibility() {
  return (
    <section className={`bg-white ${section}`}>
      <div className={container}>
        <SectionHeader
          split
          eyebrow="Who is responsible?"
          title="Shared security. Separate duties."
          intro="Each party owns its own controls. No one hands its duties to another."
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-[#E4E7F2] md:grid-cols-3 md:gap-5 md:pb-6">
          {parties.map((p) => (
            <li key={p.title} className="bg-white px-7 py-7 shadow-[0_10px_20px_rgba(0,0,0,0.10)]">
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`${heading} flex h-10 w-10 items-center justify-center rounded-xl text-base font-bold text-white ${p.color}`}
                  aria-hidden="true"
                >
                  {p.letter}
                </span>
                <h3 className={`${heading} text-lg text-[#16245A]`}>{p.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {p.duties.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm leading-6 text-[#2A3550]">
                    <span
                      className="mt-1.5 h-3 w-3 shrink-0 rounded-[3px] border border-[#7B5CF0] bg-[#EEEAFE]"
                      aria-hidden="true"
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="mt-4 flex items-center gap-3.5 rounded-2xl bg-gradient-to-r from-[#7B5CF0] to-[#4A68D8] px-6 py-4 text-base font-semibold text-white">
          <Heart className="h-5 w-5 shrink-0" aria-hidden="true" />
          No security arrangement transfers clinical authority. It stays with the provider.
        </p>
      </div>
    </section>
  );
}
