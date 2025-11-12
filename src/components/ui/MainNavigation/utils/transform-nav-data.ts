import { NavigationData } from "../../../../components/ui/MainNavigation/data/nav-types";

export function transformNavData(locale: string, navData: NavigationData) {
  return [
    { link: { locale, path: "/" }, name: navData.home },
    { link: { locale, path: "/expertise" }, name: navData.expertise },
    { link: { locale, path: "/services" }, name: navData.services },
    { link: { locale, path: "/team" }, name: navData.team },
    { link: { locale, path: "/kontakt" }, name: navData.contact },
  ] as const;
}
