import { HomePageData } from "./data/types/home-types";
import Image from "next/image";
import BackgroundClient from "./components/BackgroundClient";
import FeatureCard from "@/components/ui/Cards/FeaturCard";

import {
  FaFlask,
  FaSearch,
  FaFire,
  FaIndustry,
  FaProjectDiagram,
  FaRecycle,
  FaCube,
  FaChartLine,

} from "react-icons/fa";
import SloganAnimation from "./components/SloganAnimation";
import HeadlineText from "@/components/ui/Texts/HeadlineText";
import { TeamAvaterImages } from "@/components/ui/Cards/TeamAvaterImages";
import TeamGreetingSection from "./components/TeamGreetingSection";
import ExpertiseHighlightSection from "./components/ExpertiseHighlightSection";

interface HomeScreenProps {
  data: HomePageData;
}

export default async function HomeScreen({ data }: HomeScreenProps) {
  if (!data) return null;

  const iconComponents = [
    FaFlask,
    FaSearch,
    FaFire,
    FaIndustry,
    FaProjectDiagram,
    FaRecycle,
    FaCube,
    FaChartLine,
  ];

  const features = data.features.map((feature, index) => {
    const IconComponent = iconComponents[index];
    return {
      ...feature,
      icon: <IconComponent />,
    };
  });

  return (
    <div className="relative">
      <div className="absolute flex flex-col items-center justify-center min-h-screen w-full lg:gap-20 gap-10">
        <Image
          src={data.egmImages.zt.image}
          alt={"Bild ZT Elektrochemie"}
          width={200}
          height={250}
          className="object-cover rounded-full"
        />
        <h1 className="text-white lg:text-5xl text-3xl lg:leading-20 text-center whitespace-pre-line lg:mx-8">
          {data.pageIntro}
        </h1>
      </div>
      <BackgroundClient />

      <div className="lg:mx-20 md:mx-10">
        <HeadlineText />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10 px-10 pt-10">
          {features.slice(0, 4).map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <SloganAnimation egmSlogan={data.egmSlogan} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10  px-10 pt-10">
          {features.slice(4).map((feature, index) => (
            <FeatureCard
              key={index + 4}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <ExpertiseHighlightSection text={data.expertiseHighlight} />

        <TeamGreetingSection
          welcomeMessage={data.egmWelcomeEnd[0]}
          teamSignature={data.egmWelcomeEnd[1]}
        />
        <div className="flex flex-wrap py-2 justify-center gap-10">
          <TeamAvaterImages teamMembers={data.teamMembers} />
        </div>
      </div>
    </div>
  );
}
