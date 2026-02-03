import { LocaleParams } from "@/i18n/local-params";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

import PageWrapper from "@/components/PageWrapper";
import DataPrivacyScreen from "./DataPrivacyScreen";

/// TODO add Englisch Version of Imprint Screen
const DataPrivacyPage = async (props: LocaleParams) => {
  const { locale } = await props.params;

//   const data = await fetchHomePageData(locale);
  

//   if (!data) return <div>Loading...</div>;
  return (
    <PageWrapper
      locale={locale}
      isNavTextOverlaping={false}
      pageContent={<DataPrivacyScreen />}
    />
  );
};

export default DataPrivacyPage;
