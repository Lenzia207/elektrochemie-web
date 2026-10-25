import { cache } from "react";

export interface NavLinksData {
  home: string;
  expertise: string;
  services: string;
  team: string;
  contact: string;
}

export interface UiLabelsData {
  breadcrumb: string;
  mainNavigation: string;
  openMenu: string;
  closeMenu: string;
  switchLanguage: string;
  scrollDown: string;
  logoTagline: string;
  contactCta: string;
}

export interface EgmImageData {
  image: string;
  alt: string;
}

export interface CommonData {
  navLinks: NavLinksData;
  labels: UiLabelsData;
  egmImages: {
    logo: EgmImageData;
    zt: EgmImageData;
    adler: EgmImageData;
  };
}

/*
 * Fetches the texts shared by all pages (navigation labels, UI labels, logos).
 * Using React cache() ensures the data is only fetched once per request.
 */
export const fetchCommonData = cache(async function (
  locale: string
): Promise<CommonData> {
  const commonData = await import(`../../../messages/${locale}/common.json`);

  return {
    navLinks: commonData.default.NavLinks,
    labels: commonData.default.UiLabels,
    egmImages: commonData.default.EgmImages,
  };
});

export default fetchCommonData;
