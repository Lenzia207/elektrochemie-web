import LocaleLink from "@/components/ui/LocaleLink";
import SectionHeader from "@/components/ui/Texts/SectionHeader";
import { cn } from "@/lib/utils/utils";
import { formatIndex } from "@/lib/accent-colors";
import { Feature, SectionHeading } from "../data/types/home-types";

const TILE_VARIANTS = {
  light: {
    tile: "border-egm-line bg-white text-egm-ink hover:border-egm-line-strong",
    meta: "text-egm-muted",
    description: "text-egm-muted",
  },
  blue: {
    tile: "border-egm-blue bg-egm-blue text-white",
    meta: "text-egm-frost",
    description: "text-egm-frost-light",
  },
  purple: {
    tile: "border-egm-purple bg-egm-purple text-white",
    meta: "text-egm-lilac",
    description: "text-egm-lilac-light",
  },
};

// Periodic-table look: one tile per concern, two of them filled for rhythm
const TILE_STYLES: { variant: keyof typeof TILE_VARIANTS; dot: string; symbol: string }[] = [
  { variant: "light", dot: "bg-egm-blue", symbol: "text-egm-blue" },
  { variant: "light", dot: "bg-egm-cyan", symbol: "text-egm-teal" },
  { variant: "light", dot: "bg-egm-purple", symbol: "text-egm-purple" },
  { variant: "blue", dot: "bg-egm-cyan", symbol: "text-egm-cyan" },
  { variant: "light", dot: "bg-egm-cyan", symbol: "text-egm-teal" },
  { variant: "light", dot: "bg-egm-purple", symbol: "text-egm-purple" },
  { variant: "purple", dot: "bg-white", symbol: "text-white" },
  { variant: "light", dot: "bg-egm-blue", symbol: "text-egm-blue" },
];

interface ConcernsSectionProps {
  heading: SectionHeading;
  features: Feature[];
}

export default function ConcernsSection({ heading, features }: ConcernsSectionProps) {
  return (
    <section className="bg-egm-mist px-5 py-20 sm:px-8 md:py-[120px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-14">
        <SectionHeader
          eyebrow={heading.eyebrow}
          title={heading.title}
          link={heading.linkLabel ? { label: heading.linkLabel, href: "/leistungen" } : undefined}
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(270px,100%),1fr))] gap-5">
          {features.map((feature, index) => {
            const style = TILE_STYLES[index % TILE_STYLES.length];
            const variant = TILE_VARIANTS[style.variant];
            return (
              <LocaleLink
                key={feature.title}
                href="/leistungen"
                className={cn(
                  "flex min-h-[300px] flex-col gap-3.5 rounded-[18px] border p-6 transition duration-250 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(14,35,64,0.28)]",
                  variant.tile
                )}
              >
                <div className={cn("flex justify-between font-mono text-[13px]", variant.meta)}>
                  <span>{formatIndex(index)}</span>
                  <span className={cn("size-2.5 rounded-full", style.dot)} aria-hidden="true" />
                </div>
                <span
                  className={cn("font-display text-[64px] leading-none font-bold tracking-[-0.03em]", style.symbol)}
                  aria-hidden="true"
                >
                  {feature.symbol}
                </span>
                <h3 className="text-xl leading-tight font-semibold">{feature.title}</h3>
                <p className={cn("mt-auto text-[15px] leading-[1.55]", variant.description)}>
                  {feature.description}
                </p>
              </LocaleLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
