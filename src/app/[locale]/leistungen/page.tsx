import { LocaleParams } from "@/i18n/local-params";

import PageWrapper from "@/components/PageWrapper";
import ServicesScreen from "./ServicesScreen";
import fetchServicesPageData from "./data/leistungen-page.data";

const ServicesPage = async (props: LocaleParams) => {
  const { locale } = await props.params;

  const data = await fetchServicesPageData(locale);
  console.log(locale);

  if (!data) return <div>Loading...</div>;
  return (
    <PageWrapper locale={locale} pageContent={<ServicesScreen data={data} />} />
  );
};

export default ServicesPage;

