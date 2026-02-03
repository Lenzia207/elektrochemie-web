import ClientNavigation from "./components/ClientNavigation";
import { fetchLocaleNavText } from "./data/fetch-locale-nav-text";
import { transformNavData } from "./utils/transform-nav-data";

interface MainNavigationProps {
  locale: string;
  trackHeaderOverlap?: boolean;
}

export default async function MainNavigation({
  locale,
  trackHeaderOverlap,
}: MainNavigationProps) {
  const navData = await fetchLocaleNavText(locale);
  const navItems = transformNavData(locale, navData);

  return (
    <ClientNavigation
      navItems={navItems}
      trackHeaderOverlap={trackHeaderOverlap}
    />
  );
}
