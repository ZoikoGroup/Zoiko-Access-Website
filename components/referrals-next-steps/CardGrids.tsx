import Image from "next/image";
import type { LucideIcon } from "lucide-react";

const cardBase =
  "rounded-2xl border border-[#E4E0F7] bg-white shadow-[0_10px_30px_rgba(60,40,140,0.08)]";

export type IconCard = { icon: LucideIcon; title: string; text: string };

/** Cards with a small square icon badge above the title. */
export function IconCardGrid({
  items,
  columns = "md:grid-cols-3",
}: {
  items: IconCard[];
  columns?: string;
}) {
  return (
    <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${columns}`}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className={`${cardBase} px-6 pb-9 pt-6`}>
            <span className="flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-[#EEEAFE] text-[#5B3FD1]">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-[17px] font-semibold text-[#1D1A5A] [font-family:var(--font-poppins)]">
              {item.title}
            </h3>
            <p className="mt-2 max-w-[330px] text-[15px] leading-6 text-[#5B5880]">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export type PhotoItem = { title: string; text: string; image: { src: string; alt: string } };

/** Four-up cards with a photo on top. */
export function PhotoCardGrid({ items }: { items: PhotoItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <article key={item.title} className={`${cardBase} overflow-hidden`}>
          <div className="relative aspect-[307/160] w-full">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(min-width: 1024px) 307px, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="px-[22px] pb-8 pt-6">
            <h3 className="text-[17px] font-semibold leading-[22px] text-[#1D1A5A] [font-family:var(--font-poppins)]">
              {item.title}
            </h3>
            <p className="mt-3 max-w-[260px] text-[15px] leading-[25px] text-[#5B5880]">{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

/** Shared photo set, so the same file is described consistently everywhere. */
export const PHOTOS = {
  surgeons: { src: "/referrals-next-steps/surgeons.webp", alt: "Two surgeons at work" },
  ward: { src: "/referrals-next-steps/hospital-ward.webp", alt: "Empty hospital ward with beds" },
  scanReview: { src: "/referrals-next-steps/scan-review.webp", alt: "Clinician explaining scan results to a colleague" },
  building: { src: "/referrals-next-steps/hospital-building.webp", alt: "Hospital building exterior" },
  operatingRoom: { src: "/referrals-next-steps/operating-room.webp", alt: "Empty operating room" },
  surgeonCloseUp: { src: "/referrals-next-steps/surgeon-close-up.webp", alt: "Surgeon in a mask and cap" },
  clinicianPhone: { src: "/referrals-next-steps/clinician-phone.webp", alt: "Clinician holding a phone" },
  surgeonsOverhead: { src: "/referrals-next-steps/surgeons-overhead.webp", alt: "Surgical team seen from below an operating light" },
  doctorPatient: { src: "/referrals-next-steps/doctor-patient.webp", alt: "Doctor talking with a patient" },
  kitchen: { src: "/referrals-next-steps/home-kitchen.webp", alt: "Older woman preparing food at home" },
  phoneLaptop: { src: "/referrals-next-steps/phone-laptop.webp", alt: "Person using a phone in front of a laptop" },
  stethoscope: { src: "/referrals-next-steps/stethoscope.webp", alt: "Stethoscope on a white surface" },
} as const;
