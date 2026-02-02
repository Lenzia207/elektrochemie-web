"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { TeamPageData, ScientificTeamMembersList } from "../data/types/team-types";

interface ScientificTeamProps {
  data: TeamPageData;
}

export default function ScientificTeam({ data }: ScientificTeamProps) {
  const { scientificTeam } = data;

  if (!scientificTeam) return null;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
        >
            <h2 className="lg:text-3xl text-2xl font-bold text-[#1f4f83] mb-8">
                {scientificTeam.title}
            </h2>
            <p className="text-gray-600 leading-relaxed lg:text-lg text-md text-justify">
                {scientificTeam.description}
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {scientificTeam.members.map((member, index) => (
                <ScientificMemberCard key={index} member={member} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
}

function ScientificMemberCard({ member, index }: { member: ScientificTeamMembersList; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col items-center text-center group"
    >
        {/* Image Container with 3D/Pop effect */}
        <a href={member.url} target="_blank" rel="noopener noreferrer" className="relative w-48 h-48 mb-6 mx-auto">
            <div className="absolute inset-0 rounded-full bg-white shadow-lg shadow-gray-200 transition-all duration-500 group-hover:shadow-xl group-hover:scale-105 group-hover:-translate-y-1" />
            <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-100">
                <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
        </a>

        <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1f4f83] transition-colors duration-300">
                {member.name}
            </h3>
            <p className="text-[#1f4f83] font-medium text-sm">
                {member.university}
            </p>
        </div>
    </motion.div>
  );
}

