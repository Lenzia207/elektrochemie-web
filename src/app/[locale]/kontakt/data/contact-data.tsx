import { ContactPageData } from "./types/contact-types";

import { cache } from "react";

/*
 * Fetches the translation data for the home page.
 * Using React cache() ensures the data is only fetched once per request
 * and reused across all components that need it.
 */
export const fetchContactPageData = cache(async function (
  locale: string
): Promise<ContactPageData> {
  const [contactData] = await Promise.all([
    import(`../../../../../messages/${locale}/contact.json`),
  ]);

  return {
    ...contactData.default.ContactPage,
  };
});

export default fetchContactPageData;