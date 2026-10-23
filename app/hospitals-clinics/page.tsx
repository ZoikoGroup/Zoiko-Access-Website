import type { Metadata } from "next";
import {
  HeroSection,
  CareOperationsBanner,
  InstitutionPathways,
  PatientAccessScheduling,
  ReferralIntakeRouting,
  DischargeTransitions,
  InteroperabilityProvenance,
  ClinicalBoundaries,
  CoordinationSteps,
  EvidenceClaims,
  HospitalFaq,
  HospitalCta,
  RelatedPathways,
} from "@/components/hospitals-clinics";

export const metadata: Metadata = {
  title:
    "Hospitals & Clinics | Zoiko Access Healthcare Navigation",
  description:
    "Help hospital and clinic teams coordinate the next step in care. Participating healthcare organizations retain control of their scheduling, source records, clinical decisions, and operational responsibilities.",
};

export default function HospitalsClinicsPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. Hero Section: Help hospital and clinic teams coordinate the next step in care */}
      <HeroSection />

      {/* 2. Care Operations Banner: What is Zoiko Access for hospitals and clinics? */}
      <CareOperationsBanner />

      {/* 3. Institution Pathways: Find the fit for your organization */}
      <InstitutionPathways />

      {/* 4. Patient Access and Scheduling: Clarity before an appointment is confirmed */}
      <PatientAccessScheduling />

      {/* 5. Referral Intake and Routing: Make the handoff status understandable */}
      <ReferralIntakeRouting />

      {/* 6. Discharge and Transitions: Keep next-step ownership explicit */}
      <DischargeTransitions />

      {/* 7. Interoperability and Provenance: Designed to connect without replacing clinical systems */}
      <InteroperabilityProvenance />

      {/* 8. Privacy, Security and Clinical Boundaries: Three boundaries that stay in place */}
      <ClinicalBoundaries />

      {/* 9. How Institutional Coordination Works: Four steps */}
      <CoordinationSteps />

      {/* 10. Evidence and Claims: Proof is shown only when it exists */}
      <EvidenceClaims />

      {/* 11. FAQ: Straight answers */}
      <HospitalFaq />

      {/* 12. Next Step CTA: Explore the care operations model */}
      <HospitalCta />

      {/* 13. Related Institution Pathways: Keep exploring */}
      <RelatedPathways />
    </main>
  );
}
