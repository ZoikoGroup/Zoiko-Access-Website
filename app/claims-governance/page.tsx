import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import {
  ClaimsGovernanceHero,
  FourStages,
  ClaimVocabulary,
  LifecycleMap,
  DecisionAuthority,
  GovernancePrinciples,
  RemittanceReconciliation,
  ExceptionsProcesses,
  ExchangePrivacyVariance,
  NextStepsByAudience,
  ClaimsGovernanceFaq,
  ClaimsGovernanceCta,
} from "@/components/claims-governance";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Claims & Governance | Zoiko Access",
  description:
    "Explore how claim information moves between authorized organizations, why transmission and adjudication are different, how remittance relates to payment, and where governance and correction processes apply.",
};

export default function ClaimsGovernancePage() {
  return (
    <main
      className={`${poppins.variable} ${inter.variable} font-inter w-full min-h-screen bg-white`}
    >
      {/* 1. CG-02 Hero (new design) */}
      <ClaimsGovernanceHero />

      {/* 2. CG-03 Four stages */}
      <FourStages />

      {/* 3. CG-04 Vocabulary */}
      <ClaimVocabulary />

      {/* 4. CG-05 Lifecycle map */}
      <LifecycleMap />

      {/* 5. CG-06 Authority */}
      <DecisionAuthority />

      {/* 6. CG-07 Governance */}
      <GovernancePrinciples />

      {/* 7. CG-08 Remittance */}
      <RemittanceReconciliation />

      {/* 8. CG-09 Exceptions */}
      <ExceptionsProcesses />

      {/* 9. CG-10 + CG-11 + CG-12 Exchange, privacy & variance */}
      <ExchangePrivacyVariance />

      {/* 10. CG-13 Next steps */}
      <NextStepsByAudience />

      {/* 11. CG-15 FAQ */}
      <ClaimsGovernanceFaq />

      {/* 12. CG-14 CTA */}
      <ClaimsGovernanceCta />
    </main>
  );
}
