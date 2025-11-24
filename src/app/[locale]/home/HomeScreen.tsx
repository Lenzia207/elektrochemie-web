import { HomePageData } from "./data/types/home-types";
import Image from "next/image";
import BackgroundClient from "./components/BackgroundClient";
import ProfileCard from "@/components/ui/Cards/ProfileCard";
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
  FaBalanceScale,
  FaAtom,
} from "react-icons/fa";
import SloganAnimation from "./components/SloganAnimation";
import HeadlineText from "@/components/ui/Texts/HeadlineText";
import ScrollToTop from "./components/ScrollToTop";

interface HomeScreenProps {
  data: HomePageData;
}

export default async function HomeScreen({ data }: HomeScreenProps) {
  if (!data) return null;

  const items = [
    {
      image: "/images/team/Wolfgang.png",
      title: "Mag. Dr. habil. Wolfgang Hansal",
      position: "Leiter des Instituts",
      hrefLinkedIn: "https://www.linkedin.com/in/wolfgang-hansal-76b55672/",
    },
    {
      image: "/images/team/Selma.jpg",
      title: "Mag. Dr. Selma Hansal",
      position: "Leiter des Instituts",
      hrefLinkedIn: "https://www.linkedin.com/in/wolfgang-hansal-76b55672/",
    },
    {
      image: "/images/team/Susanna.jpg",
      title: "Ing. Susanna Weiß",
      position: "Leiter des Instituts",
      hrefLinkedIn: "https://www.linkedin.com/in/wolfgang-hansal-76b55672/",
    },
  ];

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
          {data?.pageSlogan}
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
        <SloganAnimation />
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
        <div className="relative my-20 bg-gradient-to-r from-[#1f4f83d0] to-[#1f4f83] py-12 -mx-20">
          <div className="max-w-4xl mx-auto px-8">
            <p className="text-white text-center leading-relaxed md:text-xl">
              Ganz besonders möchten wir auf unsere Tätigkeit im Rahmen von{" "}
              <span className="font-bold">Sachverständigengutachten</span> sowie
              die Zusammenarbeit mit{" "}
              <span className="font-bold ">Rechtsanwälten</span> und{" "}
              <span className="font-bold ">Versicherungen</span> hinweisen.
            </p>
          </div>
        </div>

        <div className="text-center py-10 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-700 mb-6">
            Wir freuen uns darauf, für Sie da sein zu können!
          </p>
          <div className="licorice-regular text-3xl md:text-4xl text-[#1f4f83]">
            Ihr EGM Team
          </div>
        </div>
        <div className="flex flex-wrap py-20 justify-center gap-10">
          {items.map((item, index) => (
            <ProfileCard
              key={index}
              image={item.image}
              name={item.title}
              position={item.position}
              // hrefLinkedIn={item.hrefLinkedIn}
            />
          ))}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
