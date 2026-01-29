"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { SectionItem } from "./ExpertiseSection";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface ExpertiseSectionDesktopProps {
  item: SectionItem;
  index: number;
}

export function ExpertiseSectionDesktop({
  item,
  index,
}: ExpertiseSectionDesktopProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  const isEven = index % 2 === 0;

  return (
    <section
      className={`hidden md:flex md:min-h-[40vh] lg:min-h-screen flex-col ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      } justify-center items-center relative px-6 lg:px-12 gap-4 lg:gap-16 overflow-hidden`}
    >
      {/* Large Background Number */}
      <div className="absolute top-4 left-4 lg:top-8 lg:left-8 text-[150px] lg:text-[300px] font-bold text-gray-100 opacity-20 leading-none pointer-events-none select-none">
        {String(index + 1).padStart(3, "00")}
      </div>

      <div
        ref={ref}
        className="w-full md:w-1/2 max-w-xl h-[400px] lg:h-[600px] bg-gray-100 overflow-hidden rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative"
      >
        <Image
          src={item.image}
          alt={item.title}
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <motion.div
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className="flex-1 md:w-1/2 max-w-2xl relative"
      >
        <div className="flex items-start gap-4 lg:gap-8">
          {/* Side Number */}
          <div className="text-4xl lg:text-6xl font-bold text-[#1f4f83]/20 leading-none">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold text-[#1f4f83] mb-4">
              {item.title}
            </h2>
            <p className="text-gray-700 text-sm lg:text-base text-balance leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
