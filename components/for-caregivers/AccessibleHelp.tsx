import { Globe, Headphones, Keyboard } from "lucide-react";
import SectionHeading from "./SectionHeading";

const needs = [
  {
    icon: Keyboard,
    title: "Keyboard and screen-reader access",
    description:
      "Visible labels, semantic headings and a readable journey. Nothing on this page depends on a mouse, an image or a script.",
  },
  {
    icon: Globe,
    title: "Language and connectivity",
    description:
      "Reviewed language versions and low-bandwidth text-first pages where published. Only approved translations are shown.",
  },
  {
    icon: Headphones,
    title: "Assisted support",
    description:
      "Human assistance, hours and contact options appear only when a staffed route exists. Never a callback or chat that nobody answers.",
  },
];

export default function AccessibleHelp() {
  return (
    <section
      id="accessibility"
      className="w-full scroll-mt-24 bg-gradient-to-b from-[#F6F4FF] to-[#DCD2FD] py-[100px]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[130px]">
        <SectionHeading
          badge="Accessibility and assisted help"
          title={
            <>
              Clear information for
              <br className="hidden sm:block" /> different needs
            </>
          }
        />

        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
          {needs.map((need) => {
            const Icon = need.icon;
            return (
              <div
                key={need.title}
                className="rounded-2xl border border-[#E4E0F7] bg-white px-6 pb-7 pt-6 shadow-[0_12px_32px_rgba(36,28,89,0.08)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEEAFE] text-[#5B45D6]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-[17px] font-semibold leading-[21px] text-[#1D1857] [font-family:var(--font-poppins)]">
                  {need.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[25px] text-[#5B5880]">
                  {need.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
