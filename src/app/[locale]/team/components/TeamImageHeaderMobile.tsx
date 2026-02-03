"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { TeamPageData } from "../data/types/team-types";

export default function TeamImageHeaderMobile({ data, className }: { data: TeamPageData; className?: string }) {
    return (
        <section className={`relative w-full h-[40vh] mb-4  bg-[#0d2642] ${className ?? ""}`}>
            {/* Static Image for Mobile Performance */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={data.teamImage}
                    alt="Team ZT Elektrochemie"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Stronger overlay for mobile text readability */}
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1f4f83] via-[#1f4f83]/60 to-transparent" />

                {/* Title Content */}
                <div className="absolute inset-0 flex items-end justify-center z-10 pb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center px-6"
                    >
                        <h3 className=" font-bold text-white drop-shadow-lg tracking-tight">
            {data.pageTitle}
          </h3>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
