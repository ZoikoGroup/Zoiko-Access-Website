import type { Metadata } from "next";
import {
  FindCareHero,
  CareLocation,
  ReliableSource,
  EducationalGuides,
  ListingExplainer,
  FutureSearch,
  SafetyPrivacy,
  FindCareFaq,
  FindCareCta,
} from "@/components/find-care";
import {
  inter,
  poppins,
  sora,
  fontInter,
} from "@/components/find-care/fonts";

export const metadata: Metadata = {
  title: "Find Care | Zoiko Access",
  description:
    "Learn how to find care with Zoiko Access. Understand location context, service types, and what an approved, source-backed directory listing should explain.",
};

export default function FindCarePage() {
  return (
    <main
      className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}
    >
      <FindCareHero />
      <CareLocation />
      <ReliableSource />
      <EducationalGuides />
      <ListingExplainer />
      <FutureSearch />
      <SafetyPrivacy />
      <FindCareFaq />
      <FindCareCta />
    </main>
  );
}
