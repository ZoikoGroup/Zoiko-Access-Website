import React from "react";

export const PharmacyAuthorityBands: React.FC = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 text-white">
        {/* Prescriber */}
        <div className="bg-[#0b1035] px-6 py-8 sm:px-8 sm:py-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-1.5">
            THE PRESCRIBER
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3">
            Clinical authority
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-slate-400 font-bold">→</span>
              <span>Decides and issues the prescription</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-400 font-bold">→</span>
              <span>Owns the clinical reasoning</span>
            </li>
          </ul>
        </div>

        {/* Licensed Pharmacy */}
        <div className="bg-[#1b35cf] px-6 py-8 sm:px-8 sm:py-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-blue-200 mb-1.5">
            THE LICENSED PHARMACY
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3">
            Validation &amp; dispensing
          </h3>
          <ul className="space-y-1.5 text-xs text-blue-100">
            <li className="flex items-start gap-2">
              <span className="text-blue-200 font-bold">→</span>
              <span>Validates the prescription</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-200 font-bold">→</span>
              <span>Decides to dispense, supplies and counsels</span>
            </li>
          </ul>
        </div>

        {/* Zoiko Access */}
        <div className="bg-[#7a37e5] px-6 py-8 sm:px-8 sm:py-10 flex flex-col justify-center">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-purple-200 mb-1.5">
            ZOIKO ACCESS
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3">
            Authorized handoffs only
          </h3>
          <ul className="space-y-1.5 text-xs text-purple-100">
            <li className="flex items-start gap-2">
              <span className="text-purple-200 font-bold">→</span>
              <span>Supports permitted information handoffs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-200 font-bold">→</span>
              <span>Never prescribes, stocks or dispenses</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
