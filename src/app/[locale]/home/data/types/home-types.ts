/**
 * Type declarations for the home page.
 */
export interface HomePageData {
  pageSlogan: string;
  egmImages: EgmImagesData;
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
