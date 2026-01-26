"use client";

import {
  motion,
  useScroll,
  useSpring,
} from "motion/react";
import { ServicesPageData } from "./data/types/leistungen-types";
import ScrollToTop from "../home/components/ScrollToTop";
import { ExpertiseSection } from "./components/ExpertiseSection";
import Image from "next/image";
import BackgroundClient from "../home/components/BackgroundClient";



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
    <>
      <div className="relative min-h-screen w-full">
        {/* Background Image */}
        <Image
          src={"/images/leistungen/header-leistungen.jpg"}
          alt={"Bild ZT Elektrochemie"}
          fill
          className="object-cover"
          priority
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-[1]" />

        {/* Content Layer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
            {data.pageTitle}
          </h1>
          <p className="text-xl text-white text-center max-w-3xl">
            {data.pageDescription}
          </p>
        </div>
      </div>

      <div>

        {data.expertiseList.map((expertise, index) => (
          <ExpertiseSection key={index} expertise={expertise} index={index} />
        ))}

        <motion.div
          className="fixed left-0 right-0 h-[5px] bg-[#1f4f83] bottom-0 z-50 origin-left"
          style={{ scaleX }}
        />
        <ScrollToTop />
      </div>
    </>
  );
}
