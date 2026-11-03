const owners = [
  {
    title: "Clinics & practices",
    text: "Visit notes and care plans they create.",
    owner: "Owner: the clinic",
    image: "/health-information-access/owner-clinic.webp",
    alt: "Clinician talking with a patient",
  },
  {
    title: "Hospitals",
    text: "Admissions, procedures and discharge summaries.",
    owner: "Owner: the hospital",
    image: "/health-information-access/owner-hospital.webp",
    alt: "Hospital building",
  },
  {
    title: "Labs & diagnostics",
    text: "Results they produce and report.",
    owner: "Owner: the lab",
    image: "/health-information-access/owner-lab.webp",
    alt: "Laboratory sample tray",
  },
  {
    title: "Pharmacies",
    text: "Dispensing records they keep.",
    owner: "Owner: the pharmacy",
    image: "/health-information-access/owner-pharmacy.webp",
    alt: "Pharmacist working at a laptop",
  },
];

export default function EveryRecordHasOwner() {
  return (
    <section className="bg-white px-6 py-16 font-sans lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-[1px] w-8 bg-[#2F4DC0]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#2F4DC0]">
            Source ownership
          </span>
        </div>
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-[#0A2540] md:text-4xl">
          Every record has an owner.
        </h2>
        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-[#697386] md:text-base">
          Where access is authorized, information is shown with its source. The
          source stays responsible for accuracy and corrections.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {owners.map((o) => (
            <div
              key={o.title}
              className="flex flex-col items-center rounded-2xl border border-[#E6EBF1] bg-white p-4 pb-6 text-center shadow-[0_6px_24px_rgba(10,37,64,0.08)]"
            >
              <img
                src={o.image}
                alt={o.alt}
                className="mb-5 h-44 w-full rounded-xl object-cover"
              />
              <h3 className="mb-1 text-base font-bold text-[#0A2540]">
                {o.title}
              </h3>
              <p className="mb-4 text-xs leading-relaxed text-[#697386] md:text-sm">
                {o.text}
              </p>
              <span className="mt-auto rounded-full bg-[#EEF1FF] px-3 py-1 text-[11px] font-semibold text-[#2F4DC0]">
                {o.owner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
