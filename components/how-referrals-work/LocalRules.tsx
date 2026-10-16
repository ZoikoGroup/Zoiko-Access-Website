import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function LocalRules() {
  return (
    <section className="w-full bg-gradient-to-r from-[#F4F2FD] via-[#EEEAFE] to-[#DACFFE] py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,720fr)_minmax(0,515fr)] lg:gap-x-[45px] lg:px-20">
        <div>
          <SectionHeading
            badge="Local rules & service scope"
            title={
              <>
                Referral rules depend on
                <br />
                location and service.
              </>
            }
          />
          <div className="mt-10 max-w-[660px] space-y-3 text-[16px] leading-7 text-[#5E6B85]">
            <p>
              Requirements vary across health systems, provider participation,
              specialties, payer arrangements, and regional rules.
            </p>
            <p>
              Choosing a care location supplies informational context. It does
              not confer eligibility, a referral right, coverage,
              personal-record access, or permission for cross-border data
              transfer.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl rounded-tl-[60px] bg-white p-1">
          <div className="relative aspect-[516/330] w-full">
            <Image
              src="/how-referrals-work/referral-journey.webp"
              alt="Illustration of information moving between independent organizations along a care-related pathway"
              fill
              sizes="(min-width: 1024px) 515px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
