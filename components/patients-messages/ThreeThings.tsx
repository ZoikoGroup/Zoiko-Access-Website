import Image from "next/image";
import SectionHeading from "./SectionHeading";

const types = [
  {
    title: "Secure messages",
    text: "A conversation with one participating organization, about a service it supports. Each thread shows who owns it and whether you can reply.",
    tag: "Not connected in this preview",
    image: { src: "/patients-messages/type-messages.webp", alt: "Two people talking at a counter" },
  },
  {
    title: "System notifications",
    text: "Short updates about a supported request, such as a change in status. Previews stay generic; details appear only after you sign in.",
    tag: "Not connected in this preview",
    image: { src: "/patients-messages/type-notifications.webp", alt: "Surgical team at work" },
  },
  {
    title: "Delivery and read states",
    text: "“Delivered” means a system received it. “Seen” means an authorized person opened it. Neither means a clinician has reviewed it.",
    tag: "Information available in local preview",
    image: { src: "/patients-messages/type-receipts.webp", alt: "Clinician explaining scan results to a colleague" },
  },
];

export default function ThreeThings() {
  return (
    <section id="how-messaging-works" className="w-full scroll-mt-24 bg-white py-[78px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="How secure healthcare messaging works"
          title={
            <>
              A message, a notice and a receipt
              <br className="hidden sm:block" /> are three different things.
            </>
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {types.map((type) => (
            <article
              key={type.title}
              className="flex flex-col rounded-xl border border-[#E4E3EE] bg-white p-[22px] shadow-[0_10px_30px_rgba(29,42,107,0.08)]"
            >
              <div className="relative aspect-[372/207] w-full overflow-hidden rounded-lg">
                <Image
                  src={type.image.src}
                  alt={type.image.alt}
                  fill
                  sizes="(min-width: 768px) 372px, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="mt-5 text-[20px] font-semibold text-[#1D2A6B] [font-family:var(--font-poppins)]">
                {type.title}
              </h3>
              <p className="mt-2 max-w-[340px] text-[15px] leading-[23px] text-[#5B6180]">
                {type.text}
              </p>
              <div className="min-h-4 flex-1" aria-hidden="true" />
              <span className="mb-1 self-start rounded-full bg-[#F1EBFE] px-2.5 py-1.5 text-[12px] text-[#6A3FD8]">
                {type.tag}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
