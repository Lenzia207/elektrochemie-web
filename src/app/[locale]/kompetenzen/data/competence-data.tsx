import { CompetencePageData } from "./types/competence-types";

import { cache } from "react";

/*
 * Fetches the translation data for the home page.
 * Using React cache() ensures the data is only fetched once per request
 * and reused across all components that need it.
 */
export const fetchCompetencePageData = cache(async function (
  locale: string
): Promise<CompetencePageData> {
  const [competenceData] = await Promise.all([
    import(`../../../../../messages/${locale}/competence.json`),
  ]);

  return {
    ...competenceData.default.CompetencePage,
  };
});

export default fetchCompetencePageData;