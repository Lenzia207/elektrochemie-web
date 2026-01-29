"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { SectionItem } from "./ExpertiseSection";

interface ExpertiseSectionMobileProps {
  item: SectionItem;
  index: number;
}

export function ExpertiseSectionMobile({
  item,
  index,
}: ExpertiseSectionMobileProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg space-y-8 relative z-10"
      >
        {/* Image Container with Overlay Content */}
        <div className="relative w-full h-[500px] bg-gray-100 overflow-hidden rounded-xl shadow-xl">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
          
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f4f83] via-transparent to-transparent opacity-90" />
          
          {/* Text Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end gap-2">
             <div className="text-6xl font-bold text-white leading-none">
                {String(index + 1).padStart(2, "0")}
             </div>
             <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight shadow-sm hyphens-auto break-words">
               {item.title}
             </h2>
          </div>
        </div>

        {/* Description Text */}
        <div className="px-2">
          <p className="text-gray-700 leading-relaxed text-lg hyphens-auto break-words">
            {item.description}
          </p>
        </div>
      </motion.div>
    </section>
  );
}