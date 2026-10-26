import {
  PharmacyServicesHero,
  FourPharmacyRoles,
  FourStepsCoordination,
  PrescriptionControlTable,
  PharmacyStatusWorkflow,
  ListingProvenance,
  AuthorizedRoles,
  UnavailableExceptionStates,
  InteroperabilityPrinciples,
  PrivacyArchitecture,
  PharmacyPartnershipInfo,
  PharmacyFaqAccordion,
  StartWithUnderstandingCta,
} from "@/components/for-pharmacies";

export default function ForPharmaciesPage() {
  return (
    <main>
      <PharmacyServicesHero />
      <FourPharmacyRoles />
      <FourStepsCoordination />
      <PrescriptionControlTable />
      <PharmacyStatusWorkflow />
      <ListingProvenance />
      <AuthorizedRoles />
      <UnavailableExceptionStates />
      <InteroperabilityPrinciples />
      <PrivacyArchitecture />
      <PharmacyPartnershipInfo />
      <PharmacyFaqAccordion />
      <StartWithUnderstandingCta />
    </main>
  );
}
