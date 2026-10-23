import {
  CaregiversHero,
  ShortAnswer,
  WaysToHelp,
  UnderstandRole,
  PermissionsExplained,
  MinorsSafeguards,
  JourneyHandoffs,
  PrivacyChoice,
  LocationContext,
  CaregiversFaq,
  AccessibleHelp,
  CaregiversCta,
} from "@/components/for-caregivers";
import { Inter, Poppins } from "next/font/google";

// The Figma design for this page uses Inter for text and Poppins for headings.
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

export default function ForCaregiversPage() {
  return (
    <main className={`${inter.className} ${poppins.variable}`}>
      <CaregiversHero />
      <WaysToHelp />
      <UnderstandRole />
      <PermissionsExplained />
      <MinorsSafeguards />
      <JourneyHandoffs />
      <PrivacyChoice />
      <ShortAnswer />
      <LocationContext />
      <CaregiversFaq />
      <AccessibleHelp />
      <CaregiversCta />
    </main>
  );
}
