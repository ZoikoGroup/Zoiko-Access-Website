import Link from "next/link";
import SectionHeading from "./SectionHeading";

const needs = [
  {
    title: "Keyboard & screen-reader access",
    description:
      "Visible labels, semantic headings, native controls, and a readable linear journey support accessible exploration.",
  },
  {
    title: "Language & connectivity",
    description:
      "Reviewed language versions and low-bandwidth text-first experiences need their own publication and quality checks. Only English is supplied here.",
  },
  {
    title: "Assisted support",
    description:
      "Human assistance, hours, and contact options are shown only when genuinely staffed and verified. This preview offers guidance, not a live helpdesk.",
  },
];

export default function AccessibilityHelp() {
  return (
    <section id="accessibility" className="w-full scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Accessibility & help"
          title="Clear information for different needs."
        />

        <div className="mt-9 grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          {needs.map((need) => (
            <div
              key={need.title}
              className="rounded-xl border border-[#E5E7EB] bg-white px-7 pb-11 pt-7"
            >
              <h3 className="text-[22px] font-bold leading-7 tracking-[-0.02em] text-[#23327A] [font-family:var(--font-poppins)] sm:text-[24px]">
                {need.title}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-[#5E6B85]">
                {need.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href="/talk-to-support"
            className="inline-flex min-h-12 items-center rounded-md bg-[#BDB0FA] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#A78BFA]"
          >
            Read support guidance →
          </Link>
          <Link
            href="/about-us"
            className="inline-flex min-h-12 items-center rounded-md border border-[#C9D3F2] bg-white px-5 text-[13px] font-semibold text-[#BDB0FA] transition-colors hover:text-[#6A44D4]"
          >
            Inclusive-access principles
          </Link>
        </div>
      </div>
    </section>
  );
}
