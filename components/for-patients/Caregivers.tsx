import Image from "next/image";
import SectionHeading from "./SectionHeading";

const points = [
  "Age and legal-majority rules can affect authority.",
  "Guardianship or a court order may need verification.",
  "Permissions must match the particular person, role, and task.",
  "Revocation or a change in scope must stop unsupported access.",
];

export default function Caregivers() {
  return (
    <section id="caregivers" className="w-full scroll-mt-24 bg-white py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,548fr)_minmax(0,680fr)] lg:gap-x-[52px] lg:px-20">
        <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-3">
          <div className="relative aspect-[523/441] w-full overflow-hidden rounded-xl">
            <Image
              src="/for-patients/caregivers.webp"
              alt="Patient and family member talking with a nurse at a reception desk"
              fill
              sizes="(min-width: 1024px) 523px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            badge="Caregivers & representation"
            title={
              <>
                Support someone.
                <br />
                Respect their permissions.
              </>
            }
          />
          <p className="mt-10 text-[16px] leading-7 text-[#5E6B85]">
            A parent, guardian, or caregiver may help another person only
            within legally and technically proven authority. Family
            relationship alone does not grant access to records or personal
            tasks.
          </p>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-[14px] leading-6 text-[#5E6B85] marker:text-[#5E6B85]">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="mt-4 text-[16px] leading-7 text-[#5E6B85]">
            No patient details, identity evidence, or delegation documents are
            collected here.
          </p>
        </div>
      </div>
    </section>
  );
}
