import { FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function AppointmentList() {
  return (
    <section className="w-full bg-gradient-to-r from-[#F2EFFE] via-[#E6E0FE] to-[#D9CEFD] py-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[154px]">
        <SectionHeading
          badge="Your appointment list"
          title="One card per authorized record"
          description="The list appears only after region, account, role and partner activation. Use the access mode above to preview each state."
        />

        <div className="mt-8 flex items-start gap-5 rounded-2xl border border-dashed border-[#9C82EE] bg-white px-7 py-6">
          <FileText className="mt-1 h-7 w-7 shrink-0 text-[#7C3AED]" aria-hidden="true" />
          <div>
            <h3 className="text-[17px] font-bold text-[#0E1E6E]">
              No appointment list is shown in this mode
            </h3>
            <p className="mt-1 text-[15px] leading-6 text-[#2C3352]">
              Appointment tools are not available for the selected care
              location, so there is no list to show. Read how requests work
              below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
