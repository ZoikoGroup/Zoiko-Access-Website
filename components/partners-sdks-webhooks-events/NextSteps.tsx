import Link from "next/link";
import { SectionHeader, container, heading, section } from "./shared";

export default function NextSteps() {
  return (
    <section className={`bg-[#F5F8FC] ${section}`}>
      <div className={container}>
        <SectionHeader eyebrow="Next steps" title="Pick what fits, if it is open." />

        <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          <li className="rounded-2xl border border-[#E4E7F2] bg-white px-7 py-7">
            <span className="inline-block rounded-full bg-[#EEF1F6] px-2.5 py-1 text-xs text-[#5B6B8C]">
              not yet published
            </span>
            <h3 className={`${heading} mt-3 text-xl text-[#5B6B8C]`}>Read the docs</h3>
            <p className="mt-1 text-sm leading-6 text-[#5B6B8C]">
              Developer documentation will be linked here once it is published and reviewed.
            </p>
          </li>

          <li className="rounded-2xl bg-gradient-to-br from-[#7B5CF0] to-[#4A68D8] px-7 py-7">
            <span className="inline-block rounded-full bg-white/20 px-2.5 py-1 text-xs text-white">open</span>
            <h3 className={`${heading} mt-3 text-xl text-white`}>Evaluate an integration</h3>
            <p className="mt-1 text-sm leading-6 text-[#E3E6FB]">
              Start with the principles behind connecting healthcare systems.
            </p>
            <Link
              href="/api-interoperability"
              className="group mt-5 inline-flex items-center gap-1 text-base font-semibold text-white"
            >
              API &amp; interoperability
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
          </li>

          <li className="rounded-2xl border border-[#E4E7F2] bg-white px-7 py-7">
            <span className="inline-block rounded-full bg-[#EEF1F6] px-2.5 py-1 text-xs text-[#5B6B8C]">
              not open yet
            </span>
            <h3 className={`${heading} mt-3 text-xl text-[#5B6B8C]`}>Ask to partner</h3>
            <p className="mt-1 text-sm leading-6 text-[#5B6B8C]">
              Partner requests open only once intake is staffed and approved. No details are collected here.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
