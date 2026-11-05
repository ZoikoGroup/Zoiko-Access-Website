import { fontPoppins } from "@/components/find-care/fonts";
import { SectionHeader, container, section } from "./shared";

const steps = [
  { title: "Respond", text: "Contain the compromise and record what happened." },
  { title: "Rotate secrets", text: "Replace affected keys and credentials." },
  { title: "Withdraw scope", text: "Remove access that may have been misused." },
  { title: "Coordinate breach notice", text: "Work with affected organizations under the law." },
];

export default function IncidentRevocation() {
  return (
    <section className={`bg-[#F5F8FC] lg:py-[72px] ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Incident management & revocation"
          title="If something is compromised, access ends fast."
          intro="The response sequence, in order."
        />

        <ol className="mt-11 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((s, i) => {
            const last = i === steps.length - 1;
            return (
              <li key={s.title} className="relative lg:pr-6">
                {/* Connector runs from this circle to the next one. */}
                {!last && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[54px] right-0 top-[25.5px] hidden h-[3px] bg-gradient-to-r from-[#7B5CF0] to-[#4A68D8] lg:block"
                  />
                )}
                <span
                  className={`${fontPoppins} relative flex h-[54px] w-[54px] items-center justify-center rounded-full border-[3px] text-base font-semibold ${
                    last ? "border-[#C2402E] bg-[#C2402E] text-white" : "border-[#7B5CF0] bg-white text-[#7B5CF0]"
                  }`}
                >
                  {i + 1}
                </span>
                <h3 className={`${fontPoppins} mt-4 text-lg font-semibold text-[#16245A] lg:text-[19px]`}>
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-[#5B6B8C]">{s.text}</p>
              </li>
            );
          })}
        </ol>

        <p className="mt-8 inline-block rounded-lg border border-dashed border-[#C9D3E5] bg-white px-4 py-3.5 text-sm text-[#16245A]">
          No public response-time commitment (SLA) is offered on this page.
        </p>
      </div>
    </section>
  );
}
