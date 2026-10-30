import Link from "next/link";
import { Check, X } from "lucide-react";
import Eyebrow, { headingFont } from "@/components/community-home-care/Eyebrow";

const youCan = [
  "Choose which program options to use",
  "See your own authorized choices",
  "Revoke permissions you've given, where applicable",
  "Ask for help through approved support routes",
];

const employerCannot = [
  "Read your clinical record through the program",
  "See your diagnoses or clinical notes",
  "Override your provider's confidentiality duties",
  "Treat employment permission as medical consent",
];

export default function EmployeePermissions() {
  return (
    <section
      id="employee-permissions"
      className="w-full scroll-mt-24 bg-[#F5F8FC] py-16 font-sans sm:py-[70px]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[72px]">
        <div className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-gradient-to-br from-[#1B2A63] via-[#26367A] to-[#4A38B0] p-8 text-white sm:p-12 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <Eyebrow>Employee choice &amp; permissions</Eyebrow>
            <h2
              className={`mt-3 text-3xl font-semibold leading-tight sm:text-[44px] sm:leading-[48px] ${headingFont}`}
            >
              Who can access my health information?
            </h2>
            <p className="mt-4 max-w-[440px] text-lg leading-[29px] text-white/90">
              Your healthcare providers, under their own confidentiality duties
              — and others only where you permit it or the law specifically
              requires it. Your employer does not get general access because it
              sponsors a program.
            </p>
            <Link
              href="/privacy-permissions"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-[#16245A] transition-colors hover:bg-[#EDE8FF]"
            >
              Review permission controls →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
              <h3 className={`text-base font-semibold ${headingFont}`}>
                You can
              </h3>
              <ul className="mt-2 space-y-2.5">
                {youCan.map((item) => (
                  <li key={item} className="flex gap-1.5 text-sm leading-[23px] text-white/90">
                    <Check className="mt-1 h-3.5 w-3.5 shrink-0 stroke-[3] text-[#6EE7A8]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
              <h3 className={`text-base font-semibold ${headingFont}`}>
                Your employer cannot
              </h3>
              <ul className="mt-2 space-y-2.5">
                {employerCannot.map((item) => (
                  <li key={item} className="flex gap-1.5 text-sm leading-[23px] text-white/90">
                    <X className="mt-1 h-3.5 w-3.5 shrink-0 text-[#FCA5A5]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
