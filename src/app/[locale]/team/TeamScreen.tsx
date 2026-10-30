import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { CommonData } from "@/lib/data/common-data";
import { TeamPageData } from "./data/types/team-types";
import { TeamMemberRow } from "./components/TeamMemberRow";
import CivilEngineerSection from "./components/CivilEngineerSection";
import AdvisoryBoardSection from "./components/AdvisoryBoardSection";

interface TeamScreenProps {
  data: TeamPageData;
  common: CommonData;
}

export default function TeamScreen({ data, common }: TeamScreenProps) {
  if (!data) return null;

  return (
    <>
      <PageHero
        homeLabel={common.navLinks.home}
        pageLabel={common.navLinks.team}
        breadcrumbLabel={common.labels.breadcrumb}
        title={data.pageTitle}
        description={data.pageDescription}
        scrim={60}
        splitLayout
        className="min-h-0"
        contentClassName="pb-[120px] md:pb-[280px]"
      />

      {/* Group photo, pulled up so it overlaps the hero (less overlap and a taller crop on mobile) */}
      <section className="relative z-[3] -mt-20 bg-[linear-gradient(to_bottom,transparent_80px,white_80px)] px-5 pb-6 sm:px-8 md:-mt-60 md:bg-[linear-gradient(to_bottom,transparent_240px,white_240px)]">
        <figure className="relative mx-auto aspect-[4/3] max-w-[1240px] overflow-hidden rounded-2xl bg-egm-line shadow-[0_24px_48px_-28px_rgba(14,35,64,0.5)] md:aspect-video md:rounded-[28px] md:shadow-[0_40px_80px_-40px_rgba(14,35,64,0.55)]">
          <Image
            src={data.teamImage}
            alt={data.teamImageAlt}
            fill
            sizes="(min-width: 1240px) 1240px, 100vw"
            className="object-cover object-[50%_30%]"
            priority
          />
        </figure>
      </section>

      <section className="bg-white px-5 pt-8 pb-20 sm:px-8 md:pt-[88px] md:pb-[120px]">
        <div className="mx-auto flex max-w-[1240px] flex-col">
          {data.teamMemberList.map((member) => (
            <TeamMemberRow key={member.name} member={member} />
          ))}
        </div>
      </section>

      <CivilEngineerSection data={data.civilEngineers} ztLogo={common.egmImages.zt} />
      <AdvisoryBoardSection data={data.scientificTeam} />

      <CtaBand title={data.closing.title} buttonLabel={common.labels.contactCta}>
        <p className="font-script text-5xl leading-[1.1] text-egm-cyan">{data.closing.signature}</p>
      </CtaBand>
    </>
  );
}
