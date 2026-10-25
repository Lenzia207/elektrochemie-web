import PageWrapper from "@/components/PageWrapper";
import { LocaleParams } from "@/i18n/local-params";
import fetchCommonData from "@/lib/data/common-data";
import CompetenceScreen from "./CompetenceScreen";
import fetchCompetencePageData from "./data/competence-data";
export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

const KompetenzenPage = async (props: LocaleParams) => {
    const { locale } = await props.params;

     const [data, common] = await Promise.all([
       fetchCompetencePageData(locale),
       fetchCommonData(locale),
     ]);


     if (!data) return <div>Loading...</div>;
     return (
       <PageWrapper locale={locale} isNavTextOverlaping={true} pageContent={<CompetenceScreen data={data} common={common} />} />
     );
}

export default KompetenzenPage;
