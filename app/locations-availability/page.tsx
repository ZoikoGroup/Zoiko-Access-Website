import {
  LocationsHero,
  AvailabilityModel,
  ChooseLocation,
  BrowseLocations,
  ServiceLevels,
  ServiceLimits,
  Evidence,
  NotListed,
  NextSteps,
  LocationsFaq,
  LocationsCta,
} from "@/components/locations-availability";
import { Inter, Sora } from "next/font/google";

// The Figma design for this page uses Inter for text and Sora for headings.
const inter = Inter({ subsets: ["latin"] });
const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-sora",
});

export default function LocationsAvailabilityPage() {
  return (
    <main className={`${inter.className} ${sora.variable}`}>
      <LocationsHero />
      <AvailabilityModel />
      <ChooseLocation />
      <BrowseLocations />
      <ServiceLevels />
      <ServiceLimits />
      <Evidence />
      <NotListed />
      <NextSteps />
      <LocationsFaq />
      <LocationsCta />
    </main>
  );
}
