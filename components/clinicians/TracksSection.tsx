import Image from "next/image";
import { SectionHeader } from "./ui/SectionHeader";

interface Track {
  title: string;
  description: string;
  points: readonly string[];
  image: string;
}

const tracks: readonly Track[] = [
  {
    title: "Individual professional",
    description: "You are reviewed on your own credentials and standing.",
    points: [
      "You hold your own professional responsibility.",
      "An organization affiliation may still be needed.",
    ],
    image: "/prof/9.png",
  },
  {
    title: "Organization representative",
    description:
      "An authorized representative manages the organization’s affiliation.",
    points: [
      "Organization participation does not auto-enroll clinicians.",
      "Each clinician is still reviewed individually.",
    ],
    image: "/prof/10.png",
  },
] as const;

export function TracksSection() {
  return (
    <section className="bg-white px-5 py-12 sm:px-10 lg:px-[70px] lg:py-[83px]">
      <div className="mx-auto w-full max-w-[1300px]">
        <SectionHeader
          eyebrow="INDIVIDUAL OR ORGANIZATION"
          title="Two separate tracks"
        />

        <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-2">
          {tracks.map((track) => (
            <article
              key={track.title}
              className="overflow-hidden rounded-[24px] border border-solid border-[#d9d3f5] bg-white"
            >
              <div className="relative h-[240px] w-full sm:h-[317px]">
                <Image
                  src={track.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 634px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 p-[26px]">
                <h3 className="font-['Poppins',sans-serif] text-[22px] font-semibold leading-[28px] tracking-[-0.44px] text-[#031974]">
                  {track.title}
                </h3>
                <p className="font-['Inter',sans-serif] text-[16px] leading-[27px] text-[#273444]">
                  {track.description}
                </p>
                <ul className="list-disc pl-[18px] pt-[2px] font-['Inter',sans-serif] text-[16px] leading-[27.19px] text-[#273444]">
                  {track.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
