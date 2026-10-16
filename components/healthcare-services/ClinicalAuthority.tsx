import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

export default function ClinicalAuthority() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Clinical authority & safe information"
          title="Learning is not clinical advice."
        />

        <div className="mt-9 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,687fr)_minmax(0,480fr)] lg:gap-x-[113px]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-7 pb-9 pt-7">
              <h3 className="text-[20px] font-bold leading-7 tracking-[-0.03em] text-[#23327A]">
                Care decisions belong to qualified professionals.
              </h3>
              <p className="text-[14px] leading-6 text-[#5E6B85]">
                This page does not diagnose, prioritize urgency, prescribe,
                recommend treatment, or determine which specialty you need.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-7">
              <h3 className="text-[20px] font-bold leading-7 tracking-[-0.03em] text-[#23327A]">
                Privacy and permissions stay explicit.
              </h3>
              <p className="text-[14px] leading-6 text-[#5E6B85]">
                No symptoms, records, identity documents, personal health
                searches, or patient details are collected. Caregiver and
                guardian authority requires appropriate verification and local
                rules.
              </p>
              <p className="text-[14px] leading-6 text-[#5E6B85]">
                Independent professionals and organizations retain their
                records and responsibilities. This page grants no access to
                clinical systems.
              </p>
              <Link
                href="#"
                className="inline-flex min-h-12 items-center rounded-md border border-[#C9D3F2] bg-white px-5 text-[13px] font-semibold text-[#2F55C7] transition-colors hover:bg-[#F7F8FF]"
              >
                Trust &amp; responsibility →
              </Link>
            </div>
          </div>

          <div className="relative aspect-[480/435] w-full self-start overflow-hidden rounded-2xl border border-[#E5E7EB]">
            <Image
              src="/healthcare-services/clinical-authority.webp"
              alt="Nurse talking with an older patient at a consultation table"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
