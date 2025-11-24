import { ServicesPageData } from "./types/leistungen-types";

import { cache } from "react";

/*
 * Fetches the translation data for the home page.
 * Using React cache() ensures the data is only fetched once per request
 * and reused across all components that need it.
 */
export const fetchServicesPageData = cache(async function (
  locale: string
): Promise<ServicesPageData> {
  const [servicesData] = await Promise.all([
    import(`../../../../../messages/${locale}/services.json`),
  ]);

  return {
    ...servicesData.default.ServicesPage,
  };
});

export default fetchServicesPageData;
