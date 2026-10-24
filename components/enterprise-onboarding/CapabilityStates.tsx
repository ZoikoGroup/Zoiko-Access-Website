import Copy from "./Copy";
import InfoCard from "./InfoCard";
import Kicker from "./Kicker";
import SectionTitle from "./SectionTitle";

const states = [
  {
    badge: "P0",
    title: "Informational, not activated",
    titleLines: ["Informational, not", "activated"],
    text: "Education and in-page guidance only. This is the state of this page.",
    d: [
      "Education and in-page guidance",
      "only. This is the state of this",
      "page.",
    ],
    featured: true,
  },
  {
    badge: "P1",
    title: "Qualified contact authorized",
    titleLines: ["Qualified contact", "authorized"],
    text: "An approved country or program, and a secure, institution-only inquiry.",
    d: [
      "An approved country or program,",
      "and a secure, institution-only",
      "inquiry.",
    ],
  },
  {
    badge: "P2",
    title: "Authenticated onboarding active",
    titleLines: ["Authenticated", "onboarding active"],
    text: "A role-restricted interface behind a separate, verified authorization.",
    d: [
      "A role-restricted interface behind",
      "a separate, verified authorization.",
    ],
  },
  {
    badge: "PX",
    title: "Suspended or degraded",
    titleLines: undefined,
    text: "Informational content stays, a clear notice appears, and live actions are removed.",
    d: [
      "Informational content stays, a",
      "clear notice appears, and live",
      "actions are removed.",
    ],
  },
];

export default function CapabilityStates() {
  return (
    <section className="w-full bg-[#f1eefe] px-4 py-12 sm:px-6 lg:px-12 lg:py-[70px]">
      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start gap-[10px]">
        <Kicker>Capability states</Kicker>
        <SectionTitle>
          <Copy
            text="What “available” means, in four states"
            d={["What “available” means, in four states"]}
          />
        </SectionTitle>

        <div className="flex w-full flex-col items-stretch gap-[14px] pt-[16px] lg:flex-row">
          {states.map((state) => (
            <InfoCard
              key={state.badge}
              badge={state.badge}
              featured={state.featured}
              titleTop="pt-[2.85px]"
              title={<Copy text={state.title} d={state.titleLines} />}
            >
              <Copy text={state.text} d={state.d} />
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
