import SectionHeading from "./SectionHeading";

const states = [
  {
    state: "Requested",
    meaning: "An action has been asked for.",
    establishedBy: "The requester or authorized submitting process.",
  },
  {
    state: "Sent",
    meaning: "Information has been transmitted.",
    establishedBy: "The sending system.",
  },
  {
    state: "Delivered",
    meaning: "The transport channel reports delivery.",
    establishedBy: "The delivery source; not proof of clinical review.",
  },
  {
    state: "Received",
    meaning: "The destination reports receipt.",
    establishedBy: "The receiving organization or system.",
  },
  {
    state: "Acknowledged",
    meaning: "Receipt or awareness is explicitly acknowledged.",
    establishedBy: "The actor issuing the acknowledgment.",
  },
  {
    state: "Clinically reviewed",
    meaning: "Clinical review is explicitly known, only if supported by evidence.",
    establishedBy: "The appropriately authorized professional or source.",
  },
  {
    state: "Accepted / declined",
    meaning: "An organization reports a decision about the relevant request.",
    establishedBy: "The responsible receiving organization.",
  },
  {
    state: "Confirmed / completed",
    meaning:
      "The specific event is confirmed or reported complete, as evidence allows.",
    establishedBy: "The authoritative provider or source system.",
  },
];

export default function StatusLiteracy() {
  return (
    <section className="w-full bg-[#F5F8FC] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Status literacy"
          title={
            <>
              A receipt is not acceptance.
              <br />
              A request is not confirmation.
            </>
          }
          description="The states below are definitions. No personal timeline, appointment, or clinical record is fetched or displayed."
        />

        <div className="mt-9 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead className="bg-[#EEEAFE]">
              <tr>
                <th
                  scope="col"
                  className="w-[25%] px-4 py-4 text-[14px] font-bold text-[#23327A]"
                >
                  Conceptual state
                </th>
                <th
                  scope="col"
                  className="w-[43%] px-4 py-4 text-[14px] font-bold text-[#23327A]"
                >
                  What it means
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-[14px] font-bold text-[#23327A]"
                >
                  Who can establish it
                </th>
              </tr>
            </thead>
            <tbody>
              {states.map((row) => (
                <tr key={row.state} className="border-b border-[#E5E7EB]">
                  <th
                    scope="row"
                    className="px-4 py-4 text-[13px] font-bold text-[#23327A]"
                  >
                    {row.state}
                  </th>
                  <td className="px-4 py-4 text-[14px] leading-[1.7] text-[#4B5563]">
                    {row.meaning}
                  </td>
                  <td className="px-4 py-4 text-[14px] leading-[1.7] text-[#4B5563]">
                    {row.establishedBy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
