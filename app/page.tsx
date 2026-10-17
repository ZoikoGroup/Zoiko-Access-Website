import type { Metadata } from "next";
import {
  HomeHero,
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
import { Inter, Poppins } from "next/font/google";

// The Figma design for this page uses Inter for text and Poppins for headings.
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Zoiko Access | Healthcare Access & Navigation Platform",
  description:
    "Discover Zoiko Access, a digital healthcare platform designed to connect patients with healthcare providers, services, and care navigation in one place.",
};

export default function Home() {
  return (
    <main className={`${inter.className} ${poppins.variable}`}>
      <HomeHero />
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
