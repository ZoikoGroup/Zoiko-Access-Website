import { Check } from "lucide-react";
import { Eyebrow, heading } from "./shared";

const items = [
  { title: "Accessible discovery", text: "Plain language and accessible pages." },
  { title: "Translated content", text: "Where approved translations exist." },
  { title: "Consent & guardians", text: "Clear boundaries for consent and guardianship." },
  { title: "Non-digital routes", text: "Alternatives for people offline." },
];

export default function ParticipantExperience() {
  return (
    <section id="participant-experience" className="scroll-mt-24 bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Participant experience</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl text-[#16245A] md:text-4xl`}>
          Designed for every participant.
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-[#E4E7F2] bg-white p-6 shadow-[0_10px_20px_rgba(22,36,90,0.08)]"
            >
              <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#E3F5EC] text-[#1E7A4C]">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <h3 className={`${heading} mb-1 text-base text-[#16245A]`}>{it.title}</h3>
              <p className="text-sm leading-6 text-[#5B6B8C]">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
