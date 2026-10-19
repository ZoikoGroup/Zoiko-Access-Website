import { CalendarDays, Smartphone, Users } from "lucide-react";
import PhotoCard, { Tag } from "./PhotoCard";
import SectionHeading from "./SectionHeading";

const layers = [
  {
    icon: Smartphone,
    title: "1. Request sent",
    text: "Your request was transmitted. Delivery to the organization is not acceptance.",
    tag: "Transmission state",
    image: { src: "/appointments-requests/layer-sent.webp", alt: "Envelope on a desk" },
  },
  {
    icon: Users,
    title: "2. Organization decides",
    text: "The organization acknowledges, holds a time, or rejects the request.",
    tag: "Decision state",
    image: {
      src: "/appointments-requests/contact-provider.webp",
      alt: "Person typing on a laptop next to a stethoscope",
    },
  },
  {
    icon: CalendarDays,
    title: "3. Visit happens",
    text: "Confirmed, rescheduled, canceled, completed or no-show, from the organization’s own record.",
    tag: "Fulfillment state",
    image: {
      src: "/appointments-requests/layer-visit.webp",
      alt: "Clinician explaining scan results to a colleague",
    },
  },
];

export default function ThreeLayers() {
  return (
    <section id="three-layers" className="w-full scroll-mt-24 bg-white py-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Appointment detail"
          title={
            <>
              Three layers of truth, shown
              <br className="hidden sm:block" /> separately
            </>
          }
          description="Sending, deciding and visiting are tracked as different things. A delivered request is never shown as a booking."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {layers.map((layer) => (
            <PhotoCard
              key={layer.title}
              image={layer.image}
              icon={layer.icon}
              title={layer.title}
              aspect="aspect-[420/178]"
              sizes="(min-width: 768px) 420px, 100vw"
            >
              <p className="mt-2 max-w-[330px] text-[15px] leading-6 text-[#2C3352]">
                {layer.text}
              </p>
              <div className="min-h-6 flex-1" aria-hidden="true" />
              <Tag>{layer.tag}</Tag>
            </PhotoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
