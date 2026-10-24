import Copy from "./Copy";
import InfoCard from "./InfoCard";
import Kicker from "./Kicker";
import SectionTitle from "./SectionTitle";

const boundaries = [
  {
    badge: "1",
    title: "No prices",
    titleLines: undefined,
    text: "No fees are quoted. Any pricing comes from a source record.",
    d: ["No fees are quoted. Any pricing", "comes from a source record."],
  },
  {
    badge: "2",
    title: "No service levels",
    titleLines: undefined,
    text: "No uptime figures or response times are promised.",
    d: undefined,
  },
  {
    badge: "3",
    title: "No templates yet",
    titleLines: undefined,
    text: "No contract documents are offered for download until they are sourced and approved.",
    d: undefined,
  },
  {
    badge: "4",
    title: "No executed terms implied",
    titleLines: ["No executed terms", "implied"],
    text: "Contact never implies that terms are agreed or in force.",
    d: undefined,
  },
];

export default function ContractBoundary() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-12 lg:py-[70px]">
      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start gap-[10px]">
        <Kicker>Commercial and contracting boundary</Kicker>
        <SectionTitle>What this page does not say</SectionTitle>

        <div className="flex w-full flex-col items-stretch gap-[14px] pt-[16px] lg:h-[208.55px] lg:flex-row lg:items-start">
          {boundaries.map((item) => (
            <InfoCard
              key={item.badge}
              badge={item.badge}
              title={<Copy text={item.title} d={item.titleLines} />}
            >
              <Copy text={item.text} d={item.d} />
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
