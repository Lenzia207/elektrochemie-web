/**
 * Type declarations for the services page.
 */
export interface ServicesPageData {
  pageTitle: string;
  pageDescription: string;
  overviewLabel: string;
  featuredLabel: string;
  featuredLinkLabel: string;
  ctaTitle: string;
  expertiseList: ExpertiseList[];
}

export interface ExpertiseList {
  /** Label used in the overview list */
  shortTitle: string;
  expertiseTitle: string;
  expertiseDescription: string[];
  image: string;
  imageAlt: string;
  /** Highlighted as a dark card with a contact button */
  featured?: boolean;
}
