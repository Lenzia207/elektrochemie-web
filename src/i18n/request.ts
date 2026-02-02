import { getRequestConfig } from "next-intl/server";
import { Locale, routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: {
      ...(await import(`../../messages/${locale}/home.json`)).default,
      ...(await import(`../../messages/${locale}/services.json`)).default,
      ...(await import(`../../messages/${locale}/team.json`)).default,
      ...(await import(`../../messages/${locale}/contact.json`)).default,
      // ...(await import(`../../messages/${locale}/imprint.json`)).default,
      // ...(await import(`../../messages/${locale}/privacy.json`)).default,
    },
  };
});
