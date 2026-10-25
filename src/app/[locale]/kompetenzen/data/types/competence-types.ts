/**
 * Type declarations for the competence page.
 */
export interface CompetencePageData {
  pageTitle: string;
  pageDescription: string;
  ctaTitle: string;
  competenceList: CompetenceList[];
}

export interface CompetenceList {
  /** Anchor id, used for the jump links */
  id: string;
  /** Element-style abbreviation shown in the tiles, e.g. "Ga" */
  symbol: string;
  shortTitle: string;
  competenceTitle: string;
  /** One-line summary for the home page preview */
  teaser: string;
  competenceDescription: string[];
  image: string;
  imageAlt: string;
}
