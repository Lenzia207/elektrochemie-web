import PageWrapper from "@/components/PageWrapper";
import { LocaleParams } from "@/i18n/local-params";
import CompetenceScreen from "./CompetenceScreen";
import fetchCompetencePageData from "./data/competence-data";

const KompetenzenPage = async (props: LocaleParams) => {
    const { locale } = await props.params;
   
     const data = await fetchCompetencePageData(locale);
     console.log(locale);
   
     if (!data) return <div>Loading...</div>;
     return (
       <PageWrapper locale={locale} isNavTextOverlaping={true} pageContent={<CompetenceScreen data={data} />} />
     );
}

export default KompetenzenPage;