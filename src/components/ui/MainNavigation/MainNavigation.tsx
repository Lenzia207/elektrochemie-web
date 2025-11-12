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

  // Map link object to string (e.g., using path)
  const mappedNavItems = navItems.map((item) => ({
    ...item,
    link: item.link.path, // or construct a string as needed
  }));

  return (
    <ClientNavigation
      navItems={mappedNavItems}
      trackHeaderOverlap={trackHeaderOverlap}
    />
  );
}
