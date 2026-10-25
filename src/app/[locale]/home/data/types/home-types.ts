/**
 * Type declarations for the home page.
 */
import { CompetenceList } from "../../../kompetenzen/data/types/competence-types";
import { ContactInfo } from "../../../kontakt/data/types/contact-types";
import { EgmImageData, UiLabelsData } from "@/lib/data/common-data";

export interface HomePageData {
  pageIntro: string;
  homeHeadline: HomeHeadline;
  intro: HomeIntro;
  concerns: SectionHeading;
  features: Feature[];
  egmSlogan: string[];
  competencePreview: SectionHeading;
  expertOpinion: ExpertOpinion;
  teamPreview: SectionHeading;
  teamMembers: TeamMember[];
  egmWelcomeEnd: string[];
  contactBand: SectionHeading;
  // Merged in from other message files
  egmImages: EgmImagesData;
  labels: UiLabelsData;
  competenceList: CompetenceList[];
  contact: ContactInfo;
}

export interface HomeHeadline {
  welcomeText: string;
  descriptionText: string[];
}

export interface HomeIntro {
  description: string;
  stats: { value: string; label: string }[];
  certification: { title: string; subtitle: string };
}

export interface SectionHeading {
  eyebrow: string;
  title: string;
  linkLabel?: string;
}

export interface Feature {
  symbol: string;
  title: string;
  description: string;
}

export interface ExpertOpinion extends SectionHeading {
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
}

export interface EgmImagesData {
  logo: EgmImageData;
  zt: EgmImageData;
  adler: EgmImageData;
}

export interface TeamMember {
  image: string;
  name: string;
  role: string;
}
