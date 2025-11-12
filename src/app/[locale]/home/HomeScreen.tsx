import { HomePageData } from "./types/home-types";
import Image from "next/image";
import BackgroundClient from "./components/BackgroundClient";
import CardSwap, { Card } from "@/components/CardSwap";
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
} from "react-icons/fa";
import { TextWriterEffect } from "@/components/ui/Texts/TextWriter";

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
        <p className="text-white title-xxl text-center whitespace-pre-line">
          {data?.pageSlogan}
        </p>
      </div>
      <BackgroundClient />

      <div className="px-10">
        <TextWriterEffect
          words="Willkommen am EGM, dem Institut für Elektrochemie, Galvanotechnik und Materialchemie. Chemie ist überall und wir leben Chemie."
          textCenter
        />

        {/* <h1 className="ml-10 title-xl">
        Chemie ist überall und wir leben Chemie.
      </h1> */}
        {/* <h1 className="ml-10 title-xxl">
          Willkommen am EGM, dem Institut für Elektrochemie, Galvanotechnik und
          Materialchemie.
        </h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10  pt-10">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
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
    </div>
  );
}
