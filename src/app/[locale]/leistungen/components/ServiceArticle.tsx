import Image from "next/image";
import ArrowLink from "@/components/ui/Buttons/ArrowLink";
import { accentFor, formatIndex } from "@/lib/accent-colors";
import { cn } from "@/lib/utils/utils";
import { ExpertiseList } from "../data/types/leistungen-types";

interface ServiceArticleProps {
  service: ExpertiseList;
  index: number;
  featuredLabel: string;
  featuredLinkLabel: string;
}

export function serviceAnchor(index: number) {
  return `leistung-${formatIndex(index)}`;
}

export default function ServiceArticle({
  service,
  index,
  featuredLabel,
  featuredLinkLabel,
}: ServiceArticleProps) {
  const isFeatured = Boolean(service.featured);
  const [lead, ...rest] = service.expertiseDescription;

  return (
    <article
      id={serviceAnchor(index)}
      className={cn(
        "flex flex-wrap gap-x-16 gap-y-8",
        isFeatured
          ? "my-2 overflow-hidden rounded-[28px] bg-egm-ink px-[clamp(24px,4vw,48px)] py-14 mb-14 text-white"
          : "border-t border-egm-line py-14"
      )}
    >
      <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
        <div className="flex items-center gap-3.5">
          <span className={cn("font-mono text-sm", isFeatured ? "text-egm-cyan" : accentFor(index).text)}>
            {formatIndex(index)}
          </span>
          {isFeatured ? (
            <span className="rounded-full bg-egm-cyan px-2.5 py-[5px] font-mono text-xs uppercase tracking-[0.1em] text-egm-ink">
              {featuredLabel}
            </span>
          ) : null}
        </div>
        <h2 className="text-[clamp(26px,2.6vw,36px)] leading-[1.12] tracking-[-0.02em]">
          {service.expertiseTitle}
        </h2>
        <div
          className={cn(
            "relative aspect-[3/2] max-w-[420px] overflow-hidden rounded-2xl",
            isFeatured ? "bg-egm-blue" : "bg-egm-line"
          )}
        >
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(min-width: 768px) 420px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {isFeatured ? (
        <div className="flex min-w-0 flex-[1.3_1_440px] flex-col gap-6 md:pt-10">
          <p className="font-display text-[clamp(22px,2vw,28px)] leading-[1.4] font-medium">{lead}</p>
          {rest.map((paragraph) => (
            <p key={paragraph} className="text-[17px] leading-[1.7] text-egm-frost">
              {paragraph}
            </p>
          ))}
          <ArrowLink href="/kontakt" variant="outlineLight" size="lg" className="self-start">
            {featuredLinkLabel}
          </ArrowLink>
        </div>
      ) : (
        <div className="flex min-w-0 flex-[1.3_1_440px] flex-col gap-[18px] md:pt-[34px]">
          {service.expertiseDescription.map((paragraph) => (
            <p key={paragraph} className="text-[17px] leading-[1.7] text-egm-body lg:text-justify">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </article>
  );
}
