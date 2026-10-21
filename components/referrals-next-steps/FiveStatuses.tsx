import { CircleCheck, Inbox, Mail, Send, Stethoscope } from "lucide-react";
import { IconCardGrid } from "./CardGrids";
import SectionHeading from "./SectionHeading";

const statuses = [
  { icon: Send, title: "Sent", text: "Transferred from the referring organization." },
  { icon: CircleCheck, title: "Accepted", text: "The responsible organization accepted it." },
  { icon: Stethoscope, title: "Clinically reviewed", text: "A qualified professional recorded a review." },
  { icon: Mail, title: "Acknowledged", text: "The destination recognized the request." },
  {
    icon: Inbox,
    title: "Delivered",
    text: "Reached a technical destination. This is technical only, and says nothing about review.",
  },
];

export default function FiveStatuses() {
  return (
    <section id="five-statuses" className="w-full scroll-mt-24 bg-gradient-to-r from-[#F1EDFE] via-[#E3DBFE] to-[#D2C6FD] py-[76px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="How referral statuses work"
          title={
            <>
              Five statuses. Five different
              <br className="hidden sm:block" /> meanings.
            </>
          }
          description="Progress comes from the responsible organization. These are the plain-language definitions."
        />
        <div className="mt-5 lg:max-w-[1286px]">
          <IconCardGrid items={statuses} />
        </div>
      </div>
    </section>
  );
}
