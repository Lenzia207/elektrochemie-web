import { NavigationData } from "../../../../components/ui/MainNavigation/data/nav-types";

export function transformNavData(navData: NavigationData) {
  return [
    { link: "/", name: navData.home },
    { link: "/expertise", name: navData.expertise },
    { link: "/services", name: navData.services },
    { link: "/team", name: navData.team },
    { link: "/kontakt", name: navData.contact },
  ] as const;
}
