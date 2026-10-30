import type { Metadata } from "next";
import {
  CommunityHomeCareHero,
  QuickLinkCards,
  ThreeGroups,
  CareScenarios,
  HandoffStates,
  CoordinationLifecycle,
  RolesPermissions,
  AvailabilityByLocation,
  PartnerPathway,
  ContinueByRole,
  FaqGlossary,
  TrustLinks,
  SummaryCta,
} from "@/components/community-home-care";

export const metadata: Metadata = {
  title: "Community & Home Care | Zoiko Access",
  description:
    "How community and home care coordination works: roles, consented handoffs and local provider responsibility.",
};

export default function CommunityHomeCarePage() {
  return (
    <main>
      <CommunityHomeCareHero />
      <QuickLinkCards />
      <ThreeGroups />
      <CareScenarios />
      <HandoffStates />
      <CoordinationLifecycle />
      <RolesPermissions />
      <AvailabilityByLocation />
      <PartnerPathway />
      <ContinueByRole />
      <FaqGlossary />
      <TrustLinks />
      <SummaryCta />
    </main>
  );
}
