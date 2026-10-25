import { LocaleParams } from "@/i18n/local-params";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

import PageWrapper from "@/components/PageWrapper";
import ServicesScreen from "./ServicesScreen";
import fetchServicesPageData from "./data/leistungen-data";
import fetchCommonData from "@/lib/data/common-data";
export const dynamic = "force-static";

const ServicesPage = async (props: LocaleParams) => {
  const { locale } = await props.params;

  const [data, common] = await Promise.all([
    fetchServicesPageData(locale),
    fetchCommonData(locale),
  ]);
  

  if (!data) return <div>Loading...</div>;
  return (
    <PageWrapper locale={locale} isNavTextOverlaping={true} pageContent={<ServicesScreen data={data} common={common} />} />
  );
};

export default ServicesPage;

