import { motion } from "motion/react";
import { TeamMembersList } from "../data/types/team-types";
import Image from "next/image";
import {
    PreviewLinkCard,
    PreviewLinkCardContent,
    PreviewLinkCardImage,
    PreviewLinkCardTrigger,
} from "@/components/animate-ui/components/radix/preview-link-card";
import { extractTextForLink } from "@/utils/helper";


export function TeamMemberCard({ member, index }: { member: TeamMembersList; index: number }) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
        >
            <div className="relative w-full aspect-square mb-6">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col items-center space-y-3">
                <h3 className="text-2xl font-bold text-[#1f4f83]">{member.name}</h3>
                <div className="inline-block bg-[#1f4f83]/10 text-[#1f4f83] text-center py-3 px-6 rounded-full text-sm font-semibold">
                    {extractTextForLink(member.role, "allgemein beeideter und gerichtlich zertifizierter Sachverständiger", "https://suche.gerichts-sv.at/Default.aspx?z=1749059609")}
                </div>
                <p className="text-gray-600 leading-relaxed text-justify text-sm md:text-base max-w-sm mx-auto">
                    {member.description}
                </p>
            </div>
        </motion.div>
    );
}
