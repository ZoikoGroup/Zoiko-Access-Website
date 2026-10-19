import Image from "next/image";
import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";

const points = [
  "A request tells an organization you’d like a visit. It does not book one.",
  "If your visit is time-sensitive, contact the organization using its verified details.",
  "Appointments are shown in the facility’s local time first.",
  "Support appears here only when it is actually staffed.",
];

export default function ContactProvider() {
  return (
    <section className="w-full bg-white py-[90px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,628fr)_minmax(0,604fr)] lg:gap-x-[57px] lg:px-20">
        <div>
          <SectionHeading
            badge="How requests work"
            title={
              <>
                Know when to contact the
                <br className="hidden sm:block" /> provider
              </>
            }
          />
          <ul className="mt-5 flex flex-col gap-3.5">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3.5 rounded-2xl border border-[#DCD6F5] bg-white px-[18px] py-4"
              >
                <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="max-w-[450px] text-[15px] leading-6 text-[#2C3352]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[604/415] w-full overflow-hidden rounded-[20px] border border-[#DCD6F5]">
          <Image
            src="/appointments-requests/contact-provider.webp"
            alt="Person typing on a laptop next to a stethoscope"
            fill
            sizes="(min-width: 1024px) 604px, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
