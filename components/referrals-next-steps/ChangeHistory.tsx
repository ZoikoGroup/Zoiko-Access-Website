import { ArrowLeftRight, Clock3, File, Flag } from "lucide-react";
import { IconCardGrid } from "./CardGrids";
import SectionHeading from "./SectionHeading";

const rules = [
  {
    icon: ArrowLeftRight,
    title: "Correcting details",
    text: "You can ask for a correction to your own details where the partner supports it.",
  },
  {
    icon: Flag,
    title: "Cancelling a referral",
    text: "A cancel option appears only if the partner can actually cancel. Otherwise we don’t offer it.",
  },
  { icon: Clock3, title: "Pending and confirmed", text: "A request shows as pending until the partner confirms the outcome." },
  {
    icon: File,
    title: "Immutable evidence",
    text: "Corrected entries point back to the original and the person who made the change.",
  },
];

export default function ChangeHistory() {
  return (
    <section className="w-full bg-gradient-to-r from-[#F3F1FE] via-[#E3DBFE] to-[#D2C6FD] py-[96px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[130px]">
        <SectionHeading badge="Corrections and change history" title="History is kept, never quietly erased" center />
        <div className="mt-8">
          <IconCardGrid items={rules} columns="lg:grid-cols-4" />
        </div>
      </div>
    </section>
  );
}
