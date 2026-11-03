import Eyebrow from "./Eyebrow";

const rows = [
  { status: "Submitted", tone: "bg-[#E8EDFF] text-[#3B5BDB]", means: "Your request was sent", by: "You", not: "It was received or accepted" },
  { status: "Delivered", tone: "bg-[#EEE8FF] text-[#6B4FD8]", means: "The organization's system has it", by: "Their system", not: "A person reviewed it" },
  { status: "Held", tone: "bg-[#FFF3D6] text-[#9A6B00]", means: "A time is temporarily reserved", by: "Organization", not: "A confirmed booking" },
  { status: "Confirmed", tone: "bg-[#E3F7EA] text-[#1E7B43]", means: "The provider accepted it", by: "Provider", not: "Care has happened" },
  { status: "Declined", tone: "bg-[#FDE8E8] text-[#B42318]", means: "Not accepted", by: "Organization", not: "A clinical judgment about you" },
  { status: "Unknown", tone: "bg-[#F0F2F5] text-[#475467]", means: "We can't confirm yet", by: "System", not: "Anything succeeded" },
];

export default function StatusVocabulary() {
  return (
    <section
      id="status-vocabulary"
      className="bg-[#F5F7FC] px-6 py-16 font-sans lg:px-24 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow>Status vocabulary</Eyebrow>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-[#0A2540] md:text-4xl">
            Read every status literally.
          </h2>
          <p className="text-sm text-[#697386] md:text-base">
            Each status names its source. &ldquo;Unknown&rdquo; is never shown
            as success.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E6EBF1] bg-white lg:col-span-8">
          <table className="w-full min-w-[560px] text-left text-xs md:text-sm">
            <thead>
              <tr className="border-b border-[#E6EBF1] text-[11px] uppercase tracking-wider text-[#697386]">
                <th scope="col" className="px-5 py-4 font-semibold">Status</th>
                <th scope="col" className="px-5 py-4 font-semibold">Means</th>
                <th scope="col" className="px-5 py-4 font-semibold">Issued by</th>
                <th scope="col" className="px-5 py-4 font-semibold">Doesn&apos;t mean</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0F2F5]">
              {rows.map((r) => (
                <tr key={r.status}>
                  <th scope="row" className="px-5 py-3 font-normal">
                    <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${r.tone}`}>
                      {r.status}
                    </span>
                  </th>
                  <td className="px-5 py-3 text-[#0A2540]">{r.means}</td>
                  <td className="px-5 py-3 text-[#425466]">{r.by}</td>
                  <td className="px-5 py-3 text-[#B42318]">{r.not}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
