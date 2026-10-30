import Image from "next/image";
import { extractTextForLink } from "@/lib/utils/helper";
import { TeamMembersList } from "../data/types/team-types";

export function TeamMemberRow({ member }: { member: TeamMembersList }) {
    return (
        // Mobile: portrait, name and role centred above the text; side by side from md
        <article className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 border-t border-egm-line py-12 first:border-t-0 md:justify-start md:gap-y-8 md:first:border-t">
            <Image
                src={member.image}
                alt={member.name}
                width={240}
                height={240}
                className="size-[200px] flex-none object-contain md:size-[240px]"
            />
            <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-4">
                <h2 className="text-[28px] leading-[1.15] tracking-[-0.02em] text-egm-ink"> 
                    {member.name}
                </h2>
                <p className="text-[15px] leading-normal font-medium text-egm-blue">
                    {member.roleLink
                        ? extractTextForLink(member.role, member.roleLink.text, member.roleLink.url)
                        : member.role}
                </p>
                <p className="text-base leading-[1.7] text-egm-body hyphens-auto md:text-justify">
                    {member.description}
                </p>
            </div>
        </article>
    );
}
