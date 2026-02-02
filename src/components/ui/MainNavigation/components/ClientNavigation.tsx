"use client";
import React, { useState } from "react";
import { NavbarLogo } from "./NavbarLogo";
import { NavItems } from "./NavItems";
import { NavBody } from "./NavBody";
import { Navbar } from "./Navbar";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/MainNavigation/MobileMainNavigation";

interface ClientNavigationProps {
  navItems: {
    link: string;
    name: string;
  }[];
  trackHeaderOverlap?: boolean;
}

export default function ClientNavigation({
  navItems,
  trackHeaderOverlap = false,
}: ClientNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo image="/images/header/adlerLogo.png" url="https://ziviltechniker.at/mitglied/958130"/>
          <NavbarLogo image="/images/logo.svg" showLanguageSwitcher/>
          <NavItems items={navItems} trackHeaderOverlap={trackHeaderOverlap} />
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo image="/images/logo.svg" showLanguageSwitcher />
             
            <div className="flex items-center gap-2">
              <MobileNavToggle
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
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
