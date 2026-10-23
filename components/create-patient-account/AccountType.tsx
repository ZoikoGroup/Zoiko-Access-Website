import Link from "next/link";
import { Heart, UserRound, Users } from "lucide-react";
import PhotoCard, { Tag } from "./PhotoCard";
import SectionHeading from "./SectionHeading";

export default function AccountType() {
  return (
    <section className="w-full bg-gradient-to-r from-[#E9E4FE] via-[#D6CBFD] to-[#B8A6FA] py-[84px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Account type"
          title="Choose who the account is for"
          description="Adults enroll for themselves. Guardians and representatives follow a separate, policy-governed path."
        />

        <div className="mt-10 grid grid-cols-1 gap-[18px] md:grid-cols-3">
          <PhotoCard
            image={{ src: "/create-patient-account/type-myself.webp", alt: "Person filling in a paper form at a desk" }}
            icon={UserRound}
            title="I am enrolling for myself"
            aspect="aspect-[413/178]"
            sizes="(min-width: 768px) 420px, 100vw"
          >
            <p className="mt-2 max-w-[320px] text-[15px] leading-6 text-[#2C3352]">
              The adult self-enrollment path, available only in locations with
              approved enrollment.
            </p>
            <div className="min-h-6 flex-1" aria-hidden="true" />
            <Tag>Policy-gated</Tag>
          </PhotoCard>

          <PhotoCard
            image={{ src: "/create-patient-account/type-helping.webp", alt: "Two hands reaching towards each other" }}
            icon={Users}
            title="I am helping someone else"
            aspect="aspect-[419/178]"
            sizes="(min-width: 768px) 420px, 100vw"
          >
            <p className="mt-2 max-w-[320px] text-[15px] leading-6 text-[#2C3352]">
              Representation is never self-asserted. Read how delegated access
              works before you act.
            </p>
            <div className="min-h-4 flex-1" aria-hidden="true" />
            <Link
              href="/for-caregivers"
              className="text-[14px] font-semibold text-[#7C3AED] hover:underline"
            >
              Learn about caregivers and families
            </Link>
          </PhotoCard>

          <PhotoCard
            image={{ src: "/create-patient-account/type-under-18.webp", alt: "Group of people holding hands on a beach at sunset" }}
            icon={Heart}
            title="The patient is under 18"
            aspect="aspect-[420/178]"
            sizes="(min-width: 768px) 420px, 100vw"
          >
            <p className="mt-2 max-w-[320px] text-[15px] leading-6 text-[#2C3352]">
              Age-specific safeguarding applies. Minors cannot use unrestricted
              self-enrollment.
            </p>
            <div className="min-h-4 flex-1" aria-hidden="true" />
            <Link
              href="/for-caregivers"
              className="text-[14px] font-semibold text-[#7C3AED] hover:underline"
            >
              Read safeguarding guidance
            </Link>
          </PhotoCard>
        </div>
      </div>
    </section>
  );
}
