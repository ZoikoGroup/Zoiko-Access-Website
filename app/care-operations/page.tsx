import {
  CareOperationsHero,
  FloatingOwnershipBar,
  ThreeWorkflowPathways,
  SchedulingAccess,
  ReferralRouting,
  DischargeAndTransitions,
  StatusTaxonomyGrid,
  TwoQueuesOwnership,
  EveryExceptionNextStep,
  PatientAndCaregiverAccess,
  MinimumDataTraceability,
  MarketProductReadiness,
  ShortAnswersAccordion,
  RelatedTechnologyCTA,
} from "@/components/care-operations";

export default function CareOperationsPage() {
  return (
    <main>
      <CareOperationsHero />
      <FloatingOwnershipBar />
      <ThreeWorkflowPathways />
      <SchedulingAccess />
      <ReferralRouting />
      <DischargeAndTransitions />
      <StatusTaxonomyGrid />
      <TwoQueuesOwnership />
      <EveryExceptionNextStep />
      <PatientAndCaregiverAccess />
      <MinimumDataTraceability />
      <MarketProductReadiness />
      <ShortAnswersAccordion />
      <RelatedTechnologyCTA />
    </main>
  );
}
