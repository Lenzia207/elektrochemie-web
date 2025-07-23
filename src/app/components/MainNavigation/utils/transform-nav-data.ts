import { NavigationData } from "../data/nav-types";

export function transformNavData(navData: NavigationData) {
  return [
    { href: "/", label: navData.home },
    { href: "/expertise", label: navData.expertise },
    { href: "/services", label: navData.services },
    { href: "/team", label: navData.team },
    { href: "/kontakt", label: navData.contact },
  ] as const;
}
