const rows = [
  {
    event: "Requested",
    type: "Administrative",
    typeColor: "#4d587e",
    typeBg: "#efe9ff",
    meaning: "A permitted handoff was asked for.",
    authority: "Initiating\norganization",
    doesNotImply: "That it was sent.",
    nextAction: "Initiator sends it or\nwithdraws it.",
  },
  {
    event: "Transmitted",
    type: "Technical",
    typeColor: "#1f3fb0",
    typeBg: "#e6edff",
    meaning: "The notice left the sending system.",
    authority: "Sending system",
    doesNotImply: "That it arrived.",
    nextAction: "Wait for delivery evidence.",
  },
  {
    event: "Delivered",
    type: "Technical",
    typeColor: "#1f3fb0",
    typeBg: "#e6edff",
    meaning: "It reached a technical destination.",
    authority: "Transport system",
    doesNotImply: "That a person has seen it.",
    nextAction: "Wait for acknowledgment.",
  },
  {
    event: "Acknowledged",
    type: "Technical",
    typeColor: "#1f3fb0",
    typeBg: "#e6edff",
    meaning: "The receiving organization’s system\nor team recognized it.",
    authority: "Receiving\norganization",
    doesNotImply: "That a clinician accepted\nresponsibility.",
    nextAction: "Receiving team reviews it.",
  },
  {
    event: "Accepted",
    type: "Clinical",
    typeColor: "#5a2fc0",
    typeBg: "#efe9ff",
    meaning: "A responsible clinician or team\naccepted it.",
    authority: "Receiving clinician\nor team",
    doesNotImply: "That follow-up is done.",
    nextAction: "Receiving team acts.",
  },
  {
    event: "In progress",
    type: "Clinical",
    typeColor: "#5a2fc0",
    typeBg: "#efe9ff",
    meaning: "Follow-up work is underway, as that\nteam reports.",
    authority: "Responsible team",
    doesNotImply: "Any particular outcome.",
    nextAction: "Responsible team continues.",
  },
  {
    event: "Completed",
    type: "Clinical",
    typeColor: "#5a2fc0",
    typeBg: "#efe9ff",
    meaning: "The responsible team reports the\nfollow-up complete.",
    authority: "Responsible team",
    doesNotImply: "Anything beyond what they\nreport.",
    nextAction: "Initiator may close the loop.",
  },
  {
    event: "Declined",
    type: "Exception",
    typeColor: "#8a4b00",
    typeBg: "#fff3e0",
    meaning: "The receiving team did not accept it.",
    authority: "Receiving team",
    doesNotImply: "That a transfer happened.",
    nextAction: "Return to the responsible\nservice.",
  },
  {
    event: "Expired",
    type: "Exception",
    typeColor: "#8a4b00",
    typeBg: "#fff3e0",
    meaning: "The request or its authorization\nlapsed.",
    authority: "Source system",
    doesNotImply: "That anyone reviewed it.",
    nextAction: "Initiator renews it if still\npermitted.",
  },
  {
    event: "Unavailable",
    type: "Exception",
    typeColor: "#8a4b00",
    typeBg: "#fff3e0",
    meaning: "The destination or its evidence can’t\nbe reached.",
    authority: "Source system",
    doesNotImply: "That nothing happened.",
    nextAction: "Verify status. Contact the\norganization.",
  },
];

export default function StatusGlossary() {
  return (
    <section
      id="status-glossary"
      className="w-full bg-[#f6f9fc] py-[70px] px-4 md:px-[70px]"
    >
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
              Status and evidence glossary
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mb-[16px] text-[#031974]"
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 4.5vw, 54px)",
              lineHeight: "clamp(38px, 5vw, 58.32px)",
              letterSpacing: "-1.35px",
            }}
          >
            What each status means, and
            <br />
            what it doesn’t
          </h2>

          {/* Lead */}
          <p
            className="text-[#273444]"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18.5px",
              lineHeight: "30.53px",
            }}
          >
            A timestamp alone does not prove clinical review. Clinical acceptance needs
            <br className="hidden md:inline" />
            positive evidence from the receiving source.
          </p>
        </div>

        {/* Table Container Card (Exact Figma rounded-24px, border #d9d3f5) */}
        <div className="overflow-hidden rounded-[24px] border border-[#d9d3f5] bg-white shadow-[0_4px_24px_rgba(3,25,116,0.04)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="bg-[#f1eefe] border-b border-[#d9d3f5]">
                  <th
                    className="py-[14px] pl-[28px] pr-[16px]"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 700,
                      fontSize: "12.5px",
                      lineHeight: "20.63px",
                      letterSpacing: "0.625px",
                      color: "#031974",
                    }}
                  >
                    Event
                  </th>
                  <th
                    className="py-[14px] px-[16px]"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 700,
                      fontSize: "12.5px",
                      lineHeight: "20.63px",
                      letterSpacing: "0.625px",
                      color: "#031974",
                    }}
                  >
                    Type
                  </th>
                  <th
                    className="py-[14px] px-[16px]"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 700,
                      fontSize: "12.5px",
                      lineHeight: "20.63px",
                      letterSpacing: "0.625px",
                      color: "#031974",
                    }}
                  >
                    Meaning
                  </th>
                  <th
                    className="py-[14px] px-[16px]"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 700,
                      fontSize: "12.5px",
                      lineHeight: "20.63px",
                      letterSpacing: "0.625px",
                      color: "#031974",
                    }}
                  >
                    Source authority
                  </th>
                  <th
                    className="py-[14px] px-[16px]"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 700,
                      fontSize: "12.5px",
                      lineHeight: "20.63px",
                      letterSpacing: "0.625px",
                      color: "#031974",
                    }}
                  >
                    Does not imply
                  </th>
                  <th
                    className="py-[14px] pl-[16px] pr-[28px]"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 700,
                      fontSize: "12.5px",
                      lineHeight: "20.63px",
                      letterSpacing: "0.625px",
                      color: "#031974",
                    }}
                  >
                    Next action
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[#d9d3f5] last:border-b-0 transition-colors hover:bg-[#fafbfc]"
                  >
                    {/* Event */}
                    <td className="py-[16px] pl-[28px] pr-[16px]">
                      <span
                        style={{
                          fontFamily: "var(--font-outfit), sans-serif",
                          fontWeight: 700,
                          fontSize: "16px",
                          lineHeight: "26.4px",
                          color: "#031974",
                        }}
                      >
                        {r.event}
                      </span>
                    </td>

                    {/* Type Badge */}
                    <td className="py-[16px] px-[16px]">
                      <span
                        className="inline-block rounded-[6px] px-[8px] py-[3px]"
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontWeight: 800,
                          fontSize: "11px",
                          lineHeight: "18.15px",
                          letterSpacing: "0.55px",
                          color: r.typeColor,
                          backgroundColor: r.typeBg,
                        }}
                      >
                        {r.type}
                      </span>
                    </td>

                    {/* Meaning */}
                    <td
                      className="py-[16px] px-[16px] whitespace-pre-line text-[#273444]"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 400,
                        fontSize: "14.5px",
                        lineHeight: "23.93px",
                      }}
                    >
                      {r.meaning}
                    </td>

                    {/* Source authority */}
                    <td
                      className="py-[16px] px-[16px] whitespace-pre-line text-[#273444]"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 400,
                        fontSize: "14.5px",
                        lineHeight: "23.93px",
                      }}
                    >
                      {r.authority}
                    </td>

                    {/* Does not imply */}
                    <td
                      className="py-[16px] px-[16px] whitespace-pre-line text-[#273444]"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 400,
                        fontSize: "14.5px",
                        lineHeight: "23.93px",
                      }}
                    >
                      {r.doesNotImply}
                    </td>

                    {/* Next action */}
                    <td
                      className="py-[16px] pl-[16px] pr-[28px] whitespace-pre-line text-[#273444]"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 400,
                        fontSize: "14.5px",
                        lineHeight: "23.93px",
                      }}
                    >
                      {r.nextAction}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
