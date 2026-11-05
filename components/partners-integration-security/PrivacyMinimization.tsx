import { FileX, Filter, MapPin, Scale, UserRound } from "lucide-react";
import { IMG, SectionHeader, container, heading, section } from "./shared";

const rules = [
  { icon: Scale, title: "Lawful purpose", text: "A documented legal basis." },
  { icon: Filter, title: "Use limitation", text: "Data used only for that purpose." },
  { icon: MapPin, title: "Residency gates", text: "Stored and processed only where allowed." },
  { icon: FileX, title: "Logging exclusions", text: "Health details kept out of technical logs." },
  { icon: UserRound, title: "Subject rights", text: "People can exercise their legal rights." },
];

export default function PrivacyMinimization() {
  return (
    <section className={`bg-[#F5F8FC] ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Privacy & data minimization"
          title="The least data, for one lawful purpose."
          intro="Five privacy rules apply before any data moves."
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {rules.map((r, i) => (
            <li
              key={r.title}
              className={`rounded-2xl border-t-4 bg-white px-5 py-6 shadow-[0_10px_24px_rgba(36,59,115,0.08)] ${
                i % 2 === 0 ? "border-[#7B5CF0]" : "border-[#4A68D8]"
              }`}
            >
              <r.icon className="h-6 w-6 text-[#243B73]" strokeWidth={1.5} aria-hidden="true" />
              <h3 className={`${heading} mt-4 text-base text-[#16245A]`}>{r.title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#5B6B8C]">{r.text}</p>
            </li>
          ))}
        </ul>

        <img
          src={`${IMG}/privacy-flow.webp`}
          alt=""
          aria-hidden="true"
          className="mt-10 hidden w-full md:block"
        />
      </div>
    </section>
  );
}
