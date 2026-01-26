"use client";

import { ExpertiseSectionMobile } from "./ExpertiseSectionMobile";
import { ExpertiseSectionDesktop } from "./ExpertiseSectionDesktop";
import { ExpertiseList } from "../data/types/leistungen-types";

interface ExpertiseSectionProps {
  expertise: ExpertiseList;
  index: number;
}

export function ExpertiseSection({ expertise, index }: ExpertiseSectionProps) {
  return (
    <>
      <div className="md:hidden">
        <ExpertiseSectionMobile expertise={expertise} index={index} />
      </div>

      <ExpertiseSectionDesktop expertise={expertise} index={index} />
    </>
  );
}