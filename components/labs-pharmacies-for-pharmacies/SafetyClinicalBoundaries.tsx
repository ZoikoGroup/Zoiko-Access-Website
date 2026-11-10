import React from "react";
import { User, ShieldAlert, AlertTriangle } from "lucide-react";

export const SafetyClinicalBoundaries: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0c1448] via-[#161a68] to-[#45107e] py-16 md:py-24 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#c4b5fd]" />
            <span className="text-[#c4b5fd] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              SAFETY &amp; CLINICAL BOUNDARIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Medication questions belong with licensed professionals.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-purple-200/85 leading-relaxed">
            Three firm boundaries. They apply everywhere on this site.
          </p>
        </div>

        {/* 3 Boundary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {/* Card 1 */}
          <div className="bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-md shadow-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-[#c4b5fd]">
                <User className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-white mb-2 leading-snug">
                Urgent questions
              </h3>
              <p className="text-xs text-purple-200/80 leading-relaxed">
                Go to a licensed pharmacist or clinician, never an online status.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-md shadow-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-[#c4b5fd]">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-white mb-2 leading-snug">
                No automated advice
              </h3>
              <p className="text-xs text-purple-200/80 leading-relaxed">
                No automatic substitution or medicine advice.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-md shadow-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-[#c4b5fd]">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-white mb-2 leading-snug">
                Adverse events
              </h3>
              <p className="text-xs text-purple-200/80 leading-relaxed">
                Reported through locally-governed channels.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Emergency Banner */}
        <div className="bg-white rounded-2xl sm:rounded-full p-4 sm:px-8 border-l-4 border-l-rose-500 shadow-xl text-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <span className="text-rose-600 font-extrabold text-xs sm:text-sm tracking-wide">
            Emergency?
          </span>
          <span className="text-xs sm:text-sm text-slate-600">
            Contact local emergency services immediately.
          </span>
        </div>
      </div>
    </section>
  );
};
