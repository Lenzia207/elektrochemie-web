"use client";

import PageImageHeader from "@/components/PageImageHeader";
import ScrollToTop from "@/components/ScrollToTop";
import { CompetencePageData } from "./data/types/competence-types";
import { ExpertiseSection } from "../leistungen/components/ExpertiseSection";
import { motion, useScroll, useSpring } from "motion/react";

interface CompetenceScreenProps {
    data: CompetencePageData;
}
export default function CompetenceScreen({ data }: CompetenceScreenProps) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div>
            <PageImageHeader imageSrc="/images/kompetenzen/header-kompetenzen.jpg" altText="Bild ZT Elektrochemie" title={data.pageTitle} />
            <div className="lg:text-xl text-md text-justify text-black  max-w-7xl lg:px-20 lg:pt-20 px-6 pt-6 mx-auto">
                {data.pageDescription}
            </div>
            <div>
                {data.competenceList.map((competence, index) => (
                    <ExpertiseSection
                        key={index}
                        item={{
                            title: competence.competenceTitle,
                            description: competence.competenceDescription,
                            image: competence.image,
                        }}
                        index={index}
                    />
                ))}

                <motion.div
                    className="fixed left-0 right-0 h-[5px] bg-[#1f4f83] bottom-0 z-50 origin-left"
                    style={{ scaleX }}
                />

                <ScrollToTop />
            </div>
        </div>
    );
}