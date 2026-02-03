import { LocaleParams } from "@/i18n/local-params";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

import PageWrapper from "@/components/PageWrapper";
import ImprintScreen from "./ImprintScreen";

export const dynamic = "force-static";


/// TODO add Englisch Version of Imprint Screen
const Imprint = async (props: LocaleParams) => {
  const { locale } = await props.params;

//   const data = await fetchHomePageData(locale);
  

//   if (!data) return <div>Loading...</div>;
  return (
    <PageWrapper
      locale={locale}
      isNavTextOverlaping={false}
      pageContent={<ImprintScreen />}
    />
  );
};

export default Imprint;
