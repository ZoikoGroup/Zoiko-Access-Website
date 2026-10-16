import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function ClinicalSafety() {
  return (
    <section className="w-full bg-[#F5F8FC] py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,506fr)_minmax(0,601fr)] lg:gap-x-[173px] lg:px-20">
        <div>
          <SectionHeading
            badge="Clinical safety & editorial provenance"
            title={
              <>
                Useful education.
                <br />
                Clear professional boundaries.
              </>
            }
          />

          <div className="mt-9 space-y-3 rounded-xl border border-[#E5E7EB] bg-[#F3F6FA] px-6 pb-7 pt-6 text-[13px] leading-5 text-[#5E6B85]">
            <h3 className="pb-1 text-[16px] font-bold leading-6 text-[#1F2937]">
              Content source and review status
            </h3>
            <p>
              Design source: supplied Zoiko Access Healthcare Professionals
              wireframe. Proposed review owners: Content/SEO, Clinical Safety,
              local Legal/Privacy, and Product.
            </p>
            <p>
              A verified editorial owner, clinical approval, and last-reviewed
              date have not been supplied. No reviewed date, credential
              standard, or publication approval is invented. This remains a
              local design preview.
            </p>
            <p>
              Material terminology changes require recorded review, approval,
              versioning, and correction before public release. No staffed
              correction intake is claimed here.
            </p>
          </div>
        </div>

        <div className="relative aspect-[601/397] w-full overflow-hidden rounded-xl">
          <Image
            src="/healthcare-professionals/clinical-safety.webp"
            alt="Nurse explaining information to an older patient at a desk"
            fill
            sizes="(min-width: 1024px) 601px, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
