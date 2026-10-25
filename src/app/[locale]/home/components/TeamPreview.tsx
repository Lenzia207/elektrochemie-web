import Image from "next/image";
import SectionHeader from "@/components/ui/Texts/SectionHeader";
import { SectionHeading, TeamMember } from "../data/types/home-types";

interface TeamPreviewProps {
  heading: SectionHeading;
  members: TeamMember[];
  /** [closing sentence, signature] */
  welcomeEnd: string[];
}

export default function TeamPreview({ heading, members, welcomeEnd }: TeamPreviewProps) {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 md:pt-[120px] md:pb-28">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-16">
        <SectionHeader
          eyebrow={heading.eyebrow}
          title={heading.title}
          link={heading.linkLabel ? { label: heading.linkLabel, href: "/team" } : undefined}
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-10">
          {members.map((member) => (
            <div key={member.name} className="flex flex-col items-center gap-[22px] text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={260}
                height={260}
                className="size-[220px] object-contain md:size-[260px]"
              />
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-[22px] leading-tight font-semibold">{member.name}</h3>
                <p className="max-w-[320px] text-[15px] leading-normal text-egm-muted">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t border-egm-line pt-6 text-center">
          <p className="font-display text-[clamp(20px,2.2vw,28px)] font-medium text-egm-ink">
            {welcomeEnd[0]}
          </p>
          <p className="font-script text-[46px] leading-none text-egm-purple">{welcomeEnd[1]}</p>
        </div>
      </div>
    </section>
  );
}
