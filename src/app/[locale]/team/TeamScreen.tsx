"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { TeamPageData, TeamMembersList, InfoCertificates } from "./data/types/team-types";
import CertificateSection from "./components/CertificateSection";
import TeamImageHeader from "./components/TeamImageHeader";
import { TeamMemberCard } from "./components/TeamMemberCard";
import ScientificTeam from "./components/ScientificTeam";

interface TeamScreenProps {
  data: TeamPageData;
}

export default function TeamScreen({ data }: TeamScreenProps) {


  if (!data) return null;

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Full Screen Header with Parallax & Title */}
      <TeamImageHeader data={data} />

      {/* Team Members Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 gap-y-16">
          {data.teamMemberList.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </section>

      <CertificateSection data={data} />
      <ScientificTeam data={data} />
    </div>
  );
}