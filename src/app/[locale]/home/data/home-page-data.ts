import { HomePageData } from "./types/home-types";
import fetchCommonData from "@/lib/data/common-data";
import fetchCompetencePageData from "../../kompetenzen/data/competence-data";
import fetchContactPageData from "../../kontakt/data/contact-data";

import { cache } from "react";

/*
 * Fetches the translation data for the home page.
 * Using React cache() ensures the data is only fetched once per request
 * and reused across all components that need it.
 */
export const fetchHomePageData = cache(async function (
  locale: string
): Promise<HomePageData> {
  const [homeData, common, competence, contact] = await Promise.all([
    import(`../../../../../messages/${locale}/home.json`),
    fetchCommonData(locale),
    fetchCompetencePageData(locale),
    fetchContactPageData(locale),
  ]);

  return {
    ...homeData.default.HomePage,
    egmImages: common.egmImages,
    labels: common.labels,
    competenceList: competence.competenceList,
    contact,
  };
});

export default fetchHomePageData;
