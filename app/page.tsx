import type { Metadata } from "next";
import {
  HomeHero,
  HeroHighlights,
  NextStep,
  HowItWorks,
  PatientsCaregivers,
  EcosystemRoles,
  PlatformConnections,
  SafetyTrust,
  LocalContext,
  HomeFaq,
  ChooseNextStep,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Zoiko Access | Healthcare Access & Navigation Platform",
  description:
    "Discover Zoiko Access, a digital healthcare platform designed to connect patients with healthcare providers, services, and care navigation in one place.",
};

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HeroHighlights />
      <NextStep />
      <HowItWorks />
      <PatientsCaregivers />
      <EcosystemRoles />
      <PlatformConnections />
      <SafetyTrust />
      <LocalContext />
      <HomeFaq />
      <ChooseNextStep />
    </main>
  );
}
