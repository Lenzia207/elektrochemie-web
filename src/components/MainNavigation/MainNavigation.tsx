import ClientNavigation from "./components/ClientNavigation";
import fetchCommonData from "@/lib/data/common-data";
import { transformNavData } from "./utils/transform-nav-data";

interface MainNavigationProps {
  locale: string;
  /** Page starts with a dark hero: render the navigation transparent with white text until scrolled */
  trackHeaderOverlap?: boolean;
}

export default async function MainNavigation({
  locale,
  trackHeaderOverlap,
}: MainNavigationProps) {
  const { navLinks, labels, egmImages } = await fetchCommonData(locale);
  const navItems = transformNavData(locale, navLinks);

  return (
    <ClientNavigation
      navItems={navItems}
      labels={labels}
      logo={egmImages.logo}
      trackHeaderOverlap={trackHeaderOverlap}
    />
  );
}
