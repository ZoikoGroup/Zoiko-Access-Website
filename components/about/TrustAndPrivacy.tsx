import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TrustAndPrivacy() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F2EFFF] via-[#EEEAFE] to-[#D9CCFF] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Card - Trust & Clinical Responsibility */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-[0_10px_30px_rgba(110,80,200,0.06)] sm:p-12">
            <div>
              <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7657E8]">
                <span
                  className="block h-2 w-2 rounded-full bg-[#7657E8]"
                  aria-hidden="true"
                />
                Trust &amp; clinical responsibility
              </p>

              <h2 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[38px]">
                Clear responsibilities. <br />
                Appropriate control.
              </h2>

              <p className="mt-6 text-[15px] leading-[1.8] text-[#4B5563] sm:text-[16px]">
                Healthcare technology must be useful without overstating what it
                knows or controls. In the Zoiko Access design, the responsible
                healthcare professional or authorized care organization remains
                accountable for diagnosis, treatment, interpretation of results,
                clinical decisions and the care they provide.
              </p>

              <p className="mt-4 text-[15px] leading-[1.8] text-[#4B5563] sm:text-[16px]">
                Zoiko Access is designed to support authorized technology and
                coordination services. Its role, and the role of each clinical
                or institutional partner, must be identified for each locally
                available service. An electronic message marked
                &quot;delivered&quot; does not prove that a clinician has
                reviewed it; a booking request does not prove an appointment is
                confirmed.
              </p>

              <p className="mt-4 text-[15px] leading-[1.8] text-[#4B5563] sm:text-[16px]">
                Zoiko Access is not an emergency response service. If you or
                someone else needs urgent medical attention, use the emergency
                services or urgent-care pathway appropriate to your
                location.
              </p>
            </div>
          </div>

          {/* Right Card - Privacy & Patient Agency */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-[0_10px_30px_rgba(110,80,200,0.06)] sm:p-12">
            <div>
              <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7657E8]">
                <span
                  className="block h-2 w-2 rounded-full bg-[#7657E8]"
                  aria-hidden="true"
                />
                Privacy &amp; patient agency
              </p>

              <h2 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[38px]">
                The right information. <br />
                In the right hands.
              </h2>

              <p className="mt-6 text-[15px] leading-[1.8] text-[#4B5563] sm:text-[16px]">
                Health information deserves particular care. The platform is
                architected around limited access, explicit user and
                professional roles, clear purposes, appropriately managed
                permissions and protected regional data environments. Sensitive
                information is not assumed to belong in a central worldwide data
                store.
              </p>

              <p className="mt-4 text-[15px] leading-[1.8] text-[#4B5563] sm:text-[16px]">
                Where information is exchanged, the aim is to share only what is
                authorized and necessary for the permitted task. Patient and
                caregiver rights, including identity verification and legal
                delegation, are handled according to applicable local rules. The
                precise privacy notices, legal basis and operating entities for
                each service must be communicated when it becomes
                available.
              </p>
            </div>

            <div className="mt-8 pt-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-[#C9D3F2] bg-white px-5 py-3 text-[14px] font-semibold text-[#2F55C7] transition-colors hover:bg-[#F7F8FF]"
              >
                Explore privacy &amp; trust principles
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
