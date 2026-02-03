"use client";
import { TeamMember } from "@/app/[locale]/home/data/types/home-types";
import {
  AvatarGroup,
  AvatarGroupTooltip,
} from "@/components/animate-ui/primitives/animate/avatar-group";
import useCurrentLocale from "@/hooks/use-current-locale";
import { Link } from "@/i18n/routing";
import Image from "next/image";

interface TeamAvaterImagesProps {
  teamMembers: TeamMember[];
}

export function TeamAvaterImages({ teamMembers }: TeamAvaterImagesProps) {
  return (
    <AvatarGroup className="gap-x-2">
      {teamMembers.map((avatar, index) => (
        
        <Link href="/team" key={index} locale={useCurrentLocale()} className="relative w-12 h-12 ">
          <Image
            src={avatar.image}
            alt={avatar.name}
            width={64}
            height={64}
            className="rounded-full object-cover"
          />
          <AvatarGroupTooltip className="font-bold">{avatar.name}</AvatarGroupTooltip>
        </Link>
      ))}
    </AvatarGroup>
  );
}
