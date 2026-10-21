import { Headphones, Stethoscope, TriangleAlert } from "lucide-react";
import { IconCardGrid } from "./CardGrids";
import SectionHeading from "./SectionHeading";

const routes = [
  {
    icon: Stethoscope,
    title: "A clinical concern",
    text: "Contact the responsible care organization. Zoiko Access cannot evaluate your symptoms or your referral clinically.",
  },
  {
    icon: Headphones,
    title: "A technical problem",
    text: "Use approved platform support, where a staffed route is published.",
  },
  { icon: TriangleAlert, title: "An emergency", text: "Use the emergency services appropriate to your location." },
];

export default function RightPlace() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F3F1FE] to-[#D3C8FD] py-[76px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Questions and exceptions"
          title={
            <>
              Take your question to the
              <br className="hidden sm:block" /> right place
            </>
          }
        />
        <div className="mt-8">
          <IconCardGrid items={routes} />
        </div>
      </div>
    </section>
  );
}
