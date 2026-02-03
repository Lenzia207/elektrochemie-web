"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { TeamPageData } from "../data/types/team-types";

export default function TeamImageHeaderDesktop({ data, className }: { data: TeamPageData; className?: string }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <section
      ref={containerRef}
      className={`relative w-full h-screen mb-24 overflow-hidden ${className ?? ""}`} // Hidden on mobile
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute inset-0 h-[120%] w-full"
      >
        <Image
          src={data.teamImage}
          alt="Team ZT Elektrochemie"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for depth */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Bottom Gradient for smooth transition */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#1f4f83]/90 via-transparent to-transparent" />
      </motion.div>

      {/* Title Content */}
      <div className="absolute inset-0 flex items-end justify-center z-10 mb-20">
        <motion.div style={{ scale: scaleAnim }} className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg tracking-tight mb-4">
            {data.pageTitle}
          </h1>
          {/* Optional decorative line */}
          {/* <div className="h-1.5 w-24 bg-white/80 mx-auto rounded-full mt-6 shadow-lg" /> */}
        </motion.div>
      </div>
    </section>
  );
}
