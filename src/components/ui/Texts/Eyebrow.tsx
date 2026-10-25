import { ReactNode } from "react";
import { cn } from "@/lib/utils/utils";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/* Small monospace kicker above section headlines */
export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "font-mono text-[13px] uppercase tracking-[0.12em] text-egm-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
