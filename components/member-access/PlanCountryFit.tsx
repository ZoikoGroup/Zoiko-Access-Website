import Image from "next/image";

export default function PlanCountryFit() {
  return (
    <section className="w-full bg-[#243B73] py-5 border-y border-white/10">
      <div className="mx-auto flex w-full max-w-[1360px] items-center gap-4 px-6 sm:px-10 lg:px-12">
        {/* Target Location Icon */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
          <Image
            src="/member-access/target-location-icon.svg"
            alt=""
            width={20}
            height={20}
            className="brightness-0 invert opacity-95"
            aria-hidden="true"
          />
        </div>

        {/* Notice text */}
        <p className="text-[14px] sm:text-[15.5px] leading-[24px] sm:leading-[25px] text-white/90">
          <span>Coverage, eligibility and access rules depend on the plan and location. </span>
          <strong className="font-bold text-white">
            Selecting a care region does not confirm membership, coverage or identity.
          </strong>
        </p>
      </div>
    </section>
  );
}
