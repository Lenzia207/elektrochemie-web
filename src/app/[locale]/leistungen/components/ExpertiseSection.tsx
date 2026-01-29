"use client";

import { ExpertiseSectionMobile } from "./ExpertiseSectionMobile";
import { ExpertiseSectionDesktop } from "./ExpertiseSectionDesktop";

export interface SectionItem {
  title: string;
  description: string;
  image: string;
}

interface ExpertiseSectionProps {
  item: SectionItem;
  index: number;
}

export function ExpertiseSection({ item, index }: ExpertiseSectionProps) {
  return (
    <>
      <div className="md:hidden">
        <ExpertiseSectionMobile item={item} index={index} />
      </div>

      <ExpertiseSectionDesktop item={item} index={index} />
    </>
  );
}