"use client";

interface MatrixRow {
  action: string;
  referringTeam: { text: string; isOwner: boolean };
  receivingTeam: { text: string; isOwner: boolean };
  platform: { text: string; isOwner: boolean };
}

const matrixData: MatrixRow[] = [
  {
    action: "Create the referral",
    referringTeam: { text: "Owns", isOwner: true },
    receivingTeam: { text: "—", isOwner: false },
    platform: { text: "—", isOwner: false },
  },
  {
    action: "Send it",
    referringTeam: { text: "Owns", isOwner: true },
    receivingTeam: { text: "—", isOwner: false },
    platform: { text: "Carries it", isOwner: false },
  },
  {
    action: "Acknowledge receipt",
    referringTeam: { text: "Informed", isOwner: false },
    receivingTeam: { text: "Owns", isOwner: true },
    platform: { text: "Records the event", isOwner: false },
  },
  {
    action: "Evaluate and triage",
    referringTeam: { text: "—", isOwner: false },
    receivingTeam: { text: "Owns", isOwner: true },
    platform: { text: "—", isOwner: false },
  },
  {
    action: "Accept, decline or redirect",
    referringTeam: { text: "Informed", isOwner: false },
    receivingTeam: { text: "Owns", isOwner: true },
    platform: { text: "Shows the outcome", isOwner: false },
  },
  {
    action: "Schedule care",
    referringTeam: { text: "Informed", isOwner: false },
    receivingTeam: { text: "Owns, or its scheduling source", isOwner: true },
    platform: { text: "Shows source confirmation only", isOwner: false },
  },
  {
    action: "Update status",
    referringTeam: { text: "Owns its own events", isOwner: true },
    receivingTeam: { text: "Owns its own events", isOwner: true },
    platform: { text: "Shows each with its source", isOwner: false },
  },
  {
    action: "Escalate a problem",
    referringTeam: { text: "Owns for its side", isOwner: true },
    receivingTeam: { text: "Owns for its side", isOwner: true },
    platform: { text: "Does not escalate clinically", isOwner: false },
  },
  {
    action: "Record the decision",
    referringTeam: { text: "Owns its record", isOwner: true },
    receivingTeam: { text: "Owns its record", isOwner: true },
    platform: { text: "Does not hold the clinical record", isOwner: false },
  },
];

export default function OwnershipMatrix() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[70px]">
      <div className="mx-auto max-w-[1306px] px-6 lg:px-0">
        {/* Section Header */}
        <div className="mb-[44px] max-w-[760px]">
          {/* Kick Badge */}
          <div className="mb-[13px] inline-flex items-center gap-[10px]">
            <span className="h-[2px] w-[28px] bg-[#7B3FF2]" aria-hidden="true" />
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "21.45px",
                letterSpacing: "0.03em",
                color: "#7B3FF2",
              }}
            >
              Ownership matrix
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mb-[16px]"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(30px, 3.2vw, 40px)",
              lineHeight: "clamp(36px, 3.6vw, 47.2px)",
              letterSpacing: "-0.02em",
              color: "#031974",
            }}
          >
            Who does what, and who decides
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "29.7px",
              color: "#273444",
            }}
          >
            The receiving organization decides how it handles a referral. The referring organization is
            <br />
            accountable for what it sends. The platform carries events and shows their source.
          </p>
        </div>

        {/* Ownership Table Container */}
        <div
          className="w-full overflow-x-auto rounded-[20px]"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #D9D3F5",
            boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            className="w-full"
            style={{
              padding: "15.5px 20px 15.84px",
              borderBottom: "1px solid #D9D3F5",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontWeight: 600,
                fontSize: "19px",
                lineHeight: "31.35px",
                color: "#031974",
              }}
            >
              Responsibility by action
            </h3>
          </div>

          <table className="w-full min-w-[800px] border-collapse text-left">
            <thead>
              <tr style={{ backgroundColor: "#F1EEFE" }}>
                <th
                  style={{
                    width: "290px",
                    padding: "13px 18px",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 700,
                    fontSize: "12.5px",
                    lineHeight: "20.63px",
                    letterSpacing: "0.04em",
                    color: "#031974",
                  }}
                >
                  Action
                </th>
                <th
                  style={{
                    width: "236px",
                    padding: "13px 18px",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 700,
                    fontSize: "12.5px",
                    lineHeight: "20.63px",
                    letterSpacing: "0.04em",
                    color: "#031974",
                  }}
                >
                  Referring team
                </th>
                <th
                  style={{
                    width: "330px",
                    padding: "13px 18px",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 700,
                    fontSize: "12.5px",
                    lineHeight: "20.63px",
                    letterSpacing: "0.04em",
                    color: "#031974",
                  }}
                >
                  Receiving team
                </th>
                <th
                  style={{
                    width: "334px",
                    padding: "13px 18px",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 700,
                    fontSize: "12.5px",
                    lineHeight: "20.63px",
                    letterSpacing: "0.04em",
                    color: "#031974",
                  }}
                >
                  Zoiko Access
                </th>
              </tr>
            </thead>
            <tbody>
              {matrixData.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderTop: "1px solid #D9D3F5",
                  }}
                >
                  <th
                    scope="row"
                    style={{
                      padding: "13px 18px",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 700,
                      fontSize: "14.5px",
                      lineHeight: "23.93px",
                      color: "#031974",
                    }}
                  >
                    {row.action}
                  </th>
                  <td
                    style={{
                      padding: "13px 18px",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: row.referringTeam.isOwner ? 700 : 400,
                      fontSize: "14.5px",
                      lineHeight: "23.93px",
                      color: row.referringTeam.isOwner ? "#031974" : "#4D587E",
                    }}
                  >
                    {row.referringTeam.text}
                  </td>
                  <td
                    style={{
                      padding: "13px 18px",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: row.receivingTeam.isOwner ? 700 : 400,
                      fontSize: "14.5px",
                      lineHeight: "23.93px",
                      color: row.receivingTeam.isOwner ? "#031974" : "#4D587E",
                    }}
                  >
                    {row.receivingTeam.text}
                  </td>
                  <td
                    style={{
                      padding: "13px 18px",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: row.platform.isOwner ? 700 : 400,
                      fontSize: "14.5px",
                      lineHeight: "23.93px",
                      color: row.platform.isOwner ? "#031974" : "#4D587E",
                    }}
                  >
                    {row.platform.text}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
