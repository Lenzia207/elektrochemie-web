/**
 * Type declarations for the team page.
 */
export interface TeamPageData {
  pageTitle: string;
  teamImage: string;
  teamMemberList: TeamMembersList[];
  infoCertificates: InfoCertificates[];
}

export interface TeamMembersList {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface InfoCertificates {
  infoClarification: string;
  infoDescription: string;
}
