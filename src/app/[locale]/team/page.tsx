import { LocaleParams } from "@/i18n/local-params";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

import PageWrapper from "@/components/PageWrapper";
import TeamScreen from "./TeamScreen";
import fetchTeamPageData from "./data/team-page.data";
import fetchCommonData from "@/lib/data/common-data";


export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  const { locale } = await props.params;
  const data = await fetchTeamPageData(locale);
  return pageMetadata({ locale, path: "team", title: data.pageTitle, description: data.metaDescription });
}

const TeamPage = async (props: LocaleParams) => {
  const { locale } = await props.params;

  const [data, common] = await Promise.all([
    fetchTeamPageData(locale),
    fetchCommonData(locale),
  ]);
  

  if (!data) return <div>Loading...</div>;
  return (
    <PageWrapper locale={locale} isNavTextOverlaping={true}
      pageContent={<TeamScreen data={data} common={common} />} />
  );
};

export default TeamPage;

