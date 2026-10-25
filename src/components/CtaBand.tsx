import { ReactNode } from "react";
import ArrowLink from "./ui/Buttons/ArrowLink";

interface CtaBandProps {
  title: string;
  buttonLabel: string;
  /** Optional line below the title, e.g. the team signature */
  children?: ReactNode;
}

/* Blue closing band with a contact button, used at the end of sub-pages */
export default function CtaBand({ title, buttonLabel, children }: CtaBandProps) {
  return (
    <section className="bg-egm-blue px-5 py-20 text-white sm:px-8 md:py-[104px]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-10 gap-y-6">
        <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-2.5">
          <h2 className="text-[clamp(32px,4.2vw,60px)] leading-[1.05] tracking-[-0.035em]">
            {title}
          </h2>
          {children}
        </div>
        <div className="flex flex-[1_1_280px] justify-start md:justify-end">
          <ArrowLink href="/kontakt" variant="outlineLight" size="lg">
            {buttonLabel}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
