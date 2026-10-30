import Link from "next/link";
import SectionHeading from "./SectionHeading";

export default function InformationPrivacy() {
  return (
    <section className="w-full bg-[#F5F8FC] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-x-10">
          <div>
            <SectionHeading
              badge="Information & privacy"
              title={
                <>
                  Your information and
                  <br />
                  permissions matter.
                </>
              }
            />
            <div className="mt-10 max-w-[580px] space-y-3 text-[16px] leading-7 text-[#5E6B85]">
              <p>
                Referral details may include sensitive health information. Only
                authorized people and organizations should use information
                relevant to an approved purpose.
              </p>
              <p>
                Caregiver access and cross-organization sharing depend on role,
                identity, lawful permission, and local requirements. Source
                stewardship and the minimum necessary information matter.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white px-8 pb-14 pt-8">
            <h3 className="text-[20px] font-bold leading-7 tracking-[-0.02em] text-[#23327A] [font-family:var(--font-poppins)]">
              This page does not collect referral details.
            </h3>
            <p className="mt-4 text-[16px] leading-7 text-[#5E6B85]">
              No medical record upload, referral ID, symptom input, diagnosis,
              patient lookup, or free-text case information is requested.
            </p>
            <p className="mt-4 text-[16px] leading-7 text-[#5E6B85]">
              Use only an official, authorized process supplied by the
              responsible care organization for sensitive information.
            </p>
            <Link
              href="/privacy-permissions"
              className="mt-6 inline-flex min-h-12 items-center rounded-md bg-[#4267D5] px-5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Privacy &amp; responsibility principles →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
