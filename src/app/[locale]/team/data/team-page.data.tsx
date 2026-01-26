
import { cache } from "react";
import { TeamPageData } from "./types/team-types";

/*
 * Fetches the translation data for the home page.
 * Using React cache() ensures the data is only fetched once per request
 * and reused across all components that need it.
 */
export const fetchTeamPageData = cache(async function (
  locale: string
): Promise<TeamPageData> {
  const [teamData] = await Promise.all([
    import(`../../../../../messages/${locale}/team.json`),
  ]);

  return {
    ...teamData.default.TeamPage,
  };
});

export default fetchTeamPageData;
