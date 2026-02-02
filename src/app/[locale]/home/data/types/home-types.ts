/**
 * Type declarations for the home page.
 */
export interface HomePageData {
  pageIntro: string;
  egmImages: EgmImagesData;
  egmSlogan: string[];
  expertiseHighlight: string;
  egmWelcomeEnd: string[];
  teamMembers: TeamMember[];
  features: Feature[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
}

export interface EgmImagesData {
  logo: {
    image: string;
    alt: string;
  };
  zt: {
    image: string;
    alt: string;
  };
  adler: {
    image: string;
    alt: string;
  };
}

export interface TeamMember {
  image: string;
  name: string;
}
