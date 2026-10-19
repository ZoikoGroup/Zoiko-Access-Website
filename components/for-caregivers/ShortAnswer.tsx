import SectionHeading from "./SectionHeading";

export default function ShortAnswer() {
  return (
    <section className="w-full bg-white py-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="The short answer"
          title={
            <>
              What caregivers can and
              <br className="hidden sm:block" /> cannot assume
            </>
          }
        />

        <div className="mt-10 rounded-2xl border border-[#E4E0F7] border-l-[5px] border-l-[#A996F5] bg-white px-6 pb-10 pt-11 shadow-[0_12px_32px_rgba(36,28,89,0.08)] sm:px-9">
          <p className="text-[17px] font-medium leading-[30px] text-[#1D1857] [font-family:var(--font-poppins)] sm:text-[18px]">
            A caregiver may help someone navigate services, but access to
            their personal health information or healthcare decisions requires
            the authority applicable to that person, task and location.
          </p>
          <p className="mt-2.5 max-w-[800px] text-[14px] leading-6 text-[#5B5880]">
            Helping with care, consent, legal guardianship, identity
            verification and digital record authorization are all different
            things. No patient health information is needed to read this
            guide.
          </p>
        </div>
      </div>
    </section>
  );
}
