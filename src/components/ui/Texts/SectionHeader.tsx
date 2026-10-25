import { ComponentProps } from "react";
import ArrowLink from "../Buttons/ArrowLink";
import Eyebrow from "./Eyebrow";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  link?: {
    label: string;
    href: ComponentProps<typeof ArrowLink>["href"];
  };
}

/* Eyebrow + large headline on the left, optional outline button on the right */
export default function SectionHeader({ eyebrow, title, link }: SectionHeaderProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-8">
      <div className="flex max-w-[760px] flex-col gap-[18px]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-[clamp(34px,4.4vw,60px)] leading-[1.05] tracking-[-0.03em] text-egm-ink">
          {title}
        </h2>
      </div>
      {link ? <ArrowLink href={link.href}>{link.label}</ArrowLink> : null}
    </div>
  );
}
