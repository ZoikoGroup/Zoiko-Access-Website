import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  SafetyEmergenciesHero,
  ThreeStepsNoDelayGrid,
  ChooseYourCountryCard,
  ClearLimitsStatedPlainly,
  TwoDifferentPathsBanner,
  ProtectingPeopleSection,
  SafetySourcesTable,
  ShortSafeAnswersFaq,
  OrdinaryNavigationGrid,
  SafetyEmergencyCtaBanner,
} from "@/components/resources-safety-and-emergencies";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Safety and Emergencies | Resources | Zoiko Access",
  description:
    "How to find verified public safety information and where ordinary healthcare navigation stops during an emergency.",
};

export default function ResourcesSafetyAndEmergenciesPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <SafetyEmergenciesHero />
      <ThreeStepsNoDelayGrid />
      <ChooseYourCountryCard />
      <ClearLimitsStatedPlainly />
      <TwoDifferentPathsBanner />
      <ProtectingPeopleSection />
      <SafetySourcesTable />
      <ShortSafeAnswersFaq />
      <OrdinaryNavigationGrid />
      <SafetyEmergencyCtaBanner />
    </main>
  );
}
