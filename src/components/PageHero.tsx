import { ReactNode } from "react";
import HeroBackground from "./HeroBackground";
import LocaleLink from "./ui/LocaleLink";
import { cn } from "@/lib/utils/utils";

interface PageHeroProps {
  homeLabel: string;
  pageLabel: string;
  breadcrumbLabel: string;
  title: string;
  description: string;
  /** Opacity of the navy scrim over the shader, 0–100 */
  scrim?: number;
  /** Puts the description next to the title instead of below it */
  splitLayout?: boolean;
  className?: string;
  contentClassName?: string;
}

/*
 * Sub-page hero: live Iridescence shader, breadcrumb, big title and lead text.
 * Leaves room at the top for the fixed main navigation.
 */
export default function PageHero({
  homeLabel,
  pageLabel,
  breadcrumbLabel,
  title,
  description,
  scrim = 18,
  splitLayout = false,
  className,
  contentClassName,
}: PageHeroProps) {
  return (
    <header
      className={cn(
        "relative flex min-h-[540px] flex-col overflow-hidden",
        className
      )}
    >
      <HeroBackground />
      <div
        className="absolute inset-0 bg-egm-ink"
        style={{ opacity: scrim / 100 }}
        aria-hidden="true"
      />

      <div
        className={cn(
          "relative z-[2] mx-auto flex w-full max-w-[1304px] flex-1 px-5 pt-36 pb-16 text-white sm:px-8 md:pb-[88px]",
          splitLayout
            ? "flex-wrap items-end justify-between gap-x-16 gap-y-6"
            : "flex-col justify-end gap-[22px]",
          contentClassName
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-[22px]",
            splitLayout && "min-w-0 flex-[999_1_520px]"
          )}
        >
          <Breadcrumb homeLabel={homeLabel} pageLabel={pageLabel} label={breadcrumbLabel} />
          <h1 className="text-[clamp(44px,6.4vw,92px)] leading-none tracking-[-0.035em] [text-shadow:0_2px_24px_rgba(14,35,64,0.2)]">
            {title}
          </h1>
        </div>
        <HeroLead className={cn(splitLayout ? "min-w-0 flex-[1_1_340px] pb-2" : "max-w-[720px]")}>
          {description}
        </HeroLead>
      </div>
    </header>
  );
}

interface BreadcrumbProps {
  homeLabel: string;
  pageLabel: string;
  label: string;
}

function Breadcrumb({ homeLabel, pageLabel, label }: BreadcrumbProps) {
  return (
    <nav
      aria-label={label}
      className="font-mono text-[13px] uppercase tracking-[0.12em] opacity-90"
    >
      <LocaleLink href="/" className="hover:underline">
        {homeLabel}
      </LocaleLink>
      <span aria-hidden="true"> / </span>
      <span aria-current="page">{pageLabel}</span>
    </nav>
  );
}

function HeroLead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-[clamp(17px,1.5vw,20px)] leading-[1.6] text-egm-snow", className)}>
      {children}
    </p>
  );
}
