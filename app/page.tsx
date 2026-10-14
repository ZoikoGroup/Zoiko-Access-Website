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
