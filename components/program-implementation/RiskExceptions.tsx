import { Eyebrow, heading } from "./shared";

const risks = [
  { title: "Failed referral", text: "Surfaced and followed up.", owner: "Owner: referring provider" },
  { title: "Safeguarding concern", text: "Local safeguarding procedure.", owner: "Owner: responsible provider" },
  { title: "Identity mismatch", text: "Never silently merged.", owner: "Owner: data custodian" },
  { title: "Partner withdrawal", text: "Exit plan and communications.", owner: "Owner: program owner" },
  { title: "Outage", text: "Rollback and manual alternatives.", owner: "Owner: technology operator" },
  { title: "Correction", text: "Fixed at the source of record.", owner: "Owner: data custodian" },
  { title: "Dispute", text: "Handled through the agreed process.", owner: "Owner: accountable party" },
  {
    title: "Emergencies",
    text: "Excluded — contact local emergency services.",
    owner: "Not handled by this program",
    excluded: true,
  },
];

export default function RiskExceptions() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_50%_50%,#A78BFA_55%,#2E1065_130%)] px-6 py-16 text-white lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow light>Risk &amp; exception handling</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl md:text-4xl`}>Every failure has a human owner.</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {risks.map((r) => (
            <div
              key={r.title}
              className={`rounded-xl border-l-4 border-[#7B5CF0] p-5 text-[#16245A] shadow-[0_10px_20px_rgba(22,36,90,0.12)] ${
                r.excluded ? "bg-[#FFF5F3]" : "bg-white"
              }`}
            >
              <h3 className={`${heading} text-base`}>{r.title}</h3>
              <p className="mb-3 text-sm leading-6 text-[#5B6B8C]">{r.text}</p>
              <p className="text-xs font-bold">{r.owner}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
