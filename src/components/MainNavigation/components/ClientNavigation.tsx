"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import LocaleLink from "@/components/ui/LocaleLink";
import { cn } from "@/lib/utils/utils";
import { EgmImageData, UiLabelsData } from "@/lib/data/common-data";
import { NavigationItem } from "../types";
import { SwitchLanguage } from "./LanguageSwitcher";

interface ClientNavigationProps {
  navItems: NavigationItem[];
  labels: UiLabelsData;
  logo: EgmImageData;
  trackHeaderOverlap?: boolean;
}

export default function ClientNavigation({
  navItems,
  labels,
  logo,
  trackHeaderOverlap = false,
}: ClientNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transparent with white text while it sits on top of a hero, solid otherwise
  const isOverlay = trackHeaderOverlap && !isScrolled && !isMenuOpen;
  const pageLinks = navItems.filter(
    (item) => item.link !== "/" && item.link !== "/kontakt"
  );
  const contactItem = navItems.find((item) => item.link === "/kontakt");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        isOverlay
          ? "bg-transparent text-white"
          : "border-b border-egm-line bg-white/90 text-egm-ink backdrop-blur-md"
      )}
    >
      <nav
        aria-label={labels.mainNavigation}
        className={cn(
          "mx-auto flex w-full max-w-[1320px] items-center justify-between gap-5 px-5 transition-[padding] duration-300 sm:px-8",
          isOverlay ? "py-7" : "py-3"
        )}
      >
        <LocaleLink href="/" className="flex items-center gap-3.5">
          <Image src={logo.image} alt={logo.alt} width={48} height={48} className="size-12" priority />
          <span className="flex flex-col leading-[1.15]">
            <span className="font-display text-xl font-bold tracking-[0.04em]">EGM</span>
            <span className="text-xs opacity-85">{labels.logoTagline}</span>
          </span>
        </LocaleLink>

        {/* Desktop */}
        <div className="hidden items-center gap-8 text-[15px] font-medium lg:flex">
          {pageLinks.map((item) => (
            <LocaleLink
              key={item.link}
              href={item.link}
              className="opacity-90 transition-opacity hover:opacity-100 hover:underline hover:underline-offset-4"
            >
              {item.name}
            </LocaleLink>
          ))}
          <SwitchLanguage label={labels.switchLanguage} />
          {contactItem ? (
            <ContactPill item={contactItem} isOverlay={isOverlay} />
          ) : null}
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 lg:hidden">
          <SwitchLanguage label={labels.switchLanguage} />
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? labels.closeMenu : labels.openMenu}
            className="flex size-11 items-center justify-center rounded-full"
          >
            {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-egm-line bg-white px-5 pb-6 sm:px-8 lg:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.link} className="border-b border-egm-line">
                  <LocaleLink
                    href={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex min-h-14 items-center font-display text-xl font-semibold"
                  >
                    {item.name}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ContactPill({ item, isOverlay }: { item: NavigationItem; isOverlay: boolean }) {
  return (
    <LocaleLink
      href={item.link}
      className={cn(
        "inline-flex min-h-11 items-center rounded-full border-[1.5px] px-[22px] py-3 transition-colors duration-200",
        isOverlay
          ? "border-white/85 hover:bg-white hover:text-egm-ink"
          : "border-egm-blue bg-egm-blue text-white hover:border-egm-ink hover:bg-egm-ink"
      )}
    >
      {item.name}
    </LocaleLink>
  );
}
