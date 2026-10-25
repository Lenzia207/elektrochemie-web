import { LocaleParams } from "@/i18n/local-params";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

import PageWrapper from "@/components/PageWrapper";
import KontaktScreen from "./KontaktScreen";
import fetchContactPageData from "./data/contact-data";
import fetchCommonData from "@/lib/data/common-data";


const Kontakt = async (props: LocaleParams) => {
  const { locale } = await props.params;

  const [data, common] = await Promise.all([
    fetchContactPageData(locale),
    fetchCommonData(locale),
  ]);
  

//   if (!data) return <div>Loading...</div>;
  return (
    <PageWrapper
      locale={locale}
      isNavTextOverlaping={true}
      pageContent={<KontaktScreen data={data} common={common} />}
    />
  );
};

export default Kontakt;
