export default function OurVisionMission() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F2EFFF] via-[#EEEAFE] to-[#D9CCFF] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Vision Card */}
          <div className="flex flex-col rounded-3xl bg-white p-8 shadow-[0_10px_30px_rgba(110,80,200,0.06)] sm:p-12">
            <div className="inline-flex w-fit items-center rounded-full bg-[#F3F0FF] px-3.5 py-1 text-[12px] font-semibold text-[#5B3FD1]">
              The future we seek
            </div>

            <h2 className="mt-6 text-[32px] font-bold tracking-[-0.03em] text-[#23327A] sm:text-[38px]">
              Our vision
            </h2>

            <p className="mt-4 text-[16px] leading-[1.8] text-[#243B73] sm:text-[17px]">
              A world where navigating healthcare is clear, connected and
              inclusive — and where people can move between appropriate services
              with greater confidence, dignity and continuity.
            </p>

            <p className="mt-8 text-[14px] leading-[1.8] text-[#6B7280] sm:text-[15px]">
              We envision healthcare experiences that are easier to understand,
              more respectful of individual choice and better coordinated across
              the organizations that deliver and support care. Geography should
              shape the services and safeguards that apply — not determine
              whether technology can be designed around people.
            </p>
          </div>

          {/* Mission Card */}
          <div className="flex flex-col rounded-3xl bg-white p-8 shadow-[0_10px_30px_rgba(110,80,200,0.06)] sm:p-12">
            <div className="inline-flex w-fit items-center rounded-full bg-[#F3F0FF] px-3.5 py-1 text-[12px] font-semibold text-[#5B3FD1]">
              The work we are pursuing
            </div>

            <h2 className="mt-6 text-[32px] font-bold tracking-[-0.03em] text-[#23327A] sm:text-[38px]">
              Our mission
            </h2>

            <p className="mt-4 text-[16px] leading-[1.8] text-[#243B73] sm:text-[17px]">
              To simplify healthcare access and navigation by building trusted
              digital infrastructure that helps people discover options, connect
              with authorized healthcare organizations, and coordinate next
              steps — while respecting patient agency, clinical accountability,
              privacy and local rules.
            </p>

            <p className="mt-8 text-[14px] leading-[1.8] text-[#6B7280] sm:text-[15px]">
              Our mission is not to replace doctors, hospitals or national
              health systems. It is to help the right participants work together
              through clearer information, responsible workflows and verifiable
              handoffs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
