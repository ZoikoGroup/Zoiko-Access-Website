import { Eyebrow, IMG, heading } from "./shared";

const categories = [
  {
    code: "EHR",
    title: "EHR / clinical systems",
    text: "Clinical record stewardship, demographics, encounters and orders.",
    mistake: "Record owner — there is no consolidated master record.",
    image: `${IMG}/category-ehr.webp`,
  },
  {
    code: "LIS",
    title: "Laboratory systems",
    text: "Lab orders, results and corrections.",
    mistake: "Issuing a lab report is not the receiving clinician reviewing it.",
    image: `${IMG}/category-lis.webp`,
  },
  {
    code: "PACS",
    title: "RIS / PACS imaging",
    text: "Imaging orders, studies and reports.",
    mistake: "An image being available is not a diagnostic interpretation.",
    image: `${IMG}/category-pacs.webp`,
  },
  {
    code: "Rx",
    title: "Pharmacy platforms",
    text: "Prescription routing and dispensing statuses.",
    mistake: "Receiving a route is not pharmacist acceptance or fulfillment.",
    image: `${IMG}/category-rx.webp`,
  },
  {
    code: "Payer",
    title: "Payer systems",
    text: "Eligibility, prior authorization, claims and remittance.",
    mistake: "Eligibility is not a coverage guarantee. Remittance is not payment.",
    image: `${IMG}/category-payer.webp`,
  },
  {
    code: "Sched",
    title: "Scheduling systems",
    text: "Appointment requests, holds and confirmations.",
    mistake: "A request or hold is not a provider-confirmed booking.",
    image: `${IMG}/category-sched.webp`,
  },
];

export default function CategoryMatrix() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Ecosystem category matrix</Eyebrow>
        <h2 className={`${heading} mb-3 max-w-[560px] text-3xl text-[#16245A] md:text-4xl`}>
          Six vendor categories. Six different limits.
        </h2>
        <p className="mb-10 text-base leading-7 text-[#5B6B8C]">
          Each category holds a different kind of authority. The &quot;≠&quot; line shows the most
          common mistake to avoid.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article
              key={c.code}
              className="flex flex-col rounded-3xl border border-[#E4E7F2] bg-white p-7 shadow-[0_10px_30px_rgba(22,36,90,0.08)]"
            >
              <div className="mb-6 flex items-center gap-6">
                <img src={c.image} alt="" className="h-28 w-36 rounded-xl object-cover" />
                <span className={`${heading} text-4xl font-bold text-[#5B5FD6]`} aria-hidden="true">
                  {c.code}
                </span>
              </div>
              <h3 className={`${heading} mb-2 text-xl text-[#16245A]`}>{c.title}</h3>
              <p className="mb-6 text-sm leading-6 text-[#5B6B8C]">{c.text}</p>
              <p className="mt-auto flex gap-2 rounded-xl bg-[#F5F8FC] px-4 py-3.5 text-sm leading-6 text-[#2A3550]">
                <span aria-hidden="true" className="font-bold text-[#5B5FD6]">≠</span>
                <span>
                  <span className="sr-only">Not the same: </span>
                  {c.mistake}
                </span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
