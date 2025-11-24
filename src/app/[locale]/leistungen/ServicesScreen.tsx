"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ServicesPageData } from "./data/types/leistungen-types";
import Image from "next/image";
import ScrollToTop from "../home/components/ScrollToTop";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ExpertiseSection({
  expertise,
  index,
}: {
  expertise: {
    expertiseTitle: string;
    expertiseDescription: string;
    image: string;
  };
  index: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  const isEven = index % 2 === 0;

  return (
    <section
      className={`min-h-screen flex flex-col ${
        isEven
          ? "flex-col-reverse md:flex-row-reverse"
          : "flex-col-reverse md:flex-row"
      } justify-center items-center relative py-16 px-8 gap-8 md:gap-16`}
    >
      {/* Large Background Number */}
      <div className="absolute top-8 left-8 text-[200px] md:text-[300px] font-bold text-gray-100 opacity-20 leading-none pointer-events-none select-none">
        {String(index + 1).padStart(3, "00")}
      </div>

      <div
        ref={ref}
        className="w-full max-w-md h-[600px] bg-gray-100 overflow-hidden rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative"
      >
        <Image
          src={expertise.image}
          alt={expertise.expertiseTitle}
          width={400}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <motion.div
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className="flex-1 max-w-2xl relative"
      >
        <div className="flex items-start gap-8">
          {/* Side Number */}
          <div className="text-6xl font-bold text-[#1f4f83]/20 leading-none">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#1f4f83] mb-4">
              {expertise.expertiseTitle}
            </h2>
            <p className="text-gray-700 text-balance leading-relaxed">
              {expertise.expertiseDescription}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

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

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      <div className="min-h-screen flex flex-col items-center justify-center px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-[#1f4f83] text-center mb-6">
          {data.pageTitle}
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl">
          {data.pageDescription}
        </p>
      </div>

      {data.expertiseList.map((expertise, index) => (
        <ExpertiseSection key={index} expertise={expertise} index={index} />
      ))}

      <ScrollToTop />
      <motion.div
        className="fixed left-0 right-0 h-[5px] bg-[#1f4f83] bottom-0 z-50 origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
