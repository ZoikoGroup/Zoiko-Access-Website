import { Fragment } from "react";
import { Chip, Eyebrow, Title, fontPoppins, inner, sectionPad, sectionY } from "./shared";

const nodes = [
  { title: "Participant systems", text: "Payer, provider or member-facing systems." },
  { title: "Authorized gateway & policy", text: "Identity, authorization, minimum necessary.", highlight: true },
  { title: "Validated events & audit", text: "Provenance and failure recovery." },
  { title: "Designated recipient", text: "Only the approved destination.", tag: "Scoped" },
];

const controls = ["Identity", "Authorization", "Encryption", "Minimum necessary", "Provenance", "Failure recovery"];

export default function Architecture() {
  return (
    <section id="architecture" className={`w-full scroll-mt-24 bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-center gap-10 text-center`}>
        <div className="flex flex-col items-center gap-3.5">
          <Eyebrow>Technical architecture</Eyebrow>
          <Title>A conceptual, read-only view of the exchange.</Title>
        </div>
        <div className="flex w-full flex-col items-center gap-3 lg:flex-row lg:justify-center lg:gap-5">
          {nodes.map((n, i) => (
            <Fragment key={n.title}>
              {i > 0 && (
                <span aria-hidden="true" className="rotate-90 text-[28px] font-bold leading-10 text-[#7657e8] lg:rotate-0">
                  →
                </span>
              )}
              <div
                className={`flex w-full max-w-[340px] flex-col items-center gap-2 rounded-2xl p-6 shadow-[0_10px_20px_rgba(36,59,115,0.1)] lg:w-[275px] ${
                  n.highlight ? "bg-[linear-gradient(135deg,#243b73_0%,#4267d5_100%)]" : "border border-solid border-[#e3e8f2] bg-white"
                }`}
              >
                <h3 className={`${fontPoppins} text-[18px] font-semibold leading-6 ${n.highlight ? "text-white" : "text-[#16245a]"}`}>
                  {n.title}
                </h3>
                <p className={`text-[14px] leading-6 ${n.highlight ? "text-white" : "text-[#5b6678]"}`}>{n.text}</p>
                {n.tag && (
                  <span className="mt-1 rounded-full bg-[#e7eefc] px-2.5 py-1 text-[12px] font-semibold leading-5 text-[#243b73]">
                    {n.tag}
                  </span>
                )}
              </div>
            </Fragment>
          ))}
        </div>
        <ul className="flex flex-wrap justify-center gap-2" aria-label="Controls applied to every exchange">
          {controls.map((c) => (
            <Chip key={c}>{c}</Chip>
          ))}
        </ul>
      </div>
    </section>
  );
}
