import { motion } from "motion/react";
import { TeamMembersList } from "../data/types/team-types";
import Image from "next/image";


export function TeamMemberCard({ member, index }: { member: TeamMembersList; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
        >
            <div className="relative overflow-hidden rounded-xl mb-6 shadow-lg aspect-[3/4]">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1f4f83]/90 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
            </div>

            <div className="space-y-3">
                <div className="flex justify-between items-end border-b border-gray-200 pb-2">
                    <h3 className="text-2xl font-bold text-[#1f4f83]">{member.name}</h3>
                </div>
                <div className="inline-block bg-[#1f4f83]/10 text-[#1f4f83] px-3 py-1 rounded-full text-sm font-semibold">
                    {member.role}
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {member.description}
                </p>
            </div>
        </motion.div>
    );
}
