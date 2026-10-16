import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function ClinicalAuthority() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Clinical authority & safe information"
          title="Learning is not clinical advice."
        />

        <div className="mt-9 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,623fr)_minmax(0,597fr)] lg:gap-x-[60px]">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white px-7 pb-12 pt-8">
              <h3 className="text-[22px] font-bold leading-[1.3] tracking-[-0.03em] text-[#23327A]">
                Care decisions belong to qualified professionals.
              </h3>
              <p className="mt-4 text-[14px] leading-[1.8] text-[#4B5563]">
                This page does not diagnose, prioritize urgency, prescribe,
                recommend treatment, or determine which specialty you need.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white px-7 py-8">
              <h3 className="text-[22px] font-bold leading-[1.3] tracking-[-0.03em] text-[#23327A]">
                Privacy and permissions stay explicit.
              </h3>
              <p className="mt-4 text-[14px] leading-[1.8] text-[#4B5563]">
                No symptoms, records, identity documents, personal health
                searches, or patient details are collected. Caregiver and
                guardian authority requires appropriate verification and local
                rules.
              </p>
              <p className="mt-3 text-[14px] leading-[1.8] text-[#4B5563]">
                Independent professionals and organizations retain their
                records and responsibilities. This page grants no access to
                clinical systems.
              </p>
              <Link
                href="#"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[#C9D3F2] bg-white px-5 py-3.5 text-[14px] font-semibold text-[#2F55C7] transition-colors hover:bg-[#F7F8FF]"
              >
                Trust &amp; responsibility
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[597/498] w-full self-start overflow-hidden rounded-2xl">
            <Image
              src="/care-pathways/clinical-authority.webp"
              alt="Nurse reviewing a patient privacy and care guide with a patient"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
