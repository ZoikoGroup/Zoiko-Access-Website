import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  NewsInsightsHero,
  StoriesForAudienceRow,
  AllArticlesGrid,
  EvidenceYouCanCheck,
  UpdatesByEmailBanner,
  NewsInsightsFaqSection,
  WhereToGoNextRoutes,
  ReviewedScopeCtaBanner,
} from "@/components/resources-news-and-insights";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "News and Insights | Resources | Zoiko Access",
  description:
    "Dated, reviewed updates and explanatory articles about Zoiko Access, healthcare navigation, accessibility and platform development.",
};

export default function ResourcesNewsAndInsightsPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <NewsInsightsHero />
      <StoriesForAudienceRow />
      <AllArticlesGrid />
      <EvidenceYouCanCheck />
      <UpdatesByEmailBanner />
      <NewsInsightsFaqSection />
      <WhereToGoNextRoutes />
      <ReviewedScopeCtaBanner />
    </main>
  );
}
