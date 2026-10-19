import {
  PatientsHero,
  WhatPatientsCanDo,
  PatientJourney,
  TaskNavigator,
  CareLocation,
  RequestsNotConfirmations,
  Caregivers,
  PrivacyOwnership,
  HealthInformation,
  AccessibilityHelp,
  PatientsFaq,
  PatientsCta,
} from "@/components/for-patients";
import { Inter, Poppins } from "next/font/google";

// The Figma design for this page uses Inter for text and Poppins for headings.
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

export default function ForPatientsPage() {
  return (
    <main className={`${inter.className} ${poppins.variable}`}>
      <PatientsHero />
      <WhatPatientsCanDo />
      <PatientJourney />
      <TaskNavigator />
      <CareLocation />
      <RequestsNotConfirmations />
      <Caregivers />
      <PrivacyOwnership />
      <HealthInformation />
      <AccessibilityHelp />
      <PatientsFaq />
      <PatientsCta />
    </main>
  );
}
