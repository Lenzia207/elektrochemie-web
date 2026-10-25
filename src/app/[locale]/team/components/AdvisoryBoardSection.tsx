import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import Eyebrow from "@/components/ui/Texts/Eyebrow";
import { ScientificTeam } from "../data/types/team-types";

export default function AdvisoryBoardSection({ data }: { data: ScientificTeam }) {
    return (
        <section className="bg-egm-mist px-5 py-20 sm:px-8 md:py-28">
            <div className="mx-auto flex max-w-[1240px] flex-col gap-14">
                <div className="flex flex-wrap items-end gap-x-[72px] gap-y-6">
                    <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-[18px]">
                        <Eyebrow>{data.eyebrow}</Eyebrow>
                        <h2 className="text-[clamp(34px,4.4vw,60px)] leading-[1.05] tracking-[-0.03em] text-egm-ink">
                            {data.title}
                        </h2>
                    </div>
                    <p className="min-w-0 flex-[1.3_1_480px] text-[17px] leading-[1.7] text-egm-body">
                        {data.description}
                    </p>
                </div>

                <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-5">
                    {data.members.map((member) => (
                        <li key={member.name}>
                            <a
                                href={member.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-full flex-col items-center gap-[18px] rounded-[20px] border border-egm-line bg-white px-6 py-7 text-center text-egm-ink transition duration-250 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(14,35,64,0.28)]"
                            >
                                <Image
                                    src={member.image}
                                    alt={member.alt}
                                    width={160}
                                    height={160}
                                    className="size-40 object-contain"
                                />
                                <div className="flex flex-col gap-1.5">
                                    <h3 className="text-[19px] font-semibold">{member.name}</h3>
                                    <p className="text-sm leading-[1.45] text-egm-muted">{member.university}</p>
                                </div>
                                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-egm-blue">
                                    {data.profileLinkLabel}
                                    <IconArrowUpRight size={14} stroke={2} aria-hidden="true" />
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
