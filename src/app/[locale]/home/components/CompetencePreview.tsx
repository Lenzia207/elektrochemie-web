import Image from "next/image";
import LocaleLink from "@/components/ui/LocaleLink";
import SectionHeader from "@/components/ui/Texts/SectionHeader";
import { accentFor, formatIndex } from "@/lib/accent-colors";
import { CompetenceList } from "../../kompetenzen/data/types/competence-types";
import { SectionHeading } from "../data/types/home-types";

interface CompetencePreviewProps {
  heading: SectionHeading;
  competences: CompetenceList[];
}

export default function CompetencePreview({ heading, competences }: CompetencePreviewProps) {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 md:py-[120px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-14">
        <SectionHeader
          eyebrow={heading.eyebrow}
          title={heading.title}
          link={heading.linkLabel ? { label: heading.linkLabel, href: "/kompetenzen" } : undefined}
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] gap-x-7 gap-y-12">
          {competences.map((competence, index) => (
            <LocaleLink
              key={competence.id}
              href={{ pathname: "/kompetenzen", hash: competence.id }}
              className="group flex flex-col gap-[18px] text-egm-ink"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-egm-line">
                <Image
                  src={competence.image}
                  alt={competence.imageAlt}
                  fill
                  sizes="(min-width: 1240px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-baseline gap-4">
                <span className={`font-mono text-[13px] ${accentFor(index).text}`}>
                  {formatIndex(index)}
                </span>
                <h3 className="text-[22px] leading-tight font-semibold">{competence.competenceTitle}</h3>
              </div>
              <p className="pl-9 text-[15px] leading-[1.6] text-egm-muted">{competence.teaser}</p>
            </LocaleLink>
          ))}
        </div>
      </div>
    </section>
  );
}
