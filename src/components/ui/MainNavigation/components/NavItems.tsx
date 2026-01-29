import { cn } from "@/lib/utils/utils";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
  trackHeaderOverlap?: boolean;
}

export const NavItems = ({
  items,
  className,
  onItemClick,
  trackHeaderOverlap = false,
}: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isOverHeader, setIsOverHeader] = useState(
    trackHeaderOverlap ? true : false
  );
  const { scrollY } = useScroll();

  // Only track scroll if trackHeaderOverlap is true
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (trackHeaderOverlap) {
      const headerHeight = window.innerHeight;
      setIsOverHeader(latest < headerHeight);
    }
  });

  const itemText =
    trackHeaderOverlap && isOverHeader ? "text-white" : "text-black";
  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        `absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium ${itemText} transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2`,
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className={cn(
            "relative px-4 py-2 dark:text-neutral-300 transition duration-250",
            trackHeaderOverlap && isOverHeader 
              ? "text-white" 
              : hovered === idx 
                ? "text-white" 
                : "text-black",
            "text-shadow-black"
          )}
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-[var(--primary)]  dark:bg-neutral-800"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};
