import { NavigationData } from "../../../../components/ui/MainNavigation/data/nav-types";

export function transformNavData(locale: string, navData: NavigationData) {
  return [
    { link: { path: "/" }, name: navData.home },
    { link: { path: "/kompetenzen" }, name: navData.expertise },
    { link: { path: "/leistungen" }, name: navData.services },
    { link: { path: "/team" }, name: navData.team },
    { link: { path: "/kontakt" }, name: navData.contact },
  ] as const;
}
