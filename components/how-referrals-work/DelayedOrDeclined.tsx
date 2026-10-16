import SectionHeading from "./SectionHeading";

const situations = [
  {
    title: "Waiting for a response",
    description:
      "Contact the originating care team or receiving organization through its official channel. Ask whether receipt, review, or another action is pending.",
  },
  {
    title: "Additional information required",
    description:
      "Ask the responsible organization what is needed and which authorized channel to use. Do not send medical details through this public page.",
  },
  {
    title: "Declined or cannot be located",
    description:
      "Ask the originating or receiving team to verify the last known state and advise on its decision or process. Do not infer an alternative clinical route yourself.",
  },
];

export default function DelayedOrDeclined() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="If a referral is delayed or not accepted"
          title={
            <>
              Ask about the last known state.
              <br />
              Identify who owns the next action.
            </>
          }
        />

        <div className="mt-5 grid grid-cols-1 divide-y divide-[#E5E7EB] border-y border-[#E5E7EB] md:grid-cols-3 md:divide-x md:divide-y-0">
          {situations.map((item) => (
            <div key={item.title} className="px-2 py-8 md:px-8">
              <h3 className="text-[22px] font-bold leading-7 tracking-[-0.02em] text-[#23327A] [font-family:var(--font-poppins)] sm:text-[24px]">
                {item.title}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-[#5E6B85]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
