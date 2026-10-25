import { LocaleParams } from "@/i18n/local-params";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import fetchCommonData from "@/lib/data/common-data";
import fetchFooterData from "@/components/Footer/footer-data";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

import PageWrapper from "@/components/PageWrapper";
import DataPrivacyScreen from "./DataPrivacyScreen";

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  const { locale } = await props.params;
  const [footer, { meta }] = await Promise.all([fetchFooterData(locale), fetchCommonData(locale)]);
  return pageMetadata({ locale, path: "datenschutz", title: footer.privacyPolicy, description: meta.privacyDescription });
}

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
