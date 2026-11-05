import Link from "next/link";
import { Eyebrow, heading } from "./shared";

export default function PartnerPathway() {
  return (
    <section className="bg-[#F5F8FC] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Partner pathway</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}>
          Start with what is published.
        </h2>
        <p className="mb-10 max-w-[640px] text-base leading-7 text-[#5B6B8C]">
          Partner intake opens only when a staffed team, routing, legal notice, consent and confirmation are all in
          place.
        </p>

        <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-[#243B73] md:grid-cols-2">
          <div className="bg-[#243B73] p-8 md:p-10">
            <span className="inline-block rounded-sm bg-white/15 px-2 py-1 text-xs uppercase tracking-wide text-[#C9D3F5]">
              Available now
            </span>
            <h3 className={`${heading} mt-3 text-2xl text-white`}>Read the technology partner guidance</h3>
            <p className="mt-2 text-base leading-7 text-[#C9D3F5]">
              See how partnerships are assessed and what evidence would be needed.
            </p>
            <Link
              href="/technology-partners"
              className="mt-6 inline-block rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-[#16245A] transition-colors hover:bg-[#EEEAFE]"
            >
              Technology partners →
            </Link>
          </div>

          {/* Striped panel marks a route that isn't open yet. */}
          <div className="bg-[repeating-linear-gradient(135deg,#fff_0_16px,#EEF2F8_16px_32px)] p-8 md:p-10">
            <span className="inline-block rounded-sm bg-[#E8ECF4] px-2 py-1 text-xs uppercase tracking-wide text-[#5B6B8C]">
              Not available yet
            </span>
            <h3 className={`${heading} mt-3 text-2xl text-[#5B6B8C]`}>Become a partner</h3>
            <p className="mt-2 text-sm leading-6 text-[#5B6B8C]">
              No form is shown and no contact details are collected until an approved intake process exists.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
