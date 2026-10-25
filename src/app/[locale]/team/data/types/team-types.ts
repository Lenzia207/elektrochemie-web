/**
 * Type declarations for the team page.
 */
export interface TeamPageData {
  pageTitle: string;
  pageDescription: string;
  teamImage: string;
  teamImageAlt: string;
  teamMemberList: TeamMembersList[];
  civilEngineers: CivilEngineersInfo;
  scientificTeam: ScientificTeam;
  closing: {
    title: string;
    signature: string;
  };
}

export interface TeamMembersList {
  name: string;
  role: string;
  description: string;
  image: string;
  /** Part of the role that links to an external register, e.g. the court expert listing */
  roleLink?: {
    text: string;
    url: string;
  };
}

export interface CivilEngineersInfo {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface ScientificTeam {
  eyebrow: string;
  title: string;
  description: string;
  profileLinkLabel: string;
  members: ScientificTeamMembersList[];
}

export interface ScientificTeamMembersList {
  image: string;
  name: string;
  university: string;
  alt: string;
  url: string;
}
