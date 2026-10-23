import Image from "next/image";
import SectionHeading from "./SectionHeading";

const points = [
  "The person you’re viewing for is shown at the top of every inbox.",
  "Switching people reloads the inbox; nothing from the previous person stays on screen.",
  "When permission expires or is revoked, access ends straight away, including notifications.",
];

export default function Caregivers() {
  return (
    <section className="w-full bg-gradient-to-r from-[#F3F1FE] via-[#E6E0FE] to-[#D3C8FD] py-[88px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,560fr)_minmax(0,560fr)] lg:gap-x-[56px] lg:px-[132px]">
        <div>
          <SectionHeading
            badge="Caregivers & representation"
            title={
              <>
                Managing messages
                <br className="hidden sm:block" /> for someone else.
              </>
            }
            description="A parent, guardian or caregiver can view messages only when a verified, current permission covers that person and that organization. Being family alone doesn’t grant access."
            className="[&>p:last-child]:max-w-[560px]"
          />
          <ul className="mt-5 list-disc space-y-2.5 pl-5 text-[14px] leading-[22px] text-[#5B6180]">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[560/448] w-full overflow-hidden rounded-xl">
          <Image
            src="/patients-messages/caregivers.webp"
            alt="Young woman showing an older relative something on a phone"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
