import { LocaleParams } from "@/i18n/local-params";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import fetchCommonData from "@/lib/data/common-data";
import HomeScreen from "./home/HomeScreen";
import fetchHomePageData from "./home/data/home-page-data";
import PageWrapper from "@/components/PageWrapper";
export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  const { locale } = await props.params;
  const { meta } = await fetchCommonData(locale);
  return pageMetadata({ locale, path: "", title: meta.homeTitle, description: meta.homeDescription, absoluteTitle: true });
}

const Home = async (props: LocaleParams) => {
  const { locale } = await props.params;

  const data = await fetchHomePageData(locale);
  

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
