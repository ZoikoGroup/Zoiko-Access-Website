import { Accent, SplitHeader, container, heading, section } from "./shared";

const audiences = [
  {
    tag: "Technical",
    title: "Healthcare technology vendors · developers / architects",
    question: "What would a permitted integration require? Are API, webhook, SDK or docs public and supported?",
    route: "Review technology and architecture information; view factual published material only.",
  },
  {
    tag: "Institutional",
    title: "Institutional CIO / IT leads · partnership decision-makers",
    question: "Can this connect to our systems in our market? How can we begin a legitimate evaluation?",
    route:
      "See availability qualification, security and source ownership; use informational guidance until intake is staffed.",
  },
  {
    tag: "Privacy & compliance",
    title: "Privacy and security reviewers",
    question: "Who approves data access and monitors incidents?",
    route: "Inspect scope, control evidence and escalation routes.",
  },
  {
    tag: "Operational",
    title: "System integrators",
    question: "Who authorizes the connection and owns exceptions?",
    route: "Review role boundaries and implementation responsibilities.",
  },
];

export default function FourAudiences() {
  return (
    <section className={`bg-white ${section}`}>
      <div className={container}>
        <SplitHeader
          eyebrow="Who this is for"
          title={
            <>
              Four audiences. <Accent>Four questions.</Accent>
            </>
          }
          intro="Choosing an audience never grants permissions or unlocks records. Each card points to informational routes only."
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <li key={a.tag} className="flex flex-col rounded-2xl border border-[#E4E7F2] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7B5CF0]">{a.tag}</p>
              <h3 className={`${heading} mt-2 text-lg leading-6 text-[#16245A]`}>{a.title}</h3>
              <p className="mt-3 text-sm italic leading-6 text-[#2A3550]">&ldquo;{a.question}&rdquo;</p>
              <div className="min-h-6 flex-1" />
              <p className="border-t border-dashed border-[#E4E7F2] pt-4 text-sm leading-6 text-[#5B6B8C]">{a.route}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
