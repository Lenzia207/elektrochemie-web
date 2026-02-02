/**
 * Type declarations for the home page.
 */
export interface ServicesPageData {
  pageTitle: string;
  expertiseList: ExpertiseList[];
}

export interface ExpertiseList {
  expertiseTitle: string;
  expertiseDescription: string;
  image: string;
}
