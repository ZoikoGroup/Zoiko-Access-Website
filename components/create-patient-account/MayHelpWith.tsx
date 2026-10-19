import { CircleCheck, FileText, Search } from "lucide-react";
import PhotoCard, { Tag } from "./PhotoCard";
import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: Search,
    title: "Discover eligible services",
    text: "Learn which supported access services may be available in participating locations.",
    image: { src: "/create-patient-account/help-discover.webp", alt: "Clinician holding a phone" },
  },
  {
    icon: FileText,
    title: "Understand the steps",
    text: "See what each access step involves and who is responsible for it, before you act.",
    image: { src: "/create-patient-account/help-steps.webp", alt: "Two surgeons at work" },
  },
  {
    icon: CircleCheck,
    title: "View verified progress",
    text: "Where supported, follow progress that comes from the responsible source, not from this page.",
    image: {
      src: "/create-patient-account/help-progress.webp",
      alt: "Hands holding a tablet with checked documents floating above it",
    },
  },
];

export default function MayHelpWith() {
  return (
    <section className="w-full bg-white py-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="What an account may help with"
          title={
            <>
              Understand the steps, where services
              <br className="hidden sm:block" /> are enabled
            </>
          }
          description="These are informational descriptions. Each one depends on activated services in your location."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <PhotoCard
                key={item.title}
                image={item.image}
                icon={item.icon}
                title={item.title}
                aspect="aspect-[416/178]"
                sizes="(min-width: 768px) 416px, 100vw"
              >
                <p className="mt-2 max-w-[320px] text-[15px] leading-6 text-[#2C3352]">
                  {item.text}
                </p>
                <div className="min-h-6 flex-1" aria-hidden="true" />
                <Tag>Where enabled</Tag>
              </PhotoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
