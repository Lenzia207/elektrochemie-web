"use client";

import {
  motion,
  useScroll,
  useSpring,
} from "motion/react";
import { ServicesPageData } from "./data/types/leistungen-types";
import { ExpertiseSection } from "./components/ExpertiseSection";
import PageImageHeader from "@/components/PageImageHeader";

interface ServicesPageProps {
  data: ServicesPageData;
}

export default function ServicesScreen({ data }: ServicesPageProps) {
  if (!data) return null;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  return (
    <div>
      <PageImageHeader imageSrc="/images/leistungen/header-leistungen.jpg" altText="Bild ZT Elektrochemie" title={data.pageTitle} />
      <div>
        {data.expertiseList.map((expertise, index) => (
          <ExpertiseSection
            key={index}
            item={{
              title: expertise.expertiseTitle,
              description: expertise.expertiseDescription,
              image: expertise.image,
            }}
            index={index}
          />
        ))}

        <motion.div
          className="fixed left-0 right-0 h-[5px] bg-[#1f4f83] bottom-0 z-50 origin-left"
          style={{ scaleX }}
        />
      </div>
    </div>
  );
}
