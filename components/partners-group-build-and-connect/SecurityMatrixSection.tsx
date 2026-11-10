import React from "react";

const securityControls = [
  {
    num: "01",
    title: "Least privilege",
    description: "Only the access a role needs.",
  },
  {
    num: "02",
    title: "Scoped permissions",
    description: "Scopes never grant all patient data.",
  },
  {
    num: "03",
    title: "Signature validation",
    description: "Every message is verified.",
  },
  {
    num: "04",
    title: "Credential rotation",
    description: "Credentials expire and rotate.",
  },
  {
    num: "05",
    title: "Revocation",
    description: "Access can be withdrawn at once.",
  },
  {
    num: "06",
    title: "Threat modelling",
    description: "Risks reviewed before activation.",
  },
  {
    num: "07",
    title: "PHI restrictions",
    description: "No PHI in logs, URLs or analytics.",
  },
  {
    num: "08",
    title: "Audit trails",
    description: "Who did what, and when.",
  },
];

export const SecurityMatrixSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0b103b] via-[#1a1868] to-[#581c87] text-white py-16 md:py-20 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="block text-purple-200/80 text-xs font-semibold tracking-wider uppercase mb-2">
            07 / SECURITY MATRIX
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
            Eight controls before anything connects
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/85 leading-relaxed">
            Partner scopes never grant access to all patient data.
          </p>
        </div>

        {/* 8 Controls Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {securityControls.map((ctrl) => (
            <div
              key={ctrl.num}
              className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-5 backdrop-blur-md transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="block text-[10px] font-bold text-purple-200/75 mb-2">
                  {ctrl.num}
                </span>
                <h3 className="font-bold text-sm sm:text-base text-white mb-1.5 leading-snug">
                  {ctrl.title}
                </h3>
                <p className="text-xs text-purple-100/80 leading-relaxed">
                  {ctrl.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
