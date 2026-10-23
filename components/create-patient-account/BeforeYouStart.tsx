import Image from "next/image";
import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";

const checklist = [
  "You are an adult acting for yourself, or you have verified authority under local policy.",
  "Your care location is one where enrollment has been approved.",
  "You can access the email address or mobile number you plan to use.",
  "You can use an approved verification method, or you know where to find accessible assistance.",
  "You have read the privacy notice for your location.",
];

export default function BeforeYouStart() {
  return (
    <section className="w-full bg-gradient-to-r from-[#EEEAFE] via-[#E6E0FE] to-[#DCD2FD] py-[84px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-end gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,627fr)_minmax(0,615fr)] lg:gap-x-[58px] lg:px-[70px]">
        <div>
          <SectionHeading badge="Before you start" title="What to have ready" />
          <ul className="mt-4 flex flex-col gap-3.5">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex min-h-14 items-center gap-3.5 rounded-xl border border-[#DCD6F5] bg-white px-[18px] py-3.5"
              >
                <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="max-w-[460px] text-[15px] leading-6 text-[#2C3352]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[615/416] w-full overflow-hidden rounded-[20px] border border-[#E1D8FB] bg-[#EEE9FE]">
          <Image
            src="/create-patient-account/secure-setup.webp"
            alt="Illustration of an ID card, a checklist, a phone message and a shield, linked together"
            fill
            sizes="(min-width: 1024px) 615px, 100vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
