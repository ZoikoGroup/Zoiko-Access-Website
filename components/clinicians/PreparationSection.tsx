import Image from "next/image";
import { SectionEyebrow } from "./ui/SectionEyebrow";

const checklistItems = [
  "Issuing authority or regulator for your qualification",
  "Organization details, if you apply through one",
  "Your role and area of practice",
  "A contact method",
  "Any accessibility need",
] as const;

export function PreparationSection() {
  return (
    <section
      id="prepare"
      className="bg-[linear-gradient(140.67deg,#02125f_0%,#2f42cb_55%,#4267d5_100%)] px-5 py-12 sm:px-10 lg:px-[70px] lg:py-[70px]"
    >
      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex w-full flex-col gap-[26px] lg:w-[654px]">
          <SectionEyebrow tone="dark">PREPARATION CHECKLIST</SectionEyebrow>

          <h2 className="font-['Poppins',sans-serif] text-[32px] font-semibold leading-[40px] tracking-[-0.84px] text-white sm:text-[40px] sm:leading-[48.3px]">
            Get ready, without sharing anything here
          </h2>

          <p className="pt-[0.8px] font-['Inter',sans-serif] text-[16px] leading-[26.4px] text-[#e6e9ff]">
            These are non-sensitive items to have in mind. The ticks stay on
            this page and are not stored.
          </p>

          <ul className="flex flex-col gap-[10px] py-[8.8px]">
            {checklistItems.map((item) => (
              <li key={item}>
                <label className="flex min-h-[52px] cursor-pointer items-center gap-3 rounded-[14px] border border-solid border-white/30 bg-white/[0.08] px-4 py-[11.5px]">
                  <input
                    type="checkbox"
                    className="h-[22px] w-[22px] shrink-0 cursor-pointer rounded-[2.5px] accent-[#3d61cd]"
                  />
                  <span className="font-['Inter',sans-serif] text-[16px] leading-[26.4px] text-white">
                    {item}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[360px] w-full shrink-0 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#e8e2ff] to-[#d5dcff] lg:h-[553px] lg:w-[492px]">
          <Image
            src="/prof/8.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 492px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
