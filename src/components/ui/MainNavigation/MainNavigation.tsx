import ClientNavigation from "./components/ClientNavigation";
import { fetchLocaleNavText } from "./data/fetch-locale-nav-text";
import { transformNavData } from "./utils/transform-nav-data";

interface MainNavigationProps {
  locale: string;
}

export default async function MainNavigation({ locale }: MainNavigationProps) {
  const navData = await fetchLocaleNavText(locale);
  const navItems = transformNavData(navData);

  return <ClientNavigation navItems={[...navItems]} />;
}
