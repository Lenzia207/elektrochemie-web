import { ComponentProps, ReactNode } from "react";
import { IconArrowRight } from "@tabler/icons-react";
import LocaleLink from "../LocaleLink";
import { cn } from "@/lib/utils/utils";

const variantStyles = {
  outlineDark:
    "border-[1.5px] border-egm-ink text-egm-ink hover:bg-egm-ink hover:text-white",
  outlineLight:
    "border-[1.5px] border-white/85 text-white hover:bg-white hover:text-egm-ink",
  solid: "bg-egm-blue text-white hover:bg-egm-ink",
};

const sizeStyles = {
  md: "min-h-12 px-6 py-3 text-[15px]",
  lg: "min-h-[52px] px-7 py-3.5 text-base",
};

interface ArrowLinkProps {
  href: ComponentProps<typeof LocaleLink>["href"];
  children: ReactNode;
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  className?: string;
}

export default function ArrowLink({
  href,
  children,
  variant = "outlineDark",
  size = "md",
  className,
}: ArrowLinkProps) {
  return (
    <LocaleLink
      href={href}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full font-medium transition-colors duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
      <IconArrowRight size={16} stroke={2} aria-hidden="true" />
    </LocaleLink>
  );
}
