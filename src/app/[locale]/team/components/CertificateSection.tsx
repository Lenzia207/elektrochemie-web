import { motion } from "motion/react";
import { TeamPageData } from "../data/types/team-types";


export default function CertificateSection({ data }: { data: TeamPageData }) {
    return (
        <div className="max-w-7xl mx-auto px-6 pb-20 mt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {data.infoCertificates.map((cert, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#1f4f83] shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="font-bold text-[#1f4f83] lg:text-lg text-md mb-2">
                            {cert.infoClarification}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {cert.infoDescription}
                        </p>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}