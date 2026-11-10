import Image from "next/image";
import { IMG, container, heading, section } from "./shared";

const fields = ["Work email", "Role", "Organization", "High-level purpose"];

export default function InstitutionalTeamCta() {
  return (
    <section className={`bg-[#F5F8FC] ${section}`}>
      <div
        className={`${container} grid grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(36,59,115,0.08)] md:grid-cols-[minmax(0,600px)_minmax(0,1fr)]`}
      >
        <div className="relative min-h-[300px] md:min-h-[470px]">
          <Image
            src={`${IMG}/team-member.webp`}
            alt="A member of the institutional team in a white coat, smiling outdoors"
            fill
            sizes="(min-width: 768px) 600px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="px-6 py-10 md:px-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF1DC] px-3 py-1.5 text-xs font-semibold text-[#8A5A12]">
            <span className="h-2 w-2 rounded-full bg-[#E3A14B]" aria-hidden="true" />
            Not open yet
          </span>
          <h2 className={`${heading} mt-4 text-3xl font-bold leading-tight text-[#16245A] md:text-[40px] md:leading-[48px]`}>
            Speak with our institutional team.
          </h2>
          <p className="mt-4 max-w-[540px] text-base leading-7 text-[#5B6B8C]">
            This route opens only once a staffed, privacy-reviewed inquiry service with validated coverage hours is in
            place. No form is shown until then.
          </p>

          {/* Preview of the fields the future form would ask for. Not interactive. */}
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2" aria-label="Fields the inquiry form would ask for">
            {fields.map((f) => (
              <li key={f} className="rounded-lg border border-dashed border-[#C7CFE3] px-4 py-3.5 text-sm text-[#3D5BD9]">
                {f}
              </li>
            ))}
          </ul>

          <p className="mt-5 border-t border-[#E4E7F2] pt-4 text-xs text-[#5B6B8C]">
            It would never ask for patient information, clinical details or attachments.
          </p>
        </div>
      </div>
    </section>
  );
}
