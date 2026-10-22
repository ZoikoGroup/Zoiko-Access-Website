import Image from "next/image";

const roles = [
  {
    role: "Initiating clinician",
    rights: "Decides what is needed\nfrom their side",
    admin: "Provides the handoff\ncontent",
    escalation: "Raises concerns with the\nreceiving team or origin\nservice",
  },
  {
    role: "Source\norganization",
    rights: "Stays responsible for its\nown care",
    admin: "Keeps its source\nrecord",
    escalation: "Escalates within its own\nclinical team",
  },
  {
    role: "Recipient\norganization",
    rights: "Decides whether to\naccept",
    admin: "Acknowledges and\nroutes the handoff",
    escalation: "Escalates its own delays",
  },
  {
    role: "Receiving clinician",
    rights: "Owns clinical judgment\nonce they accept",
    admin: "Records review and\nnext steps",
    escalation: "Raises clinical concerns\ninside their organization",
  },
  {
    role: "Care coordinator",
    rights: "None. Does not make\nclinical decisions",
    admin: "Tracks open items and\nfollows up",
    escalation: "Routes unanswered items\nto the responsible owner",
  },
  {
    role: "Patient or\nauthorized\ncaregiver",
    rights: "Decides about their\nown care, where\nauthorized",
    admin: "May receive permitted\nupdates",
    escalation: "Can contact the\nresponsible organization",
  },
];

export default function AccountabilityMap() {
  return (
    <section className="w-full bg-white py-[70px] px-4 md:px-[70px]">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mb-[36px]">
          {/* Badge */}
          <div className="mb-[14px] inline-flex items-center gap-[10px]">
            <span className="h-[2px] w-[28px] bg-[#7b3ff2]" aria-hidden="true" />
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "21.45px",
                letterSpacing: "0.52px",
                color: "#7b3ff2",
              }}
            >
              Accountability map
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-[#031974]"
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 4.5vw, 54px)",
              lineHeight: "clamp(38px, 5vw, 58.32px)",
              letterSpacing: "-1.35px",
            }}
          >
            Who decides, who follows up, who
            <br />
            escalates
          </h2>
        </div>

        {/* 2-Column Content Layout: 848px table + 424px side card */}
        <div className="flex flex-col gap-[28px] lg:flex-row lg:items-stretch">
          {/* Left Table / Matrix (Roles) with exact #f1eefe header */}
          <div className="flex-1 overflow-hidden rounded-[24px] border border-[#d9d3f5] bg-white shadow-[0_4px_24px_rgba(3,25,116,0.04)] lg:w-[848px]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#f1eefe] border-b border-[#d9d3f5]">
                    <th
                      className="py-[14px] pl-[24px] pr-[16px] w-[176px]"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 700,
                        fontSize: "12.5px",
                        lineHeight: "20.63px",
                        letterSpacing: "0.625px",
                        color: "#031974",
                      }}
                    >
                      Role
                    </th>
                    <th
                      className="py-[14px] px-[16px] w-[201px]"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 700,
                        fontSize: "12.5px",
                        lineHeight: "20.63px",
                        letterSpacing: "0.625px",
                        color: "#031974",
                      }}
                    >
                      Clinical decision rights
                    </th>
                    <th
                      className="py-[14px] px-[16px] w-[192px] whitespace-pre-line"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 700,
                        fontSize: "12.5px",
                        lineHeight: "20.63px",
                        letterSpacing: "0.625px",
                        color: "#031974",
                      }}
                    >
                      Administrative follow-
                      <br />
                      up
                    </th>
                    <th
                      className="py-[14px] pl-[16px] pr-[24px] w-[226px]"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 700,
                        fontSize: "12.5px",
                        lineHeight: "20.63px",
                        letterSpacing: "0.625px",
                        color: "#031974",
                      }}
                    >
                      Escalation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((r, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-[#d9d3f5] last:border-b-0 transition-colors hover:bg-[#fafbfc]"
                    >
                      {/* Role Title */}
                      <td className="py-[16px] pl-[24px] pr-[16px] whitespace-pre-line align-top">
                        <span
                          style={{
                            fontFamily: "var(--font-outfit), sans-serif",
                            fontWeight: 700,
                            fontSize: "16px",
                            lineHeight: "26.4px",
                            color: "#031974",
                          }}
                        >
                          {r.role}
                        </span>
                      </td>

                      {/* Clinical decision rights */}
                      <td
                        className="py-[16px] px-[16px] whitespace-pre-line align-top text-[#273444]"
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontWeight: 400,
                          fontSize: "14.5px",
                          lineHeight: "23.93px",
                        }}
                      >
                        {r.rights}
                      </td>

                      {/* Administrative follow-up */}
                      <td
                        className="py-[16px] px-[16px] whitespace-pre-line align-top text-[#273444]"
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontWeight: 400,
                          fontSize: "14.5px",
                          lineHeight: "23.93px",
                        }}
                      >
                        {r.admin}
                      </td>

                      {/* Escalation */}
                      <td
                        className="py-[16px] pl-[16px] pr-[24px] whitespace-pre-line align-top text-[#273444]"
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontWeight: 400,
                          fontSize: "14.5px",
                          lineHeight: "23.93px",
                        }}
                      >
                        {r.escalation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Highlight Card - Exact Figma: 424px, rounded-24px, flush top image, bottom text */}
          <div
            className="flex w-full flex-col justify-between overflow-hidden rounded-[24px] shadow-[0_8px_24px_rgba(3,25,116,0.14)] lg:w-[424px] shrink-0"
            style={{
              background: "linear-gradient(135deg, #02125f 0%, #1b2fb5 55%, #3a4de0 100%)",
            }}
          >
            {/* Top Image: Flush to top & edges, no padding, fills upper portion */}
            <div className="relative w-full h-[320px] md:h-[380px] lg:h-[407px] overflow-hidden">
              <Image
                src="/care-transitions/ct07-fig.png"
                alt="Provenance is not assignment"
                fill
                sizes="(max-width: 1024px) 100vw, 424px"
                className="object-cover"
                priority
              />
            </div>

            {/* Bottom Content: Exact Figma padding 24px and typography */}
            <div className="flex flex-col gap-[8px] p-[24px] pt-[20px] pb-[24px]">
              <h3
                className="text-white"
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "25.92px",
                  letterSpacing: "-0.6px",
                }}
              >
                Provenance is not assignment
              </h3>
              <p
                className="text-white"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "26.4px",
                }}
              >
                Knowing where information came from does
                <br />
                not make anyone responsible for it. Clinical
                <br />
                liability does not transfer through interface
                <br />
                wording.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
