import { LocaleParams } from "@/i18n/local-params";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

import PageWrapper from "@/components/PageWrapper";
import TeamScreen from "./TeamScreen";
import fetchTeamPageData from "./data/team-page.data";


const TeamPage = async (props: LocaleParams) => {
  const { locale } = await props.params;

  const data = await fetchTeamPageData(locale);
  

  if (!data) return <div>Loading...</div>;
  return (
    <PageWrapper locale={locale} isNavTextOverlaping={true}
      pageContent={<TeamScreen data={data} />} />
  );
};

export default TeamPage;

