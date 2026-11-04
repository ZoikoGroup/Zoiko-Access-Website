import {
  ApiOverview,
  AvailabilityStatusBaseline,
  CapabilityFamiliesConnect,
  HowInformationMovesSequence,
  EvidenceProvenanceSource,
  AuthorizationSpecificAccess,
  PolicyGatesTable,
  StandardsRegistryTested,
  DocsAndEnvironments,
  ImplementationPhases,
  UncertaintyFailureHandling,
  FrequentlyAskedQuestionsImage,
  RelatedSubjectsCards,
  AssessIntegrationReadiness,
} from "@/components/api-interoperability";

export default function ApiInteroperabilityPage() {
  return (
    <main>
      <ApiOverview />
      <AvailabilityStatusBaseline />
      <CapabilityFamiliesConnect />
      <HowInformationMovesSequence />
      <EvidenceProvenanceSource />
      <AuthorizationSpecificAccess />
      <PolicyGatesTable />
      <StandardsRegistryTested />
      <DocsAndEnvironments />
      <ImplementationPhases />
      <UncertaintyFailureHandling />
      <FrequentlyAskedQuestionsImage />
      <RelatedSubjectsCards />
      <AssessIntegrationReadiness />
    </main>
  );
}
