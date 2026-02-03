import { NavigationData } from "../data/nav-types";
import { NavigationItem } from "../types";

/**
 * Transform navigation data using pathname keys.
 * next-intl's Link component will automatically translate these to locale-specific URLs:
 * - German: /kompetenzen -> /de/kompetenzen
 * - English: /kompetenzen -> /en/expertise
 */
export function transformNavData(locale: string, navData: NavigationData): NavigationItem[] {
  return [
    { link: "/", name: navData.home },
    { link: "/kompetenzen", name: navData.expertise },
    { link: "/leistungen", name: navData.services },
    { link: "/team", name: navData.team },
    { link: "/kontakt", name: navData.contact },
  ];
}
