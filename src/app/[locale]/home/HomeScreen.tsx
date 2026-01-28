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
import ScrollToTop from "../../../components/ScrollToTop";
import { TeamAvaterImages } from "@/components/ui/Cards/TeamAvaterImages";
import TeamGreetingSection from "./components/TeamGreetingSection";
import ExpertiseHighlightSection from "./components/ExpertiseHighlightSection";

interface HomeScreenProps {
  data: HomePageData;
}

export default async function HomeScreen({ data }: HomeScreenProps) {
  if (!data) return null;



  const features = [
    {
      id: "1",
      icon: <FaFlask />,
      title: "Korrodierende Teile & Oberflächen",
      description:
        "Sie benötigen Unterstützung bei korrodierenden Teilen und Oberflächen?",
    },
    {
      id: "2",
      icon: <FaSearch />,
      title: "Kontaminationen aufklären",
      description:
        "Sie möchten Kontaminationen (z.B. in Schaltschränken) zielsicher aufklären?",
    },
    {
      id: "3",
      icon: <FaFire />,
      title: "Schadstoffanalyse nach Brandfall",
      description:
        "Sie wollen nach einem Brandfall bzw. einer Brandsanierung eine zuverlässige Schadstoffanalyse?",
    },
    {
      id: "4",
      icon: <FaIndustry />,
      title: "Experten an Ihrer Seite",
      description:
        "Sie wünschen sich bei chemischen Fragestellungen einen erfahrenen Experten an Ihrer Seite?",
    },
    {
      id: "5",
      icon: <FaProjectDiagram />,
      title: "Anlagenbau & Erweiterung",
      description:
        "Sie planen die Errichtung oder Erweiterung einer chemischen oder galvanotechnischen Anlage?",
    },
    {
      id: "6",
      icon: <FaRecycle />,
      title: "Chemikalien- & Umweltmanagement",
      description:
        "Sie suchen einen Experten für Ihr Chemikalien- und Umweltmanagement bzw. als HSE-Beauftragten?",
    },
    {
      id: "7",
      icon: <FaCube />,
      title: "Oberflächenfinishing 3D-Druck",
      description:
        "Sie benötigen das richtige Oberflächenfinishing für Ihre 3D-gedruckten Metallteile?",
    },
    {
      id: "8",
      icon: <FaChartLine />,
      title: "Investitions- & F&E-Projekte",
      description:
        "Sie wollen professionelle Unterstützung bei der Leitung von technischen Investitionsvorhaben und F&E-Projekten?",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute flex flex-col items-center justify-center min-h-screen w-full gap-20">
        <Image
          src={data.egmImages.zt.image}
          alt={"Bild ZT Elektrochemie"}
          width={200}
          height={250}
          className="object-cover rounded-full"
        />
        <h1 className="text-white text-center whitespace-pre-line lg:mx-14">
          {data.pageIntro}
        </h1>
      </div>
      <BackgroundClient />

      <div className="mx-20">
        <HeadlineText />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10  pt-10">
          {features.slice(0, 4).map((feature, index) => (
            <FeatureCard
              key={feature.id}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <SloganAnimation egmSlogan={data.egmSlogan} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10  pt-10">
          {features.slice(4).map((feature, index) => (
            <FeatureCard
              key={feature.id}
              index={index + 4}
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
      <ScrollToTop />
    </div>
  );
}
