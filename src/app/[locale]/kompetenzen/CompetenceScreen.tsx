import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { CommonData } from "@/lib/data/common-data";
import { accentFor, formatIndex } from "@/lib/accent-colors";
import { cn } from "@/lib/utils/utils";
import { CompetenceList, CompetencePageData } from "./data/types/competence-types";

interface CompetenceScreenProps {
    data: CompetencePageData;
    common: CommonData;
}

export default function CompetenceScreen({ data, common }: CompetenceScreenProps) {
    return (
        <>
            <PageHero
                homeLabel={common.navLinks.home}
                pageLabel={common.navLinks.expertise}
                breadcrumbLabel={common.labels.breadcrumb}
                title={data.pageTitle}
                description={data.pageDescription}
            />

            {/* Jump links */}
            <section className="border-b border-egm-line bg-white px-5 py-10 sm:px-8">
                <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(180px,100%),1fr))] gap-3">
                    {data.competenceList.map((competence, index) => (
                        <a
                            key={competence.id}
                            href={`#${competence.id}`}
                            className="flex min-h-16 items-center gap-3.5 rounded-[14px] border border-egm-line bg-egm-mist px-4 py-3 text-egm-ink transition-colors duration-200 hover:border-egm-line-strong hover:bg-white"
                        >
                            <span
                                className={cn("w-10 font-display text-[26px] font-bold", accentFor(index).text)}
                                aria-hidden="true"
                            >
                                {competence.symbol}
                            </span>
                            <span className="text-sm leading-[1.3] font-medium">{competence.shortTitle}</span>
                        </a>
                    ))}
                </div>
            </section>

            <section className="bg-white px-5 pt-[72px] pb-20 sm:px-8 md:pb-28">
                <div className="mx-auto flex max-w-[1240px] flex-col border-b border-egm-line">
                    {data.competenceList.map((competence, index) => (
                        <CompetenceArticle key={competence.id} competence={competence} index={index} />
                    ))}
                </div>
            </section>

            <CtaBand title={data.ctaTitle} buttonLabel={common.labels.contactCta} />
        </>
    );
}

function CompetenceArticle({ competence, index }: { competence: CompetenceList; index: number }) {
    const accent = accentFor(index);

    return (
        <article
            id={competence.id}
            className="flex flex-wrap gap-x-16 gap-y-7 border-t border-egm-line py-14 first:border-t-0 first:pt-0"
        >
            <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-[22px]">
                <span
                    className={cn(
                        "flex size-[88px] flex-col items-center justify-center rounded-2xl border-[1.5px] font-display text-4xl leading-none font-bold",
                        accent.border,
                        accent.text
                    )}
                    aria-hidden="true"
                >
                    {competence.symbol}
                    <span className="mt-1.5 font-mono text-[11px] font-normal">{formatIndex(index)}</span>
                </span>
                <h2 className="text-[clamp(28px,3vw,40px)] leading-[1.1] tracking-[-0.025em] text-egm-ink">
                    {competence.competenceTitle}
                </h2>
                <div className="relative aspect-[3/2] max-w-[460px] overflow-hidden rounded-[18px] bg-egm-line">
                    <Image
                        src={competence.image}
                        alt={competence.imageAlt}
                        fill
                        sizes="(min-width: 768px) 460px, 100vw"
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="flex min-w-0 flex-[1.4_1_480px] flex-col justify-end gap-[18px]">
                {competence.competenceDescription.map((paragraph) => (
                    <p key={paragraph} className="text-[17px] leading-[1.7] text-egm-body lg:text-justify">
                        {paragraph}
                    </p>
                ))}
            </div>
        </article>
    );
}
