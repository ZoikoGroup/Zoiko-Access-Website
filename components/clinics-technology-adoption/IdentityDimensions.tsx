import { Home, MapPin, ShieldCheck, User } from "lucide-react";
import { SectionHeader, container, heading, section } from "./shared";

const dimensions = [
  { icon: User, title: "Patient identity", text: "Who the person is, matched carefully.", bg: "bg-[#7B5CF0]" },
  { icon: MapPin, title: "Care location", text: "Where care happens. Context only.", bg: "bg-[#3D68D6]" },
  { icon: Home, title: "Tenant", text: "Which institution's space this is.", bg: "bg-[#243B73]" },
  { icon: ShieldCheck, title: "Authorization", text: "What is permitted, by whom.", bg: "bg-[#16245A]" },
];

export default function IdentityDimensions() {
  return (
    <section className={`bg-white ${section}`}>
      <div className={`${container} grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,500px)_minmax(0,1fr)] lg:gap-16`}>
        <div>
          <SectionHeader
            eyebrow="Identity & consent boundary"
            title="Four separate dimensions."
            intro="Knowing one never grants another. Each is checked on its own, every time."
          />
          <p className="mt-5 inline-block rounded-full border border-[#7B5CF0] px-4 py-2 text-sm font-semibold text-[#16245A]">
            Never merged · never inferred
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {dimensions.map(({ icon: Icon, title, text, bg }) => (
            <li key={title} className={`relative h-[170px] overflow-hidden rounded-[20px] p-6 ${bg}`}>
              <span className="absolute -right-6 -top-6 h-[100px] w-[100px] rounded-full bg-white/15" aria-hidden="true" />
              <Icon className="absolute right-6 top-6 h-6 w-6 text-white" strokeWidth={1.75} aria-hidden="true" />
              <div className="absolute inset-x-6 bottom-6">
                <h3 className={`${heading} text-lg text-white`}>{title}</h3>
                <p className="mt-1 text-sm text-white/80">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
