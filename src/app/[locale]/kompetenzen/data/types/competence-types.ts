/**
 * Type declarations for the home page.
 */
export interface CompetencePageData {
  pageTitle: string;
  pageDescription: string;
  competenceList: CompetenceList[];
}

export interface CompetenceList {
  competenceTitle: string;
  competenceDescription: string;
  image: string;
}
