import type { Metadata } from "next";
import {
  ReferralHero,
  StatusWarningBar,
  WhereIntakeSits,
  SevenStageLifecycle,
  MinimumNecessaryIntake,
  RoutingAndDestination,
  EvidenceAndResponsibility,
  ExceptionsAndEscalation,
  ReceivingProviderDecision,
  PatientCaregiverCommunication,
  SystemsAndProvenance,
  RiskControls,
  RolesAndMarketStates,
  ReferralFaq,
  ReferralCta,
  RelatedPathways,
} from "@/components/referral-intake-routing";

export const metadata: Metadata = {
  title: "Referral Intake & Routing | Zoiko Access Healthcare Navigation",
  description:
    "Learn how referrals can move between authorized care organizations with clearer receipt, review, and acceptance states. Receiving professionals remain responsible for clinical decisions.",
};

export default function ReferralIntakeRoutingPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. Hero Section: Referral intake and routing with accountable handoffs */}
      <ReferralHero />

      {/* 2. Advisory Warning Bar: Delivery is not acceptance & Emergency notice */}
      <StatusWarningBar />

      {/* 3. Where Referral Intake Sits: Six parties, in order */}
      <WhereIntakeSits />

      {/* 4. Seven-Stage Lifecycle: Track what has happened, not what someone assumes */}
      <SevenStageLifecycle />

      {/* 5. Minimum Necessary Intake: Share only what a lawful purpose needs */}
      <MinimumNecessaryIntake />

      {/* 6. Routing and Destination: Administrative routing supports delivery */}
      <RoutingAndDestination />

      {/* 7. Evidence and Responsibility: Electronic delivery is not clinical acceptance */}
      <EvidenceAndResponsibility />

      {/* 8. Exceptions and Escalation: When a referral cannot move forward */}
      <ExceptionsAndEscalation />

      {/* 9. Receiving-Provider Decision: Only an authorized receiving professional accepts */}
      <ReceivingProviderDecision />

      {/* 10. Patient and Caregiver Communication: Three messages, each with its own trigger */}
      <PatientCaregiverCommunication />

      {/* 11. Systems and Provenance: Participating organizations keep their own records */}
      <SystemsAndProvenance />

      {/* 12. Risk Controls: Connected care needs permissions, clarity and reliability */}
      <RiskControls />

      {/* 13. Roles and Market States: This public page is read-only */}
      <RolesAndMarketStates />

      {/* 14. FAQ: Straight answers */}
      <ReferralFaq />

      {/* 15. Next Step CTA: Explore how accountable referrals could fit your organization */}
      <ReferralCta />

      {/* 16. Related Pathways: Keep exploring */}
      <RelatedPathways />
    </main>
  );
}
