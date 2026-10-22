import { SectionEyebrow } from "./ui/SectionEyebrow";

export function BoundarySection() {
  return (
    <section
      id="boundary"
      className="bg-[linear-gradient(140.67deg,#02125f_0%,#2f42cb_55%,#4267d5_100%)] px-5 py-12 sm:px-10 lg:px-[70px] lg:py-[70px]"
    >
      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-[13px]">
        <SectionEyebrow tone="dark">
          ROLE PERMISSIONS AND THE CLINICAL BOUNDARY
        </SectionEyebrow>

        <h2 className="font-['Poppins',sans-serif] text-[32px] font-semibold leading-[40px] tracking-[-0.84px] text-white sm:text-[40px] sm:leading-[48.3px]">
          Least privilege, by default
        </h2>

        <p className="max-w-[720px] font-['Inter',sans-serif] text-[18px] leading-[29.7px] text-[#e6e9ff]">
          Clinician access follows independent eligibility, organizational
          approval and role assignment. Access is denied by default. There are
          no patient record previews or live worklists on this public page.
          Professionals keep their clinical judgment and responsibility.
        </p>
      </div>
    </section>
  );
}
