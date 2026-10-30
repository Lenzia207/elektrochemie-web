import Image from "next/image";
import Eyebrow from "@/components/ui/Texts/Eyebrow";
import { EgmImageData } from "@/lib/data/common-data";
import { CivilEngineersInfo } from "../data/types/team-types";

interface CivilEngineerSectionProps {
    data: CivilEngineersInfo;
    ztLogo: EgmImageData;
}

export default function CivilEngineerSection({ data, ztLogo }: CivilEngineerSectionProps) {
    return (
        <section className="bg-egm-ink px-5 py-20 text-white sm:px-8 md:py-28">
            <div className="mx-auto flex max-w-[1240px] flex-wrap gap-x-[72px] gap-y-12">
                <div className="flex min-w-0 flex-[1_1_380px] items-center lg:items-start flex-col gap-6">
                    <Eyebrow className="text-egm-frost">{data.eyebrow}</Eyebrow>
                    <h2 className="text-[clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.03em] text-center lg:text-start">
                        {data.title}
                    </h2>
                    <Image
                        src={ztLogo.image}
                        alt={ztLogo.alt}
                        width={160}
                        height={87}
                        className="mt-2 h-auto w-40"
                    />
                </div>
                <div className="flex min-w-0 flex-[1.3_1_480px] text-justify flex-col gap-5">
                    {data.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-[17px] leading-[1.7] text-egm-frost-light">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
