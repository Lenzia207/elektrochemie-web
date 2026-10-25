import { HomePageData } from "./data/types/home-types";
import HomeHero from "./components/HomeHero";
import IntroSection from "./components/IntroSection";
import ConcernsSection from "./components/ConcernsSection";
import SloganBand from "./components/SloganBand";
import CompetencePreview from "./components/CompetencePreview";
import ExpertOpinionSection from "./components/ExpertOpinionSection";
import TeamPreview from "./components/TeamPreview";
import ContactBand from "./components/ContactBand";

interface HomeScreenProps {
  data: HomePageData;
}

export default async function HomeScreen({ data }: HomeScreenProps) {
  if (!data) return null;

  return (
    <>
      <HomeHero
        title={data.pageIntro}
        ztLogo={data.egmImages.zt}
        scrollDownLabel={data.labels.scrollDown}
      />
      <IntroSection headline={data.homeHeadline} intro={data.intro} />
      <ConcernsSection heading={data.concerns} features={data.features} />
      <SloganBand slogan={data.egmSlogan} />
      <CompetencePreview heading={data.competencePreview} competences={data.competenceList} />
      <ExpertOpinionSection data={data.expertOpinion} />
      <TeamPreview
        heading={data.teamPreview}
        members={data.teamMembers}
        welcomeEnd={data.egmWelcomeEnd}
      />
      <ContactBand heading={data.contactBand} contact={data.contact} />
    </>
  );
}
