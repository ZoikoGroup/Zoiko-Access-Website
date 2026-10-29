import { Fragment } from "react";
import { Head, fontPoppins, inner, sectionPad, sectionY } from "./shared";

const parties = [
  {
    title: "Payer systems",
    text: "Own benefits, adjudication and contractual determinations.",
    tag: "Source owner",
  },
  {
    title: "Zoiko Access coordination layer",
    text: "Authorization gate · permitted information only · acknowledgment",
    highlight: true,
  },
  {
    title: "Provider systems",
    text: "Own clinical records and care decisions.",
    tag: "Source owner",
  },
  {
    title: "Member experience",
    text: "Sees only what identity, role and permission allow.",
    tag: "Permission-bound",
    violetTag: true,
  },
];

export default function Overview() {
  return (
    <section id="overview" className={`w-full scroll-mt-24 bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col gap-11`}>
        <Head
          eyebrow="Integration overview"
          title={
            <>
              Four parties.
              <br />
              One governed coordination layer.
            </>
          }
          lead="A conceptual view. Each source owner stays authoritative; every exchange passes an authorization gate and returns an acknowledgment."
        />
        <div className="flex flex-col items-center gap-3 lg:flex-row lg:justify-center lg:gap-4">
          {parties.map((p, i) => (
            <Fragment key={p.title}>
              {i > 0 && (
                <span aria-hidden="true" className="rotate-90 text-[28px] font-bold leading-10 text-[#7657e8] lg:rotate-0">
                  ⇄
                </span>
              )}
              <div
                className={`flex w-full max-w-[340px] flex-col items-center gap-2 rounded-2xl p-6 text-center shadow-[0_10px_20px_rgba(36,59,115,0.1)] lg:w-[275px] ${
                  p.highlight
                    ? "bg-[linear-gradient(135deg,#243b73_0%,#4267d5_100%)] lg:py-8"
                    : "border border-solid border-[#e3e8f2] bg-white"
                }`}
              >
                <h3
                  className={`${fontPoppins} text-[18px] font-semibold leading-6 ${p.highlight ? "text-white" : "text-[#16245a]"}`}
                >
                  {p.title}
                </h3>
                <p className={`text-[14px] leading-6 ${p.highlight ? "text-white" : "text-[#5b6678]"}`}>{p.text}</p>
                {p.tag && (
                  <span
                    className={`mt-1 rounded-full px-2.5 py-1 text-[12px] font-semibold leading-5 ${
                      p.violetTag ? "bg-[#eee9fd] text-[#5a43c9]" : "bg-[#e7eefc] text-[#243b73]"
                    }`}
                  >
                    {p.tag}
                  </span>
                )}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
