import { LocaleParams } from "@/i18n/local-params";

import PageWrapper from "@/components/PageWrapper";
import fetchHomePageData from "../home/data/home-page-data";

const Home = async (props: LocaleParams) => {
  const { locale } = await props.params;

  const data = await fetchHomePageData(locale);
  console.log(locale);

  if (!data) return <div>Loading...</div>;
  return <PageWrapper locale={locale} pageContent={<div>Leistungen</div>} />;
};

export default Home;
