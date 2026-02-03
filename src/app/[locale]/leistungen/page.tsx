import { LocaleParams } from "@/i18n/local-params";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

import PageWrapper from "@/components/PageWrapper";
import ServicesScreen from "./ServicesScreen";
import fetchServicesPageData from "./data/leistungen-data";
export const dynamic = "force-static";

const ServicesPage = async (props: LocaleParams) => {
  const { locale } = await props.params;

  const data = await fetchServicesPageData(locale);
  

  if (!data) return <div>Loading...</div>;
  return (
    <PageWrapper locale={locale} isNavTextOverlaping={true} pageContent={<ServicesScreen data={data} />} />
  );
};

export default ServicesPage;

