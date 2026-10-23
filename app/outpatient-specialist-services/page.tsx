import type { Metadata } from "next";
import {
  OutpatientHero,
  PracticeNeeds,
  AudienceSection,
  JourneyBoundaries,
  ServiceGates,
  CareModels,
  ReferralIntake,
  SchedulingAccess,
  AccountabilityRoles,
  SourcesStayInCharge,
  IllustrativeScenarios,
  TrustAndSafeguards,
  OutpatientFaq,
  InstitutionalNextStep,
  KeepExploring,
} from "@/components/outpatient-specialist-services";

export const metadata: Metadata = {
  title: "Outpatient & Specialist Services | Zoiko Access",
  description:
    "Help make outpatient and specialist journeys easier to coordinate. Explore service information, authorized handoffs, scheduling boundaries, and multi-provider transitions.",
};

export default function OutpatientSpecialistServicesPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. Hero Section with 3-Photo Layered Composition */}
      <OutpatientHero />

      {/* 2. Practice Needs (3 Everyday Pressures & Designed Approach) */}
      <PracticeNeeds />

      {/* 3. Who This Is For (5 Coordination Teams) */}
      <AudienceSection />

      {/* 4. Patient Journey Boundaries (6 Steps, Each Conditional) */}
      <JourneyBoundaries />

      {/* 5. Service Gates (P0, P1, P2, PX) */}
      <ServiceGates />

      {/* 6. Outpatient Care Models (Interactive 5 Organization Models) */}
      <CareModels />

      {/* 7. Referrals and Intake (8 Statuses, 8 Different Meanings) */}
      <ReferralIntake />

      {/* 8. Scheduling and Patient Access (The Provider Owns the Schedule) */}
      <SchedulingAccess />

      {/* 9. Continuity and Follow-Through (Who Is Responsible for What - 5 Roles) */}
      <AccountabilityRoles />

      {/* 10. Technology, Privacy and Integration (Sources Stay in Charge Architecture) */}
      <SourcesStayInCharge />

      {/* 11. Illustrative Scenarios (Three Hypothetical Workflows) */}
      <IllustrativeScenarios />

      {/* 12. Trust, Safeguards and Provenance (What Protects the Process) */}
      <TrustAndSafeguards />

      {/* 13. Plain Answers (Straight Answers FAQ Accordion) */}
      <OutpatientFaq />

      {/* 14. Institutional Next Step (Start with the Overview Banner) */}
      <InstitutionalNextStep />

      {/* 15. Alternate Routes (Keep Exploring 5 Navigation Tiles) */}
      <KeepExploring />
    </main>
  );
}
