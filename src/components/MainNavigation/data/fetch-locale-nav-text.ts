import { NavigationData } from "./nav-types";

/*
 * Fetches the translation data for the about-us page.
 */
export async function fetchLocaleNavText(
  locale: string
): Promise<NavigationData> {
  const navLinks = await import(
    `../../../../messages/${locale}/common.json`
  );
  return navLinks.default.NavLinks;
}
