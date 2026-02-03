"use client";

import { TeamPageData } from "../data/types/team-types";
import TeamImageHeaderDesktop from "./TeamImageHeaderDesktop";
import TeamImageHeaderMobile from "./TeamImageHeaderMobile";

export default function TeamImageHeader({ data }: { data: TeamPageData }) {
  return (
    <div>
      <TeamImageHeaderDesktop data={data} className="hidden lg:block" />
      <TeamImageHeaderMobile data={data} className="block lg:hidden" />
    </div>
  );
}