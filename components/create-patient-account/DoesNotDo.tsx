import Image from "next/image";
import { X } from "lucide-react";
import SectionHeading from "./SectionHeading";

const items = [
  {
    title: "No automatic records",
    text: "Healthcare records are not connected just because an account exists.",
    image: { src: "/create-patient-account/not-records.webp", alt: "Illustration of an unplugged cable" },
  },
  {
    title: "No confirmed booking",
    text: "An appointment is confirmed only by the responsible provider.",
    image: { src: "/create-patient-account/not-booking.webp", alt: "Illustration of a pending appointment card" },
  },
  {
    title: "No automatic benefits",
    text: "Insurance eligibility and coverage are decided elsewhere.",
    image: { src: "/create-patient-account/not-benefits.webp", alt: "Illustration of a wallet with a minus sign" },
  },
  {
    title: "No caregiver privileges",
    text: "Acting for someone else needs separately verified authority.",
    image: { src: "/create-patient-account/not-caregiver.webp", alt: "Illustration of an ID card linked to a person" },
  },
];

export default function DoesNotDo() {
  return (
    <section className="w-full bg-[#F8F8FA] py-[84px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[94px]">
        <SectionHeading
          badge="What an account does not do"
          title={
            <>
              An account is not care, a record or a
              <br className="hidden sm:block" /> booking
            </>
          }
          description="Zoiko Access keeps these separate so nothing is implied that has not been confirmed by the responsible organization."
        />

        <div className="mt-10 grid grid-cols-1 gap-[23px] sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-[#DCD6F5] bg-white"
            >
              <div className="relative aspect-[296/151] w-full">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 296px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="px-[22px] pb-9 pt-9">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FBE2E2] text-[#C53B3B]">
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <h3 className="max-w-[150px] text-[18px] font-bold leading-6 text-[#0E1E6E]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-[210px] text-[15px] leading-6 text-[#2C3352]">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
