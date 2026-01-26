"use client";

import { TeamPageData } from "../data/types/team-types";
import TeamImageHeaderDesktop from "./TeamImageHeaderDesktop";
import TeamImageHeaderMobile from "./TeamImageHeaderMobile";

export default function TeamImageHeader({ data }: { data: TeamPageData }) {
  return (
    <>
      <TeamImageHeaderMobile data={data} />
      <TeamImageHeaderDesktop data={data} />
    </>
  );
}