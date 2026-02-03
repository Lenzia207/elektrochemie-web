"use client";
import { cn } from "../../../lib/utils/utils";
import {
  motion,
} from "motion/react";
import Link from "next/link";

import React, { useState, useEffect } from "react";
import { NavbarLogo } from "./components/NavbarLogo";
import { MobileNavHeader } from "./Mobile/MobileNavHeader";
import { MobileNavMenu } from "./Mobile/MobileNavMenu";
import { MobileToggleMenu } from "./Mobile/MobileToggleMenu";
import { NavigationItem } from "./types";

interface MobileNavProps {
  navItems: NavigationItem[];
  trackHeaderOverlap?: boolean;
  className?: string;
  visible?: boolean;
}

export const MobileMainNavigation = ({ navItems, trackHeaderOverlap = false, className, visible }: MobileNavProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


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
      <MobileNavHeader>
        {/* App Logo with language switcher */}
        <NavbarLogo image="/images/logo.svg" showLanguageSwitcher />

        {/* Hamburger Menu to toggle menu */}
        <div className="flex items-center gap-2">
          <MobileToggleMenu
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            trackHeaderOverlap={trackHeaderOverlap}
          />
        </div>
      </MobileNavHeader>

      <MobileNavMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        {navItems.map((item, idx) => (
          <Link
            key={`mobile-link-${idx}`}
            href={item.link}
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative text-neutral-600 dark:text-neutral-300"
          >
            <span className="block">{item.name}</span>
          </Link>
        ))}
      </MobileNavMenu>
    </motion.div>
  );
};






