import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Head, inner, sectionPad, sectionY } from "./ui";

const roles = [
  {
    n: "01",
    title: "Payer / administrator",
    text: "Owns the rules, interprets them and issues the authorization determination — including appeal obligations.",
    d: ["Owns the rules, interprets them and issues the", "authorization determination — including appeal obligations."],
    cell: "border-b border-r border-solid border-[#e3e8f2] bg-[linear-gradient(142.97deg,#243b73_0%,#4267d5_100%)]",
    num: "text-white/30",
    heading: "text-white",
    body: "text-white",
  },
  {
    n: "02",
    title: "Treating professional",
    text: "Owns diagnosis, clinical judgment, treatment choice and patient care, including urgent needs.",
    d: ["Owns diagnosis, clinical judgment, treatment choice and", "patient care, including urgent needs."],
    cell: "border-b border-solid border-[#e3e8f2] bg-white",
    num: "text-[#e2dafc]",
    heading: "text-[#16245a]",
    body: "text-[#5b6678]",
  },
  {
    n: "03",
    title: "Provider office",
    text: "Prepares and sends submissions, and handles follow-up with the payer.",
    d: ["Prepares and sends submissions, and handles follow-up", "with the payer."],
    cell: "border-r border-solid border-[#e3e8f2] bg-white",
    num: "text-[#e2dafc]",
    heading: "text-[#16245a]",
    body: "text-[#5b6678]",
  },
  {
    n: "04",
    title: "Zoiko Access",
    text: "Designed for conditional, authorized coordination only — never determinations, urgent advice or ownership of clinical records.",
    d: [
      "Designed for conditional, authorized coordination only —",
      "never determinations, urgent advice or ownership of clinical",
      "records.",
    ],
    cell: "bg-[#eee9fd]",
    num: "text-[#e2dafc]",
    heading: "text-[#16245a]",
    body: "text-[#5b6678]",
  },
];

export default function DecisionRoles() {
  return (
    <section id="decision" className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-3`}>
        <Head
          eyebrow="Decision & responsibility"
          title="Who makes the decision?"
          lead="Four parties, four different responsibilities. Only one of them decides an authorization."
        />
        <div className="mb-[7.4px] grid w-full overflow-hidden rounded-[18px] border border-solid border-[#e3e8f2] pt-4 shadow-[0_10px_20px_rgba(0,0,0,0.1)] md:grid-cols-2 lg:grid-rows-[187.59px_210.59px]">
          {roles.map((role, index) => (
            <article key={role.n} className={`relative flex flex-col items-start gap-2 p-[30px] ${role.cell}`}>
              <p className={`${fontPoppins} text-[36px] font-semibold leading-[36px] ${role.num}`}>{role.n}</p>
              <h3 className={`${fontPoppins} text-[20px] font-semibold leading-[27px] ${role.heading}`}>{role.title}</h3>
              <p className={`text-[15px] leading-[24px] ${role.body}`}>
                <Copy text={role.text} d={role.d} />
              </p>
              {index === 0 && (
                <span className="absolute right-[26.22px] top-[26px] rounded-full bg-white px-[10px] py-[5px] text-[11px] font-bold uppercase leading-[17.6px] tracking-[1.1px] text-[#7657e8]">
                  Decides
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
