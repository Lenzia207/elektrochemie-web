import { LocaleParams } from "@/i18n/local-params";
import HomeScreen from "./home/HomeScreen";
import fetchHomePageData from "./home/data/home-page-data";
import PageWrapper from "@/components/PageWrapper";

const Home = async (props: LocaleParams) => {
  const { locale } = await props.params;

  const data = await fetchHomePageData(locale);
  console.log(locale);

  if (!data) return <div>Loading...</div>;
  return (
    <PageWrapper
      locale={locale}
      isNavTextOverlaping={true}
      pageContent={<HomeScreen data={data} />}
    />
  );
};

export default Home;
