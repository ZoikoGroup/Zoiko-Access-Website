import { Lock } from "lucide-react";
import { IMG, SectionHeader, container, heading, section } from "./shared";

const envs = [
  {
    title: "Sandbox",
    text: "Synthetic data only, for building and testing.",
    img: "env-sandbox",
    alt: "Test dashboard with charts",
  },
  {
    title: "Validation",
    text: "Agreed test scenarios before release approval.",
    img: "env-validation",
    alt: "Laptop showing validation analytics",
  },
  {
    title: "Production",
    text: "Real workflows, only after a release decision.",
    img: "env-production",
    alt: "Production server racks",
  },
];

const activation = [
  { title: "Authorize", text: "The subscriber's organization and scope are approved." },
  { title: "Verify destination", text: "The endpoint proves it belongs to that subscriber." },
  { title: "Activate", text: "Only then can events be delivered there." },
];

export default function Environments() {
  return (
    <section id="environments" className={`bg-white ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Subscriptions & environments"
          title="Every environment is gated."
          intro="None of these environments is available. Each would open only after authorization."
        />

        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {envs.map((e) => (
            <li key={e.title} className="overflow-hidden rounded-2xl border border-[#E4E7F2] bg-white">
              <img src={`${IMG}/${e.img}.webp`} alt={e.alt} className="h-36 w-full object-cover" />
              <div className="px-6 pb-6 pt-5">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#FDF1E3] px-2.5 py-1 text-xs text-[#9A5A0E]">
                  <Lock className="h-3 w-3" aria-hidden="true" />
                  gated
                </span>
                <h3 className={`${heading} mt-3 text-xl text-[#16245A]`}>{e.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#5B6B8C]">{e.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <ol className="mt-5 grid grid-cols-1 rounded-xl border border-[#E4E7F2] md:grid-cols-3">
          {activation.map((a, i) => (
            <li
              key={a.title}
              className={`px-5 py-4 ${i > 0 ? "border-t border-[#E4E7F2] md:border-l md:border-t-0" : ""}`}
            >
              <p className={`${heading} text-sm text-[#16245A]`}>
                {i + 1} · {a.title}
              </p>
              <p className="text-sm leading-6 text-[#2A3550]">{a.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
