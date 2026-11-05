import { Eyebrow, IMG, heading } from "./shared";

const items = [
  { title: "Entity identity", text: "Legal entity and accountable contacts" },
  { title: "Service description", text: "What the product does and does not do" },
  { title: "Interfaces", text: "Defined, versioned interface list" },
  { title: "Evidence", text: "Test results, including failures" },
  { title: "Security", text: "Current control evidence" },
  { title: "Data processing", text: "What data, where and why" },
  { title: "Operations owners", text: "Named people for support and incidents" },
];

export default function VendorQualification() {
  return (
    <section id="qualification" className="scroll-mt-24 bg-[#F5F8FC] px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <Eyebrow>Vendor qualification evidence</Eyebrow>
          <h2 className={`${heading} mb-5 text-3xl text-[#16245A] md:text-[42px] md:leading-[1.15]`}>
            What assessors need before any endorsement.
          </h2>
          <p className="mb-8 text-base leading-7 text-[#5B6B8C]">
            The package is shown empty. No vendor has submitted evidence here, and none is
            pre-approved.
          </p>
          <img
            src={`${IMG}/qualification.webp`}
            alt="Two people shaking hands beside a framed certificate"
            className="h-72 w-full object-cover lg:h-[334px]"
          />
        </div>

        <div className="relative pt-9">
          {/* Folder-style tab on the top-left edge */}
          <span className={`${heading} absolute left-0 top-0 rounded-t-xl bg-[#253B73] px-5 py-2 text-sm text-white`}>
            Assessment package
          </span>
          <ul className="divide-y divide-[#E4E7F2] rounded-3xl rounded-tl-none border border-[#253B73] bg-white px-7 py-2">
            {items.map((it) => (
              <li key={it.title} className="flex items-center justify-between gap-4 py-4 sm:pl-14">
                <div>
                  <h3 className="text-base font-bold text-[#16245A]">{it.title}</h3>
                  <p className="text-sm text-[#5B6B8C]">{it.text}</p>
                </div>
                <span className="shrink-0 rounded-full border border-dashed border-[#C9D0E4] px-2.5 py-0.5 text-xs text-[#9AA3BD]">
                  empty
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
