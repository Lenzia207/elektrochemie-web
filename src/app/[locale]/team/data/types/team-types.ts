/**
 * Type declarations for the team page.
 */
export interface TeamPageData {
  pageTitle: string;
  teamImage: string;
  teamMemberList: TeamMembersList[];
  infoCertificates: InfoCertificates[];
  scientificTeam: ScientificTeam;
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

export interface ScientificTeam {
  title: string;
  description: string;
  members: ScientificTeamMembersList[];
}

export interface ScientificTeamMembersList {
  image: string;
  name: string;
  university: string;
  alt: string;
  url: string;
}
