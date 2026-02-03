import { LocaleParams } from "@/i18n/local-params";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

import PageWrapper from "@/components/PageWrapper";
import KontaktScreen from "./KontaktScreen";
import fetchContactPageData from "./data/contact-data";


const Kontakt = async (props: LocaleParams) => {
  const { locale } = await props.params;

  const data = await fetchContactPageData(locale);
  console.log(locale);

//   if (!data) return <div>Loading...</div>;
  return (
    <PageWrapper
      locale={locale}
      isNavTextOverlaping={false}
      pageContent={<KontaktScreen data={data} />}
    />
  );
};

export default Kontakt;
