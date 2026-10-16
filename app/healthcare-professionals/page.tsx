import {
  ProfessionalsHero,
  LocationBar,
  ExploreRoles,
  RoleFamilies,
  HowRolesDiffer,
  SettingsCollaboration,
  QualificationsPermissions,
  PracticalPreparation,
  LocationAvailability,
  ContinueGuide,
  ProfessionalsFaq,
  UsefulVocabulary,
  ClinicalSafety,
  ProfessionalsCta,
} from "@/components/healthcare-professionals";
import { Inter } from "next/font/google";

// The Figma design for this page is set in Inter.
const inter = Inter({ subsets: ["latin"] });

export default function HealthcareProfessionalsPage() {
  return (
    <main className={inter.className}>
      <ProfessionalsHero />
      <LocationBar />
      <ExploreRoles />
      <RoleFamilies />
      <HowRolesDiffer />
      <SettingsCollaboration />
      <QualificationsPermissions />
      <PracticalPreparation />
      <LocationAvailability />
      <ContinueGuide />
      <ProfessionalsFaq />
      <UsefulVocabulary />
      <ClinicalSafety />
      <ProfessionalsCta />
    </main>
  );
}
