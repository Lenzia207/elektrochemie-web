"use client";
import { cn } from "../../../lib/utils/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

import React, { useState, useEffect } from "react";

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      animate={{
        backdropFilter: (visible || isMobile) ? "blur(10px)" : "none",
        boxShadow: (visible || isMobile)
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: (visible || isMobile) ? "90%" : "100%",
        paddingRight: (visible || isMobile) ? "12px" : "0px",
        paddingLeft: (visible || isMobile) ? "12px" : "0px",
        borderRadius: (visible || isMobile) ? "16px" : "2rem",
        y: (visible || isMobile) ? -20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "fixed bottom-4 left-0 right-0 z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-3 lg:hidden",
        (visible || isMobile) && "backdrop-blur-3xl bg-white/90 dark:bg-neutral-950/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            "absolute inset-x-0 bottom-full mb-2 z-50 flex w-full flex-col items-start justify-start gap-3 rounded-2xl bg-white px-6 py-6 shadow-[0_-4px_24px_rgba(34,_42,_53,_0.12),_0_-2px_8px_rgba(0,_0,_0,_0.08)] border border-gray-200 dark:bg-neutral-950 dark:border-neutral-800",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
  trackHeaderOverlap,
}: {
  isOpen: boolean;
  onClick: () => void;
  trackHeaderOverlap: boolean;
}) => {
  const [isOverHeader, setIsOverHeader] = useState(
    trackHeaderOverlap ? true : false
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollY } = useScroll();

  // Only track scroll if trackHeaderOverlap is true
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (trackHeaderOverlap) {
      // Use a smaller threshold for mobile to switch color earlier
      const mobileThreshold = 80; // px, adjust as needed
      const desktopThreshold = window.innerHeight;
      const threshold = isMobile ? mobileThreshold : desktopThreshold;
      setIsOverHeader(latest < threshold);
    }
  });
  const iconColor = isMobile ? "text-black" : (trackHeaderOverlap && isOverHeader ? "text-white" : "text-black");
  return isOpen ? (
    <IconX className={`${iconColor} dark:text-white`} onClick={onClick} />
  ) : (
    <IconMenu2 className={`${iconColor} dark:text-white`} onClick={onClick} />
  );
};
