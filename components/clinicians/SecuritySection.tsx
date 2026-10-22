import Image from "next/image";
import { SectionHeader } from "./ui/SectionHeader";

interface SecurityCard {
  title: string;
  description: string;
  image: string;
}

const cards: readonly SecurityCard[] = [
  {
    title: "Secure channel",
    description:
      "Sensitive details are handled only in an approved, authenticated portal, never in a URL.",
    image: "/prof/12.png",
  },
  {
    title: "Privacy notices",
    description:
      "Public privacy notices are linked once published. No certifications are claimed without evidence.",
    image: "/prof/13.png",
  },
  {
    title: "Accommodations",
    description:
      "Accessible assistance is offered only through a real, staffed channel. If none exists yet, we say so.",
    image: "/prof/14.png",
  },
] as const;

export function SecuritySection() {
  return (
    <section
      id="security"
      className="bg-[#f1eefe] px-5 py-12 sm:px-10 lg:px-[70px] lg:py-[70px]"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        <SectionHeader
          eyebrow="SECURITY, PRIVACY AND ACCOMMODATIONS"
          title="Handled in the right place"
        />

        <div className="mt-[13px] grid grid-cols-1 gap-[22px] pt-[27px] md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[20px] border border-solid border-[#d9d3f5] bg-[#f7f9ff] p-[15px]"
            >
              <div className="relative h-[220px] w-full overflow-hidden rounded-[12px] sm:h-[243px]">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 389px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="px-[6px] pb-[10px] pt-[14px]">
                <h3 className="font-['Poppins',sans-serif] text-[16px] font-semibold leading-[22px] tracking-[-0.32px] text-[#031974]">
                  {card.title}
                </h3>
                <p className="mt-[5px] font-['Inter',sans-serif] text-[14.5px] leading-[25px] text-[#273444]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
